export type TechStackDetail = {
  frontend?: string[];
  backend?: string[];
  ai?: string[];
  devops?: string[];
};

export type Project = {
  id: number;
  title: string;
  cnTitle: string;
  description: string;
  cnDescription: string;
  techStack: string[];
  image: string;
  highlights: string[];
  techStackDetail: TechStackDetail;
  myRole: string[];
  type: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "StretchFlow",
    cnTitle: "AI驱动的弹性学习平台",
    description:
      "An AI-powered adaptive learning platform that personalizes stretching and wellness routines using intelligent agents. Features real-time recommendations, progress tracking, and a seamless mobile-first experience.",
    cnDescription: "AI 驱动的个性化拉伸与健康管理平台，利用智能代理实时推荐训练计划，支持进度跟踪与移动端优先体验。",
    techStack: ["Next.js", "TypeScript", "AI Agents", "Tailwind CSS"],
    image: "/images/project-stretchflow.png",
    highlights: [
      "Built AI recommendation engine with LangChain and OpenAI",
      "Designed adaptive learning algorithm for personalized plans",
      "Achieved 95+ Lighthouse performance score",
      "Implemented real-time progress tracking with WebSockets",
    ],
    techStackDetail: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "PostgreSQL", "Prisma", "REST API"],
      ai: ["LangChain", "OpenAI GPT-4", "Vector DB", "RAG Pipeline"],
    },
    myRole: [
      "Designed system architecture from scratch",
      "Built AI agent pipeline and prompt engineering",
      "Implemented full-stack features end-to-end",
      "Deployed and maintained on Vercel + AWS",
    ],
    type: "Main Project",
    liveUrl: "https://stretchflow.vercel.app",
    githubUrl: "https://github.com/yuanchen/stretchflow",
  },
  {
    id: 2,
    title: "PerformanceSport CMS",
    cnTitle: "运动表现与内容管理系统",
    description:
      "A full-featured content management system for sports performance data, video assets, and athlete analytics. Built with a modern GraphQL API and optimized for editorial workflows.",
    cnDescription: "运动表现数据、视频资源与运动员分析的全功能内容管理系统，采用现代 GraphQL API，针对编辑工作流进行优化。",
    techStack: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    image: "/images/project-cms.png",
    highlights: [
      "Designed a scalable GraphQL schema for complex data",
      "Built rich text editor with media embedding support",
      "Implemented role-based access control (RBAC)",
      "Reduced API response time by 60% with DataLoader",
    ],
    techStackDetail: {
      frontend: ["React", "TypeScript", "Apollo Client", "Draft.js"],
      backend: ["Node.js", "Express", "GraphQL", "PostgreSQL"],
      devops: ["Docker", "AWS EC2", "GitHub Actions", "Nginx"],
    },
    myRole: [
      "Architected GraphQL API and database schema",
      "Built React dashboard with drag-and-drop interface",
      "Set up CI/CD pipeline and Docker deployment",
      "Led code review and performance optimization",
    ],
    type: "Full-Stack Project",
    liveUrl: "https://performancesport-cms.vercel.app",
    githubUrl: "https://github.com/yuanchen/performance-cms",
  },
  {
    id: 3,
    title: "AI Portfolio",
    cnTitle: "AI驱动的个人作品集展示",
    description:
      "An AI-powered personal portfolio featuring an interactive assistant that answers questions about my work, skills, and experience. Built with MDX for rich content and deployed on Vercel.",
    cnDescription: "AI 助手驱动的个人作品集，内置互动助手可回答关于我的工作、技能和经历的问题，使用 MDX 构建富文本内容。",
    techStack: ["Next.js", "AI Agents", "MDX", "Vercel"],
    image: "/images/project-ai-portfolio.png",
    highlights: [
      "Integrated AI assistant powered by OpenAI embeddings",
      "Built custom MDX rendering pipeline for blog posts",
      "Implemented semantic search over portfolio content",
      "Achieved 100 Lighthouse accessibility score",
    ],
    techStackDetail: {
      frontend: ["Next.js", "TypeScript", "CSS Modules", "MDX"],
      backend: ["Vercel Edge Functions", "OpenAI API"],
      ai: ["OpenAI Embeddings", "Semantic Search", "RAG"],
    },
    myRole: [
      "Designed and built the entire product solo",
      "Implemented AI chat with context retrieval",
      "Wrote all content and documentation",
      "Deployed and optimized on Vercel Edge",
    ],
    type: "Personal Project",
    liveUrl: "https://yuanchen.dev",
    githubUrl: "https://github.com/yuanchen/ai-portfolio",
  },
  {
    id: 4,
    title: "Wuxia Chat",
    cnTitle: "国风武侠 AI 聊天应用",
    description:
      "A Chinese martial arts themed AI chat application featuring characters from classic wuxia novels. Users can converse with AI-powered martial arts masters with unique personalities and knowledge.",
    cnDescription: "以中国武侠小说为主题的 AI 聊天应用，用户可与具有独特性格和知识体系的武侠 AI 大师对话。",
    techStack: ["React", "TypeScript", "TailwindCSS", "OpenAI"],
    image: "/images/project-wuxia.png",
    highlights: [
      "Created unique character personas with system prompts",
      "Built streaming chat UI with real-time token display",
      "Implemented conversation history and memory",
      "Designed immersive Chinese ink-painting themed UI",
    ],
    techStackDetail: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "OpenAI Streaming API"],
      ai: ["GPT-4", "Custom System Prompts", "Context Management"],
    },
    myRole: [
      "Designed wuxia character personas and prompts",
      "Built real-time streaming chat interface",
      "Implemented conversation memory system",
      "Created custom Chinese ink UI design",
    ],
    type: "Personal Project",
    liveUrl: "https://wuxia-chat.vercel.app",
    githubUrl: "https://github.com/yuanchen/wuxia-chat",
  },
  {
    id: 5,
    title: "Insight Dashboard",
    cnTitle: "数据洞察分析看板",
    description:
      "A powerful data visualization dashboard for business intelligence. Supports real-time metrics, custom chart builders, and exportable reports with an intuitive drag-and-drop interface.",
    cnDescription: "强大的商业智能数据可视化看板，支持实时指标、自定义图表构建器和可导出报告，提供直观的拖拽界面。",
    techStack: ["Next.js", "TypeScript", "ECharts", "Node.js"],
    image: "/images/project-dashboard.png",
    highlights: [
      "Built 15+ chart types with Apache ECharts",
      "Implemented drag-and-drop dashboard layout editor",
      "Connected to multiple data sources via REST/GraphQL",
      "Export to PDF, PNG, and CSV formats",
    ],
    techStackDetail: {
      frontend: ["Next.js", "TypeScript", "Apache ECharts", "React DnD"],
      backend: ["Node.js", "Express", "PostgreSQL", "Redis Cache"],
      devops: ["AWS", "Docker", "CI/CD"],
    },
    myRole: [
      "Led frontend architecture and design system",
      "Built ECharts integration and custom extensions",
      "Optimized rendering for large datasets",
      "Implemented export functionality",
    ],
    type: "Full-Stack Project",
    liveUrl: "https://insight-dashboard.vercel.app",
    githubUrl: "https://github.com/yuanchen/insight-dashboard",
  },
  {
    id: 6,
    title: "TaskForge",
    cnTitle: "协作任务管理工具",
    description:
      "A collaborative task management platform with real-time updates, team workspaces, Kanban boards, and AI-assisted task prioritization. Built for remote teams who need to move fast.",
    cnDescription: "具有实时更新、团队工作区、看板和 AI 辅助任务优先级排序的协作任务管理平台，专为高效远程团队打造。",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    image: "/images/project-taskforge.png",
    highlights: [
      "Real-time collaboration with WebSocket updates",
      "AI task prioritization using GPT-4 analysis",
      "Kanban, List, and Calendar view modes",
      "Team workspace with RBAC permissions",
    ],
    techStackDetail: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
      backend: ["Node.js", "PostgreSQL", "Prisma ORM", "Socket.io"],
      ai: ["OpenAI GPT-4", "Task Analysis Prompts"],
    },
    myRole: [
      "Designed database schema with Prisma",
      "Built real-time sync with Socket.io",
      "Implemented AI task prioritization feature",
      "Created Kanban drag-and-drop interface",
    ],
    type: "Full-Stack Project",
    liveUrl: "https://taskforge.vercel.app",
    githubUrl: "https://github.com/yuanchen/taskforge",
  },
];
