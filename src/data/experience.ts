export type Experience = {
  id: number;
  company: string;
  initial: string;
  title: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "PayPal Messaging SDK Team",
    initial: "P",
    title: "Software Engineer",
    period: "2024.03 - 2025.10",
    highlights: [
      "Developed frontend SDK features using React and TypeScript.",
      "Improved messaging UI components and interaction quality.",
      "Worked on testing, debugging, and frontend performance optimization.",
    ],
  },
  {
    id: 2,
    company: "Walmart Global Tech",
    initial: "W",
    title: "Senior Software Engineer",
    period: "2023.10 - 2024.02",
    highlights: [
      "Built scalable frontend applications with React and TypeScript.",
      "Integrated GraphQL APIs and improved frontend data flow.",
      "Optimized UI performance and improved user experience.",
    ],
  },
  {
    id: 3,
    company: "PayPal Identity Team",
    initial: "P",
    title: "Software Engineer",
    period: "2022.06 - 2022.10",
    highlights: [
      "Developed GraphQL Layers using Node.js and Express with apollo-server.",
      "queried and manipulated data from various sources, including databases and internal and external APIs.",
      "Worked on testing, debugging, and frontend performance optimization.",
    ],
  },
  {
    id: 4,
    company: "Personal Projects",
    initial: "✦",
    title: "Founder / Developer",
    period: "Ongoing",
    highlights: [
      "Built AI-powered portfolio, sports assistant, and CMS platforms.",
      "Explored AI agents, RAG, and LLM application development.",
    ],
  },
];
