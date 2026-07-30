// Edit this file with your real information.

export const profile = {
  name: "Anvith Thumma",
  title: "Data Scientist",
  tagline:
    "I turn messy, large-scale datasets into statistical insight and AI-powered products.",
  bio: "I'm a Data Science graduate with hands-on experience building Python/R data pipelines, ELT workflows, statistical models, and full-stack AI applications. I've worked with large-scale healthcare datasets, including 30M+ Medicare claims records and county-level public health data, and I care about turning that kind of scale into findings people can actually use.",
  location: "Tempe, AZ",
  email: "anvith.thumma@gmail.com",
  resumeUrl: "/resume.docx",
  social: [
    { label: "GitHub", url: "https://github.com/Anvith-Thumma" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/anvithumma" },
  ],
};

export const projects = [
  {
    title: "Pickleball Coach AI",
    icon: "pickleball",
    summary: "An AI coaching platform that turns your play style into a personalized game plan.",
    detail: [
      "Developed a full-stack AI coaching platform that delivers personalized training recommendations and strategic player analysis.",
      "Architected RESTful APIs for coaching chat, player assessment, similarity analysis, and AI-generated scouting reports.",
      "Designed a 22-question Player DNA assessment that maps user responses into a 14-dimensional normalized player vector for skill profiling and recommendation generation.",
      "Developed an AI-powered cosine similarity engine to match user profiles against a dataset of 50+ professional athletes, enabling personalized insights.",
      "Built a React interface integrated with AI capabilities for player onboarding, assessment intake, and AI-assisted coaching feedback.",
    ],
    tags: ["React", "Node.js", "Express", "Anthropic Claude"],
    links: [
      { label: "GitHub", url: "https://github.com/Anvith-Thumma/pickleball-coach" },
    ],
  },
  {
    title: "Statistical Analysis of Vision Health Disparities in the U.S.",
    icon: "vision",
    summary: "A statistical deep-dive into vision healthcare access across 30M+ Medicare recipients.",
    detail: [
      "Developed Python-based ELT pipelines to extract, transform, and analyze Medicare claims covering 30 million+ insured individuals.",
      "Integrated county-level income, race, and ethnicity data to assess vision healthcare disparities across U.S. populations.",
      "Applied statistical inference, exploratory data analysis, and comparative testing to identify significant differences in healthcare access among Black, Hispanic, and Native American populations.",
      "Performed feature engineering using Cook's Distance to identify influential observations and improve model robustness.",
      "Built and evaluated predictive models using polynomial regression and decision tree algorithms to forecast regional health trends.",
    ],
    tags: ["Python", "Statistical Inference", "Machine Learning"],
    links: [
      { label: "Paper — Part 1", url: "/vision-health-disparities-part1.pdf" },
      { label: "Paper — Part 2", url: "/vision-health-disparities-part2.pdf" },
    ],
  },
];

export const experience = [
  {
    role: "Undergraduate Researcher",
    company:
      "Carnegie Mellon University / UnitedHealth Group — Bridges to Healthcare & Technology Program",
    period: "June 2025 — July 2025",
    description:
      "Built Python and R data pipelines to clean, transform, and analyze health datasets spanning 3,100+ U.S. counties. Engineered and compared regression models to evaluate obesity predictors, identifying physical inactivity as the strongest predictor and validating the Food Environment Index as ~4x more significant than limited food access.",
  },
];

export const education = [
  {
    school: "Arizona State University",
    degree: "B.S. in Data Science, Minor in Business",
    period: "May 2026",
  },
];
