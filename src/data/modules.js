export const MODULES = [
  {
    id: 'm1',
    zone: 1,
    icon: '📊',
    name: 'Statistics & Probability',
    subtitle: 'Master the foundations of data analysis',
    color: 'var(--grass)',
    type: 'grass',
    tags: ['Beginner', 'Core', '6 hrs'],
    desc: 'Distributions, hypothesis testing, p-values, confidence intervals — the bedrock of every data scientist.',
    xpReward: 150,
    pokemon: { id: 1, name: 'Bulbasaur' },
    topicIds: ['stats'],
    sections: [
      {
        id: 's1',
        title: 'Core Concepts',
        concepts: [
          {
            title: 'Normal Distribution',
            icon: '🔔',
            body: 'The bell curve describes how many natural phenomena distribute. <strong>68%</strong> of values fall within one standard deviation of the mean, <strong>95%</strong> within two.',
            scenario: '<strong>Scenario:</strong> You are analyzing user session durations. After plotting a histogram you see a bell shape — this confirms you can use parametric tests like t-tests.',
          },
          {
            title: 'Hypothesis Testing',
            icon: '🧪',
            body: 'A structured method to make decisions from data. You start with a <strong>null hypothesis</strong> (no effect), collect evidence, and decide whether to reject it based on α = 0.05.',
            scenario: '<strong>Scenario:</strong> "Did our new onboarding improve day-7 retention?" You set α=0.05, run a t-test, get p=0.03. Since 0.03 < 0.05, you reject the null — the improvement is real.',
          },
          {
            title: 'P-values Demystified',
            icon: '📉',
            body: 'A p-value is <strong>NOT</strong> the probability your hypothesis is true. It\'s the probability of observing your data if the null hypothesis were true.',
            scenario: '<strong>Scenario:</strong> p=0.03 means: if no real effect existed, there is only a 3% chance of seeing data this extreme by random chance.',
          },
        ],
        video: { id: 'rzFX5NWojp0', title: 'StatQuest: P-values, Clearly Explained', channel: 'Josh Starmer', duration: '11 min', transcript: 'Hello and welcome to StatQuest. Today we are talking about p-values. A p-value is the probability of obtaining your data, or data more extreme, given that the null hypothesis is true. It is not the probability that your hypothesis is right or wrong. It just measures how compatible your data is with the null hypothesis. If the p-value is less than your alpha (usually 0.05), you reject the null hypothesis and conclude the effect is statistically significant.' },
        quiz: [
          {
            q: 'In a normal distribution, ~68% of values fall within how many standard deviations of the mean?',
            opts: ['Half', 'One', 'Two', 'Three'],
            correct: 1,
            explain: 'The 68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ.',
          },
          {
            q: 'A p-value of 0.03 with α=0.05 means you should:',
            opts: ['Fail to reject null', 'Reject the null', 'Accept the alternative', 'Repeat the study'],
            correct: 1,
            explain: 'Since 0.03 < 0.05, there is sufficient evidence to reject the null hypothesis.',
          },
          {
            q: 'A p-value is the probability of:',
            opts: ['Your hypothesis being true', 'Observing your data if null is true', 'Effect size', 'Sample error'],
            correct: 1,
            explain: 'A p-value is a conditional probability about the DATA, not the hypothesis.',
          },
        ],
      },
      {
        id: 's2',
        title: 'Confidence Intervals & Correlation',
        concepts: [
          {
            title: 'Confidence Intervals',
            icon: '📏',
            body: 'A range of values likely to contain the true population parameter. A <strong>95% CI</strong> means 95% of such intervals would contain the true value if you repeated the study.',
            scenario: '<strong>Scenario:</strong> A/B test shows +2.3% conversion. The 95% CI is [0.8%, 3.8%]. The entire interval is above zero — strong evidence the effect is real.',
          },
          {
            title: 'Correlation',
            icon: '📐',
            body: 'Measures the <strong>linear relationship</strong> between two variables. Ranges from -1 (perfect negative) to +1 (perfect positive). <strong>Correlation ≠ Causation.</strong>',
            scenario: '<strong>Scenario:</strong> Ice cream sales and drowning rates are correlated — both rise in summer. The real cause is hot weather, not ice cream.',
          },
        ],
        video: { id: 'TqOeMYtOc1w', title: 'Confidence Intervals, Clearly Explained', channel: 'StatQuest', duration: '9 min', transcript: 'Hello! Confidence intervals give us a range of values that are likely to contain the true population parameter. A 95% confidence interval means if we repeat the experiment many times, 95% of the calculated intervals will contain the true parameter. If the interval does not contain zero, the result is statistically significant. Also, remember that correlation does not imply causation, it only measures the linear relationship between variables.' },
        quiz: [
          {
            q: 'A 95% CI of [0.8%, 3.8%] that excludes zero means:',
            opts: ['Insignificant result', 'Statistically significant', 'Needs more data', 'Coincidence'],
            correct: 1,
            explain: 'When the CI excludes zero, the result is statistically significant at α=0.05.',
          },
          {
            q: 'Correlation of -0.9 indicates:',
            opts: ['No relationship', 'Weak positive', 'Strong negative', 'Perfect positive'],
            correct: 2,
            explain: '-0.9 is a strong negative correlation — as one variable increases, the other decreases.',
          },
          {
            q: 'Correlation implies causation:',
            opts: ['Always', 'Sometimes', 'Never — it shows association only', 'Only with large samples'],
            correct: 2,
            explain: 'Correlation only shows association. Causation requires controlled experiments or causal reasoning.',
          },
        ],
      },
    ],
  },
  {
    id: 'm2',
    zone: 2,
    icon: '🐍',
    name: 'Python for Data Science',
    subtitle: 'Wield Pandas and NumPy like a pro',
    color: 'var(--fire)',
    type: 'fire',
    tags: ['Beginner', 'Hands-on', '8 hrs'],
    desc: 'Pandas, NumPy, Matplotlib — the core Python toolkit for real-world data workflows.',
    xpReward: 180,
    pokemon: { id: 4, name: 'Charmander' },
    topicIds: ['python', 'feature'],
    sections: [
      {
        id: 's1',
        title: 'Pandas DataFrames',
        concepts: [
          {
            title: 'DataFrames Basics',
            icon: '🗂️',
            body: 'A DataFrame is a <strong>2D labeled table</strong> — like a spreadsheet in Python. Columns have types, rows have indices. You filter, group, and transform with clean syntax.',
            scenario: '<strong>Scenario:</strong> 50,000 customer transactions. Three lines of Pandas loads, filters paying customers, and groups revenue by category — hours of Excel work in seconds.',
          },
          {
            title: 'Data Cleaning',
            icon: '🧹',
            body: 'Real-world data is always messy. <strong>~80%</strong> of a data scientist\'s time is cleaning: missing values, wrong types, duplicates, inconsistencies.',
            scenario: '<strong>Scenario:</strong> Your sales dataset has "N/A", "null", and empty strings all meaning missing. df.fillna() or df.dropna() standardizes all three in one line.',
          },
        ],
        video: { id: 'vmEHCJofslg', title: 'Python Pandas Data Science Tutorial', channel: 'Keith Galli', duration: '1 hr', transcript: 'Welcome to this Pandas tutorial. Pandas uses DataFrames, which are 2D labeled tables. You can load data with read_csv. You can filter data, drop null values with dropna(), or fill them with fillna(). df.shape tells us the rows and columns. Keeping your code clean and handling missing values properly is 80% of data science.' },
        quiz: [
          {
            q: 'What does df.shape return in Pandas?',
            opts: ['Column names', '(rows, columns) tuple', 'Data types', 'Memory usage'],
            correct: 1,
            explain: 'df.shape returns a (n_rows, n_columns) tuple — essential for quick data sanity checks.',
          },
          {
            q: 'Which method counts null values per column?',
            opts: ['df.count()', 'df.isnull().sum()', 'df.missing()', 'df.null_count()'],
            correct: 1,
            explain: 'df.isnull() creates a boolean mask; .sum() counts True values per column.',
          },
          {
            q: 'When should you use fillna() instead of dropna()?',
            opts: ['Always', 'When dropping loses too much data and imputation makes sense', 'When every row has nulls', 'Never'],
            correct: 1,
            explain: 'Dropping rows loses data volume. fillna() preserves it when imputation is reasonable.',
          },
        ],
      },
      {
        id: 's2',
        title: 'NumPy & Vectorization',
        concepts: [
          {
            title: 'Vectorized Operations',
            icon: '⚡',
            body: 'NumPy and Pandas apply operations to <strong>entire arrays at once</strong> — no Python loops. This is 10–100× faster because operations execute in compiled C code.',
            scenario: '<strong>Scenario:</strong> Instead of looping through 1M rows: df["margin"] = (df["revenue"] - df["cost"]) / df["revenue"]. Runs in milliseconds. Reads like plain English.',
          },
        ],
        video: { id: 'inN8seMm7UI', title: 'NumPy Tutorial — Vectorized Operations', channel: 'freeCodeCamp', duration: '58 min', transcript: 'NumPy uses vectorized operations which are much faster than normal Python loops. This is because they run in compiled C code and bypass Python overhead. You can use methods like np.where() to apply conditional logic across an entire array instantly without a loop. This enables high performance feature engineering.' },
        quiz: [
          {
            q: 'Why are NumPy vectorized operations faster than Python loops?',
            opts: ['More CPU cores', 'Execute in compiled C, no Python overhead', 'Auto-caching', 'GPU acceleration'],
            correct: 1,
            explain: 'NumPy operates on contiguous memory blocks in compiled C/Fortran, bypassing Python overhead.',
          },
          {
            q: 'np.where(condition, x, y) does:',
            opts: ['Filters rows', 'Returns x where True, y where False (element-wise)', 'Finds first True index', 'Raises error if False'],
            correct: 1,
            explain: 'np.where is a vectorized if-else: select from x or y per element based on condition.',
          },
          {
            q: 'Feature engineering means:',
            opts: ['Building software features', 'Creating/transforming variables to improve models', 'Repairing broken data', 'Writing pipelines'],
            correct: 1,
            explain: 'Feature engineering creates new meaningful variables from existing raw data to help the model.',
          },
        ],
      },
    ],
  },
  {
    id: 'm3',
    zone: 3,
    icon: '🤖',
    name: 'ML Fundamentals',
    subtitle: 'From bias-variance to regularization',
    color: 'var(--water)',
    type: 'water',
    tags: ['Intermediate', 'Theory+Practice', '10 hrs'],
    desc: 'Supervised vs unsupervised learning, model evaluation, regularization, and cross-validation.',
    xpReward: 200,
    pokemon: { id: 7, name: 'Squirtle' },
    topicIds: ['ml', 'feature'],
    sections: [
      {
        id: 's1',
        title: 'Bias-Variance & Regularization',
        concepts: [
          {
            title: 'Bias-Variance Tradeoff',
            icon: '⚖️',
            body: 'Every model lives on a spectrum: <strong>high bias</strong> (underfitting — too simple) vs <strong>high variance</strong> (overfitting — memorises training data). Mastery is finding the sweet spot.',
            scenario: '<strong>Scenario:</strong> Decision tree on churn: depth=1 gives 63% (underfitting). depth=50 gives 99%/71% (overfitting). depth=8 gives 85% both — the sweet spot.',
          },
          {
            title: 'Regularization',
            icon: '🔧',
            body: '<strong>L1 (Lasso)</strong> drives some weights to exactly zero (feature selection). <strong>L2 (Ridge)</strong> shrinks all weights gracefully. Both prevent overfitting by penalising large weights.',
            scenario: '<strong>Scenario:</strong> 200 features for house price prediction. L1 selects the 12 most predictive and zeros the rest — accurate AND interpretable.',
          },
        ],
        video: { id: 'EuBBz3bI-aA', title: 'Bias and Variance, Clearly Explained', channel: 'StatQuest', duration: '6 min', transcript: 'Bias and Variance tradeoff. High bias means the model is too simple and underfits. High variance means the model is too complex and overfits the training data but fails to generalize to test data. Regularization techniques like L1 (Lasso) and L2 (Ridge) add penalties to the weights to prevent overfitting. L1 can even shrink weights exactly to zero, automatically performing feature selection.' },
        quiz: [
          {
            q: 'A model that performs well on training data but poorly on test data is:',
            opts: ['Underfitting', 'Overfitting', 'Optimal', 'Biased'],
            correct: 1,
            explain: 'High variance / overfitting: the model memorises training data but fails to generalise.',
          },
          {
            q: 'L1 (Lasso) regularization uniquely:',
            opts: ['Shrinks all weights equally', 'Drives some weights to exactly zero', 'Increases learning rate', 'Adds neurons'],
            correct: 1,
            explain: 'L1\'s absolute value penalty has a geometric property that can push coefficients to zero — automatic feature selection.',
          },
          {
            q: 'As regularization strength λ increases:',
            opts: ['Model fits training data better', 'Bias increases, variance decreases', 'Variance increases', 'Overfitting becomes more likely'],
            correct: 1,
            explain: 'Higher λ applies stronger penalty on weights, simplifying the model — reducing variance but increasing bias risk.',
          },
        ],
      },
      {
        id: 's2',
        title: 'Cross-Validation & Evaluation',
        concepts: [
          {
            title: 'Cross-Validation',
            icon: '🔁',
            body: 'k-fold CV splits data into k folds, trains k times leaving one fold out as validation, then <strong>averages</strong> all k scores. Far more reliable than a single train/test split.',
            scenario: '<strong>Scenario:</strong> Only 800 rows of customer data. A single 80/20 split could be lucky. 5-fold CV uses all data for both training and validation.',
          },
        ],
        video: { id: 'fSytzGwwBVw', title: 'Cross Validation, Clearly Explained', channel: 'StatQuest', duration: '6 min', transcript: 'Cross Validation. Instead of a single train/test split which can be lucky or unlucky, k-fold cross validation splits the training data into k chunks. The model trains k times, each time validating on a different chunk, and then we average the results. This provides a much more robust estimate of how the model will perform on unseen data.' },
        quiz: [
          {
            q: 'In 5-fold cross-validation, how many times is the model trained?',
            opts: ['1', '3', '5', '10'],
            correct: 2,
            explain: 'In k-fold CV, the model trains k=5 times, each time with a different fold as validation.',
          },
          {
            q: 'Cross-validation is primarily used to:',
            opts: ['Speed up training', 'Get reliable estimate of real-world performance', 'Reduce overfitting during training', 'Replace the test set'],
            correct: 1,
            explain: 'CV averages performance across multiple splits, reducing the luck factor of any single split.',
          },
          {
            q: 'Which reduces variance the most?',
            opts: ['Deeper decision tree', 'Ensemble methods like Random Forest', 'Lower learning rate', 'More training epochs'],
            correct: 1,
            explain: 'Random Forest combines many trees, reducing variance substantially by averaging predictions.',
          },
        ],
      },
    ],
  },
  {
    id: 'm4',
    zone: 4,
    icon: '🧠',
    name: 'Deep Learning & Neural Nets',
    subtitle: 'Illuminate the black box',
    color: 'var(--psychic)',
    type: 'psychic',
    tags: ['Advanced', 'Theory', '12 hrs'],
    desc: 'Neural network architecture, backpropagation, activation functions, CNNs.',
    xpReward: 220,
    pokemon: { id: 65, name: 'Alakazam' },
    topicIds: ['dl'],
    sections: [
      {
        id: 's1',
        title: 'Neural Network Architecture',
        concepts: [
          {
            title: 'Layers & Weights',
            icon: '🏗️',
            body: 'Neural networks are <strong>layers of neurons</strong> connected by weights. Data flows forward — each layer transforms inputs through weighted sums then activation functions.',
            scenario: '<strong>Scenario:</strong> Image classifier: pixel values → hidden layers detect edges, shapes, objects → output layer gives probability per class. The hierarchy builds automatically.',
          },
          {
            title: 'Activation Functions',
            icon: '⚡',
            body: 'Non-linear functions applied after each layer. Without them, a 100-layer network collapses to one linear transformation. <strong>ReLU — max(0,x)</strong> — is the modern default.',
            scenario: '<strong>Scenario:</strong> ReLU returns 0 for negatives, passes positives through unchanged. Fast, avoids saturation, and empirically outperforms sigmoid and tanh.',
          },
        ],
        video: { id: 'aircAruvnKk', title: 'But What Is a Neural Network? — 3Blue1Brown', channel: '3Blue1Brown', duration: '19 min', transcript: 'Neural Networks consist of layers of neurons connected by weights. Data travels through the network, getting multiplied by weights and passed through Activation functions. Non-linear activation functions like ReLU (which outputs max(0,x)) are critical. Without them, the entire network would just collapse mathematically into a single linear transformation and could never learn complex patterns.' },
        quiz: [
          {
            q: 'Why do neural networks need non-linear activation functions?',
            opts: ['Speed up training', 'Learn complex non-linear patterns in data', 'Reduce parameters', 'Prevent overfitting'],
            correct: 1,
            explain: 'Without non-linearity, stacking layers is mathematically equivalent to a single linear transformation.',
          },
          {
            q: 'ReLU is defined as:',
            opts: ['1/(1+e^-x)', 'max(0,x)', 'tanh(x)', 'x² when x>0'],
            correct: 1,
            explain: 'ReLU outputs the input if positive, zero otherwise: f(x) = max(0, x).',
          },
          {
            q: 'The vanishing gradient problem causes:',
            opts: ['Gradients to explode', 'Early layers to learn almost nothing', 'Training to speed up', 'Loss to increase'],
            correct: 1,
            explain: 'With sigmoid/tanh, gradients are multiplied by values <1 during backprop, shrinking exponentially.',
          },
        ],
      },
      {
        id: 's2',
        title: 'Backpropagation',
        concepts: [
          {
            title: 'How Training Works',
            icon: '🔄',
            body: 'After a <strong>forward pass</strong> computes the loss, backprop uses the <strong>chain rule</strong> to calculate how much each weight contributed to the error, then nudges weights in the right direction.',
            scenario: '<strong>Scenario:</strong> Model predicts "dog" for a cat image. Backprop calculates each weight\'s contribution to the mistake and adjusts proportionally. Repeat over millions of examples.',
          },
        ],
        video: { id: 'Ilg3gGewQ5U', title: 'Backpropagation Calculus — 3Blue1Brown', channel: '3Blue1Brown', duration: '10 min', transcript: 'Backpropagation is how neural networks learn. It uses the chain rule from calculus. After a forward pass computes the overall error, we propagate this error backward layer by layer to calculate the gradient, or slope, for each weight. Then, gradient descent slowly nudges the weights in the opposite direction of the gradient to minimize the error over time.' },
        quiz: [
          {
            q: 'Backpropagation uses which mathematical tool?',
            opts: ['Integration', 'The Chain Rule', 'Fourier transforms', 'Matrix decomposition'],
            correct: 1,
            explain: 'Backprop applies the chain rule to efficiently compute gradients layer by layer from output to input.',
          },
          {
            q: 'In a fully connected layer, each neuron receives input from:',
            opts: ['Only same-layer neurons', 'All neurons in the previous layer', 'The input layer only', 'One next-layer neuron'],
            correct: 1,
            explain: 'Dense/fully-connected layers connect every neuron to every neuron in the previous layer.',
          },
          {
            q: 'What is gradient descent?',
            opts: ['Moving downhill on the loss surface to find minimum loss', 'A type of regularization', 'A data augmentation technique', 'An architecture choice'],
            correct: 0,
            explain: 'Gradient descent iteratively adjusts weights by moving in the direction of steepest descent on the loss surface.',
          },
        ],
      },
    ],
  },
  {
    id: 'm5',
    zone: 5,
    icon: '📈',
    name: 'Data Visualization',
    subtitle: 'Turn raw data into compelling stories',
    color: 'var(--electric)',
    type: 'electric',
    tags: ['Beginner', 'Creative', '5 hrs'],
    desc: 'Chart selection, Tufte principles, color as communication, narrative design.',
    xpReward: 130,
    pokemon: { id: 25, name: 'Pikachu' },
    topicIds: ['viz'],
    sections: [
      {
        id: 's1',
        title: 'Chart Selection & Design Principles',
        concepts: [
          {
            title: 'Choosing the Right Chart',
            icon: '📊',
            body: 'Match your <strong>data structure</strong> to its visual encoding. Distribution → histogram. Comparison → bar. Trend → line. Part-to-whole → stacked bar.',
            scenario: '<strong>Scenario:</strong> 5 product categories over 12 months. A stacked bar shows both category size AND time trends. A pie chart shows only one snapshot — the wrong tool.',
          },
          {
            title: 'The Data-Ink Ratio',
            icon: '✏️',
            body: '<strong>Tufte\'s principle:</strong> maximise the ratio of data to total ink. Remove gridlines, 3D effects, and decorative chrome. Every visual element must earn its place.',
            scenario: '<strong>Scenario:</strong> Dashboard with gradient backgrounds and 3D bars. Strip to flat bars, remove every-other gridline, use direct labels instead of a legend — clarity doubles.',
          },
          {
            title: 'Color as Communication',
            icon: '🎨',
            body: 'Color should <strong>encode meaning, not decoration</strong>. Sequential → continuous data. Diverging → values around a midpoint. Categorical → distinct groups.',
            scenario: '<strong>Scenario:</strong> Regional sales vs target: diverging scale (red=below, blue=above, white=at-target). Your audience instantly sees which regions need attention.',
          },
        ],
        video: { id: 'C07k0euBpr4', title: 'How to Choose the Best Chart Type', channel: 'Storytelling with Data', duration: '14 min', transcript: 'Data visualization is about communication. Choose the right chart based on your data structure: Histograms for distribution, line charts for trends, bar charts for comparisons. Maximize the data-ink ratio—meaning you should remove unnecessary clutter like 3D effects, background gradients, or excessive gridlines. Use color intentionally to highlight key points, not just as decoration.' },
        quiz: [
          {
            q: 'Which chart best shows distribution of a continuous variable?',
            opts: ['Pie chart', 'Bar chart', 'Histogram', 'Scatter plot'],
            correct: 2,
            explain: 'A histogram groups continuous values into bins, revealing the shape of the distribution.',
          },
          {
            q: 'A high data-ink ratio means:',
            opts: ['The chart uses many colors', 'Most ink directly represents data', 'File size is large', 'Many annotations'],
            correct: 1,
            explain: 'Tufte\'s ideal: every mark on a chart directly encodes data — chart junk wastes ink without adding information.',
          },
          {
            q: 'A diverging color palette is most appropriate for:',
            opts: ['Categorical groups', 'Data with a meaningful center value (above/below a midpoint)', 'Sequential continuous data', 'Binary true/false data'],
            correct: 1,
            explain: 'Diverging palettes highlight deviation from a neutral midpoint using two contrasting hues.',
          },
        ],
      },
    ],
  },
  {
    id: 'm6',
    zone: 6,
    icon: '🌐',
    name: 'Web Development Foundations',
    subtitle: 'Build the modern web',
    color: 'var(--water)',
    type: 'water',
    tags: ['Beginner', 'Core', '8 hrs'],
    desc: 'HTML, CSS, JavaScript, and React basics for building interactive web applications.',
    xpReward: 160,
    pokemon: { id: 134, name: 'Vaporeon' },
    topicIds: ['webdev'],
    sections: [
      {
        id: 's1',
        title: 'HTML & CSS',
        concepts: [
          {
            title: 'Semantic HTML',
            icon: '📄',
            body: 'Use the right tags for the right job (header, nav, main, article) to improve accessibility and SEO.',
            scenario: '<strong>Scenario:</strong> Using a button tag instead of a div for a clickable element ensures screen readers and keyboards can interact with it properly.',
          }
        ],
        video: { id: 'mU6anWqZJcc', title: 'HTML & CSS Full Course', channel: 'freeCodeCamp', duration: '11 hrs', transcript: 'Learn HTML and CSS from scratch...' },
        quiz: [
          {
            q: 'Which tag should you use for a top-level heading?',
            opts: ['<header>', '<h1>', '<title>', '<top>'],
            correct: 1,
            explain: 'The <h1> tag represents the main heading of the page.',
          }
        ],
      }
    ]
  },
  {
    id: 'm7',
    zone: 7,
    icon: '🛡️',
    name: 'Cybersecurity Basics',
    subtitle: 'Protect systems and data',
    color: 'var(--electric)',
    type: 'electric',
    tags: ['Intermediate', 'Security', '6 hrs'],
    desc: 'Understand network security, cryptography, and best practices to defend against cyber threats.',
    xpReward: 180,
    pokemon: { id: 135, name: 'Jolteon' },
    topicIds: ['cyber'],
    sections: [
      {
        id: 's1',
        title: 'Cryptography',
        concepts: [
          {
            title: 'Public Key Encryption',
            icon: '🔑',
            body: 'A cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner.',
            scenario: '<strong>Scenario:</strong> Alice encrypts a message with Bob\'s public key, and only Bob can decrypt it with his private key.',
          }
        ],
        video: { id: 'AQDCe585Lnc', title: 'Cryptography Tutorial', channel: 'Simplilearn', duration: '45 min', transcript: 'Introduction to Cryptography...' },
        quiz: [
          {
            q: 'In public key cryptography, which key is used to encrypt a message intended for a specific recipient?',
            opts: ['Sender\'s private key', 'Recipient\'s private key', 'Recipient\'s public key', 'Sender\'s public key'],
            correct: 2,
            explain: 'You use the recipient\'s public key to encrypt the message so only their private key can decrypt it.',
          }
        ],
      }
    ]
  },
  {
    id: 'm8',
    zone: 8,
    icon: '💰',
    name: 'Financial Modeling',
    subtitle: 'Analyze financial performance',
    color: 'var(--grass)',
    type: 'grass',
    tags: ['Advanced', 'Finance', '10 hrs'],
    desc: 'Learn valuation techniques, DCF analysis, and algorithmic trading concepts.',
    xpReward: 200,
    pokemon: { id: 133, name: 'Eevee' },
    topicIds: ['finance'],
    sections: [
      {
        id: 's1',
        title: 'Discounted Cash Flow',
        concepts: [
          {
            title: 'Time Value of Money',
            icon: '⏳',
            body: 'A dollar today is worth more than a dollar tomorrow due to its potential earning capacity.',
            scenario: '<strong>Scenario:</strong> You use a discount rate to find the present value of expected future cash flows.',
          }
        ],
        video: { id: '3q1H9YwJp_w', title: 'Financial Modeling Explained', channel: 'Corporate Finance Institute', duration: '20 min', transcript: 'DCF analysis explained...' },
        quiz: [
          {
            q: 'What is the core principle behind DCF?',
            opts: ['Stock prices always go up', 'Time value of money', 'Dividends are guaranteed', 'Inflation is constant'],
            correct: 1,
            explain: 'DCF relies on the time value of money to calculate present value.',
          }
        ],
      }
    ]
  },
  {
    id: 'm9',
    zone: 9,
    icon: '⚕️',
    name: 'Health Data Analytics',
    subtitle: 'Improve patient outcomes',
    color: 'var(--fire)',
    type: 'fire',
    tags: ['Intermediate', 'Healthcare', '8 hrs'],
    desc: 'Explore medical imaging, electronic health records, and predictive models in healthcare.',
    xpReward: 170,
    pokemon: { id: 136, name: 'Flareon' },
    topicIds: ['health'],
    sections: [
      {
        id: 's1',
        title: 'Electronic Health Records',
        concepts: [
          {
            title: 'Data Interoperability',
            icon: '🏥',
            body: 'The ability of different information systems to connect and share data securely.',
            scenario: '<strong>Scenario:</strong> Using HL7 FHIR standards to allow a hospital app to read data from a clinic\'s EHR system.',
          }
        ],
        video: { id: 'P8r_hRhyG_E', title: 'Health Informatics Basics', channel: 'Health IT', duration: '15 min', transcript: 'Health IT and interoperability...' },
        quiz: [
          {
            q: 'What does interoperability in healthcare refer to?',
            opts: ['Doctors working longer hours', 'Systems sharing and using data securely', 'Reducing the cost of medication', 'Building new hospitals'],
            correct: 1,
            explain: 'Interoperability is about seamless data exchange between health systems.',
          }
        ],
      }
    ]
  },
  {
    id: 'm10',
    zone: 10,
    icon: '🎓',
    name: 'Learning Sciences',
    subtitle: 'Design effective education',
    color: 'var(--psychic)',
    type: 'psychic',
    tags: ['Beginner', 'Education', '5 hrs'],
    desc: 'Understand cognitive load theory, instructional design, and learning analytics.',
    xpReward: 140,
    pokemon: { id: 150, name: 'Mewtwo' },
    topicIds: ['edu'],
    sections: [
      {
        id: 's1',
        title: 'Cognitive Load Theory',
        concepts: [
          {
            title: 'Working Memory Limits',
            icon: '🧠',
            body: 'Human working memory can only hold a small amount of information at a time.',
            scenario: '<strong>Scenario:</strong> Breaking a complex lesson into small, digestible chunks (chunking) to prevent overwhelming students.',
          }
        ],
        video: { id: 'x3fK2R00Ww0', title: 'Cognitive Load Theory', channel: 'Education Week', duration: '5 min', transcript: 'How the brain learns...' },
        quiz: [
          {
            q: 'What is the primary goal of managing cognitive load?',
            opts: ['To make tests harder', 'To optimize the use of working memory', 'To reduce reading time', 'To replace teachers with AI'],
            correct: 1,
            explain: 'Managing cognitive load helps optimize working memory for better learning.',
          }
        ],
      }
    ]
  },
  {
    id: 'm11',
    zone: 11,
    icon: '🛒',
    name: 'Supply Chain Optimization',
    subtitle: 'Streamline e-commerce',
    color: 'var(--grass)',
    type: 'grass',
    tags: ['Intermediate', 'Retail', '7 hrs'],
    desc: 'Inventory management, logistics planning, and recommendation engines for retail.',
    xpReward: 160,
    pokemon: { id: 143, name: 'Snorlax' },
    topicIds: ['retail'],
    sections: [
      {
        id: 's1',
        title: 'Inventory Management',
        concepts: [
          {
            title: 'Just-in-Time (JIT)',
            icon: '📦',
            body: 'An inventory strategy aligned with production schedules to reduce waste and warehousing costs.',
            scenario: '<strong>Scenario:</strong> Ordering parts only as they are needed for assembly, minimizing storage needs.',
          }
        ],
        video: { id: 'g0M1R4xT-3E', title: 'Supply Chain Management', channel: 'MIT OpenCourseWare', duration: '50 min', transcript: 'Logistics and supply chain...' },
        quiz: [
          {
            q: 'What is a key benefit of JIT inventory?',
            opts: ['Higher storage costs', 'Reduced warehousing costs', 'More surplus stock', 'Longer production times'],
            correct: 1,
            explain: 'JIT minimizes the amount of stock held, thus reducing warehousing costs.',
          }
        ],
      }
    ]
  },
  {
    id: 'm12',
    zone: 12,
    icon: '💼',
    name: 'Management Consulting 101',
    subtitle: 'Solve complex business problems',
    color: 'var(--water)',
    type: 'water',
    tags: ['Advanced', 'Consulting', '9 hrs'],
    desc: 'Frameworks, market sizing, and strategic communication for consultants.',
    xpReward: 190,
    pokemon: { id: 131, name: 'Lapras' },
    topicIds: ['consulting'],
    sections: [
      {
        id: 's1',
        title: 'Consulting Frameworks',
        concepts: [
          {
            title: 'MECE Principle',
            icon: '🧩',
            body: 'Mutually Exclusive, Collectively Exhaustive. A grouping principle for separating items without overlaps while covering all possibilities.',
            scenario: '<strong>Scenario:</strong> Categorizing customers by age group: 0-18, 19-35, 36-50, 51+ covers everyone without overlaps.',
          }
        ],
        video: { id: 'd7r_W_P10lU', title: 'The MECE Principle', channel: 'Case Interview', duration: '12 min', transcript: 'How to structure problems...' },
        quiz: [
          {
            q: 'What does MECE stand for?',
            opts: ['Many Elements Combined Equally', 'Mutually Exclusive, Collectively Exhaustive', 'Market Evaluation Competitive Edge', 'Maximum Efficiency Cost Effective'],
            correct: 1,
            explain: 'MECE ensures categories do not overlap and cover all possible options.',
          }
        ],
      }
    ]
  },
  {
    id: 'm13',
    zone: 13,
    icon: '🏛️',
    name: 'Public Policy Analysis',
    subtitle: 'Data-driven governance',
    color: 'var(--electric)',
    type: 'electric',
    tags: ['Intermediate', 'Government', '6 hrs'],
    desc: 'Using data to evaluate policy effectiveness and improve public services.',
    xpReward: 150,
    pokemon: { id: 145, name: 'Zapdos' },
    topicIds: ['gov'],
    sections: [
      {
        id: 's1',
        title: 'Policy Evaluation',
        concepts: [
          {
            title: 'Cost-Benefit Analysis',
            icon: '⚖️',
            body: 'A systematic approach to estimating the strengths and weaknesses of alternatives to determine options that provide the best approach to achieving benefits.',
            scenario: '<strong>Scenario:</strong> Weighing the environmental benefits of a new transit system against its construction costs.',
          }
        ],
        video: { id: '8mC874L9gT0', title: 'Cost-Benefit Analysis', channel: 'EconPlusDal', duration: '8 min', transcript: 'Evaluating public projects...' },
        quiz: [
          {
            q: 'What is the primary purpose of Cost-Benefit Analysis?',
            opts: ['To maximize costs', 'To systematically compare the pros and cons of alternatives', 'To hide financial data', 'To delay decision making'],
            correct: 1,
            explain: 'It helps decision-makers weigh the benefits against the costs objectively.',
          }
        ],
      }
    ]
  },
  {
    id: 'm14',
    zone: 14,
    icon: '🤝',
    name: 'Impact Measurement',
    subtitle: 'Quantify social good',
    color: 'var(--fire)',
    type: 'fire',
    tags: ['Beginner', 'Non-profit', '5 hrs'],
    desc: 'Logic models, outcomes vs outputs, and grant reporting for non-profits.',
    xpReward: 130,
    pokemon: { id: 146, name: 'Moltres' },
    topicIds: ['nonprofit'],
    sections: [
      {
        id: 's1',
        title: 'Logic Models',
        concepts: [
          {
            title: 'Outputs vs Outcomes',
            icon: '🎯',
            body: 'Outputs are what you do (e.g., meals served). Outcomes are the changes that result from what you do (e.g., reduced hunger).',
            scenario: '<strong>Scenario:</strong> A literacy program measures the number of books distributed (output) and the improvement in reading scores (outcome).',
          }
        ],
        video: { id: '3vT2gC1Zp_w', title: 'Logic Models Explained', channel: 'Nonprofit Ready', duration: '10 min', transcript: 'Planning for impact...' },
        quiz: [
          {
            q: 'In a non-profit context, what is an outcome?',
            opts: ['The number of flyers handed out', 'The change or impact resulting from an activity', 'The budget spent', 'The staff hired'],
            correct: 1,
            explain: 'Outcomes reflect the actual difference made by the program, not just the activities performed.',
          }
        ],
      }
    ]
  },
  {
    id: 'm15',
    zone: 15,
    icon: '📱',
    name: 'Digital Marketing Strategy',
    subtitle: 'Engage and convert audiences',
    color: 'var(--psychic)',
    type: 'psychic',
    tags: ['Intermediate', 'Media', '7 hrs'],
    desc: 'SEO, SEM, content strategy, and marketing analytics.',
    xpReward: 160,
    pokemon: { id: 144, name: 'Articuno' },
    topicIds: ['media'],
    sections: [
      {
        id: 's1',
        title: 'SEO Fundamentals',
        concepts: [
          {
            title: 'Keyword Intent',
            icon: '🔍',
            body: 'Understanding what a user is trying to accomplish when they type a search query (informational, navigational, transactional).',
            scenario: '<strong>Scenario:</strong> A user searching "buy red shoes" has high transactional intent, whereas "how to tie shoes" is informational.',
          }
        ],
        video: { id: 'DvwHL_TwP00', title: 'SEO for Beginners', channel: 'Ahrefs', duration: '20 min', transcript: 'Search engine optimization...' },
        quiz: [
          {
            q: 'Which search query shows high transactional intent?',
            opts: ['History of coffee', 'Best coffee shops near me', 'Buy espresso machine online', 'What is Arabica'],
            correct: 2,
            explain: '"Buy espresso machine online" clearly indicates the user is ready to make a purchase.',
          }
        ],
      }
    ]
  }
];

export const getModulesForIndustry = (industry) => {
  const IND_MAP = {
    'Technology': ['webdev', 'cyber'],
    'Finance / Banking': ['finance'],
    'Healthcare': ['health'],
    'Education': ['edu'],
    'Retail / E-commerce': ['retail'],
    'Consulting': ['consulting'],
    'Government / Public Sector': ['gov'],
    'Non-profit': ['nonprofit'],
    'Media / Entertainment': ['media'],
  };
  const specificTopic = IND_MAP[industry] || [];
  return MODULES.filter(m => {
    // Core modules (m1 to m5) are included in every path
    if (['m1', 'm2', 'm3', 'm4', 'm5'].includes(m.id)) return true;
    // Plus the industry specific module
    return m.topicIds.some(t => specificTopic.includes(t));
  });
};
