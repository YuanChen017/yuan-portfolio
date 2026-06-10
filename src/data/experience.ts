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
    company: "Walmart Global Tech",
    initial: "W",
    title: "Senior Software Engineer",
    period: "2022.06 - Present",
    highlights: [
      "Built scalable frontend applications with React and TypeScript.",
      "Integrated GraphQL APIs and improved frontend data flow.",
      "Optimized UI performance and improved user experience.",
    ],
  },
  {
    id: 2,
    company: "PayPal",
    initial: "P",
    title: "Software Engineer II",
    period: "2020.03 - 2022.05",
    highlights: [
      "Developed frontend SDK features using React and TypeScript.",
      "Improved messaging UI components and interaction quality.",
      "Worked on testing, debugging, and frontend performance optimization.",
    ],
  },
  {
    id: 3,
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
