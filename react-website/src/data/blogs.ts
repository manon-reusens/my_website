import type { BlogPost } from '../types';

export const blogsData: BlogPost[] = [
  {
    id: "welcome-to-my-blog",
    title: "Welcome to My Blog!",
    date: "2026-02-21",
    author: "Manon Reusens",
    excerpt: "An introduction to this blog where I'll share insights about AI research, responsible AI, and my journey in academia.",
    readTime: "3 min read",
    category: "General",
    tags: ["Welcome", "AI Research", "Academia"],
    featured: true,
    coverImage: "/images/blog/welcome.jpg",
    content: `# Welcome to My Blog!

Hello and welcome! I'm excited to launch this blog as a space to share my thoughts, research, and experiences in the world of Artificial Intelligence and Machine Learning.

## What You'll Find Here

On this blog, I'll be writing about:

- **Research Insights**: Deep dives into my latest research on Large Language Models, bias mitigation, and responsible AI
- **Technical Tutorials**: Practical guides on implementing AI/ML solutions
- **Thoughts on Academia**: Reflections on the PhD journey and academic life
- **Industry Perspectives**: Bridging the gap between research and practice

## My Research Focus

My work primarily focuses on:

1. **Responsible AI**: Understanding and mitigating biases in AI systems
2. **Large Language Models**: Exploring capabilities and limitations of LLMs
3. **Multilingual NLP**: Working with language models across different languages
4. **Practical Applications**: Bringing research insights into real-world applications

## Why This Blog?

I believe that research should be accessible and that we can all learn from each other's experiences. This blog is my way of contributing to the broader AI community and sharing what I've learned along the way.

## Stay Connected

I'd love to hear from you! Feel free to reach out if you have questions, suggestions, or just want to chat about AI research.

Happy reading! 🚀
`
  },
  {
    id: "understanding-llm-bias",
    title: "Understanding Bias in Large Language Models",
    date: "2026-02-15",
    author: "Manon Reusens",
    excerpt: "A comprehensive look at how bias manifests in LLMs and what we can do about it.",
    readTime: "8 min read",
    category: "Research",
    tags: ["LLMs", "Bias", "Fairness", "Responsible AI"],
    featured: true,
    coverImage: "/images/blog/llm-bias.jpg",
    content: `# Understanding Bias in Large Language Models

Large Language Models (LLMs) have revolutionized natural language processing, but they come with important challenges around bias and fairness.

## What is Bias in LLMs?

Bias in LLMs refers to systematic unfairness or prejudice in the model's outputs. This can manifest in several ways:

### 1. Gender Bias
Models may associate certain professions or characteristics more strongly with one gender over another.

\`\`\`python
# Example of detecting gender bias
prompt = "The doctor said ___ would see the patient soon."
# Models might prefer "he" over "she"
\`\`\`

### 2. Racial and Ethnic Bias
LLMs can perpetuate stereotypes related to race and ethnicity, often reflecting biases present in their training data.

### 3. Language Bias
Models trained predominantly on English data may perform worse on other languages or cultural contexts.

## Sources of Bias

Understanding where bias comes from is crucial:

- **Training Data**: Models learn from internet text, which contains human biases
- **Model Architecture**: Certain architectural choices can amplify biases
- **Fine-tuning Process**: How we fine-tune models affects bias propagation

## Mitigation Strategies

Several approaches show promise:

1. **Diverse Training Data**: Including more diverse perspectives
2. **Debiasing Techniques**: Post-processing methods to reduce bias
3. **Evaluation Frameworks**: Better metrics to detect and measure bias
4. **Human Oversight**: Incorporating human feedback in the loop

## Conclusion

Addressing bias in LLMs is an ongoing challenge that requires:
- Technical solutions
- Ethical frameworks  
- Interdisciplinary collaboration
- Continuous monitoring and improvement

The goal isn't perfection, but continuous improvement toward fairer AI systems.
`
  },
  {
    id: "phd-journey-reflections",
    title: "Reflections on My PhD Journey",
    date: "2026-01-10",
    author: "Manon Reusens",
    excerpt: "Looking back at the challenges, triumphs, and lessons learned during my doctoral research.",
    readTime: "6 min read",
    category: "Academia",
    tags: ["PhD", "Academia", "Personal", "Research"],
    featured: false,
    content: `# Reflections on My PhD Journey

After completing my PhD at KU Leuven, I wanted to share some reflections on the journey, the challenges I faced, and what I learned along the way.

## The Beginning

Starting a PhD is both exciting and daunting. When I began my research on Large Language Models and responsible AI, the field was rapidly evolving...

## Key Challenges

### 1. Imposter Syndrome
Every PhD student faces this. The key is recognizing that it's normal and that you *do* belong in academia.

### 2. Scope Management
Learning to say "no" and focusing on what truly matters for your thesis is crucial.

### 3. Work-Life Balance
Research can be all-consuming. Finding balance is essential for long-term success and well-being.

## Memorable Moments

- First paper acceptance 🎉
- Presenting at international conferences
- Collaborating with brilliant researchers
- Those "aha!" moments when everything clicks

## Advice for Future PhD Students

1. **Build a support network**: Fellow PhD students, mentors, and friends are invaluable
2. **Embrace failure**: Every rejected paper is a learning opportunity
3. **Stay curious**: Let your curiosity guide your research
4. **Take care of yourself**: Your mental and physical health come first
5. **Celebrate small wins**: Don't wait for the big milestones

## What's Next?

The PhD is just the beginning. I'm excited to continue contributing to responsible AI and working on making AI systems more fair and beneficial for everyone.

## Final Thoughts

Would I do it again? Absolutely. The PhD taught me resilience, critical thinking, and the value of perseverance. It's a unique journey that shaped who I am as a researcher and person.

To all current and future PhD students: you've got this! 💪
`
  },
  {
    id: "getting-started-with-responsible-ai",
    title: "Getting Started with Responsible AI",
    date: "2025-12-05",
    author: "Manon Reusens",
    excerpt: "A practical guide for developers and researchers who want to build more ethical AI systems.",
    readTime: "7 min read",
    category: "Tutorial",
    tags: ["Responsible AI", "Ethics", "Tutorial", "Best Practices"],
    featured: false,
    content: `# Getting Started with Responsible AI

If you're building AI systems, you have a responsibility to ensure they're fair, transparent, and beneficial. Here's a practical guide to get started.

## Core Principles

Responsible AI is built on several key principles:

1. **Fairness**: Systems should treat all users equitably
2. **Transparency**: Users should understand how decisions are made
3. **Privacy**: Protect user data and respect privacy  
4. **Accountability**: Be responsible for your AI's actions
5. **Reliability**: Systems should perform consistently and safely

## Practical Steps

### Step 1: Assess Your Data

\`\`\`python
# Check for representation in your dataset
def check_data_balance(df, sensitive_attribute):
    distribution = df[sensitive_attribute].value_counts()
    print(f"Distribution of {sensitive_attribute}:")
    print(distribution)
    return distribution
\`\`\`

### Step 2: Evaluate for Bias

Use fairness metrics to assess your model:

- **Demographic Parity**: Equal positive rates across groups
- **Equalized Odds**: True positive and false positive rates are equal
- **Calibration**: Predictions are equally accurate across groups

### Step 3: Implement Safeguards

- Add human review for high-stakes decisions
- Implement confidence thresholds  
- Build in appeal mechanisms
- Monitor production performance

### Step 4: Document Everything

Maintain clear documentation of:
- Data sources and preprocessing
- Model architecture and hyperparameters
- Fairness evaluations and results
- Known limitations

## Tools and Resources

Several tools can help:

- **Fairlearn**: Microsoft's toolkit for fairness assessment
- **AI Fairness 360**: IBM's comprehensive fairness toolkit
- **What-If Tool**: Google's model understanding tool
- **Responsible AI Toolbox**: End-to-end platform for responsible AI

## Common Pitfalls to Avoid

- ❌ Assuming your data is unbiased
- ❌ Only testing on average cases
- ❌ Ignoring edge cases and minority groups
- ❌ Treating fairness as a one-time check
- ❌ Prioritizing accuracy over fairness

## Continuous Improvement

Responsible AI is not a destination but a journey:

1. **Monitor**: Continuously track your system's performance
2. **Learn**: Stay updated on latest research and best practices
3. **Adapt**: Update your systems as you learn more
4. **Engage**: Listen to feedback from affected communities

## Conclusion

Building responsible AI requires intentionality, effort, and ongoing commitment. But it's worth it – we have the opportunity to shape AI that truly benefits everyone.

Start small, be consistent, and keep learning. You've got this! 🌟
`
  }
];

// API functions for blog data
export const BlogsAPI = {
  getAll: () => blogsData,
  
  getSortedByDate: () => {
    return [...blogsData].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  },
  
  getFeatured: () => {
    return blogsData.filter(blog => blog.featured);
  },
  
  getByCategory: (category: string) => {
    return blogsData.filter(blog => blog.category === category);
  },
  
  getByTag: (tag: string) => {
    return blogsData.filter(blog => blog.tags.includes(tag));
  },
  
  getById: (id: string) => {
    return blogsData.find(blog => blog.id === id);
  },
  
  getAllCategories: () => {
    const categories = new Set(blogsData.map(blog => blog.category).filter(Boolean));
    return Array.from(categories);
  },
  
  getAllTags: () => {
    const tags = new Set(blogsData.flatMap(blog => blog.tags));
    return Array.from(tags);
  }
};
