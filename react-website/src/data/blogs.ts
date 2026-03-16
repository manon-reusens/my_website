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
    coverImage: "/images/Quote-welcome-blog.png",
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
    featured: false,
    coverImage: "/images/Quote-thesis-blog.png",
    content: `# Language Models Are Not Neutral

**_Language models like ChatGPT are extremely popular, but they are not neutral. Their answers often reflect the people who built them and that is rarely a representative group of the world’s population. In my PhD thesis, I show how social inequalities find their way into language models, and why that affects everyone._**

## When AI Becomes Socially Biased
You ask a language model to describe a successful entrepreneur.
The answer? A man, technically educated, white, from Silicon Valley.
No woman, no one from the Global South, no social entrepreneur... Why not?
Because language models base their responses on patterns in data and that data comes mostly from English‑language, Western sources. As a result, existing power structures are quietly repeated and reinforced, under the guise of objective technology.

![Representation LLM](/images/ThesisFig1.png "Representation LLM")

In my thesis, I show that these social inequalities stem from how the model is built. The choices made by designers and the selection of training data all contribute to subtle forms of bias. These biases are not only products of modern society, they can also originate from the past.
Together with the National Museum of the Royal Navy, we analyzed how models can make historical archives more accessible via keywords. Original descriptions would be manually composed by the curators based on their expert knowledge and would then be given to an LLM for keyword extraction. Even when terms like <b>"war trophy"</b> were deliberately avoided in the original descriptions, language models still generated such war‑related terms as keywords. Thus, a colonial perspective that is supposedly relegated to history, can be revived through modern technology.


Interactive applications raise new questions as well. Researchers often instruct models to behave according to a particular role or personality ranging from a friendly coach to a critical expert. But which traits are associated with that role? And do models stay consistent?

In our research, we found that models given a specific personality are mostly consistent within an assigned role, but also are consistent in non-explicitly assigned roles, that occur as side effects. These spillover effects of an assigned role are often based on stereotypes learned by the model and default model behavior that the model was taught to deliver. Furthermore, role assignment also increases the risk that people start to attribute human qualities to models. This creates an illusion of authority and responsibility, even though the answers remain driven by design choices and statistical predictions.

## Not Everyone Gets the Same Answer
Bias is not abstract, it has real consequences.
One of our studies showed this clearly, investigating how different users may not receive equally accurate answers. An example is shown below with two annotations, one of a native English speaker and one of a non-native English speaker. The same query produces a more accurate answer for the native speaker, while the non‑native speaker receives a less accurate response. This is an example of what I call "native design bias" in language models, and it can affect millions of non‑native speakers worldwide. 

![Example Native Bias](/images/ThesisFig2.png "Example Native Bias")

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
  {
    id: "what-would-an-llm-pay-for-a-hotel-room",
    title: "Would a Large Language Model Pay Extra for a View?",
    date: "2026-03-16",
    author: "Manon Reusens",
    excerpt: "This blog post summarizes my research on the willingness of large language models to pay for hotel rooms.",
    readTime: "6 min read",
    category: "Research",
    tags: ["Research", "Large Language Models", "Willingness to Pay", "Automated decision-making"],
    featured: true,
    coverImage: "/images/Automated_Decision_Making.png",
    content: `# WWould a Large Language Model Pay Extra for a View?
Consider the example depicted above.

An AI Agent is tasked with booking a hotel room in hotel X in Antwerp Belgium for one night for a user. The agent can use some tools to execute this task, for example looking on the internet for availabilities in the hotel on this date. The agent finds that the hotel still has two rooms available:
* one hotel room with a city view for €50 
* one hotel roomwith a harbor view for €100.

If this is the only information that the agent has, it might decide to book the city view room for €50, as it is the cheaper option and meets the basic requirement of being a room in hotel X. 

However, if the agent has access to more information about the **user's preferences, budget, and past behavior**, it might decide to book the harbor view room for €100, as it might be more aligned with the user's preferences and willingness to pay.
This is also depicted on the figure below, where the agent uses this information to make a decision that is more personalized and potentially more satisfying for the user, even if it is not the cheapest option available.
![Automated Decision Making with User Information](/images/Automated_Decision_Making2.png "Automated Decision Making with User Information")

