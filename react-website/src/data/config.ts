import type { WebsiteConfig } from '../types';

export const websiteConfig: WebsiteConfig = {
  personal: {
    name: "Manon Reusens",
    title: "PhD",
    tagline: "Expert in Responsible AI & Large Language Models",
    subtitle: "Research Manager at ACRAI | Guest Lecturer at KU Leuven | Bridging technical excellence with societal impact in NLP",
    profileImage: "profile.jpg",
    
    contact: {
      email: "manon.reusens@uantwerpen.be",
      location: "Antwerp & Leuven, Belgium",
      linkedin: "https://www.linkedin.com/in/manon-reusens-0a3b63189",
      scholar: "https://scholar.google.be/citations?user=fvbtYzMAAAAJ",
      orcid: "https://orcid.org/0000-0002-0275-0679",
      github: "https://github.com/manon-reusens"
    },
    
    positions: [
      { title: "Research Manager of ACRAI, University of Antwerp", icon: "briefcase" },
      { title: "Guest Lecturer, KU Leuven", icon: "book" },
    ],
    
    bio: [
      "I am an interdisciplinary researcher specializing in Responsible AI, with a particular focus on bias and fairness in Natural Language Processing and Large Language Models. As Research Manager of the Antwerp Center on Responsible AI (ACRAI), I lead research initiatives that bridge the gap between cutting-edge AI technology and societal responsibility.",
      "My work operates at the intersection of three critical perspectives: technical depth through expertise in NLP and LLMs, societal awareness by examining the human impact of AI systems, and applied translation drawing on my background in business engineering to deliver actionable guidelines for organizations.",
      "I successfully defended my PhD in business economics in June 2025, with a focus on the behavior of LLMs. As Guest Lecturer at KU Leuven, I teach Principles of Database Management, sharing knowledge with the next generation of technologists and business leaders.",
      "Beyond research, I'm passionate about music - I've played cello for 20 years, sing in the band Tomate Cravate, and play piano. This creative pursuit informs my approach to research, encouraging innovative thinking and collaborative problem-solving."
    ],
    
    researchFocus: [
      "Responsible AI Development",
      "Bias & Fairness in LLMs",
      "Explaining LLM behavior",
      "Multilingual NLP",
      "Computational Social Science",
      "AI Ethics for Industry Applications",
      "LLM Persona Consistency"
    ],
    
    expertise: [
      "Bias & Fairness in AI",
      "Large Language Models",
      "Multilingual NLP",
      "Responsible AI",
      "Text Classification",
      "Computational Social Science"
    ],
    
    technicalSkills: [
      "Python (NLP libraries like Hugging Face Transformers and sklearn)",
      "Text Classification & Prompt Engineering",
      "SQL & Database Design",
      "Statistical Analysis",
      "Experimental Design"
    ],
    
    languages: [
      { language: "Dutch", level: "Native" },
      { language: "English", level: "Fluent" },
      { language: "French", level: "Proficient" }
    ]
  },

  keynote: {
    enabled: true,
    headline: "Available for Keynote Speaking",
    description: "I deliver engaging talks on Responsible AI, bias in Large Language Models, and ethical AI deployment for both academic and industry audiences. With experience presenting at international conferences and corporate events, I translate complex AI research into actionable insights.",
    
    topics: [
      {
        title: "Bias & Fairness in Large Language Models",
        description: "Understanding and mitigating bias in AI systems, what to be aware of when deploying LLMs in practice.",
        audience: "Technical & Business Leaders",
        icon: "⚖️"
      },
      {
        title: "Responsible AI: From Research to Practice",
        description: "Bridging the gap between academic AI ethics research and real-world implementation in business contexts.",
        audience: "Industry Practitioners",
        icon: "🔬"
      },
      {
        title: "Multilingual AI & Language Equity",
        description: "How English-centric AI design perpetuates linguistic inequality and what we can do about it.",
        audience: "Academic & Policy Audiences",
        icon: "🌍"
      },
      {
        title: "Other talks available per request",
        description: "Don't see exactly what you need? I can tailor keynotes to your industry and audience.",
        audience: "Business & Ethics Professionals",
        icon: "🤖"
      }
    ],
    
    callToAction: "Interested in having me speak at your event? Let's discuss how I can contribute to your conference, workshop, or corporate event.",
    contactButtonText: "Book a Keynote"
  }
};
