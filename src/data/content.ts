// ─────────────────────────────────────────────────────────────
// CONTENT CONSTANTS
// All static UI text lives here. Edit this file to update any
// label, heading, copy, or CTA without touching component code.
// Dynamic personal data (email, bio, URLs) stays in profile.ts.
// ─────────────────────────────────────────────────────────────

// ── Navigation ────────────────────────────────────────────────
export const NAV = {
  links: [
    { label: "About",      cn: "关于我", path: "/about" },
    { label: "Skills",     cn: "技能",   path: "/#skills" },
    { label: "Experience", cn: "经历",   path: "/experience" },
    { label: "Projects",   cn: "项目",   path: "/projects" },
    { label: "Contact",    cn: "联系我", path: "/contact" },
  ],
};

// ── Footer ────────────────────────────────────────────────────
export const FOOTER = {
  copyright: "© 2024 Yuan Chen. All rights reserved.",
  builtWith: "Built with React, Vite & ♥",
  backToTop: "回到顶部 Back to Top ↑",
};

// ── Hero Section ──────────────────────────────────────────────
export const HERO = {
  eyebrow: "陈源 · Yuan Chen",
  ctaProjects: "▶ View Projects",
  ctaContact: "Contact Me",
};

// ── Skills Preview (Home) ─────────────────────────────────────
export const SKILLS_PREVIEW = {
  eyebrow: "技能 Skills",
  heading: "Core Technologies",
};

// ── Experience Preview (Home) ─────────────────────────────────
export const EXPERIENCE_PREVIEW = {
  eyebrow: "经历 Experience",
  heading: "Work History",
};

// ── Projects Preview (Home) ───────────────────────────────────
export const PROJECTS_PREVIEW = {
  eyebrow: "项目 Projects",
  heading: "Featured Work",
  cta: "View All Projects →",
};

// ── Contact Preview (Home) ────────────────────────────────────
export const CONTACT_PREVIEW = {
  eyebrow: "联系我 Contact",
  heading: "Let's Build Something Together",
  cta: "Get in Touch →",
  email:   { label: "Email" },
  github:  { label: "GitHub",   value: "github.com/yuanchen" },
  linkedin:{ label: "LinkedIn", value: "linkedin.com/in/yuanchen" },
  resume:  { label: "Resume",   value: "Download PDF" },
};

// ── About Page ────────────────────────────────────────────────
export const ABOUT = {
  eyebrow: "关于我 About Me",
  heading: "关于我",
  ctaResume: "⬇ Download Resume",
  ctaContact: "Contact Me",

  strengthsEyebrow: "核心能力 · Core Strengths",
  strengthsHeading: "What I Bring",

  techEyebrow: "技术栈 · Tech Stack",
  techHeading: "Technologies I Use",

  strengths: [
    {
      icon: "⚙",
      cnLabel: "工程能力",
      enLabel: "Engineering",
      desc: "Focused on reliability, performance & honest implementations that stand the test of time.",
    },
    {
      icon: "◆",
      cnLabel: "用户体验",
      enLabel: "User Experience",
      desc: "Built on usability principles, every detail crafted to enable and delight the user.",
    },
    {
      icon: "⚡",
      cnLabel: "AI与自动化",
      enLabel: "AI & Automation",
      desc: "Building helpful agents, seamlessly enabling intelligent and elegant experiences.",
    },
    {
      icon: "📖",
      cnLabel: "持续学习",
      enLabel: "Continuous Learning",
      desc: "Staying up-to-date, building skills, writing blogs, and always exploring more.",
    },
  ],
};

// ── Experience Page ───────────────────────────────────────────
export const EXPERIENCE = {
  eyebrow: "经历 Experience",
  heading: "工作经历 & 技能",

  workTitle: "工作经历",
  workSubtitle: "Work Experience",

  educationTitle: "教育背景",
  educationSubtitle: "Education",

  education: {
    logo: "UCSD",
    school: "University of California San Diego",
    degree: "Mathematics and Computer Science · Bachelor",
    period: "2019.09 — 2021.06",
  },

  skillsTitle: "技能概览",
  skillsSubtitle: "Skills Overview",

  certsTitle: "证书与荣誉",
  certsSubtitle: "Certificates & Honors",
  certDot: "★",

  certificates: [
    "AWS Certified Developer – Associate",
    "Google Cloud Professional Developer",
    "Top Performance Award – PayPal",
    "Walmart Global Tech – Excellence Award",
  ],
};

// ── Projects Page ─────────────────────────────────────────────
export const PROJECTS = {
  eyebrow: "精选项目 Featured Projects",
  heading: "精选项目",
  subtitleCn: "遴选最佳产品集，我的经历、我的创意，期待您的任何任务。",
  subtitleEn: "A curated collection of my best work — my experience, my creativity. Ready for any challenge.",
  prevPage: "‹",
  nextPage: "›",
};

// ── Project Detail Page ───────────────────────────────────────
export const PROJECT_DETAIL = {
  backLink: "← 返回项目列表",
  notFound: "Project not found",
  featuredBadge: "推荐项目",
  liveDemo: "Live Demo ↗",
  github: "GitHub →",

  highlightsTitle: "项目亮点",
  highlightsSubtitle: "Highlights",

  techTitle: "技术栈",
  techSubtitle: "Tech Stack",
  techLabels: {
    frontend: "Frontend",
    backend: "Backend",
    ai: "AI",
    devops: "DevOps",
  },

  roleTitle: "我的角色",
  roleSubtitle: "My Role",
};

// ── Contact Page ──────────────────────────────────────────────
export const CONTACT = {
  eyebrow: "联系我 Contact",
  heading: "联系我",
  subheading: "Let's connect",
  bodyCn: "期待与您交流合作，用创造力打磨每个产品。",
  bodyEn: "Let's build something meaningful together.",

  details: {
    email:    { label: "Email",    icon: "✉" },
    location: { label: "Location", icon: "📍" },
    status:   { label: "Status",   icon: "🤝", value: "开放合作 Open to Opportunities" },
  },

  form: {
    titleCn: "发送消息",
    titleEn: "Send a Message",
    fields: {
      name:    { label: "姓名 / Name",    placeholder: "Your name" },
      email:   { label: "邮件 / Email",   placeholder: "your@email.com" },
      subject: { label: "主题 / Subject", placeholder: "What's this about?" },
      message: { label: "留言 / Message", placeholder: "Your message..." },
    },
    submit: "发送消息 Send Message →",
    successMsg: "Message sent! I'll get back to you soon.",
  },

  quote: {
    cn: "「代码即刀剑，思维是水，技术与美学共行。」",
    en: '"Code is the sword, ideas are the water, Technology and aesthetics walk together."',
    author: "— Yuan Chen",
  },
};
