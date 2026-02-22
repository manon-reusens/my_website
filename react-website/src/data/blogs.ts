import type { BlogPost } from '../types';

export const blogsData: BlogPost[] = [
  {
    id: "welcome-to-my-blog",
    title: "Welcome to My Blog!",
    date: "2026-02-21",
    author: "Manon Reusens",
    excerpt: "An introduction to this blog where I'll share insights about AI research, responsible AI, and industry perspectives.",
    readTime: "3 min read",
    category: "General",
    tags: ["Welcome", "AI Research", "Industry"],
    featured: true,
    coverImage: "images/Quote-welcome-blog.png",
    content: `# Welcome to My Blog!

Hello and welcome! I'm excited to launch this blog as a space to share my thoughts, research, and experiences in the world of Artificial Intelligence.

## What You'll Find Here

On this blog, I'll be writing about:

- **Research Insights**: Deep dives into my latest research on Large Language Models, bias mitigation, and responsible AI
- **Technical Tutorials**: Practical guides on implementing AI/ML solutions
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
    id: "thesis-highlights-language-models-are-not-neutral",
    title: "Language Models Are Not Neutral",
    date: "2025-06-27",
    author: "Manon Reusens",
    excerpt: "A popularizing summary of the highlights from my PhD thesis on bias in language models.",
    readTime: "5 min read",
    category: "Research",
    tags: ["LLMs", "Bias", "Fairness", "Responsible AI"],
    featured: true,
    coverImage: "images/Quote-thesis-blog.png",
    content: `# Language Models Are Not Neutral

**_Language models like ChatGPT are extremely popular, but they are not neutral. Their answers often reflect the people who built them and that is rarely a representative group of the world’s population. In my PhD thesis, I show how social inequalities find their way into language models, and why that affects everyone._**

## When AI Becomes Socially Biased
You ask a language model to describe a successful entrepreneur.
The answer? A man, technically educated, white, from Silicon Valley.
No woman, no one from the Global South, no social entrepreneur... Why not?
Because language models base their responses on patterns in data and that data comes mostly from English‑language, Western sources. As a result, existing power structures are quietly repeated and reinforced, under the guise of objective technology.

![Representation LLM](images/ThesisFig1.png "Representation LLM")

In my thesis, I show that these social inequalities stem from how the model is built. The choices made by designers and the selection of training data all contribute to subtle forms of bias. These biases are not only products of modern society, they can also originate from the past.
Together with the National Museum of the Royal Navy, we analyzed how models can make historical archives more accessible via keywords. Original descriptions would be manually composed by the curators based on their expert knowledge and would then be given to an LLM for keyword extraction. Even when terms like <b>"war trophy"</b> were deliberately avoided in the original descriptions, language models still generated such war‑related terms as keywords. Thus, a colonial perspective that is supposedly relegated to history, can be revived through modern technology.


Interactive applications raise new questions as well. Researchers often instruct models to behave according to a particular role or personality ranging from a friendly coach to a critical expert. But which traits are associated with that role? And do models stay consistent?

In our research, we found that models given a specific personality are mostly consistent within an assigned role, but also are consistent in non-explicitly assigned roles, that occur as side effects. These spillover effects of an assigned role are often based on stereotypes learned by the model and default model behavior that the model was taught to deliver. Furthermore, role assignment also increases the risk that people start to attribute human qualities to models. This creates an illusion of authority and responsibility, even though the answers remain driven by design choices and statistical predictions.

## Not Everyone Gets the Same Answer
Bias is not abstract, it has real consequences.
One of our studies showed this clearly, investigating how different users may not receive equally accurate answers. An example is shown below with two annotations, one of a native English speaker and one of a non-native English speaker. The same query produces a more accurate answer for the native speaker, while the non‑native speaker receives a less accurate response. This is an example of what I call "native design bias" in language models, and it can affect millions of non‑native speakers worldwide. 

![Example Native Bias](images/ThesisFig2.png "Example Native Bias")

Furthermore, even among native English speakers, performance differences arise when splitting them into Western and non‑Western groups. Although performance should be identical, this is not always the case:

- OpenAI’s models give **more accurate answers to Western native speakers**.
- The Chinese Qwen model treats both groups **more equally**.

## How Do We Fix This?
Removing bias is difficult because it appears in different forms:

### 1. Direct Bias
*Example: the model associates “doctor” more often with a man.*

### 2. Indirect Bias
*Example: less accurate answers for certain dialects, or lower‑prestige job recommendations.*

Removing direct bias sounds simple, but it isn’t as removing patterns can also remove context. You need balance: a pope is always male, but a doctor can be any gender. Furthermore, in multilingual models the challenge grows: How do you remove bias across languages?
Did the model learn the same biases in each language?
Are some culturally specific?

Indirect bias is equally tricky. Ideally, people with identical backgrounds should receive identical recommendations regardless of dialect. But cross‑country differences complicate that ideal.

Sometimes cultural cues *must* matter, and this personalization can be seen as a feature to provide better answers rather than a disadvantage, as is shown in the following example:

> **“What color/colour has a football?”**

- American spelling → American football → **brown**
- British spelling → soccer → **black‑white**

## Language Models for Everyone?
In the world of artificial intelligence, the focus often lies on performance: how well does a model summarize a text, how quickly does it respond? 
But in my thesis, I argue that we need to look beyond such metrics. Even a model that performs well technically can still make wrong or harmful decisions. 
After all, language models are not neutral systems, but they are the result of human choices and therefore carry a social background.
That’s why it’s important to evaluate them not only on accuracy, but also on **fairness, representativeness, and social impact**. 
If we want to build language models that truly work for everyone, we need to think explicitly about who gets heard, who remains ignored, and which perspectives are amplified.
Only then can we ensure that this powerful technology is not just efficient, but also fair and inclusive.
`
  },
//   {
//     id: "phd-journey-reflections",
//     title: "Reflections on My PhD Journey",
//     date: "2026-01-10",
//     author: "Manon Reusens",
//     excerpt: "Looking back at the challenges, triumphs, and lessons learned during my doctoral research.",
//     readTime: "6 min read",
//     category: "Academia",
//     tags: ["PhD", "Academia", "Personal", "Research"],
//     featured: false,
//     content: `# Reflections on My PhD Journey

// After completing my PhD at KU Leuven, I wanted to share some reflections on the journey, the challenges I faced, and what I learned along the way.

// ## The Beginning

// Starting a PhD is both exciting and daunting. When I began my research on Large Language Models and responsible AI, the field was rapidly evolving...

// ## Key Challenges

// ### 1. Imposter Syndrome
// Every PhD student faces this. The key is recognizing that it's normal and that you *do* belong in academia.

// ### 2. Scope Management
// Learning to say "no" and focusing on what truly matters for your thesis is crucial.

// ### 3. Work-Life Balance
// Research can be all-consuming. Finding balance is essential for long-term success and well-being.

// ## Memorable Moments

// - First paper acceptance 🎉
// - Presenting at international conferences
// - Collaborating with brilliant researchers
// - Those "aha!" moments when everything clicks

// ## Advice for Future PhD Students

// 1. **Build a support network**: Fellow PhD students, mentors, and friends are invaluable
// 2. **Embrace failure**: Every rejected paper is a learning opportunity
// 3. **Stay curious**: Let your curiosity guide your research
// 4. **Take care of yourself**: Your mental and physical health come first
// 5. **Celebrate small wins**: Don't wait for the big milestones

// ## What's Next?

// The PhD is just the beginning. I'm excited to continue contributing to responsible AI and working on making AI systems more fair and beneficial for everyone.

// ## Final Thoughts

// Would I do it again? Absolutely. The PhD taught me resilience, critical thinking, and the value of perseverance. It's a unique journey that shaped who I am as a researcher and person.

// To all current and future PhD students: you've got this! 💪
// `
//   },
//   {
//     id: "getting-started-with-responsible-ai",
//     title: "Getting Started with Responsible AI",
//     date: "2025-12-05",
//     author: "Manon Reusens",
//     excerpt: "A practical guide for developers and researchers who want to build more ethical AI systems.",
//     readTime: "7 min read",
//     category: "Tutorial",
//     tags: ["Responsible AI", "Ethics", "Tutorial", "Best Practices"],
//     featured: false,
//     content: `# Getting Started with Responsible AI

// If you're building AI systems, you have a responsibility to ensure they're fair, transparent, and beneficial. Here's a practical guide to get started.

// ## Core Principles

// Responsible AI is built on several key principles:

// 1. **Fairness**: Systems should treat all users equitably
// 2. **Transparency**: Users should understand how decisions are made
// 3. **Privacy**: Protect user data and respect privacy  
// 4. **Accountability**: Be responsible for your AI's actions
// 5. **Reliability**: Systems should perform consistently and safely

// ## Practical Steps

// ### Step 1: Assess Your Data

// \`\`\`python
// # Check for representation in your dataset
// def check_data_balance(df, sensitive_attribute):
//     distribution = df[sensitive_attribute].value_counts()
//     print(f"Distribution of {sensitive_attribute}:")
//     print(distribution)
//     return distribution
// \`\`\`

// ### Step 2: Evaluate for Bias

// Use fairness metrics to assess your model:

// - **Demographic Parity**: Equal positive rates across groups
// - **Equalized Odds**: True positive and false positive rates are equal
// - **Calibration**: Predictions are equally accurate across groups

// ### Step 3: Implement Safeguards

// - Add human review for high-stakes decisions
// - Implement confidence thresholds  
// - Build in appeal mechanisms
// - Monitor production performance

// ### Step 4: Document Everything

// Maintain clear documentation of:
// - Data sources and preprocessing
// - Model architecture and hyperparameters
// - Fairness evaluations and results
// - Known limitations

// ## Tools and Resources

// Several tools can help:

// - **Fairlearn**: Microsoft's toolkit for fairness assessment
// - **AI Fairness 360**: IBM's comprehensive fairness toolkit
// - **What-If Tool**: Google's model understanding tool
// - **Responsible AI Toolbox**: End-to-end platform for responsible AI

// ## Common Pitfalls to Avoid

// - ❌ Assuming your data is unbiased
// - ❌ Only testing on average cases
// - ❌ Ignoring edge cases and minority groups
// - ❌ Treating fairness as a one-time check
// - ❌ Prioritizing accuracy over fairness

// ## Continuous Improvement

// Responsible AI is not a destination but a journey:

// 1. **Monitor**: Continuously track your system's performance
// 2. **Learn**: Stay updated on latest research and best practices
// 3. **Adapt**: Update your systems as you learn more
// 4. **Engage**: Listen to feedback from affected communities

// ## Conclusion

// Building responsible AI requires intentionality, effort, and ongoing commitment. But it's worth it – we have the opportunity to shape AI that truly benefits everyone.

// Start small, be consistent, and keep learning. You've got this! 🌟
// `
//   }
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
