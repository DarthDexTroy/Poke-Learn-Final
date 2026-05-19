export const MODULES = [
  {
    id: 'm1',
    zone: 1,
    icon: '📊',
    name: 'Statistics & Probability',
    subtitle: 'Master the foundations of data analysis',
    color: 'var(--grass)',
    type: 'grass',
    tags: ['Beginner', 'Core', '20 min'],
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
    tags: ['Beginner', 'Hands-on', '22 min'],
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
        video: { id: 'vmEHCJofslg', title: 'Python Pandas Data Science Tutorial', channel: 'Keith Galli', duration: '18 min', transcript: 'Welcome to this Pandas tutorial. Pandas uses DataFrames, which are 2D labeled tables. You can load data with read_csv. You can filter data, drop null values with dropna(), or fill them with fillna(). df.shape tells us the rows and columns. Keeping your code clean and handling missing values properly is 80% of data science.' },
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
        video: { id: 'inN8seMm7UI', title: 'NumPy Tutorial — Vectorized Operations', channel: 'freeCodeCamp', duration: '20 min', transcript: 'NumPy uses vectorized operations which are much faster than normal Python loops. This is because they run in compiled C code and bypass Python overhead. You can use methods like np.where() to apply conditional logic across an entire array instantly without a loop. This enables high performance feature engineering.' },
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
    tags: ['Intermediate', 'Theory+Practice', '25 min'],
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
    tags: ['Advanced', 'Theory', '28 min'],
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
    tags: ['Beginner', 'Creative', '18 min'],
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
        video: { id: 'j8FSP8XuFyk', title: 'How to Choose the Best Chart Type', channel: 'Storytelling with Data', duration: '14 min', transcript: 'Data visualization is about communication. Choose the right chart based on your data structure: Histograms for distribution, line charts for trends, bar charts for comparisons. Maximize the data-ink ratio—meaning you should remove unnecessary clutter like 3D effects, background gradients, or excessive gridlines. Use color intentionally to highlight key points, not just as decoration.' },
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
    tags: ['Beginner', 'Core', '22 min'],
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
        video: { id: 'mU6anWqZJcc', title: 'HTML & CSS Full Course', channel: 'freeCodeCamp', duration: '22 min', transcript: 'Learn HTML and CSS from scratch...' },
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
    tags: ['Intermediate', 'Security', '20 min'],
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
        video: { id: 'AQDCe585Lnc', title: 'Cryptography Tutorial', channel: 'Simplilearn', duration: '20 min', transcript: 'Introduction to Cryptography...' },
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
    tags: ['Advanced', 'Finance', '25 min'],
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
        video: { id: 'JVtUcM1sWQw', title: 'Financial Modeling Explained', channel: 'Corporate Finance Institute', duration: '20 min', transcript: 'DCF analysis explained...' },
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
    tags: ['Intermediate', 'Healthcare', '22 min'],
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
        video: { id: 'qphAzLkYfyI', title: 'Health Informatics Basics', channel: 'Health IT', duration: '15 min', transcript: 'Health IT and interoperability...' },
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
    tags: ['Beginner', 'Education', '18 min'],
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
        video: { id: '2phjWL57qGo', title: 'Cognitive Load Theory', channel: 'Education Week', duration: '5 min', transcript: 'How the brain learns...' },
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
    tags: ['Intermediate', 'Retail', '20 min'],
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
        video: { id: 'sANREcJ8Mhs', title: 'Supply Chain Management', channel: 'MIT OpenCourseWare', duration: '22 min', transcript: 'Logistics and supply chain...' },
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
    tags: ['Advanced', 'Consulting', '24 min'],
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
        video: { id: 'JXZF31xbyz0', title: 'The MECE Principle', channel: 'Case Interview', duration: '12 min', transcript: 'How to structure problems...' },
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
    tags: ['Intermediate', 'Government', '20 min'],
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
        video: { id: 'A6em8lDK6ss', title: 'Cost-Benefit Analysis', channel: 'EconPlusDal', duration: '8 min', transcript: 'Evaluating public projects...' },
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
    tags: ['Beginner', 'Non-profit', '18 min'],
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
        video: { id: 'HYviUfG0ma0', title: 'Logic Models Explained', channel: 'Nonprofit Ready', duration: '10 min', transcript: 'Planning for impact...' },
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
    tags: ['Intermediate', 'Media', '20 min'],
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
        video: { id: '_s2h7X-c2jE', title: 'SEO for Beginners', channel: 'Ahrefs', duration: '20 min', transcript: 'Search engine optimization...' },
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
  },
  {"id":"m16", "zone":2, "icon":"📊", "name":"Bayesian Statistics", "subtitle":"Think probabilistically", "color":"var(--grass)", "type":"grass", "tags":["Intermediate", "Core", "22 min"], "desc":"Prior distributions, posterior inference, and Bayesian hypothesis testing for modern data analysis.", "xpReward":170, "pokemon":{"id":2, "name":"Ivysaur"}, "topicIds":["stats"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Bayesian Statistics.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"rzFX5NWojp0", "title":"Bayesian Statistics Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Bayesian Statistics"}, "quiz":[{"q":"What is the main focus of Bayesian Statistics?", "opts":["Unrelated topic", "Prior distributions, posterior inference, and Bayesian hypothesis testing for modern data analysis", "Random subject", "None of these"], "correct":1, "explain":"Prior distributions, posterior inference, and Bayesian hypothesis testing for modern data analysis."}]}]},
  {"id":"m17", "zone":3, "icon":"📊", "name":"Experimental Design", "subtitle":"Design rigorous studies", "color":"var(--grass)", "type":"grass", "tags":["Advanced", "Core", "24 min"], "desc":"A/B testing, randomization, sample size calculation, and controlling for confounds in experiments.", "xpReward":190, "pokemon":{"id":3, "name":"Venusaur"}, "topicIds":["stats"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Experimental Design.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"-EAI9hiPDoU", "title":"Experimental Design Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Experimental Design"}, "quiz":[{"q":"What is the main focus of Experimental Design?", "opts":["Unrelated topic", "A/B testing, randomization, sample size calculation, and controlling for confounds in experiments", "Random subject", "None of these"], "correct":1, "explain":"A/B testing, randomization, sample size calculation, and controlling for confounds in experiments."}]}]},
  {"id":"m18", "zone":2, "icon":"🐍", "name":"Advanced Python", "subtitle":"Level up your code", "color":"var(--fire)", "type":"fire", "tags":["Intermediate", "Hands-on", "22 min"], "desc":"Object-oriented Python, decorators, generators, and writing clean production-ready code.", "xpReward":170, "pokemon":{"id":5, "name":"Charmeleon"}, "topicIds":["python"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Advanced Python.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"vmEHCJofslg", "title":"Advanced Python Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Advanced Python"}, "quiz":[{"q":"What is the main focus of Advanced Python?", "opts":["Unrelated topic", "Object-oriented Python, decorators, generators, and writing clean production-ready code", "Random subject", "None of these"], "correct":1, "explain":"Object-oriented Python, decorators, generators, and writing clean production-ready code."}]}]},
  {"id":"m19", "zone":3, "icon":"🐍", "name":"Data Pipelines with Python", "subtitle":"Automate data workflows", "color":"var(--fire)", "type":"fire", "tags":["Advanced", "Hands-on", "25 min"], "desc":"Build ETL pipelines, schedule jobs, and process large datasets efficiently with Python.", "xpReward":200, "pokemon":{"id":6, "name":"Charizard"}, "topicIds":["python"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Data Pipelines with Python.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"dfouoh9QdUw", "title":"Data Pipelines with Python Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Data Pipelines with Python"}, "quiz":[{"q":"What is the main focus of Data Pipelines with Python?", "opts":["Unrelated topic", "Build ETL pipelines, schedule jobs, and process large datasets efficiently with Python", "Random subject", "None of these"], "correct":1, "explain":"Build ETL pipelines, schedule jobs, and process large datasets efficiently with Python."}]}]},
  {"id":"m20", "zone":3, "icon":"🤖", "name":"Classification & Regression", "subtitle":"Predict outcomes", "color":"var(--water)", "type":"water", "tags":["Intermediate", "Theory+Practice", "22 min"], "desc":"Logistic regression, decision trees, random forests, and gradient boosting for prediction tasks.", "xpReward":180, "pokemon":{"id":8, "name":"Wartortle"}, "topicIds":["ml"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Classification & Regression.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"EuBBz3bI-aA", "title":"Classification & Regression Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Classification & Regression"}, "quiz":[{"q":"What is the main focus of Classification & Regression?", "opts":["Unrelated topic", "Logistic regression, decision trees, random forests, and gradient boosting for prediction tasks", "Random subject", "None of these"], "correct":1, "explain":"Logistic regression, decision trees, random forests, and gradient boosting for prediction tasks."}]}]},
  {"id":"m21", "zone":4, "icon":"🤖", "name":"Unsupervised Learning", "subtitle":"Find hidden patterns", "color":"var(--water)", "type":"water", "tags":["Advanced", "Theory+Practice", "25 min"], "desc":"K-means, DBSCAN, PCA, and anomaly detection for discovering structure in unlabeled data.", "xpReward":200, "pokemon":{"id":9, "name":"Blastoise"}, "topicIds":["ml"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Unsupervised Learning.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"D6gtZrsYi6c", "title":"Unsupervised Learning Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Unsupervised Learning"}, "quiz":[{"q":"What is the main focus of Unsupervised Learning?", "opts":["Unrelated topic", "K-means, DBSCAN, PCA, and anomaly detection for discovering structure in unlabeled data", "Random subject", "None of these"], "correct":1, "explain":"K-means, DBSCAN, PCA, and anomaly detection for discovering structure in unlabeled data."}]}]},
  {"id":"m22", "zone":4, "icon":"🧠", "name":"Computer Vision", "subtitle":"Teach machines to see", "color":"var(--psychic)", "type":"psychic", "tags":["Advanced", "Theory", "24 min"], "desc":"CNNs, image classification, object detection, and transfer learning with pre-trained models.", "xpReward":210, "pokemon":{"id":150, "name":"Mewtwo"}, "topicIds":["dl"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Computer Vision.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"aircAruvnKk", "title":"Computer Vision Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Computer Vision"}, "quiz":[{"q":"What is the main focus of Computer Vision?", "opts":["Unrelated topic", "CNNs, image classification, object detection, and transfer learning with pre-trained models", "Random subject", "None of these"], "correct":1, "explain":"CNNs, image classification, object detection, and transfer learning with pre-trained models."}]}]},
  {"id":"m23", "zone":5, "icon":"🧠", "name":"Generative AI", "subtitle":"Create with neural networks", "color":"var(--psychic)", "type":"psychic", "tags":["Advanced", "Theory", "28 min"], "desc":"GANs, VAEs, diffusion models, and transformer architectures for text and image generation.", "xpReward":220, "pokemon":{"id":151, "name":"Mew"}, "topicIds":["dl"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Generative AI.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"NRmAXDWJVnU", "title":"Generative AI Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Generative AI"}, "quiz":[{"q":"What is the main focus of Generative AI?", "opts":["Unrelated topic", "GANs, VAEs, diffusion models, and transformer architectures for text and image generation", "Random subject", "None of these"], "correct":1, "explain":"GANs, VAEs, diffusion models, and transformer architectures for text and image generation."}]}]},
  {"id":"m24", "zone":2, "icon":"📈", "name":"Interactive Dashboards", "subtitle":"Build live visualizations", "color":"var(--fairy)", "type":"fairy", "tags":["Intermediate", "Creative", "20 min"], "desc":"Create interactive dashboards with Plotly, Dash, and Tableau for data storytelling.", "xpReward":160, "pokemon":{"id":36, "name":"Clefable"}, "topicIds":["viz"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Interactive Dashboards.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"j8FSP8XuFyk", "title":"Interactive Dashboards Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Interactive Dashboards"}, "quiz":[{"q":"What is the main focus of Interactive Dashboards?", "opts":["Unrelated topic", "Create interactive dashboards with Plotly, Dash, and Tableau for data storytelling", "Random subject", "None of these"], "correct":1, "explain":"Create interactive dashboards with Plotly, Dash, and Tableau for data storytelling."}]}]},
  {"id":"m25", "zone":3, "icon":"📈", "name":"Geospatial Visualization", "subtitle":"Map your data", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Creative", "22 min"], "desc":"Choropleth maps, heatmaps, and spatial analysis using Folium and GeoPandas.", "xpReward":180, "pokemon":{"id":35, "name":"Clefairy"}, "topicIds":["viz"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Geospatial Visualization.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"Hau_ZCmN8eU", "title":"Geospatial Visualization Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Geospatial Visualization"}, "quiz":[{"q":"What is the main focus of Geospatial Visualization?", "opts":["Unrelated topic", "Choropleth maps, heatmaps, and spatial analysis using Folium and GeoPandas", "Random subject", "None of these"], "correct":1, "explain":"Choropleth maps, heatmaps, and spatial analysis using Folium and GeoPandas."}]}]},
  {"id":"m26", "zone":2, "icon":"🗄️", "name":"Advanced SQL", "subtitle":"Master complex queries", "color":"var(--steel)", "type":"steel", "tags":["Intermediate", "Hands-on", "22 min"], "desc":"Window functions, CTEs, subqueries, and query optimization for data analysis.", "xpReward":170, "pokemon":{"id":82, "name":"Magneton"}, "topicIds":["sql"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Advanced SQL.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"kbKty5ZVKMY", "title":"Advanced SQL Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Advanced SQL"}, "quiz":[{"q":"What is the main focus of Advanced SQL?", "opts":["Unrelated topic", "Window functions, CTEs, subqueries, and query optimization for data analysis", "Random subject", "None of these"], "correct":1, "explain":"Window functions, CTEs, subqueries, and query optimization for data analysis."}]}]},
  {"id":"m27", "zone":3, "icon":"🗄️", "name":"Database Design", "subtitle":"Architect data systems", "color":"var(--steel)", "type":"steel", "tags":["Advanced", "Hands-on", "24 min"], "desc":"Normalization, indexing strategies, ERD modeling, and NoSQL vs SQL trade-offs.", "xpReward":190, "pokemon":{"id":81, "name":"Magnemite"}, "topicIds":["sql"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Database Design.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"ztHopE5Wnpc", "title":"Database Design Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Database Design"}, "quiz":[{"q":"What is the main focus of Database Design?", "opts":["Unrelated topic", "Normalization, indexing strategies, ERD modeling, and NoSQL vs SQL trade-offs", "Random subject", "None of these"], "correct":1, "explain":"Normalization, indexing strategies, ERD modeling, and NoSQL vs SQL trade-offs."}]}]},
  {"id":"m28", "zone":3, "icon":"⚙️", "name":"Advanced Feature Engineering", "subtitle":"Craft powerful features", "color":"var(--ground)", "type":"ground", "tags":["Advanced", "Hands-on", "22 min"], "desc":"Target encoding, feature interactions, automated feature generation, and feature stores.", "xpReward":180, "pokemon":{"id":76, "name":"Golem"}, "topicIds":["feature"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Advanced Feature Engineering.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"inN8seMm7UI", "title":"Advanced Feature Engineering Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Advanced Feature Engineering"}, "quiz":[{"q":"What is the main focus of Advanced Feature Engineering?", "opts":["Unrelated topic", "Target encoding, feature interactions, automated feature generation, and feature stores", "Random subject", "None of these"], "correct":1, "explain":"Target encoding, feature interactions, automated feature generation, and feature stores."}]}]},
  {"id":"m29", "zone":2, "icon":"⚙️", "name":"Data Cleaning Mastery", "subtitle":"Tame messy data", "color":"var(--ground)", "type":"ground", "tags":["Intermediate", "Hands-on", "20 min"], "desc":"Handling missing values, outlier detection, deduplication, and data validation pipelines.", "xpReward":160, "pokemon":{"id":75, "name":"Graveler"}, "topicIds":["feature"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Data Cleaning Mastery.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"Obs7NaBhic4", "title":"Data Cleaning Mastery Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Data Cleaning Mastery"}, "quiz":[{"q":"What is the main focus of Data Cleaning Mastery?", "opts":["Unrelated topic", "Handling missing values, outlier detection, deduplication, and data validation pipelines", "Random subject", "None of these"], "correct":1, "explain":"Handling missing values, outlier detection, deduplication, and data validation pipelines."}]}]},
  {"id":"m30", "zone":3, "icon":"💬", "name":"Text Classification", "subtitle":"Categorize documents", "color":"var(--dragon)", "type":"dragon", "tags":["Intermediate", "Theory+Practice", "22 min"], "desc":"Sentiment analysis, spam detection, and topic modeling using classical and deep learning methods.", "xpReward":180, "pokemon":{"id":148, "name":"Dragonair"}, "topicIds":["nlp"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Text Classification.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"fNxaJsNG3-s", "title":"Text Classification Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Text Classification"}, "quiz":[{"q":"What is the main focus of Text Classification?", "opts":["Unrelated topic", "Sentiment analysis, spam detection, and topic modeling using classical and deep learning methods", "Random subject", "None of these"], "correct":1, "explain":"Sentiment analysis, spam detection, and topic modeling using classical and deep learning methods."}]}]},
  {"id":"m31", "zone":4, "icon":"💬", "name":"Large Language Models", "subtitle":"Harness transformer power", "color":"var(--dragon)", "type":"dragon", "tags":["Advanced", "Theory", "25 min"], "desc":"GPT, BERT, prompt engineering, fine-tuning, and building applications with LLM APIs.", "xpReward":210, "pokemon":{"id":149, "name":"Dragonite"}, "topicIds":["nlp"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Large Language Models.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"5sLYAQS9sWQ", "title":"Large Language Models Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Large Language Models"}, "quiz":[{"q":"What is the main focus of Large Language Models?", "opts":["Unrelated topic", "GPT, BERT, prompt engineering, fine-tuning, and building applications with LLM APIs", "Random subject", "None of these"], "correct":1, "explain":"GPT, BERT, prompt engineering, fine-tuning, and building applications with LLM APIs."}]}]},
  {"id":"m32", "zone":3, "icon":"📅", "name":"Forecasting Methods", "subtitle":"Predict the future", "color":"var(--ice)", "type":"ice", "tags":["Intermediate", "Theory+Practice", "22 min"], "desc":"ARIMA, Prophet, exponential smoothing, and evaluating forecast accuracy.", "xpReward":180, "pokemon":{"id":131, "name":"Lapras"}, "topicIds":["timeseries"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Forecasting Methods.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"e8Yw4alG16Q", "title":"Forecasting Methods Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Forecasting Methods"}, "quiz":[{"q":"What is the main focus of Forecasting Methods?", "opts":["Unrelated topic", "ARIMA, Prophet, exponential smoothing, and evaluating forecast accuracy", "Random subject", "None of these"], "correct":1, "explain":"ARIMA, Prophet, exponential smoothing, and evaluating forecast accuracy."}]}]},
  {"id":"m33", "zone":4, "icon":"📅", "name":"Advanced Time Series", "subtitle":"Complex temporal patterns", "color":"var(--ice)", "type":"ice", "tags":["Advanced", "Theory", "25 min"], "desc":"LSTM for sequences, multivariate forecasting, changepoint detection, and anomaly detection.", "xpReward":200, "pokemon":{"id":144, "name":"Articuno"}, "topicIds":["timeseries"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Advanced Time Series.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"SJgzKMlUnWE", "title":"Advanced Time Series Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Advanced Time Series"}, "quiz":[{"q":"What is the main focus of Advanced Time Series?", "opts":["Unrelated topic", "LSTM for sequences, multivariate forecasting, changepoint detection, and anomaly detection", "Random subject", "None of these"], "correct":1, "explain":"LSTM for sequences, multivariate forecasting, changepoint detection, and anomaly detection."}]}]},
  {"id":"m34", "zone":3, "icon":"☁️", "name":"ML Deployment", "subtitle":"Ship models to production", "color":"var(--flying)", "type":"flying", "tags":["Intermediate", "Hands-on", "22 min"], "desc":"Docker, Flask/FastAPI endpoints, model serving, and monitoring models in production.", "xpReward":180, "pokemon":{"id":18, "name":"Pidgeot"}, "topicIds":["cloud"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of ML Deployment.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"5pniK1RV_6o", "title":"ML Deployment Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of ML Deployment"}, "quiz":[{"q":"What is the main focus of ML Deployment?", "opts":["Unrelated topic", "Docker, Flask/FastAPI endpoints, model serving, and monitoring models in production", "Random subject", "None of these"], "correct":1, "explain":"Docker, Flask/FastAPI endpoints, model serving, and monitoring models in production."}]}]},
  {"id":"m35", "zone":4, "icon":"☁️", "name":"MLOps Pipelines", "subtitle":"Automate ML workflows", "color":"var(--flying)", "type":"flying", "tags":["Advanced", "Hands-on", "25 min"], "desc":"CI/CD for ML, experiment tracking with MLflow, feature stores, and automated retraining.", "xpReward":200, "pokemon":{"id":142, "name":"Aerodactyl"}, "topicIds":["cloud"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of MLOps Pipelines.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"biqYkVf-a7Y", "title":"MLOps Pipelines Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of MLOps Pipelines"}, "quiz":[{"q":"What is the main focus of MLOps Pipelines?", "opts":["Unrelated topic", "CI/CD for ML, experiment tracking with MLflow, feature stores, and automated retraining", "Random subject", "None of these"], "correct":1, "explain":"CI/CD for ML, experiment tracking with MLflow, feature stores, and automated retraining."}]}]},
  {"id":"m36", "zone":2, "icon":"🌐", "name":"React & State Management", "subtitle":"Build dynamic UIs", "color":"var(--water)", "type":"water", "tags":["Intermediate", "Hands-on", "22 min"], "desc":"React hooks, component patterns, state management with Zustand/Redux, and routing.", "xpReward":170, "pokemon":{"id":130, "name":"Gyarados"}, "topicIds":["webdev"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of React & State Management.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"mU6anWqZJcc", "title":"React & State Management Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of React & State Management"}, "quiz":[{"q":"What is the main focus of React & State Management?", "opts":["Unrelated topic", "React hooks, component patterns, state management with Zustand/Redux, and routing", "Random subject", "None of these"], "correct":1, "explain":"React hooks, component patterns, state management with Zustand/Redux, and routing."}]}]},
  {"id":"m37", "zone":3, "icon":"🌐", "name":"Full-Stack Development", "subtitle":"Frontend meets backend", "color":"var(--water)", "type":"water", "tags":["Advanced", "Hands-on", "25 min"], "desc":"Node.js, REST APIs, authentication, databases, and deploying full-stack applications.", "xpReward":200, "pokemon":{"id":121, "name":"Starmie"}, "topicIds":["webdev"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Full-Stack Development.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"J1berVAFz5M", "title":"Full-Stack Development Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Full-Stack Development"}, "quiz":[{"q":"What is the main focus of Full-Stack Development?", "opts":["Unrelated topic", "Node", "Random subject", "None of these"], "correct":1, "explain":"Node.js, REST APIs, authentication, databases, and deploying full-stack applications."}]}]},
  {"id":"m38", "zone":2, "icon":"🛡️", "name":"Network Security", "subtitle":"Defend the perimeter", "color":"var(--electric)", "type":"electric", "tags":["Intermediate", "Security", "22 min"], "desc":"Firewalls, IDS/IPS, VPNs, network monitoring, and incident detection techniques.", "xpReward":180, "pokemon":{"id":26, "name":"Raichu"}, "topicIds":["cyber"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Network Security.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"AQDCe585Lnc", "title":"Network Security Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Network Security"}, "quiz":[{"q":"What is the main focus of Network Security?", "opts":["Unrelated topic", "Firewalls, IDS/IPS, VPNs, network monitoring, and incident detection techniques", "Random subject", "None of these"], "correct":1, "explain":"Firewalls, IDS/IPS, VPNs, network monitoring, and incident detection techniques."}]}]},
  {"id":"m39", "zone":3, "icon":"🛡️", "name":"Ethical Hacking", "subtitle":"Think like an attacker", "color":"var(--electric)", "type":"electric", "tags":["Advanced", "Security", "25 min"], "desc":"Penetration testing methodology, vulnerability scanning, exploit frameworks, and reporting.", "xpReward":200, "pokemon":{"id":145, "name":"Zapdos"}, "topicIds":["cyber"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Ethical Hacking.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"25iMrJDyIDk", "title":"Ethical Hacking Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Ethical Hacking"}, "quiz":[{"q":"What is the main focus of Ethical Hacking?", "opts":["Unrelated topic", "Penetration testing methodology, vulnerability scanning, exploit frameworks, and reporting", "Random subject", "None of these"], "correct":1, "explain":"Penetration testing methodology, vulnerability scanning, exploit frameworks, and reporting."}]}]},
  {"id":"m40", "zone":2, "icon":"💰", "name":"Investment Analysis", "subtitle":"Evaluate opportunities", "color":"var(--dark)", "type":"dark", "tags":["Intermediate", "Finance", "22 min"], "desc":"Stock valuation, bond pricing, portfolio theory, and risk-adjusted returns.", "xpReward":180, "pokemon":{"id":53, "name":"Persian"}, "topicIds":["finance"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Investment Analysis.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"JVtUcM1sWQw", "title":"Investment Analysis Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Investment Analysis"}, "quiz":[{"q":"What is the main focus of Investment Analysis?", "opts":["Unrelated topic", "Stock valuation, bond pricing, portfolio theory, and risk-adjusted returns", "Random subject", "None of these"], "correct":1, "explain":"Stock valuation, bond pricing, portfolio theory, and risk-adjusted returns."}]}]},
  {"id":"m41", "zone":3, "icon":"💰", "name":"Quantitative Finance", "subtitle":"Math meets markets", "color":"var(--dark)", "type":"dark", "tags":["Advanced", "Finance", "25 min"], "desc":"Options pricing, Monte Carlo simulation, algorithmic trading, and risk management models.", "xpReward":210, "pokemon":{"id":94, "name":"Gengar"}, "topicIds":["finance"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Quantitative Finance.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"b9RgHa1CnH4", "title":"Quantitative Finance Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Quantitative Finance"}, "quiz":[{"q":"What is the main focus of Quantitative Finance?", "opts":["Unrelated topic", "Options pricing, Monte Carlo simulation, algorithmic trading, and risk management models", "Random subject", "None of these"], "correct":1, "explain":"Options pricing, Monte Carlo simulation, algorithmic trading, and risk management models."}]}]},
  {"id":"m42", "zone":2, "icon":"⚕️", "name":"Clinical Data Science", "subtitle":"Analyze patient data", "color":"var(--poison)", "type":"poison", "tags":["Intermediate", "Healthcare", "22 min"], "desc":"EHR data analysis, survival analysis, clinical trial design, and predictive health models.", "xpReward":180, "pokemon":{"id":49, "name":"Venomoth"}, "topicIds":["health"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Clinical Data Science.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"qphAzLkYfyI", "title":"Clinical Data Science Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Clinical Data Science"}, "quiz":[{"q":"What is the main focus of Clinical Data Science?", "opts":["Unrelated topic", "EHR data analysis, survival analysis, clinical trial design, and predictive health models", "Random subject", "None of these"], "correct":1, "explain":"EHR data analysis, survival analysis, clinical trial design, and predictive health models."}]}]},
  {"id":"m43", "zone":3, "icon":"⚕️", "name":"AI in Healthcare", "subtitle":"Diagnose with data", "color":"var(--poison)", "type":"poison", "tags":["Advanced", "Healthcare", "25 min"], "desc":"Medical imaging with CNNs, NLP for clinical notes, federated learning, and ethical AI in health.", "xpReward":200, "pokemon":{"id":34, "name":"Nidoking"}, "topicIds":["health"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of AI in Healthcare.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"eZFtf69sido", "title":"AI in Healthcare Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of AI in Healthcare"}, "quiz":[{"q":"What is the main focus of AI in Healthcare?", "opts":["Unrelated topic", "Medical imaging with CNNs, NLP for clinical notes, federated learning, and ethical AI in health", "Random subject", "None of these"], "correct":1, "explain":"Medical imaging with CNNs, NLP for clinical notes, federated learning, and ethical AI in health."}]}]},
  {"id":"m44", "zone":2, "icon":"🎓", "name":"Instructional Design", "subtitle":"Design effective learning", "color":"var(--normal)", "type":"normal", "tags":["Intermediate", "Education", "22 min"], "desc":"ADDIE model, backward design, multimedia learning principles, and assessment design.", "xpReward":170, "pokemon":{"id":137, "name":"Porygon"}, "topicIds":["edu"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Instructional Design.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"2phjWL57qGo", "title":"Instructional Design Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Instructional Design"}, "quiz":[{"q":"What is the main focus of Instructional Design?", "opts":["Unrelated topic", "ADDIE model, backward design, multimedia learning principles, and assessment design", "Random subject", "None of these"], "correct":1, "explain":"ADDIE model, backward design, multimedia learning principles, and assessment design."}]}]},
  {"id":"m45", "zone":3, "icon":"🎓", "name":"Learning Analytics", "subtitle":"Data-driven education", "color":"var(--normal)", "type":"normal", "tags":["Advanced", "Education", "25 min"], "desc":"Student performance prediction, adaptive learning systems, knowledge tracing, and A/B testing in education.", "xpReward":190, "pokemon":{"id":113, "name":"Chansey"}, "topicIds":["edu"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Learning Analytics.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"yZvFH7B6gKI", "title":"Learning Analytics Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Learning Analytics"}, "quiz":[{"q":"What is the main focus of Learning Analytics?", "opts":["Unrelated topic", "Student performance prediction, adaptive learning systems, knowledge tracing, and A/B testing in education", "Random subject", "None of these"], "correct":1, "explain":"Student performance prediction, adaptive learning systems, knowledge tracing, and A/B testing in education."}]}]},
  {"id":"m46", "zone":2, "icon":"🛒", "name":"Customer Analytics", "subtitle":"Understand your buyers", "color":"var(--bug)", "type":"bug", "tags":["Intermediate", "Retail", "22 min"], "desc":"Customer segmentation, RFM analysis, churn prediction, and lifetime value modeling.", "xpReward":170, "pokemon":{"id":12, "name":"Butterfree"}, "topicIds":["retail"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Customer Analytics.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"sANREcJ8Mhs", "title":"Customer Analytics Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Customer Analytics"}, "quiz":[{"q":"What is the main focus of Customer Analytics?", "opts":["Unrelated topic", "Customer segmentation, RFM analysis, churn prediction, and lifetime value modeling", "Random subject", "None of these"], "correct":1, "explain":"Customer segmentation, RFM analysis, churn prediction, and lifetime value modeling."}]}]},
  {"id":"m47", "zone":3, "icon":"🛒", "name":"Recommendation Systems", "subtitle":"Personalize at scale", "color":"var(--bug)", "type":"bug", "tags":["Advanced", "Retail", "25 min"], "desc":"Collaborative filtering, content-based filtering, hybrid systems, and A/B testing recommendations.", "xpReward":200, "pokemon":{"id":127, "name":"Pinsir"}, "topicIds":["retail"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Recommendation Systems.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"U-yq3I9QugQ", "title":"Recommendation Systems Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Recommendation Systems"}, "quiz":[{"q":"What is the main focus of Recommendation Systems?", "opts":["Unrelated topic", "Collaborative filtering, content-based filtering, hybrid systems, and A/B testing recommendations", "Random subject", "None of these"], "correct":1, "explain":"Collaborative filtering, content-based filtering, hybrid systems, and A/B testing recommendations."}]}]},
  {"id":"m48", "zone":2, "icon":"💼", "name":"Business Frameworks", "subtitle":"Structure your thinking", "color":"var(--fighting)", "type":"fighting", "tags":["Intermediate", "Consulting", "22 min"], "desc":"Porter's Five Forces, BCG Matrix, McKinsey 7S, and applying frameworks to real business problems.", "xpReward":180, "pokemon":{"id":62, "name":"Poliwrath"}, "topicIds":["consulting"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Business Frameworks.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"JXZF31xbyz0", "title":"Business Frameworks Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Business Frameworks"}, "quiz":[{"q":"What is the main focus of Business Frameworks?", "opts":["Unrelated topic", "Porter's Five Forces, BCG Matrix, McKinsey 7S, and applying frameworks to real business problems", "Random subject", "None of these"], "correct":1, "explain":"Porter's Five Forces, BCG Matrix, McKinsey 7S, and applying frameworks to real business problems."}]}]},
  {"id":"m49", "zone":3, "icon":"💼", "name":"Data-Driven Consulting", "subtitle":"Analytics for strategy", "color":"var(--fighting)", "type":"fighting", "tags":["Advanced", "Consulting", "25 min"], "desc":"Market sizing with data, competitive intelligence, dashboard storytelling, and client presentations.", "xpReward":200, "pokemon":{"id":68, "name":"Machamp"}, "topicIds":["consulting"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Data-Driven Consulting.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"RYjLU2N8K70", "title":"Data-Driven Consulting Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Data-Driven Consulting"}, "quiz":[{"q":"What is the main focus of Data-Driven Consulting?", "opts":["Unrelated topic", "Market sizing with data, competitive intelligence, dashboard storytelling, and client presentations", "Random subject", "None of these"], "correct":1, "explain":"Market sizing with data, competitive intelligence, dashboard storytelling, and client presentations."}]}]},
  {"id":"m50", "zone":2, "icon":"🏛️", "name":"Policy Evaluation Methods", "subtitle":"Measure what works", "color":"var(--rock)", "type":"rock", "tags":["Intermediate", "Government", "22 min"], "desc":"RCTs, difference-in-differences, regression discontinuity, and program evaluation frameworks.", "xpReward":180, "pokemon":{"id":139, "name":"Omastar"}, "topicIds":["gov"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Policy Evaluation Methods.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"A6em8lDK6ss", "title":"Policy Evaluation Methods Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Policy Evaluation Methods"}, "quiz":[{"q":"What is the main focus of Policy Evaluation Methods?", "opts":["Unrelated topic", "RCTs, difference-in-differences, regression discontinuity, and program evaluation frameworks", "Random subject", "None of these"], "correct":1, "explain":"RCTs, difference-in-differences, regression discontinuity, and program evaluation frameworks."}]}]},
  {"id":"m51", "zone":3, "icon":"🏛️", "name":"Civic Technology", "subtitle":"Tech for public good", "color":"var(--rock)", "type":"rock", "tags":["Advanced", "Government", "25 min"], "desc":"Open data platforms, digital government services, participatory budgeting tools, and GovTech innovation.", "xpReward":200, "pokemon":{"id":141, "name":"Kabutops"}, "topicIds":["gov"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Civic Technology.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"JoY5-8lCLIA", "title":"Civic Technology Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Civic Technology"}, "quiz":[{"q":"What is the main focus of Civic Technology?", "opts":["Unrelated topic", "Open data platforms, digital government services, participatory budgeting tools, and GovTech innovation", "Random subject", "None of these"], "correct":1, "explain":"Open data platforms, digital government services, participatory budgeting tools, and GovTech innovation."}]}]},
  {"id":"m52", "zone":2, "icon":"🤝", "name":"Grant Writing & Fundraising", "subtitle":"Secure funding", "color":"var(--fairy)", "type":"fairy", "tags":["Intermediate", "Non-profit", "22 min"], "desc":"Writing compelling grant proposals, donor cultivation strategies, and fundraising data analytics.", "xpReward":170, "pokemon":{"id":39, "name":"Jigglypuff"}, "topicIds":["nonprofit"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Grant Writing & Fundraising.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"HYviUfG0ma0", "title":"Grant Writing & Fundraising Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Grant Writing & Fundraising"}, "quiz":[{"q":"What is the main focus of Grant Writing & Fundraising?", "opts":["Unrelated topic", "Writing compelling grant proposals, donor cultivation strategies, and fundraising data analytics", "Random subject", "None of these"], "correct":1, "explain":"Writing compelling grant proposals, donor cultivation strategies, and fundraising data analytics."}]}]},
  {"id":"m53", "zone":3, "icon":"🤝", "name":"Social Impact Analytics", "subtitle":"Prove your impact", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Non-profit", "25 min"], "desc":"SROI calculation, theory of change modeling, impact dashboards, and data storytelling for donors.", "xpReward":200, "pokemon":{"id":40, "name":"Wigglytuff"}, "topicIds":["nonprofit"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Social Impact Analytics.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"X3siQUQZaAQ", "title":"Social Impact Analytics Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Social Impact Analytics"}, "quiz":[{"q":"What is the main focus of Social Impact Analytics?", "opts":["Unrelated topic", "SROI calculation, theory of change modeling, impact dashboards, and data storytelling for donors", "Random subject", "None of these"], "correct":1, "explain":"SROI calculation, theory of change modeling, impact dashboards, and data storytelling for donors."}]}]},
  {"id":"m54", "zone":2, "icon":"📱", "name":"Social Media Analytics", "subtitle":"Measure engagement", "color":"var(--ghost)", "type":"ghost", "tags":["Intermediate", "Media", "22 min"], "desc":"Platform metrics, engagement analysis, sentiment tracking, and social listening tools.", "xpReward":170, "pokemon":{"id":92, "name":"Gastly"}, "topicIds":["media"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Social Media Analytics.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"_s2h7X-c2jE", "title":"Social Media Analytics Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Social Media Analytics"}, "quiz":[{"q":"What is the main focus of Social Media Analytics?", "opts":["Unrelated topic", "Platform metrics, engagement analysis, sentiment tracking, and social listening tools", "Random subject", "None of these"], "correct":1, "explain":"Platform metrics, engagement analysis, sentiment tracking, and social listening tools."}]}]},
  {"id":"m55", "zone":3, "icon":"📱", "name":"Growth Marketing", "subtitle":"Scale user acquisition", "color":"var(--ghost)", "type":"ghost", "tags":["Advanced", "Media", "25 min"], "desc":"Funnel optimization, attribution modeling, programmatic ads, and data-driven content strategy.", "xpReward":200, "pokemon":{"id":93, "name":"Haunter"}, "topicIds":["media"], "sections":[{"id":"s1", "title":"Core Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master the foundational concepts of Growth Marketing.", "scenario":"<strong>Scenario:</strong> Apply these concepts to solve real-world problems in your domain."}], "video":{"id":"RvFTNnOyWZ0", "title":"Growth Marketing Overview", "channel":"PokéLearn", "duration":"20 min", "transcript":"Overview of Growth Marketing"}, "quiz":[{"q":"What is the main focus of Growth Marketing?", "opts":["Unrelated topic", "Funnel optimization, attribution modeling, programmatic ads, and data-driven content strategy", "Random subject", "None of these"], "correct":1, "explain":"Funnel optimization, attribution modeling, programmatic ads, and data-driven content strategy."}]}]}