Building on this idea, we explore how Large Language Models(LLMs) make decisions and trade-offs in our latest research paper [Would a Large Language Model Pay Extra for a View? Inferring Willingness to Pay from Subjective Choices](https://arxiv.org/pdf/2602.09802), we investigate the willingness to pay (WTP) of LLMs for different features of hotel rooms and how it compares to human WTP values. 
Our results show that while larger LLMs produce coherent WTP estimates, they often overvalue several features. We also find that these valuations can be influenced through thoughtful prompt design. Given that LLMs are in general willing to pay more than humans, adding previous choices of customers improves human alignment when these choices were made in favor of cheaper rooms.

Below, you can find a general outline of our methodology and results and the practical implications of our findings for practitioners who want to use LLMs for automated decision making.

## Our Methodology
Below, you find a concise overview of the main steps we took to derive WTP values from LLMs and compare them to human WTP values.

1. We gathered hotel room features based on a human study to generate dilemmas that different LLMs would have to solve.
2. We prompted LLMs to make choices between the different hotel room options for all generated dilemmas. 
3. Based on these choices, we used a multinomial logit model, often used in behavioral economics, to approximate the preferences of LLMs.
4. We derived the WTP values based on the estimated multinomial logit model and compared them to human WTP values.

## Results
We conducted our experiments in several stages. We began by analyzing the plain LLM responses, meaning the model had no information about the user’s preferences or past choices.
![WTP without User Information](/images/WTP_no_info.png "WTP without User Information")

These initial results highlight that, for several features, there are substantial gaps between human WTP values (shown by the red dashed line) and the LLM‑derived WTP values (the bars). One of the clearest examples is the hotel club access feature, which LLMs consistently overvalue. Interestingly, when we shortened the description of what “hotel club access” includes, the models’ valuations dropped. This demonstrates how sensitive LLMs are to prompt phrasing and how targeted wording can nudge them closer to desired behavior.
In general, we also see differences in specific LLM behavior. For example, Gemini-3-pro seems most aligned with human behavior overall, while Llama 3.3 70B seems least aligned.

Next, we examined what happens when we introduce user information—specifically, data on user preferences and previous choices. Since LLMs tend to overestimate WTP in general, providing user histories that favor cheaper rooms helps pull their valuations closer to human levels. However, adding user profiles does not always improve nuance. In fact, in some cases, especially with Gemini‑3‑pro, the valuations become too extreme.
This shows that while user information can enhance alignment, it can also lead to oversimplification. In other words, personalization can help, but it needs to be handled carefully when LLMs are used for automated decision‑making tasks.

## Practical Implications
Our study comes with several practical implications for practitioners who want to use LLMs for automated decision making:
> 1. Smaller models are less suitable for automated decision making.

Although it might be easier to implement a smaller model, given its lower compute requirements, it is important to be aware that these smaller models are often more influenced by the order bias.
Therefore, they might be - for now - less suitable for automated decision making. 

> 2. LLMs can be steered to act as how you prefer.

LLMs are highly prompt sensitive. That means that the way a question is posed or a statement is phrased, highly influences the final response.
Therfore, careful prompt formulation can steer LLMs to act according to your preferences. For example, in our study, we were able to steer the LLMs to put less value on the hotel club access by shortening the description of what "hotel club access" includes.
However, this also means that practitioners should be careful when implementing LLMs for automated decision making, as the way the prompt is formulated can have a big impact on the final response of the LLM.

> 3. Carefully create user profiles
 
Adding user information can help LLMs better align with human preferences, but it can also reduce nuance and oversimplify what a user actually wants. This means that user profiles should be applied carefully when personalizing automated decisions.

These specific implications can be synthesized into a more general finding, namely that practitioners should be careful when implementing LLMs for automated decision-making and that thorough testing of their pipelines is required.


`
  },
  // {
  //   id: "getting-started-with-responsible-ai",
  //   title: "Getting Started with Responsible AI",
  //   date: "2025-12-05",
  //   author: "Manon Reusens",
  //   excerpt: "A practical guide for developers and researchers who want to build more ethical AI systems.",
  //   readTime: "7 min read",
  //   category: "Tutorial",
  //   tags: ["Responsible AI", "Ethics", "Tutorial", "Best Practices"],
  //   featured: false,
  //   content: `# Getting Started with Responsible AI

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
