/**
 * Topic-based pre-test questions.
 * Each topic ID maps to 3 questions that assess the user's knowledge in that area.
 * getAssessQs(selectedTopics) returns only the questions for the topics the user selected.
 */

const TOPIC_QS = {
  /* ── Statistics ── */
  stats: [
    { q: 'What does a p-value of 0.03 mean?', opts: ['3 % chance null is true', '3 % chance of this data if null is true', 'Effect size is 3 %', '97 % power'], correct: 1 },
    { q: 'Which central-tendency measure is most resistant to outliers?', opts: ['Mean', 'Mode', 'Median', 'Standard Deviation'], correct: 2 },
    { q: 'A 95 % confidence interval that excludes zero means:', opts: ['Insignificant result', 'Statistically significant', 'Needs more data', 'Random coincidence'], correct: 1 },

    { q: "What is the median of [2,5,7,8,12]?", opts: ["5","7","8","6.8"], correct: 1 },
    { q: "Standard deviation measures:", opts: ["Central tendency","Spread of data around the mean","Correlation","Sample size"], correct: 1 },
    { q: "Type I error means:", opts: ["Failing to reject a false null","Rejecting a true null hypothesis","Correct decision","Insufficient data"], correct: 1 },
    { q: "Which test compares means of two independent groups?", opts: ["Chi-squared","ANOVA","Independent t-test","Regression"], correct: 2 },
    { q: "A positively skewed distribution has:", opts: ["Tail on the left","Tail on the right","No tail","Equal tails"], correct: 1 },
    { q: "What does R² measure?", opts: ["Correlation direction","Proportion of variance explained by the model","Sample size needed","P-value threshold"], correct: 1 },
    { q: "Bayes theorem relates:", opts: ["Mean and median","Prior and posterior probabilities","Variance and standard deviation","Sample and population"], correct: 1 }
  ],

  /* ── Python ── */
  python: [
    { q: 'Which Python library is primarily used for data manipulation?', opts: ['NumPy', 'Matplotlib', 'Pandas', 'Scikit-learn'], correct: 2 },
    { q: 'What does df.shape return in Pandas?', opts: ['Column names', '(rows, columns) tuple', 'Data types', 'Memory usage'], correct: 1 },
    { q: 'Which method counts null values per column?', opts: ['df.count()', 'df.isnull().sum()', 'df.missing()', 'df.null_count()'], correct: 1 },

    { q: "How do you create a list in Python?", opts: ["{}","()","[]","<>"], correct: 2 },
    { q: "What does len() return?", opts: ["Data type","Number of items","Maximum value","Memory size"], correct: 1 },
    { q: "Which keyword defines a function?", opts: ["func","function","def","define"], correct: 2 },
    { q: "df.head() shows:", opts: ["Last 5 rows","First 5 rows","Column types","Summary stats"], correct: 1 },
    { q: "How do you handle exceptions?", opts: ["if/else","try/except","switch/case","for/while"], correct: 1 },
    { q: "List comprehension syntax is:", opts: ["[x for x in list]","(x for x in list)","{x for x in list}","<x for x in list>"], correct: 0 },
    { q: "What does pip install do?", opts: ["Runs a script","Installs a Python package","Creates a file","Compiles code"], correct: 1 }
  ],

  /* ── Machine Learning ── */
  ml: [
    { q: 'What is overfitting?', opts: ['Model too simple', 'Good on training, poor on new data', 'Training takes too long', 'Accuracy above 100 %'], correct: 1 },
    { q: 'L1 (Lasso) regularization uniquely:', opts: ['Shrinks all weights equally', 'Drives some weights to exactly zero', 'Increases learning rate', 'Adds neurons'], correct: 1 },
    { q: 'In 5-fold cross-validation, how many times is the model trained?', opts: ['1', '3', '5', '10'], correct: 2 },

    { q: "Supervised learning requires:", opts: ["No data","Labeled training data","Only images","Unlabeled data"], correct: 1 },
    { q: "K-means is a type of:", opts: ["Supervised learning","Unsupervised clustering","Reinforcement learning","Deep learning"], correct: 1 },
    { q: "Random Forest is an ensemble of:", opts: ["Neural networks","Decision trees","SVMs","Linear models"], correct: 1 },
    { q: "Feature scaling is important for:", opts: ["Decision trees","Distance-based algorithms like KNN","All algorithms equally","Text data only"], correct: 1 },
    { q: "Precision measures:", opts: ["All correct predictions","True positives out of predicted positives","True positives out of actual positives","False positive rate"], correct: 1 },
    { q: "Recall measures:", opts: ["True positives out of predicted positives","True positives out of actual positives","Overall accuracy","F1 score"], correct: 1 },
    { q: "A confusion matrix shows:", opts: ["Feature importance","True/false positives and negatives","Training loss","Learning rate"], correct: 1 }
  ],

  /* ── Deep Learning ── */
  dl: [
    { q: 'Why do neural networks need non-linear activation functions?', opts: ['Speed up training', 'Learn complex non-linear patterns', 'Reduce parameters', 'Prevent overfitting'], correct: 1 },
    { q: 'ReLU is defined as:', opts: ['1/(1+e^-x)', 'max(0,x)', 'tanh(x)', 'x² when x>0'], correct: 1 },
    { q: 'Backpropagation uses which mathematical tool?', opts: ['Integration', 'The Chain Rule', 'Fourier transforms', 'Matrix decomposition'], correct: 1 },

    { q: "A convolutional layer is best for:", opts: ["Tabular data","Image and spatial data","Time series only","Text only"], correct: 1 },
    { q: "Dropout is used to:", opts: ["Speed up training","Prevent overfitting by randomly deactivating neurons","Add more layers","Increase accuracy always"], correct: 1 },
    { q: "An epoch is:", opts: ["A single data point","One complete pass through the training data","A type of layer","A loss function"], correct: 1 },
    { q: "Transfer learning means:", opts: ["Moving data between servers","Using a pre-trained model as a starting point for a new task","Copying code","Training from scratch"], correct: 1 },
    { q: "Vanishing gradient problem affects:", opts: ["Shallow networks","Deep networks with certain activation functions","Only CNNs","Only RNNs"], correct: 1 },
    { q: "A GAN consists of:", opts: ["One network","A generator and discriminator","Three networks","No networks"], correct: 1 },
    { q: "Batch normalization helps by:", opts: ["Removing data","Normalizing layer inputs to stabilize and speed up training","Adding more parameters","Reducing layers"], correct: 1 }
  ],

  /* ── Data Visualization ── */
  viz: [
    { q: 'Which chart best shows distribution of a continuous variable?', opts: ['Pie chart', 'Bar chart', 'Histogram', 'Scatter plot'], correct: 2 },
    { q: 'A high data-ink ratio means:', opts: ['The chart uses many colors', 'Most ink directly represents data', 'File size is large', 'Many annotations'], correct: 1 },
    { q: 'A diverging color palette is best for:', opts: ['Categorical groups', 'Data with a meaningful midpoint', 'Sequential continuous data', 'Binary true/false data'], correct: 1 },

    { q: "A scatter plot shows:", opts: ["Categories","Relationship between two continuous variables","Time series","Proportions"], correct: 1 },
    { q: "Pie charts are best for:", opts: ["Trends over time","Showing parts of a whole (few categories)","Correlations","Distributions"], correct: 1 },
    { q: "Color-blind-safe palettes are important because:", opts: ["They look prettier","~8% of men have color vision deficiency","They use less ink","They print faster"], correct: 1 },
    { q: "A box plot shows:", opts: ["Mean only","Median, quartiles, and outliers","Pie slices","Bar heights"], correct: 1 },
    { q: "Overplotting in scatter plots can be solved by:", opts: ["Adding more data","Using transparency (alpha) or jittering","Removing data","Using 3D"], correct: 1 },
    { q: "A heatmap is good for:", opts: ["Time series","Showing magnitude across two categorical dimensions","Pie charts","Line graphs"], correct: 1 },
    { q: "Dashboard design should prioritize:", opts: ["Maximum decorations","Clear hierarchy and actionable insights","As many charts as possible","Complex animations"], correct: 1 }
  ],

  /* ── SQL & Databases ── */
  sql: [
    { q: 'Which SQL clause filters rows before aggregation?', opts: ['HAVING', 'WHERE', 'GROUP BY', 'ORDER BY'], correct: 1 },
    { q: 'A JOIN that returns only matching rows from both tables is a:', opts: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'CROSS JOIN'], correct: 2 },
    { q: 'What does the HAVING clause do?', opts: ['Sorts results', 'Filters groups after aggregation', 'Joins tables', 'Creates indexes'], correct: 1 },

    { q: "SELECT DISTINCT removes:", opts: ["All rows","Duplicate rows from results","NULL values","Columns"], correct: 1 },
    { q: "COUNT(*) returns:", opts: ["Sum of values","Number of rows","Average","Maximum"], correct: 1 },
    { q: "A PRIMARY KEY must be:", opts: ["Nullable","Unique and not null","Always numeric","Auto-generated"], correct: 1 },
    { q: "LEFT JOIN returns:", opts: ["Only matching rows","All left table rows plus matching right rows","All right table rows","Random rows"], correct: 1 },
    { q: "An INDEX improves:", opts: ["Data accuracy","Query performance for lookups","Storage space","Data integrity"], correct: 1 },
    { q: "GROUP BY is used with:", opts: ["WHERE only","Aggregate functions like COUNT, SUM, AVG","JOIN only","ORDER BY only"], correct: 1 },
    { q: "A subquery is:", opts: ["A backup query","A query nested inside another query","A delete operation","A table rename"], correct: 1 }
  ],

  /* ── Feature Engineering ── */
  feature: [
    { q: 'Feature engineering means:', opts: ['Building software features', 'Creating/transforming variables to improve models', 'Repairing broken data', 'Writing pipelines'], correct: 1 },
    { q: 'One-hot encoding is used for:', opts: ['Numerical features', 'Categorical features', 'Time-series features', 'Image features'], correct: 1 },
    { q: 'Why normalize features before training?', opts: ['To make data look better', 'So all features contribute equally to the model', 'To reduce data size', 'To remove outliers'], correct: 1 },

    { q: "Label encoding assigns:", opts: ["Random values","Numeric values to categorical labels","Colors to data","Weights to features"], correct: 1 },
    { q: "Polynomial features create:", opts: ["New rows","Interaction and power terms from existing features","New tables","New databases"], correct: 1 },
    { q: "Binning converts:", opts: ["Categories to numbers","Continuous values into discrete intervals","Text to numbers","Images to text"], correct: 1 },
    { q: "Log transformation helps with:", opts: ["All data","Right-skewed distributions","Left-skewed data","Categorical data"], correct: 1 },
    { q: "Target encoding uses:", opts: ["Random numbers","The mean of the target variable for each category","Column names","Row indices"], correct: 1 },
    { q: "Feature selection reduces:", opts: ["Training data size","The number of input variables to improve model performance","Accuracy always","Bias always"], correct: 1 },
    { q: "Imputation replaces:", opts: ["Good data","Missing values with estimated values","Outliers","Duplicates"], correct: 1 }
  ],

  /* ── NLP ── */
  nlp: [
    { q: 'What does tokenization do in NLP?', opts: ['Translates text', 'Splits text into individual units (tokens)', 'Summarizes text', 'Classifies text sentiment'], correct: 1 },
    { q: 'TF-IDF measures:', opts: ['Sentence length', 'Word importance relative to a corpus', 'Grammar correctness', 'Reading level'], correct: 1 },
    { q: 'A transformer model relies primarily on:', opts: ['Recurrence', 'Convolution', 'Self-attention mechanism', 'Decision trees'], correct: 2 },

    { q: "Stop words are:", opts: ["Important keywords","Common words (the, is, a) often filtered out","Error messages","Code comments"], correct: 1 },
    { q: "Stemming reduces words to:", opts: ["Full sentences","Their root form (e.g., running → run)","Numbers","Embeddings"], correct: 1 },
    { q: "Word embeddings represent words as:", opts: ["Strings","Dense numerical vectors capturing semantic meaning","Binary codes","Hash values"], correct: 1 },
    { q: "Sentiment analysis determines:", opts: ["Word count","The emotional tone (positive/negative/neutral) of text","Grammar errors","Translation quality"], correct: 1 },
    { q: "Named Entity Recognition (NER) identifies:", opts: ["Syntax errors","People, places, organizations in text","Spelling mistakes","File types"], correct: 1 },
    { q: "BERT is:", opts: ["A character name","A bidirectional transformer model for NLP","A database","A visualization tool"], correct: 1 },
    { q: "Bag of Words represents text as:", opts: ["A sequence","Word frequency counts ignoring order","A tree structure","A graph"], correct: 1 }
  ],

  /* ── Time Series ── */
  timeseries: [
    { q: 'Seasonality in time series refers to:', opts: ['Random noise', 'Repeating patterns at fixed intervals', 'Long-term upward trend', 'Outlier events'], correct: 1 },
    { q: 'What does ARIMA stand for?', opts: ['Auto-Regressive Integrated Moving Average', 'Adaptive Random Input Method Algorithm', 'Applied Regression in Moving Averages', 'Automatic Recursive Integration Model'], correct: 0 },
    { q: 'Stationarity means a time series has:', opts: ['An upward trend', 'Constant mean and variance over time', 'Increasing variance', 'No data points'], correct: 1 },

    { q: "A trend in time series is:", opts: ["Random noise","A long-term increase or decrease","A repeating pattern","A single spike"], correct: 1 },
    { q: "Autocorrelation measures:", opts: ["Correlation between variables","Correlation of a series with its own lagged values","Causation","Noise level"], correct: 1 },
    { q: "Differencing helps achieve:", opts: ["Higher values","Stationarity by removing trends","More data points","Faster processing"], correct: 1 },
    { q: "A moving average smooths:", opts: ["Images","Time series by averaging nearby observations","Audio","Text"], correct: 1 },
    { q: "Exponential smoothing gives:", opts: ["Equal weight to all observations","More weight to recent observations","More weight to older data","No weight"], correct: 1 },
    { q: "Prophet was developed by:", opts: ["Google","Facebook/Meta for forecasting","Amazon","Microsoft"], correct: 1 },
    { q: "Cross-validation for time series uses:", opts: ["Random splits","Walk-forward (expanding window) validation","K-fold","Leave-one-out"], correct: 1 }
  ],

  /* ── Cloud & MLOps ── */
  cloud: [
    { q: 'What is CI/CD in MLOps?', opts: ['Cloud Intelligence / Cloud Delivery', 'Continuous Integration / Continuous Deployment', 'Centralized Infrastructure / Centralized Data', 'Computed Inference / Cached Deployment'], correct: 1 },
    { q: 'Docker containers are used for:', opts: ['Data visualization', 'Packaging apps with their dependencies for consistent environments', 'Machine learning training only', 'Database management'], correct: 1 },
    { q: 'Model versioning helps with:', opts: ['Making models larger', 'Tracking and reproducing model experiments', 'Deleting old models', 'Visualizing data'], correct: 1 },

    { q: "A container differs from a VM because:", opts: ["Containers are larger","Containers share the host OS kernel, making them lighter","VMs are faster","No difference"], correct: 1 },
    { q: "Kubernetes is used for:", opts: ["Writing code","Orchestrating and managing containers at scale","Database design","UI design"], correct: 1 },
    { q: "A REST API communicates using:", opts: ["Binary only","HTTP methods (GET, POST, PUT, DELETE)","FTP only","Email"], correct: 1 },
    { q: "Feature stores help with:", opts: ["UI design","Sharing and reusing ML features across teams","Data deletion","Password management"], correct: 1 },
    { q: "A/B testing in production compares:", opts: ["Two databases","Two model versions serving different user segments","Two servers","Two networks"], correct: 1 },
    { q: "Infrastructure as Code means:", opts: ["Writing HTML","Defining infrastructure through configuration files rather than manual setup","Building hardware","Coding algorithms"], correct: 1 },
    { q: "Model monitoring tracks:", opts: ["Employee time","Model performance drift and data quality in production","Server room temperature","Stock prices"], correct: 1 }
  ],

  /* ── Web Development ── */
  webdev: [
    { q: 'Which tag should you use for a top-level heading?', opts: ['<header>', '<h1>', '<title>', '<top>'], correct: 1 },
    { q: 'CSS Flexbox is primarily used for:', opts: ['Database queries', 'One-dimensional layout', 'Server-side rendering', 'Image editing'], correct: 1 },
    { q: 'What does the DOM stand for?', opts: ['Data Object Model', 'Document Object Model', 'Digital Output Module', 'Display Orientation Manager'], correct: 1 },

    { q: "What is the box model in CSS?", opts: ["A 3D effect","Content + padding + border + margin around elements","A JavaScript pattern","A server model"], correct: 1 },
    { q: "React state is:", opts: ["Static data","Data that can change and triggers re-renders","CSS styling","Server data only"], correct: 1 },
    { q: "What is an API?", opts: ["A programming language","An interface for software components to communicate","A database","A CSS framework"], correct: 1 },
    { q: "localStorage persists data:", opts: ["Until the tab closes","Until explicitly cleared, even after browser restart","For 1 hour","Only during the session"], correct: 1 },
    { q: "Git is used for:", opts: ["Running servers","Version control and collaboration","Database management","Image editing"], correct: 1 },
    { q: "What is a callback function?", opts: ["A recursive function","A function passed as an argument to be executed later","A constructor","A destructor"], correct: 1 },
    { q: "CORS stands for:", opts: ["Code Optimization and Runtime System","Cross-Origin Resource Sharing","Central Object Relay Service","Custom Output Rendering Standard"], correct: 1 }
  ],

  /* ── Cybersecurity ── */
  cyber: [
    { q: 'In public key cryptography, which key encrypts a message for a specific recipient?', opts: ["Sender's private key", "Recipient's private key", "Recipient's public key", "Sender's public key"], correct: 2 },
    { q: 'A phishing attack primarily targets:', opts: ['Hardware', 'Network cables', 'Human psychology and trust', 'Operating system kernel'], correct: 2 },
    { q: 'What does a firewall do?', opts: ['Encrypts data', 'Filters network traffic based on rules', 'Stores passwords', 'Speeds up internet'], correct: 1 },

    { q: "What is a brute force attack?", opts: ["Physical break-in","Trying every possible password combination","A DDoS attack","Social engineering"], correct: 1 },
    { q: "Defense in depth means:", opts: ["One strong firewall","Multiple layers of security controls","Deep web access","Underground bunkers"], correct: 1 },
    { q: "What is a digital certificate?", opts: ["A PDF document","An electronic credential verifying identity and enabling encryption","A password","An email"], correct: 1 },
    { q: "Incident response is:", opts: ["Ignoring breaches","A structured approach to handling security breaches","Installing software","Buying hardware"], correct: 1 },
    { q: "What does hashing do?", opts: ["Encrypts data reversibly","Converts data into a fixed-length fingerprint that cannot be reversed","Compresses files","Deletes data"], correct: 1 },
    { q: "What is network segmentation?", opts: ["Cutting cables","Dividing a network into isolated zones to limit breach spread","Connecting all devices","Removing firewalls"], correct: 1 },
    { q: "Patch management ensures:", opts: ["More bugs","Software is updated to fix known vulnerabilities","Slower systems","Data deletion"], correct: 1 }
  ],

  /* ── FinTech & Modeling ── */
  finance: [
    { q: 'What is the core principle behind DCF?', opts: ['Stock prices always go up', 'Time value of money', 'Dividends are guaranteed', 'Inflation is constant'], correct: 1 },
    { q: 'An algorithmic trading system is best trained using:', opts: ['Unsupervised learning', 'Reinforcement learning', 'Linear regression', 'Clustering'], correct: 1 },
    { q: 'What is a risk-free rate?', opts: ['A stock with no risk', 'The return on a theoretically risk-free investment', 'Interest rate charged by banks', 'Inflation rate'], correct: 1 },

    { q: "What is compound interest?", opts: ["Simple interest","Interest earned on both principal and accumulated interest","A tax","A fee"], correct: 1 },
    { q: "A bull market means:", opts: ["Prices falling","Prices rising with investor optimism","No change","High volatility only"], correct: 1 },
    { q: "What is a portfolio?", opts: ["A folder","A collection of financial investments","A single stock","A bank account"], correct: 1 },
    { q: "Liquidity refers to:", opts: ["Water content","How easily an asset can be converted to cash","Asset age","Tax rate"], correct: 1 },
    { q: "What is market capitalization?", opts: ["Total revenue","Share price × total shares outstanding","Debt level","Cash reserves"], correct: 1 },
    { q: "Dollar-cost averaging means:", opts: ["Saving dollars","Investing a fixed amount regularly regardless of price","Timing the market","Day trading"], correct: 1 },
    { q: "What is an option contract?", opts: ["A requirement to buy","The right (not obligation) to buy or sell at a set price","A loan agreement","A savings plan"], correct: 1 }
  ],

  /* ── Health Informatics ── */
  health: [
    { q: 'What does interoperability in healthcare refer to?', opts: ['Doctors working longer hours', 'Systems sharing and using data securely', 'Reducing medication cost', 'Building hospitals'], correct: 1 },
    { q: 'Which model is best for diagnosing diseases from medical images?', opts: ['Linear Regression', 'Convolutional Neural Networks', 'K-Means', 'Decision Trees'], correct: 1 },
    { q: 'HIPAA primarily protects:', opts: ['Hospital budgets', 'Patient health information privacy', 'Doctor salaries', 'Insurance company profits'], correct: 1 },

    { q: "PHI stands for:", opts: ["Public Health Index","Protected Health Information","Patient Hospital ID","Primary Health Insurance"], correct: 1 },
    { q: "What is an EMR vs EHR?", opts: ["Same thing","EMR is one practice; EHR is shared across providers","EHR is older","EMR is digital, EHR is paper"], correct: 1 },
    { q: "Clinical pathways are:", opts: ["Hospital hallways","Standardized care plans for specific conditions","Research papers","Insurance forms"], correct: 1 },
    { q: "What is a comorbidity?", opts: ["A cure","The presence of two or more conditions in a patient simultaneously","A symptom","A treatment"], correct: 1 },
    { q: "Health equity means:", opts: ["Equal spending","Everyone has a fair opportunity to attain their full health potential","Same treatment for all","Free healthcare"], correct: 1 },
    { q: "What is a biomarker?", opts: ["A bookmark","A measurable indicator of a biological state or condition","A hospital logo","A medical device"], correct: 1 },
    { q: "Telehealth barriers include:", opts: ["Too much funding","Digital divide, privacy concerns, and internet access gaps","Too many doctors","Perfect technology"], correct: 1 }
  ],

  /* ── EdTech ── */
  edu: [
    { q: 'What is the primary goal of managing cognitive load?', opts: ['Make tests harder', 'Optimize the use of working memory', 'Reduce reading time', 'Replace teachers with AI'], correct: 1 },
    { q: 'Learning analytics primarily focuses on:', opts: ['Hiring staff', 'Predicting student success', 'Building schools', 'Printing books'], correct: 1 },
    { q: 'Spaced repetition improves learning by:', opts: ['Cramming all at once', 'Reviewing material at increasing intervals', 'Skipping difficult topics', 'Reading faster'], correct: 1 },

    { q: "What is constructivism?", opts: ["Building things","A theory that learners actively construct knowledge through experience","A teaching certificate","A grading method"], correct: 1 },
    { q: "Retrieval practice means:", opts: ["Finding lost items","Actively recalling information to strengthen memory","Copying notes","Reading passively"], correct: 1 },
    { q: "What is a learning objective?", opts: ["A grade","A specific, measurable statement of what learners will be able to do","A textbook","A syllabus"], correct: 1 },
    { q: "Intrinsic motivation comes from:", opts: ["External rewards","Internal satisfaction and personal interest","Grades only","Peer pressure"], correct: 1 },
    { q: "What is interleaving?", opts: ["Weaving fabric","Mixing different topics during practice sessions","Sequential learning","Cramming"], correct: 1 },
    { q: "Andragogy is the study of:", opts: ["Children learning","Adult learning principles","Animal behavior","Plant growth"], correct: 1 },
    { q: "What is a MOOC?", opts: ["A sound","Massive Open Online Course","A grading system","A textbook type"], correct: 1 }
  ],

  /* ── E-Commerce & Supply ── */
  retail: [
    { q: 'What is a key benefit of JIT inventory?', opts: ['Higher storage costs', 'Reduced warehousing costs', 'More surplus stock', 'Longer production times'], correct: 1 },
    { q: 'Recommendation engines usually rely on:', opts: ['Collaborative Filtering', 'Natural Language Processing', 'Image Recognition', 'Blockchain'], correct: 0 },
    { q: 'The bullwhip effect in supply chains means:', opts: ['Prices drop', 'Small demand changes cause large inventory swings upstream', 'Faster deliveries', 'Lower production costs'], correct: 1 },

    { q: "What is churn rate?", opts: ["Growth rate","Percentage of customers who stop using a service","Production speed","Sales volume"], correct: 1 },
    { q: "Conversion funnel tracks:", opts: ["Factory output","User journey from awareness to purchase","Supply chain","Inventory"], correct: 1 },
    { q: "What is dropshipping?", opts: ["Dropping packages","Selling products without holding inventory","Returning goods","Warehouse management"], correct: 1 },
    { q: "RFM analysis segments by:", opts: ["Age and gender","Recency, Frequency, and Monetary value","Location only","Product type"], correct: 1 },
    { q: "What is omnichannel retail?", opts: ["One channel only","Seamless customer experience across all channels","Wholesale only","Online only"], correct: 1 },
    { q: "Demand elasticity measures:", opts: ["Product quality","How quantity demanded changes with price","Supply speed","Inventory levels"], correct: 1 },
    { q: "What is market basket analysis?", opts: ["Counting baskets","Finding products frequently bought together","Basket weaving","Price comparison"], correct: 1 }
  ],

  /* ── Strategy Consulting ── */
  consulting: [
    { q: 'What does MECE stand for?', opts: ['Many Elements Combined Equally', 'Mutually Exclusive, Collectively Exhaustive', 'Market Evaluation Competitive Edge', 'Maximum Efficiency Cost Effective'], correct: 1 },
    { q: 'Which chart is best for showing a project timeline?', opts: ['Pie Chart', 'Gantt Chart', 'Scatter Plot', 'Histogram'], correct: 1 },
    { q: "Porter's Five Forces analyzes:", opts: ['Employee satisfaction', 'Industry competition and profitability', 'Marketing campaigns', 'Software bugs'], correct: 1 },

    { q: "What is a root cause analysis?", opts: ["Gardening","Identifying the fundamental reason for a problem","Financial analysis","Market research"], correct: 1 },
    { q: "A 2x2 matrix helps:", opts: ["Do math","Categorize items along two dimensions for decision-making","Build spreadsheets","Write reports"], correct: 1 },
    { q: "What is a pitch deck?", opts: ["A sports deck","A presentation to persuade stakeholders or investors","A card game","A floor plan"], correct: 1 },
    { q: "Scope creep means:", opts: ["Good expansion","Uncontrolled growth of project requirements beyond original scope","Team growth","Budget increase"], correct: 1 },
    { q: "What is a RACI matrix?", opts: ["A math formula","A chart showing who is Responsible, Accountable, Consulted, Informed","A pricing model","An org chart"], correct: 1 },
    { q: "Net Promoter Score measures:", opts: ["Profit","Customer loyalty and likelihood to recommend","Employee satisfaction","Market share"], correct: 1 },
    { q: "What is a value proposition?", opts: ["A price tag","A clear statement of the unique value a product delivers to customers","A legal contract","A business license"], correct: 1 }
  ],

  /* ── Public Policy ── */
  gov: [
    { q: 'What is the primary purpose of Cost-Benefit Analysis?', opts: ['Maximize costs', 'Compare pros and cons of alternatives systematically', 'Hide financial data', 'Delay decision making'], correct: 1 },
    { q: 'Civic tech focuses on:', opts: ['Selling products', 'Improving public services via technology', 'Building military weapons', 'Space exploration'], correct: 1 },
    { q: 'A randomized controlled trial (RCT) in policy evaluates:', opts: ['Budget allocation', 'Causal impact of an intervention', 'Staff performance', 'Website traffic'], correct: 1 },

    { q: "What is a mandate?", opts: ["A date with a man","An official order or requirement from government","A suggestion","A request"], correct: 1 },
    { q: "What is federalism?", opts: ["One central government","Division of power between national and state/local governments","No government","Direct democracy only"], correct: 1 },
    { q: "What is a policy evaluation?", opts: ["Grading politicians","Systematic assessment of a policy program effectiveness and outcomes","A news report","An opinion poll"], correct: 1 },
    { q: "What is gerrymandering?", opts: ["Gardening","Manipulating electoral district boundaries for political advantage","A legal term","A tax policy"], correct: 1 },
    { q: "What is a sunset clause?", opts: ["Evening legislation","A provision that automatically terminates a law after a set date","A weather policy","A tax break"], correct: 1 },
    { q: "What is a public-private partnership?", opts: ["A friendship","Collaboration between government and private sector to deliver services","A merger","A hostile takeover"], correct: 1 },
    { q: "What is regulatory impact assessment?", opts: ["Ignoring regulations","Analyzing the likely effects of proposed regulations before implementation","A court case","A budget cut"], correct: 1 }
  ],

  /* ── Non-profit Impact ── */
  nonprofit: [
    { q: 'In a non-profit context, what is an outcome?', opts: ['Flyers handed out', 'The change resulting from an activity', 'Budget spent', 'Staff hired'], correct: 1 },
    { q: 'Impact measurement requires:', opts: ['Guessing', 'Clear metrics and data collection', 'Only financial data', 'Ignoring beneficiaries'], correct: 1 },
    { q: 'A logic model maps:', opts: ['Office layouts', 'Inputs → Activities → Outputs → Outcomes', 'Staff schedules', 'Marketing campaigns'], correct: 1 },

    { q: "What is a 501(c)(3)?", opts: ["A phone number","A US tax-exempt nonprofit organization designation","A zip code","A bank code"], correct: 1 },
    { q: "What is restricted vs unrestricted funding?", opts: ["Same thing","Restricted must be used for specific purposes; unrestricted is flexible","Restricted is better","Unrestricted is illegal"], correct: 1 },
    { q: "What is a stakeholder map?", opts: ["A GPS tool","A visual tool identifying and prioritizing stakeholders by influence and interest","A treasure map","An org chart"], correct: 1 },
    { q: "What is social enterprise?", opts: ["Social media business","A business that prioritizes social impact alongside revenue","A charity only","Government agency"], correct: 1 },
    { q: "What is a dashboard for nonprofits?", opts: ["A car part","A visual display of key performance and impact metrics","A website","A database"], correct: 1 },
    { q: "What is volunteer management?", opts: ["Ignoring volunteers","Recruiting, training, and retaining volunteers effectively","Paying volunteers","Firing volunteers"], correct: 1 },
    { q: "What is an annual report for nonprofits?", opts: ["A tax return only","A comprehensive document sharing accomplishments, finances, and impact with stakeholders","A budget","A newsletter"], correct: 1 }
  ],

  /* ── Digital Media ── */
  media: [
    { q: 'Which search query shows high transactional intent?', opts: ['History of coffee', 'Best coffee shops', 'Buy espresso machine online', 'What is Arabica'], correct: 2 },
    { q: 'A/B testing is used to:', opts: ['Write code', 'Compare two versions to see which performs better', 'Design logos', 'Host websites'], correct: 1 },
    { q: 'SEO stands for:', opts: ['Social Engagement Optimization', 'Search Engine Optimization', 'Standard Email Operation', 'Secure Encryption Output'], correct: 1 },

    { q: "What is CTR?", opts: ["Content Transfer Rate","Click-Through Rate — clicks divided by impressions","Customer Tax Return","Creative Tool Rating"], correct: 1 },
    { q: "What is organic reach?", opts: ["Farming metrics","The number of people who see your content without paid promotion","Paid advertising","Email marketing"], correct: 1 },
    { q: "What is a buyer persona?", opts: ["A real customer","A semi-fictional representation of your ideal customer based on data","A competitor","A brand mascot"], correct: 1 },
    { q: "What is retargeting?", opts: ["Changing targets","Showing ads to users who previously interacted with your brand","Target practice","Goal setting"], correct: 1 },
    { q: "What is content calendar?", opts: ["A wall calendar","A schedule planning what content to publish, when, and where","A diary","A to-do list"], correct: 1 },
    { q: "What is KPI in marketing?", opts: ["A radio station","Key Performance Indicator — a measurable metric for tracking goals","A file format","A software tool"], correct: 1 },
    { q: "What is virality?", opts: ["A disease","The tendency of content to be rapidly shared across networks","A bug","A server error"], correct: 1 }
  ],
};

/**
 * Build a pre-test from the user's selected topic IDs.
 * Returns 3 questions per selected topic.
 * @param {string[]} selectedTopics – array of topic IDs (e.g. ['gov', 'nonprofit'])
 * @returns {Array} array of question objects
 */
export const getAssessQs = (selectedTopics = []) => {
  const qs = [];
  for (const topicId of selectedTopics) {
    const topicQuestions = TOPIC_QS[topicId];
    if (topicQuestions) {
      qs.push(...topicQuestions);
    }
  }
  // Fallback: if no topics matched (shouldn't happen), return a minimal set
  if (qs.length === 0) {
    return TOPIC_QS.stats || [];
  }
  return qs;
};