,
  {"id":"m56", "zone":2, "icon":"📊", "name":"Advanced Probability", "subtitle":"Deep dive into Advanced Probability", "color":"var(--grass)", "type":"grass", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Advanced Probability.", "xpReward":200, "pokemon":{"id":67, "name":"Pokemon57"}, "topicIds":["stats"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Advanced Probability", "scenario":"Scenario for Advanced Probability"}], "video":{"id":"LgLgexX7iTs", "title":"Advanced Probability Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Advanced Probability"}, "quiz":[{"q":"What is the focus of Advanced Probability?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m57", "zone":3, "icon":"📊", "name":"Non-parametric Tests", "subtitle":"Deep dive into Non-parametric Tests", "color":"var(--grass)", "type":"grass", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Non-parametric Tests.", "xpReward":200, "pokemon":{"id":68, "name":"Pokemon58"}, "topicIds":["stats"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Non-parametric Tests", "scenario":"Scenario for Non-parametric Tests"}], "video":{"id":"IcLSKko2tsg", "title":"Non-parametric Tests Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Non-parametric Tests"}, "quiz":[{"q":"What is the focus of Non-parametric Tests?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m58", "zone":4, "icon":"📊", "name":"Survival Analysis", "subtitle":"Deep dive into Survival Analysis", "color":"var(--grass)", "type":"grass", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Survival Analysis.", "xpReward":200, "pokemon":{"id":69, "name":"Pokemon59"}, "topicIds":["stats"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Survival Analysis", "scenario":"Scenario for Survival Analysis"}], "video":{"id":"Wo9RNcHM_bs", "title":"Survival Analysis Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Survival Analysis"}, "quiz":[{"q":"What is the focus of Survival Analysis?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m59", "zone":5, "icon":"📊", "name":"Multivariate Statistics", "subtitle":"Deep dive into Multivariate Statistics", "color":"var(--grass)", "type":"grass", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Multivariate Statistics.", "xpReward":200, "pokemon":{"id":70, "name":"Pokemon60"}, "topicIds":["stats"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Multivariate Statistics", "scenario":"Scenario for Multivariate Statistics"}], "video":{"id":"GCLamJcdyrE", "title":"Multivariate Statistics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Multivariate Statistics"}, "quiz":[{"q":"What is the focus of Multivariate Statistics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m60", "zone":2, "icon":"🐍", "name":"Python Concurrency", "subtitle":"Deep dive into Python Concurrency", "color":"var(--fire)", "type":"fire", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Python Concurrency.", "xpReward":200, "pokemon":{"id":71, "name":"Pokemon61"}, "topicIds":["python"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Python Concurrency", "scenario":"Scenario for Python Concurrency"}], "video":{"id":"GpqAQxH1Afc", "title":"Python Concurrency Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Python Concurrency"}, "quiz":[{"q":"What is the focus of Python Concurrency?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m61", "zone":3, "icon":"🐍", "name":"Metaprogramming", "subtitle":"Deep dive into Metaprogramming", "color":"var(--fire)", "type":"fire", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Metaprogramming.", "xpReward":200, "pokemon":{"id":72, "name":"Pokemon62"}, "topicIds":["python"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Metaprogramming", "scenario":"Scenario for Metaprogramming"}], "video":{"id":"lZfv4H-9ato", "title":"Metaprogramming Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Metaprogramming"}, "quiz":[{"q":"What is the focus of Metaprogramming?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m62", "zone":4, "icon":"🐍", "name":"Advanced Data Structures", "subtitle":"Deep dive into Advanced Data Structures", "color":"var(--fire)", "type":"fire", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Advanced Data Structures.", "xpReward":200, "pokemon":{"id":73, "name":"Pokemon63"}, "topicIds":["python"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Advanced Data Structures", "scenario":"Scenario for Advanced Data Structures"}], "video":{"id":"O9v10jQkm5c", "title":"Advanced Data Structures Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Advanced Data Structures"}, "quiz":[{"q":"What is the focus of Advanced Data Structures?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m63", "zone":5, "icon":"🐍", "name":"Python for Web Scraping", "subtitle":"Deep dive into Python for Web Scraping", "color":"var(--fire)", "type":"fire", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Python for Web Scraping.", "xpReward":200, "pokemon":{"id":74, "name":"Pokemon64"}, "topicIds":["python"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Python for Web Scraping", "scenario":"Scenario for Python for Web Scraping"}], "video":{"id":"QhD015WUMxE", "title":"Python for Web Scraping Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Python for Web Scraping"}, "quiz":[{"q":"What is the focus of Python for Web Scraping?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m64", "zone":2, "icon":"🤖", "name":"Ensemble Methods", "subtitle":"Deep dive into Ensemble Methods", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Ensemble Methods.", "xpReward":200, "pokemon":{"id":75, "name":"Pokemon65"}, "topicIds":["ml"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Ensemble Methods", "scenario":"Scenario for Ensemble Methods"}], "video":{"id":"sN5ZcJLDMaE", "title":"Ensemble Methods Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Ensemble Methods"}, "quiz":[{"q":"What is the focus of Ensemble Methods?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m65", "zone":3, "icon":"🤖", "name":"Support Vector Machines", "subtitle":"Deep dive into Support Vector Machines", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Support Vector Machines.", "xpReward":200, "pokemon":{"id":76, "name":"Pokemon66"}, "topicIds":["ml"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Support Vector Machines", "scenario":"Scenario for Support Vector Machines"}], "video":{"id":"_YPScrckx28", "title":"Support Vector Machines Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Support Vector Machines"}, "quiz":[{"q":"What is the focus of Support Vector Machines?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m66", "zone":4, "icon":"🤖", "name":"Hyperparameter Tuning", "subtitle":"Deep dive into Hyperparameter Tuning", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Hyperparameter Tuning.", "xpReward":200, "pokemon":{"id":77, "name":"Pokemon67"}, "topicIds":["ml"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Hyperparameter Tuning", "scenario":"Scenario for Hyperparameter Tuning"}], "video":{"id":"HdlDYng8g9s", "title":"Hyperparameter Tuning Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Hyperparameter Tuning"}, "quiz":[{"q":"What is the focus of Hyperparameter Tuning?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m67", "zone":5, "icon":"🤖", "name":"Model Interpretability", "subtitle":"Deep dive into Model Interpretability", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Model Interpretability.", "xpReward":200, "pokemon":{"id":78, "name":"Pokemon68"}, "topicIds":["ml"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Model Interpretability", "scenario":"Scenario for Model Interpretability"}], "video":{"id":"OCYTLkQOV2E", "title":"Model Interpretability Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Model Interpretability"}, "quiz":[{"q":"What is the focus of Model Interpretability?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m68", "zone":2, "icon":"🧠", "name":"Sequence to Sequence Models", "subtitle":"Deep dive into Sequence to Sequence Models", "color":"var(--psychic)", "type":"psychic", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Sequence to Sequence Models.", "xpReward":200, "pokemon":{"id":79, "name":"Pokemon69"}, "topicIds":["dl"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Sequence to Sequence Models", "scenario":"Scenario for Sequence to Sequence Models"}], "video":{"id":"L8HKweZIOmg", "title":"Sequence to Sequence Models Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Sequence to Sequence Models"}, "quiz":[{"q":"What is the focus of Sequence to Sequence Models?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m69", "zone":3, "icon":"🧠", "name":"Attention Mechanisms", "subtitle":"Deep dive into Attention Mechanisms", "color":"var(--psychic)", "type":"psychic", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Attention Mechanisms.", "xpReward":200, "pokemon":{"id":80, "name":"Pokemon70"}, "topicIds":["dl"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Attention Mechanisms", "scenario":"Scenario for Attention Mechanisms"}], "video":{"id":"eMlx5fFNoYc", "title":"Attention Mechanisms Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Attention Mechanisms"}, "quiz":[{"q":"What is the focus of Attention Mechanisms?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m70", "zone":4, "icon":"🧠", "name":"Graph Neural Networks", "subtitle":"Deep dive into Graph Neural Networks", "color":"var(--psychic)", "type":"psychic", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Graph Neural Networks.", "xpReward":200, "pokemon":{"id":81, "name":"Pokemon71"}, "topicIds":["dl"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Graph Neural Networks", "scenario":"Scenario for Graph Neural Networks"}], "video":{"id":"zCEYiCxrL_0", "title":"Graph Neural Networks Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Graph Neural Networks"}, "quiz":[{"q":"What is the focus of Graph Neural Networks?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m71", "zone":5, "icon":"🧠", "name":"Deep Reinforcement Learning", "subtitle":"Deep dive into Deep Reinforcement Learning", "color":"var(--psychic)", "type":"psychic", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Deep Reinforcement Learning.", "xpReward":200, "pokemon":{"id":82, "name":"Pokemon72"}, "topicIds":["dl"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Deep Reinforcement Learning", "scenario":"Scenario for Deep Reinforcement Learning"}], "video":{"id":"cO5g5qLrLSo", "title":"Deep Reinforcement Learning Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Deep Reinforcement Learning"}, "quiz":[{"q":"What is the focus of Deep Reinforcement Learning?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m72", "zone":2, "icon":"📈", "name":"D3.js Fundamentals", "subtitle":"Deep dive into D3.js Fundamentals", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of D3.js Fundamentals.", "xpReward":200, "pokemon":{"id":83, "name":"Pokemon73"}, "topicIds":["viz"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master D3.js Fundamentals", "scenario":"Scenario for D3.js Fundamentals"}], "video":{"id":"C4t6qfHZ6Tw", "title":"D3.js Fundamentals Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for D3.js Fundamentals"}, "quiz":[{"q":"What is the focus of D3.js Fundamentals?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m73", "zone":3, "icon":"📈", "name":"Advanced Tableau", "subtitle":"Deep dive into Advanced Tableau", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Advanced Tableau.", "xpReward":200, "pokemon":{"id":84, "name":"Pokemon74"}, "topicIds":["viz"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Advanced Tableau", "scenario":"Scenario for Advanced Tableau"}], "video":{"id":"2923aoIUSvo", "title":"Advanced Tableau Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Advanced Tableau"}, "quiz":[{"q":"What is the focus of Advanced Tableau?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m74", "zone":4, "icon":"📈", "name":"Visual Perception", "subtitle":"Deep dive into Visual Perception", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Visual Perception.", "xpReward":200, "pokemon":{"id":85, "name":"Pokemon75"}, "topicIds":["viz"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Visual Perception", "scenario":"Scenario for Visual Perception"}], "video":{"id":"MgMNUne9j9c", "title":"Visual Perception Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Visual Perception"}, "quiz":[{"q":"What is the focus of Visual Perception?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m75", "zone":5, "icon":"📈", "name":"Animated Data Stories", "subtitle":"Deep dive into Animated Data Stories", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Animated Data Stories.", "xpReward":200, "pokemon":{"id":86, "name":"Pokemon76"}, "topicIds":["viz"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Animated Data Stories", "scenario":"Scenario for Animated Data Stories"}], "video":{"id":"BnquzIGVuKc", "title":"Animated Data Stories Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Animated Data Stories"}, "quiz":[{"q":"What is the focus of Animated Data Stories?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m76", "zone":2, "icon":"🗄️", "name":"PostgreSQL Advanced", "subtitle":"Deep dive into PostgreSQL Advanced", "color":"var(--steel)", "type":"steel", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of PostgreSQL Advanced.", "xpReward":200, "pokemon":{"id":87, "name":"Pokemon77"}, "topicIds":["sql"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master PostgreSQL Advanced", "scenario":"Scenario for PostgreSQL Advanced"}], "video":{"id":"yIaE9lONIVI", "title":"PostgreSQL Advanced Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for PostgreSQL Advanced"}, "quiz":[{"q":"What is the focus of PostgreSQL Advanced?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m77", "zone":3, "icon":"🗄️", "name":"Database Tuning", "subtitle":"Deep dive into Database Tuning", "color":"var(--steel)", "type":"steel", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Database Tuning.", "xpReward":200, "pokemon":{"id":88, "name":"Pokemon78"}, "topicIds":["sql"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Database Tuning", "scenario":"Scenario for Database Tuning"}], "video":{"id":"IVqvwNlwXuI", "title":"Database Tuning Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Database Tuning"}, "quiz":[{"q":"What is the focus of Database Tuning?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m78", "zone":4, "icon":"🗄️", "name":"Data Warehousing", "subtitle":"Deep dive into Data Warehousing", "color":"var(--steel)", "type":"steel", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Data Warehousing.", "xpReward":200, "pokemon":{"id":89, "name":"Pokemon79"}, "topicIds":["sql"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Data Warehousing", "scenario":"Scenario for Data Warehousing"}], "video":{"id":"HKcEyHF1U00", "title":"Data Warehousing Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Data Warehousing"}, "quiz":[{"q":"What is the focus of Data Warehousing?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m79", "zone":5, "icon":"🗄️", "name":"NoSQL Patterns", "subtitle":"Deep dive into NoSQL Patterns", "color":"var(--steel)", "type":"steel", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of NoSQL Patterns.", "xpReward":200, "pokemon":{"id":90, "name":"Pokemon80"}, "topicIds":["sql"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master NoSQL Patterns", "scenario":"Scenario for NoSQL Patterns"}], "video":{"id":"0buKQHokLK8", "title":"NoSQL Patterns Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for NoSQL Patterns"}, "quiz":[{"q":"What is the focus of NoSQL Patterns?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m80", "zone":2, "icon":"⚙️", "name":"Dimensionality Reduction", "subtitle":"Deep dive into Dimensionality Reduction", "color":"var(--ground)", "type":"ground", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Dimensionality Reduction.", "xpReward":200, "pokemon":{"id":91, "name":"Pokemon81"}, "topicIds":["feature"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Dimensionality Reduction", "scenario":"Scenario for Dimensionality Reduction"}], "video":{"id":"3uxOyk-SczU", "title":"Dimensionality Reduction Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Dimensionality Reduction"}, "quiz":[{"q":"What is the focus of Dimensionality Reduction?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m81", "zone":3, "icon":"⚙️", "name":"Automated Feature Eng", "subtitle":"Deep dive into Automated Feature Eng", "color":"var(--ground)", "type":"ground", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Automated Feature Eng.", "xpReward":200, "pokemon":{"id":92, "name":"Pokemon82"}, "topicIds":["feature"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Automated Feature Eng", "scenario":"Scenario for Automated Feature Eng"}], "video":{"id":"4jfmvMOuRD0", "title":"Automated Feature Eng Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Automated Feature Eng"}, "quiz":[{"q":"What is the focus of Automated Feature Eng?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m82", "zone":4, "icon":"⚙️", "name":"Handling Imbalanced Data", "subtitle":"Deep dive into Handling Imbalanced Data", "color":"var(--ground)", "type":"ground", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Handling Imbalanced Data.", "xpReward":200, "pokemon":{"id":93, "name":"Pokemon83"}, "topicIds":["feature"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Handling Imbalanced Data", "scenario":"Scenario for Handling Imbalanced Data"}], "video":{"id":"JnlM4yLFNuo", "title":"Handling Imbalanced Data Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Handling Imbalanced Data"}, "quiz":[{"q":"What is the focus of Handling Imbalanced Data?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m83", "zone":5, "icon":"⚙️", "name":"Time-Window Features", "subtitle":"Deep dive into Time-Window Features", "color":"var(--ground)", "type":"ground", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Time-Window Features.", "xpReward":200, "pokemon":{"id":94, "name":"Pokemon84"}, "topicIds":["feature"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Time-Window Features", "scenario":"Scenario for Time-Window Features"}], "video":{"id":"3xRWm1W1IM4", "title":"Time-Window Features Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Time-Window Features"}, "quiz":[{"q":"What is the focus of Time-Window Features?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m84", "zone":2, "icon":"💬", "name":"Topic Modeling", "subtitle":"Deep dive into Topic Modeling", "color":"var(--dragon)", "type":"dragon", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Topic Modeling.", "xpReward":200, "pokemon":{"id":95, "name":"Pokemon85"}, "topicIds":["nlp"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Topic Modeling", "scenario":"Scenario for Topic Modeling"}], "video":{"id":"v3SePt3fr9g", "title":"Topic Modeling Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Topic Modeling"}, "quiz":[{"q":"What is the focus of Topic Modeling?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m85", "zone":3, "icon":"💬", "name":"Word Embeddings Deep Dive", "subtitle":"Deep dive into Word Embeddings Deep Dive", "color":"var(--dragon)", "type":"dragon", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Word Embeddings Deep Dive.", "xpReward":200, "pokemon":{"id":96, "name":"Pokemon86"}, "topicIds":["nlp"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Word Embeddings Deep Dive", "scenario":"Scenario for Word Embeddings Deep Dive"}], "video":{"id":"viZrOnJclY0", "title":"Word Embeddings Deep Dive Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Word Embeddings Deep Dive"}, "quiz":[{"q":"What is the focus of Word Embeddings Deep Dive?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m86", "zone":4, "icon":"💬", "name":"Transformers from Scratch", "subtitle":"Deep dive into Transformers from Scratch", "color":"var(--dragon)", "type":"dragon", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Transformers from Scratch.", "xpReward":200, "pokemon":{"id":97, "name":"Pokemon87"}, "topicIds":["nlp"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Transformers from Scratch", "scenario":"Scenario for Transformers from Scratch"}], "video":{"id":"ISNdQcPhsts", "title":"Transformers from Scratch Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Transformers from Scratch"}, "quiz":[{"q":"What is the focus of Transformers from Scratch?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m87", "zone":5, "icon":"💬", "name":"Conversational AI", "subtitle":"Deep dive into Conversational AI", "color":"var(--dragon)", "type":"dragon", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Conversational AI.", "xpReward":200, "pokemon":{"id":98, "name":"Pokemon88"}, "topicIds":["nlp"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Conversational AI", "scenario":"Scenario for Conversational AI"}], "video":{"id":"pOUBt-S5dHY", "title":"Conversational AI Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Conversational AI"}, "quiz":[{"q":"What is the focus of Conversational AI?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m88", "zone":2, "icon":"📅", "name":"State Space Models", "subtitle":"Deep dive into State Space Models", "color":"var(--ice)", "type":"ice", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of State Space Models.", "xpReward":200, "pokemon":{"id":99, "name":"Pokemon89"}, "topicIds":["timeseries"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master State Space Models", "scenario":"Scenario for State Space Models"}], "video":{"id":"lXU5dr6Lmgo", "title":"State Space Models Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for State Space Models"}, "quiz":[{"q":"What is the focus of State Space Models?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m89", "zone":3, "icon":"📅", "name":"Vector Autoregression", "subtitle":"Deep dive into Vector Autoregression", "color":"var(--ice)", "type":"ice", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Vector Autoregression.", "xpReward":200, "pokemon":{"id":100, "name":"Pokemon90"}, "topicIds":["timeseries"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Vector Autoregression", "scenario":"Scenario for Vector Autoregression"}], "video":{"id":"0-FKPJ5KxSo", "title":"Vector Autoregression Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Vector Autoregression"}, "quiz":[{"q":"What is the focus of Vector Autoregression?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m90", "zone":4, "icon":"📅", "name":"Time Series Clustering", "subtitle":"Deep dive into Time Series Clustering", "color":"var(--ice)", "type":"ice", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Time Series Clustering.", "xpReward":200, "pokemon":{"id":101, "name":"Pokemon91"}, "topicIds":["timeseries"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Time Series Clustering", "scenario":"Scenario for Time Series Clustering"}], "video":{"id":"xwZy3L1M9Is", "title":"Time Series Clustering Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Time Series Clustering"}, "quiz":[{"q":"What is the focus of Time Series Clustering?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m91", "zone":5, "icon":"📅", "name":"High-Frequency Data", "subtitle":"Deep dive into High-Frequency Data", "color":"var(--ice)", "type":"ice", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of High-Frequency Data.", "xpReward":200, "pokemon":{"id":102, "name":"Pokemon92"}, "topicIds":["timeseries"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master High-Frequency Data", "scenario":"Scenario for High-Frequency Data"}], "video":{"id":"2u0VEf1WQZg", "title":"High-Frequency Data Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for High-Frequency Data"}, "quiz":[{"q":"What is the focus of High-Frequency Data?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m92", "zone":2, "icon":"☁️", "name":"AWS SageMaker", "subtitle":"Deep dive into AWS SageMaker", "color":"var(--flying)", "type":"flying", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of AWS SageMaker.", "xpReward":200, "pokemon":{"id":103, "name":"Pokemon93"}, "topicIds":["cloud"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master AWS SageMaker", "scenario":"Scenario for AWS SageMaker"}], "video":{"id":"Ld2oTLY47sA", "title":"AWS SageMaker Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for AWS SageMaker"}, "quiz":[{"q":"What is the focus of AWS SageMaker?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m93", "zone":3, "icon":"☁️", "name":"Kubernetes for ML", "subtitle":"Deep dive into Kubernetes for ML", "color":"var(--flying)", "type":"flying", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Kubernetes for ML.", "xpReward":200, "pokemon":{"id":104, "name":"Pokemon94"}, "topicIds":["cloud"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Kubernetes for ML", "scenario":"Scenario for Kubernetes for ML"}], "video":{"id":"DQRNt8Diyw4", "title":"Kubernetes for ML Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Kubernetes for ML"}, "quiz":[{"q":"What is the focus of Kubernetes for ML?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m94", "zone":4, "icon":"☁️", "name":"Serverless Architecture", "subtitle":"Deep dive into Serverless Architecture", "color":"var(--flying)", "type":"flying", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Serverless Architecture.", "xpReward":200, "pokemon":{"id":105, "name":"Pokemon95"}, "topicIds":["cloud"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Serverless Architecture", "scenario":"Scenario for Serverless Architecture"}], "video":{"id":"qtrxOIztKXs", "title":"Serverless Architecture Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Serverless Architecture"}, "quiz":[{"q":"What is the focus of Serverless Architecture?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m95", "zone":5, "icon":"☁️", "name":"Distributed Training", "subtitle":"Deep dive into Distributed Training", "color":"var(--flying)", "type":"flying", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Distributed Training.", "xpReward":200, "pokemon":{"id":106, "name":"Pokemon96"}, "topicIds":["cloud"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Distributed Training", "scenario":"Scenario for Distributed Training"}], "video":{"id":"toUSzwR0EV8", "title":"Distributed Training Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Distributed Training"}, "quiz":[{"q":"What is the focus of Distributed Training?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m96", "zone":2, "icon":"🌐", "name":"Advanced React Patterns", "subtitle":"Deep dive into Advanced React Patterns", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Advanced React Patterns.", "xpReward":200, "pokemon":{"id":107, "name":"Pokemon97"}, "topicIds":["webdev"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Advanced React Patterns", "scenario":"Scenario for Advanced React Patterns"}], "video":{"id":"9Vuz4BbPkXc", "title":"Advanced React Patterns Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Advanced React Patterns"}, "quiz":[{"q":"What is the focus of Advanced React Patterns?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m97", "zone":3, "icon":"🌐", "name":"Web Performance", "subtitle":"Deep dive into Web Performance", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Web Performance.", "xpReward":200, "pokemon":{"id":108, "name":"Pokemon98"}, "topicIds":["webdev"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Web Performance", "scenario":"Scenario for Web Performance"}], "video":{"id":"0fONene3OIA", "title":"Web Performance Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Web Performance"}, "quiz":[{"q":"What is the focus of Web Performance?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m98", "zone":4, "icon":"🌐", "name":"GraphQL APIs", "subtitle":"Deep dive into GraphQL APIs", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of GraphQL APIs.", "xpReward":200, "pokemon":{"id":109, "name":"Pokemon99"}, "topicIds":["webdev"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master GraphQL APIs", "scenario":"Scenario for GraphQL APIs"}], "video":{"id":"Zg4XIpnLWQg", "title":"GraphQL APIs Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for GraphQL APIs"}, "quiz":[{"q":"What is the focus of GraphQL APIs?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m99", "zone":5, "icon":"🌐", "name":"WebAssembly Basics", "subtitle":"Deep dive into WebAssembly Basics", "color":"var(--water)", "type":"water", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of WebAssembly Basics.", "xpReward":200, "pokemon":{"id":10, "name":"Pokemon100"}, "topicIds":["webdev"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master WebAssembly Basics", "scenario":"Scenario for WebAssembly Basics"}], "video":{"id":"cbB3QEwWMlA", "title":"WebAssembly Basics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for WebAssembly Basics"}, "quiz":[{"q":"What is the focus of WebAssembly Basics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m100", "zone":2, "icon":"🛡️", "name":"Malware Analysis", "subtitle":"Deep dive into Malware Analysis", "color":"var(--electric)", "type":"electric", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Malware Analysis.", "xpReward":200, "pokemon":{"id":11, "name":"Pokemon101"}, "topicIds":["cyber"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Malware Analysis", "scenario":"Scenario for Malware Analysis"}], "video":{"id":"qA0YcYMRWyI", "title":"Malware Analysis Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Malware Analysis"}, "quiz":[{"q":"What is the focus of Malware Analysis?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m101", "zone":3, "icon":"🛡️", "name":"Cloud Security", "subtitle":"Deep dive into Cloud Security", "color":"var(--electric)", "type":"electric", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Cloud Security.", "xpReward":200, "pokemon":{"id":12, "name":"Pokemon102"}, "topicIds":["cyber"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Cloud Security", "scenario":"Scenario for Cloud Security"}], "video":{"id":"gblkOr7phK8", "title":"Cloud Security Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Cloud Security"}, "quiz":[{"q":"What is the focus of Cloud Security?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m102", "zone":4, "icon":"🛡️", "name":"Cryptography Implementation", "subtitle":"Deep dive into Cryptography Implementation", "color":"var(--electric)", "type":"electric", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Cryptography Implementation.", "xpReward":200, "pokemon":{"id":13, "name":"Pokemon103"}, "topicIds":["cyber"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Cryptography Implementation", "scenario":"Scenario for Cryptography Implementation"}], "video":{"id":"Nyf0d2rZQV0", "title":"Cryptography Implementation Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Cryptography Implementation"}, "quiz":[{"q":"What is the focus of Cryptography Implementation?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m103", "zone":5, "icon":"🛡️", "name":"Zero Trust Architecture", "subtitle":"Deep dive into Zero Trust Architecture", "color":"var(--electric)", "type":"electric", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Zero Trust Architecture.", "xpReward":200, "pokemon":{"id":14, "name":"Pokemon104"}, "topicIds":["cyber"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Zero Trust Architecture", "scenario":"Scenario for Zero Trust Architecture"}], "video":{"id":"Y3DjoTiOiOU", "title":"Zero Trust Architecture Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Zero Trust Architecture"}, "quiz":[{"q":"What is the focus of Zero Trust Architecture?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m104", "zone":2, "icon":"💰", "name":"Algorithmic Trading Strategies", "subtitle":"Deep dive into Algorithmic Trading Strategies", "color":"var(--dark)", "type":"dark", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Algorithmic Trading Strategies.", "xpReward":200, "pokemon":{"id":15, "name":"Pokemon105"}, "topicIds":["finance"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Algorithmic Trading Strategies", "scenario":"Scenario for Algorithmic Trading Strategies"}], "video":{"id":"1l7xWU-BU3w", "title":"Algorithmic Trading Strategies Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Algorithmic Trading Strategies"}, "quiz":[{"q":"What is the focus of Algorithmic Trading Strategies?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m105", "zone":3, "icon":"💰", "name":"Stochastic Calculus", "subtitle":"Deep dive into Stochastic Calculus", "color":"var(--dark)", "type":"dark", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Stochastic Calculus.", "xpReward":200, "pokemon":{"id":16, "name":"Pokemon106"}, "topicIds":["finance"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Stochastic Calculus", "scenario":"Scenario for Stochastic Calculus"}], "video":{"id":"Devm4ElEhGc", "title":"Stochastic Calculus Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Stochastic Calculus"}, "quiz":[{"q":"What is the focus of Stochastic Calculus?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m106", "zone":4, "icon":"💰", "name":"Credit Risk Modeling", "subtitle":"Deep dive into Credit Risk Modeling", "color":"var(--dark)", "type":"dark", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Credit Risk Modeling.", "xpReward":200, "pokemon":{"id":17, "name":"Pokemon107"}, "topicIds":["finance"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Credit Risk Modeling", "scenario":"Scenario for Credit Risk Modeling"}], "video":{"id":"-tFdnVQJkQY", "title":"Credit Risk Modeling Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Credit Risk Modeling"}, "quiz":[{"q":"What is the focus of Credit Risk Modeling?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m107", "zone":5, "icon":"💰", "name":"Blockchain Fundamentals", "subtitle":"Deep dive into Blockchain Fundamentals", "color":"var(--dark)", "type":"dark", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Blockchain Fundamentals.", "xpReward":200, "pokemon":{"id":18, "name":"Pokemon108"}, "topicIds":["finance"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Blockchain Fundamentals", "scenario":"Scenario for Blockchain Fundamentals"}], "video":{"id":"yubzJw0uiE4", "title":"Blockchain Fundamentals Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Blockchain Fundamentals"}, "quiz":[{"q":"What is the focus of Blockchain Fundamentals?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m108", "zone":2, "icon":"⚕️", "name":"Genomics Data Analysis", "subtitle":"Deep dive into Genomics Data Analysis", "color":"var(--poison)", "type":"poison", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Genomics Data Analysis.", "xpReward":200, "pokemon":{"id":19, "name":"Pokemon109"}, "topicIds":["health"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Genomics Data Analysis", "scenario":"Scenario for Genomics Data Analysis"}], "video":{"id":"DJK-cnCvea0", "title":"Genomics Data Analysis Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Genomics Data Analysis"}, "quiz":[{"q":"What is the focus of Genomics Data Analysis?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m109", "zone":3, "icon":"⚕️", "name":"Medical Image Segmentation", "subtitle":"Deep dive into Medical Image Segmentation", "color":"var(--poison)", "type":"poison", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Medical Image Segmentation.", "xpReward":200, "pokemon":{"id":20, "name":"Pokemon110"}, "topicIds":["health"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Medical Image Segmentation", "scenario":"Scenario for Medical Image Segmentation"}], "video":{"id":"u15J73q9Is0", "title":"Medical Image Segmentation Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Medical Image Segmentation"}, "quiz":[{"q":"What is the focus of Medical Image Segmentation?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m110", "zone":4, "icon":"⚕️", "name":"EHR Interoperability", "subtitle":"Deep dive into EHR Interoperability", "color":"var(--poison)", "type":"poison", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of EHR Interoperability.", "xpReward":200, "pokemon":{"id":21, "name":"Pokemon111"}, "topicIds":["health"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master EHR Interoperability", "scenario":"Scenario for EHR Interoperability"}], "video":{"id":"LT26IwPmrh0", "title":"EHR Interoperability Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for EHR Interoperability"}, "quiz":[{"q":"What is the focus of EHR Interoperability?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m111", "zone":5, "icon":"⚕️", "name":"Epidemiological Modeling", "subtitle":"Deep dive into Epidemiological Modeling", "color":"var(--poison)", "type":"poison", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Epidemiological Modeling.", "xpReward":200, "pokemon":{"id":22, "name":"Pokemon112"}, "topicIds":["health"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Epidemiological Modeling", "scenario":"Scenario for Epidemiological Modeling"}], "video":{"id":"u5HCFvI-wRk", "title":"Epidemiological Modeling Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Epidemiological Modeling"}, "quiz":[{"q":"What is the focus of Epidemiological Modeling?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m112", "zone":2, "icon":"🎓", "name":"Adaptive Learning Algorithms", "subtitle":"Deep dive into Adaptive Learning Algorithms", "color":"var(--normal)", "type":"normal", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Adaptive Learning Algorithms.", "xpReward":200, "pokemon":{"id":23, "name":"Pokemon113"}, "topicIds":["edu"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Adaptive Learning Algorithms", "scenario":"Scenario for Adaptive Learning Algorithms"}], "video":{"id":"E0Hmnixke2g", "title":"Adaptive Learning Algorithms Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Adaptive Learning Algorithms"}, "quiz":[{"q":"What is the focus of Adaptive Learning Algorithms?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m113", "zone":3, "icon":"🎓", "name":"Gamification in Edu", "subtitle":"Deep dive into Gamification in Edu", "color":"var(--normal)", "type":"normal", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Gamification in Edu.", "xpReward":200, "pokemon":{"id":24, "name":"Pokemon114"}, "topicIds":["edu"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Gamification in Edu", "scenario":"Scenario for Gamification in Edu"}], "video":{"id":"1CZtIIy7tRU", "title":"Gamification in Edu Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Gamification in Edu"}, "quiz":[{"q":"What is the focus of Gamification in Edu?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m114", "zone":4, "icon":"🎓", "name":"Knowledge Tracing", "subtitle":"Deep dive into Knowledge Tracing", "color":"var(--normal)", "type":"normal", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Knowledge Tracing.", "xpReward":200, "pokemon":{"id":25, "name":"Pokemon115"}, "topicIds":["edu"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Knowledge Tracing", "scenario":"Scenario for Knowledge Tracing"}], "video":{"id":"lIn1f4YHp0Q", "title":"Knowledge Tracing Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Knowledge Tracing"}, "quiz":[{"q":"What is the focus of Knowledge Tracing?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m115", "zone":5, "icon":"🎓", "name":"EdTech Analytics", "subtitle":"Deep dive into EdTech Analytics", "color":"var(--normal)", "type":"normal", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of EdTech Analytics.", "xpReward":200, "pokemon":{"id":26, "name":"Pokemon116"}, "topicIds":["edu"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master EdTech Analytics", "scenario":"Scenario for EdTech Analytics"}], "video":{"id":"p_tUnN-KKM8", "title":"EdTech Analytics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for EdTech Analytics"}, "quiz":[{"q":"What is the focus of EdTech Analytics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m116", "zone":2, "icon":"🛒", "name":"Inventory Optimization", "subtitle":"Deep dive into Inventory Optimization", "color":"var(--bug)", "type":"bug", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Inventory Optimization.", "xpReward":200, "pokemon":{"id":27, "name":"Pokemon117"}, "topicIds":["retail"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Inventory Optimization", "scenario":"Scenario for Inventory Optimization"}], "video":{"id":"o_8UG5UHlRI", "title":"Inventory Optimization Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Inventory Optimization"}, "quiz":[{"q":"What is the focus of Inventory Optimization?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m117", "zone":3, "icon":"🛒", "name":"Pricing Algorithms", "subtitle":"Deep dive into Pricing Algorithms", "color":"var(--bug)", "type":"bug", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Pricing Algorithms.", "xpReward":200, "pokemon":{"id":28, "name":"Pokemon118"}, "topicIds":["retail"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Pricing Algorithms", "scenario":"Scenario for Pricing Algorithms"}], "video":{"id":"CWHd32rzAnI", "title":"Pricing Algorithms Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Pricing Algorithms"}, "quiz":[{"q":"What is the focus of Pricing Algorithms?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m118", "zone":4, "icon":"🛒", "name":"Market Basket Analysis Deep Dive", "subtitle":"Deep dive into Market Basket Analysis Deep Dive", "color":"var(--bug)", "type":"bug", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Market Basket Analysis Deep Dive.", "xpReward":200, "pokemon":{"id":29, "name":"Pokemon119"}, "topicIds":["retail"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Market Basket Analysis Deep Dive", "scenario":"Scenario for Market Basket Analysis Deep Dive"}], "video":{"id":"WIlLZnYUzcw", "title":"Market Basket Analysis Deep Dive Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Market Basket Analysis Deep Dive"}, "quiz":[{"q":"What is the focus of Market Basket Analysis Deep Dive?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m119", "zone":5, "icon":"🛒", "name":"Supply Chain Analytics", "subtitle":"Deep dive into Supply Chain Analytics", "color":"var(--bug)", "type":"bug", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Supply Chain Analytics.", "xpReward":200, "pokemon":{"id":30, "name":"Pokemon120"}, "topicIds":["retail"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Supply Chain Analytics", "scenario":"Scenario for Supply Chain Analytics"}], "video":{"id":"KdU9xBqsFWc", "title":"Supply Chain Analytics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Supply Chain Analytics"}, "quiz":[{"q":"What is the focus of Supply Chain Analytics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m120", "zone":2, "icon":"💼", "name":"Advanced Market Sizing", "subtitle":"Deep dive into Advanced Market Sizing", "color":"var(--fighting)", "type":"fighting", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Advanced Market Sizing.", "xpReward":200, "pokemon":{"id":31, "name":"Pokemon121"}, "topicIds":["consulting"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Advanced Market Sizing", "scenario":"Scenario for Advanced Market Sizing"}], "video":{"id":"MWndKXMJ6Xo", "title":"Advanced Market Sizing Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Advanced Market Sizing"}, "quiz":[{"q":"What is the focus of Advanced Market Sizing?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m121", "zone":3, "icon":"💼", "name":"M&A Strategy", "subtitle":"Deep dive into M&A Strategy", "color":"var(--fighting)", "type":"fighting", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of M&A Strategy.", "xpReward":200, "pokemon":{"id":32, "name":"Pokemon122"}, "topicIds":["consulting"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master M&A Strategy", "scenario":"Scenario for M&A Strategy"}], "video":{"id":"J1GpLqugFeM", "title":"M&A Strategy Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for M&A Strategy"}, "quiz":[{"q":"What is the focus of M&A Strategy?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m122", "zone":4, "icon":"💼", "name":"Change Management", "subtitle":"Deep dive into Change Management", "color":"var(--fighting)", "type":"fighting", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Change Management.", "xpReward":200, "pokemon":{"id":33, "name":"Pokemon123"}, "topicIds":["consulting"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Change Management", "scenario":"Scenario for Change Management"}], "video":{"id":"P78h3OCqmac", "title":"Change Management Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Change Management"}, "quiz":[{"q":"What is the focus of Change Management?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m123", "zone":5, "icon":"💼", "name":"Digital Transformation", "subtitle":"Deep dive into Digital Transformation", "color":"var(--fighting)", "type":"fighting", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Digital Transformation.", "xpReward":200, "pokemon":{"id":34, "name":"Pokemon124"}, "topicIds":["consulting"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Digital Transformation", "scenario":"Scenario for Digital Transformation"}], "video":{"id":"GjdGqf_3oSs", "title":"Digital Transformation Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Digital Transformation"}, "quiz":[{"q":"What is the focus of Digital Transformation?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m124", "zone":2, "icon":"🏛️", "name":"Cost-Benefit Analysis Advanced", "subtitle":"Deep dive into Cost-Benefit Analysis Advanced", "color":"var(--rock)", "type":"rock", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Cost-Benefit Analysis Advanced.", "xpReward":200, "pokemon":{"id":35, "name":"Pokemon125"}, "topicIds":["gov"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Cost-Benefit Analysis Advanced", "scenario":"Scenario for Cost-Benefit Analysis Advanced"}], "video":{"id":"k2e2TNSTurs", "title":"Cost-Benefit Analysis Advanced Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Cost-Benefit Analysis Advanced"}, "quiz":[{"q":"What is the focus of Cost-Benefit Analysis Advanced?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m125", "zone":3, "icon":"🏛️", "name":"Public Policy Forecasting", "subtitle":"Deep dive into Public Policy Forecasting", "color":"var(--rock)", "type":"rock", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Public Policy Forecasting.", "xpReward":200, "pokemon":{"id":36, "name":"Pokemon126"}, "topicIds":["gov"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Public Policy Forecasting", "scenario":"Scenario for Public Policy Forecasting"}], "video":{"id":"8PD96AA2Y6g", "title":"Public Policy Forecasting Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Public Policy Forecasting"}, "quiz":[{"q":"What is the focus of Public Policy Forecasting?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m126", "zone":4, "icon":"🏛️", "name":"Urban Data Science", "subtitle":"Deep dive into Urban Data Science", "color":"var(--rock)", "type":"rock", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Urban Data Science.", "xpReward":200, "pokemon":{"id":37, "name":"Pokemon127"}, "topicIds":["gov"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Urban Data Science", "scenario":"Scenario for Urban Data Science"}], "video":{"id":"mUi0ZYO_Ans", "title":"Urban Data Science Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Urban Data Science"}, "quiz":[{"q":"What is the focus of Urban Data Science?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m127", "zone":5, "icon":"🏛️", "name":"Ethics in Tech Policy", "subtitle":"Deep dive into Ethics in Tech Policy", "color":"var(--rock)", "type":"rock", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Ethics in Tech Policy.", "xpReward":200, "pokemon":{"id":38, "name":"Pokemon128"}, "topicIds":["gov"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Ethics in Tech Policy", "scenario":"Scenario for Ethics in Tech Policy"}], "video":{"id":"iiAirfn-lBI", "title":"Ethics in Tech Policy Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Ethics in Tech Policy"}, "quiz":[{"q":"What is the focus of Ethics in Tech Policy?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m128", "zone":2, "icon":"🤝", "name":"Impact Investing", "subtitle":"Deep dive into Impact Investing", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Impact Investing.", "xpReward":200, "pokemon":{"id":39, "name":"Pokemon129"}, "topicIds":["nonprofit"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Impact Investing", "scenario":"Scenario for Impact Investing"}], "video":{"id":"iRzTaHCDXfY", "title":"Impact Investing Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Impact Investing"}, "quiz":[{"q":"What is the focus of Impact Investing?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m129", "zone":3, "icon":"🤝", "name":"Donor Retention Analytics", "subtitle":"Deep dive into Donor Retention Analytics", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Donor Retention Analytics.", "xpReward":200, "pokemon":{"id":40, "name":"Pokemon130"}, "topicIds":["nonprofit"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Donor Retention Analytics", "scenario":"Scenario for Donor Retention Analytics"}], "video":{"id":"DhECm2BpyF8", "title":"Donor Retention Analytics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Donor Retention Analytics"}, "quiz":[{"q":"What is the focus of Donor Retention Analytics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m130", "zone":4, "icon":"🤝", "name":"Grant Writing Analytics", "subtitle":"Deep dive into Grant Writing Analytics", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Grant Writing Analytics.", "xpReward":200, "pokemon":{"id":41, "name":"Pokemon131"}, "topicIds":["nonprofit"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Grant Writing Analytics", "scenario":"Scenario for Grant Writing Analytics"}], "video":{"id":"xPuetyezRz4", "title":"Grant Writing Analytics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Grant Writing Analytics"}, "quiz":[{"q":"What is the focus of Grant Writing Analytics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m131", "zone":5, "icon":"🤝", "name":"Community Driven Data", "subtitle":"Deep dive into Community Driven Data", "color":"var(--fairy)", "type":"fairy", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Community Driven Data.", "xpReward":200, "pokemon":{"id":42, "name":"Pokemon132"}, "topicIds":["nonprofit"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Community Driven Data", "scenario":"Scenario for Community Driven Data"}], "video":{"id":"Vywt_-D5Kek", "title":"Community Driven Data Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Community Driven Data"}, "quiz":[{"q":"What is the focus of Community Driven Data?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m132", "zone":2, "icon":"📱", "name":"Marketing Mix Modeling Deep Dive", "subtitle":"Deep dive into Marketing Mix Modeling Deep Dive", "color":"var(--ghost)", "type":"ghost", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Marketing Mix Modeling Deep Dive.", "xpReward":200, "pokemon":{"id":43, "name":"Pokemon133"}, "topicIds":["media"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Marketing Mix Modeling Deep Dive", "scenario":"Scenario for Marketing Mix Modeling Deep Dive"}], "video":{"id":"LIQbP8Gv6cQ", "title":"Marketing Mix Modeling Deep Dive Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Marketing Mix Modeling Deep Dive"}, "quiz":[{"q":"What is the focus of Marketing Mix Modeling Deep Dive?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m133", "zone":3, "icon":"📱", "name":"Social Network Analysis", "subtitle":"Deep dive into Social Network Analysis", "color":"var(--ghost)", "type":"ghost", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Social Network Analysis.", "xpReward":200, "pokemon":{"id":44, "name":"Pokemon134"}, "topicIds":["media"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Social Network Analysis", "scenario":"Scenario for Social Network Analysis"}], "video":{"id":"AVLMsNNVIgI", "title":"Social Network Analysis Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Social Network Analysis"}, "quiz":[{"q":"What is the focus of Social Network Analysis?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m134", "zone":4, "icon":"📱", "name":"Programmatic Advertising", "subtitle":"Deep dive into Programmatic Advertising", "color":"var(--ghost)", "type":"ghost", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Programmatic Advertising.", "xpReward":200, "pokemon":{"id":45, "name":"Pokemon135"}, "topicIds":["media"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Programmatic Advertising", "scenario":"Scenario for Programmatic Advertising"}], "video":{"id":"2WHdPMp8wzQ", "title":"Programmatic Advertising Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Programmatic Advertising"}, "quiz":[{"q":"What is the focus of Programmatic Advertising?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]},
  {"id":"m135", "zone":5, "icon":"📱", "name":"Customer Journey Analytics", "subtitle":"Deep dive into Customer Journey Analytics", "color":"var(--ghost)", "type":"ghost", "tags":["Advanced", "Specialized", "20 min"], "desc":"Advanced concepts and practical applications of Customer Journey Analytics.", "xpReward":200, "pokemon":{"id":46, "name":"Pokemon136"}, "topicIds":["media"], "sections":[{"id":"s1", "title":"Advanced Concepts", "concepts":[{"title":"Key Principles", "icon":"📌", "body":"Master Customer Journey Analytics", "scenario":"Scenario for Customer Journey Analytics"}], "video":{"id":"QaNJ5Qff94s", "title":"Customer Journey Analytics Lecture", "channel":"EduChannel", "duration":"20 min", "transcript":"Transcript for Customer Journey Analytics"}, "quiz":[{"q":"What is the focus of Customer Journey Analytics?", "opts":["A", "B", "C", "D"], "correct":1, "explain":"Correct answer."}]}]}

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

/**
 * Return only modules whose topicIds overlap with the user's selected topics.
 * This ensures a "Public Policy" user sees only Public Policy modules, etc.
 * @param {string[]} selectedTopics – array of topic IDs the user chose
 * @returns {Array} filtered modules
 */
export const getModulesForTopics = (selectedTopics = []) => {
  if (!selectedTopics || selectedTopics.length === 0) return MODULES;
  return MODULES.filter(m =>
    m.topicIds.some(t => selectedTopics.includes(t))
  );
};
