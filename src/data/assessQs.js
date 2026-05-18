const CORE_QS = [
  {q:'What does a p-value of 0.03 mean?', opts:['3% chance null is true','3% chance of this data if null is true','Effect size is 3%','97% power'], correct:1},
  {q:'Which Python library is primarily used for data manipulation?', opts:['NumPy','Matplotlib','Pandas','Scikit-learn'], correct:2},
  {q:'What is overfitting?', opts:['Model too simple','Good on training, poor on new data','Training takes too long','Accuracy above 100%'], correct:1},
  {q:'Which central tendency measure is most resistant to outliers?', opts:['Mean','Mode','Median','Standard Deviation'], correct:2},
];

const IND_QS = {
  'Technology': [
    {q:'Which tag should you use for a top-level heading in HTML?', opts:['<header>','<h1>','<title>','<top>'], correct:1},
    {q:'What is public key cryptography?', opts:['Symmetric keys','Key known to owner only','Pairs of public/private keys','Decryption without keys'], correct:2},
  ],
  'Finance / Banking': [
    {q:'What is the core principle behind DCF?', opts:['Stock prices always go up','Time value of money','Dividends are guaranteed','Inflation is constant'], correct:1},
    {q:'An algorithmic trading system is best trained using:', opts:['Unsupervised learning','Reinforcement learning','Linear regression','Clustering'], correct:1},
  ],
  'Healthcare': [
    {q:'What does interoperability in healthcare refer to?', opts:['Longer hours','Systems sharing data securely','Reducing medication cost','Building hospitals'], correct:1},
    {q:'Which model is best for diagnosing diseases from medical images?', opts:['Linear Regression','Convolutional Neural Networks','K-Means','Decision Trees'], correct:1},
  ],
  'Education': [
    {q:'What is the primary goal of managing cognitive load?', opts:['Make tests harder','Optimize working memory','Reduce reading time','Replace teachers'], correct:1},
    {q:'Learning analytics primarily focuses on:', opts:['Hiring staff','Predicting student success','Building schools','Printing books'], correct:1},
  ],
  'Retail / E-commerce': [
    {q:'What is a key benefit of JIT inventory?', opts:['Higher storage costs','Reduced warehousing costs','More surplus stock','Longer production'], correct:1},
    {q:'Recommendation engines usually rely on:', opts:['Collaborative Filtering','Natural Language Processing','Image Recognition','Blockchain'], correct:0},
  ],
  'Consulting': [
    {q:'What does MECE stand for?', opts:['Many Elements Combined Equally','Mutually Exclusive, Collectively Exhaustive','Market Evaluation Competitive Edge','Maximum Efficiency'], correct:1},
    {q:'Which chart is best for showing a project timeline?', opts:['Pie Chart','Gantt Chart','Scatter Plot','Histogram'], correct:1},
  ],
  'Government / Public Sector': [
    {q:'What is the primary purpose of Cost-Benefit Analysis?', opts:['Maximize costs','Compare pros and cons of alternatives','Hide data','Delay decisions'], correct:1},
    {q:'Civic tech focuses on:', opts:['Selling products','Improving public services via tech','Building military weapons','Space exploration'], correct:1},
  ],
  'Non-profit': [
    {q:'In a non-profit context, what is an outcome?', opts:['Flyers handed out','The change resulting from an activity','Budget spent','Staff hired'], correct:1},
    {q:'Impact measurement requires:', opts:['Guessing','Clear metrics and data collection','Only financial data','Ignoring beneficiaries'], correct:1},
  ],
  'Media / Entertainment': [
    {q:'Which search query shows high transactional intent?', opts:['History of coffee','Best coffee shops','Buy espresso machine online','What is Arabica'], correct:2},
    {q:'A/B testing is used to:', opts:['Write code','Compare two versions to see which performs better','Design logos','Host websites'], correct:1},
  ],
};

export const getAssessQs = (industry) => {
  const specificQs = IND_QS[industry] || IND_QS['Technology'];
  return [...CORE_QS, ...specificQs];
};
