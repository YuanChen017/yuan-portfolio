export type SkillItem = {
  id: number;
  label: string;
  cnLabel: string;
  icon: string;
  colorClass: string;
};

export type SkillLevel = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const homeSkills: SkillItem[] = [
  {
    id: 1,
    label: "React",
    cnLabel: "前端框架",
    icon: "⚛",
    colorClass: "skill-icon-react",
  },
  {
    id: 2,
    label: "TypeScript",
    cnLabel: "强类型开发",
    icon: "TS",
    colorClass: "skill-icon-ts",
  },
  {
    id: 3,
    label: "Node.js",
    cnLabel: "后端开发",
    icon: "⬡",
    colorClass: "skill-icon-node",
  },
  {
    id: 4,
    label: "GraphQL",
    cnLabel: "数据查询",
    icon: "◈",
    colorClass: "skill-icon-graphql",
  },
  {
    id: 5,
    label: "Next.js",
    cnLabel: "全栈框架",
    icon: "N",
    colorClass: "skill-icon-next",
  },
  {
    id: 6,
    label: "AI Agents",
    cnLabel: "AI助手开发",
    icon: "✦",
    colorClass: "skill-icon-ai",
  },
  {
    id: 7,
    label: "Full-Stack",
    cnLabel: "全栈工程师",
    icon: "◉",
    colorClass: "skill-icon-fullstack",
  },
];

export const skillLevels: SkillLevel[] = [
  { name: "JS / TypeScript", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Backend", level: 85 },
  { name: "AI / Machine Learning", level: 80 },
  { name: "DevOps / Cloud", level: 75 },
  { name: "UI / UX Design", level: 70 },
];

export const techCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "GraphQL", "PostgreSQL"],
  },
  {
    category: "AI / Data",
    items: ["Python", "LangChain", "OpenAI", "Pandas", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions"],
  },
];
