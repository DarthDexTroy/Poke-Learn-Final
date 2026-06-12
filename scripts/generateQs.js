import fs from 'fs';
import path from 'path';

const API_KEY = process.env.VITE_GROQ_API_KEY;
if (!API_KEY) {
  console.error('Error: VITE_GROQ_API_KEY is not set in environment.');
  process.exit(1);
}

const MODULES_REQ = [
  { id: 'm1', topic: 'Statistics & Probability, specifically: Normal Distribution, Hypothesis Testing, P-values, Confidence Intervals, Correlation vs Causation.' },
  { id: 'm2', topic: 'Python for Data Science, specifically: Pandas DataFrames, Numpy Arrays, Data Cleaning processes, Missing Values.' },
  { id: 'm3', topic: 'Machine Learning Basics, specifically: Supervised vs Unsupervised Learning, Linear Regression, Overfitting, Underfitting, Train/Test Splits.' },
  { id: 'm4', topic: 'Deep Learning, specifically: Neural Networks, Activation Functions, Forward Propagation, Backpropagation, Gradient Descent.' },
  { id: 'm5', topic: 'Data Visualization, specifically: Matplotlib, Seaborn plots, choosing the right chart (bar, scatter, line, histogram), avoiding misleading scales.' }
];

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function fetchQuestions(moduleInfo) {
  const prompt = `You are an expert Data Science curriculum designer. 
Generate a JSON array of precisely 30 multiple-choice questions for the following overarching topic: "${moduleInfo.topic}".

CRITICAL REQUIREMENTS:
1. Divide them equally by difficulty: 10 "easy", 10 "medium", 10 "hard".
2. Return ONLY raw JSON. No markdown formatting (\`\`\`json), no preamble, no explanations. Just [{...}].
3. Format each object EXACTLY like this:
{
  "q": "The actual question text here?",
  "opts": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "correct": 1, // The ZERO-INDEXED integer of the correct option
  "explain": "A brief explanation of why this is correct.",
  "difficulty": "easy" // or "medium" or "hard"
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2, // low temp for stricter JSON enforcement
        max_tokens: 6000
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    
    const content = data.choices[0].message.content.trim();
    
    // Clean potential markdown blocks
    const cleaned = content.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    return JSON.parse(cleaned);

  } catch (err) {
    console.error(`Attempt failed for ${moduleInfo.id}:`, err);
    return null;
  }
}

async function main() {
  console.log('Generating dynamic question bank via Groq API...');
  const output = {};

  for (const mod of MODULES_REQ) {
    console.log(`Fetching questions for module ${mod.id}...`);
    let qs = null;
    let attempts = 0;
    
    // Retry logic in case LLM returns bad JSON
    while (!qs && attempts < 3) {
      if (attempts > 0) console.log(`Retry ${attempts} for ${mod.id}...`);
      qs = await fetchQuestions(mod);
      attempts++;
      if (!qs) await sleep(2000); // Wait before retry
    }

    if (qs) {
      output[mod.id] = qs;
      console.log(`✅ Success for ${mod.id} (${qs.length} questions)`);
    } else {
      console.log(`❌ Failed to parse ${mod.id} after 3 attempts.`);
    }
  }

  const jsContent = `export const DYNAMIC_QS = ${JSON.stringify(output, null, 2)};\n`;
  const outputPath = path.join(process.cwd(), 'src/data/dynamicQs.js');
  
  fs.writeFileSync(outputPath, jsContent, 'utf-8');
  console.log(`\n🎉 dynamicQs.js successfully created at ${outputPath} with ${Object.values(output).flat().length} total questions!`);
}

main();
