import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Yash Chauhan",
    role: "cs student",
    tagline: "Building AI-powered applications, cloud-native systems, and developer tools",
    bio: "Computer Science student at MIT Manipal focused on full-stack development, AI systems, and cloud technologies. Built and deployed projects involving React, Node.js, AWS, Docker, MongoDB, FastAPI, and machine learning, with experience ranging from SaaS platforms to real-time monitoring systems and AI-driven analytics tools.",
    location: "Noida, India",
    email: "yashchauhan.2303@gmail.com",
    github: "https://github.com/YashChauhan-2303",
    githubUsername: "@YashChauhan-2303",
    linkedin: "https://www.linkedin.com/in/yashchauhan2303/",
    linkedinUsername: "in/yashchauhan2303",
    resume: "https://yashchauhan-2303.github.io/Resume/YashChauhan_Resume.pdf",
    readCv: "https://yashchauhan-2303.github.io/Resume/YashChauhan_Resume.pdf",
  },

  hero: {
    heading: "Yash Chauhan.",
    subheading:
      "Full-Stack Developer and AI Engineer building scalable web applications, intelligent systems, and cloud-native solutions using React, Node.js, AWS, Docker, and modern AI technologies.",
    ctaText: "Get in touch",
    location: "Noida · India",
  },

  experience: [
  {
    role: "Freelance Web Developer",
    org: "AarVee International",
    period: "Jul 2026 — Aug 2026",
    detail:
      "Designed and developed a modern catalogue website for an industrial sewing machine spare parts business using Next.js, React, TypeScript, and Tailwind CSS. Built advanced product search, category navigation, responsive interfaces, and integrated a WhatsApp enquiry workflow to streamline customer interactions.",
  },
  {
    role: "LoopMIT Team Member",
    org: "MIT Manipal",
    period: "Aug 2024 — Mar 2025",
    detail:
      "Developed software modules for real-time monitoring and control of an autonomous Hyperloop pod. Worked with live telemetry streams, sensor visualization, and safety-critical alert systems for operational monitoring.",
  },
  {
    role: "Open Source Contributor",
    org: "Social (Formerly Script Foundation)",
    period: "Jun 2025 — Aug 2025",
    detail:
      "Contributed features, bug fixes, and documentation improvements across collaborative open-source projects while participating in review-driven development workflows.",
  },
],

  achievements: [
    {
      year: "2026",
      title: "ET-AI Hackathon 2026 Semi-Finalist",
      detail:
        "Selected as a Semi-Finalist in the ET-AI Hackathon 2026 for developing an AI-driven solution among competing teams nationwide.",
    },
    {
      year: "2025",
      title: "Winner — SoftLaunch Hackathon",
      detail: "Won ₹15,000 for building a voice-to-SQL analytics and data visualization platform.",
    },
    {
      year: "2025",
      title: "Amazon ML Challenge Top 500",
      detail:
        "Ranked among the Top 500 teams out of 10,000+ participants, achieving a best rank of 318.",
    },
    {
      year: "2025",
      title: "Best Pod Demonstration",
      detail:
        "Awarded at the IIT Madras Global Hyperloop Competition for contributions to LoopMIT's Hyperloop pod system.",
    },
    {
      year: "2025",
      title: "Runner-Up — Odyssey Retro Web Reboot",
      detail: "Secured second place in the IEEE MIT Manipal web development competition.",
    },
  ],

  projects: [
    {
      year: "2026",
      title: "SoloFlow",
      description:
        "Full-stack SaaS platform for freelancers featuring client management, task tracking, Kanban workflows, invoicing, analytics, and productivity monitoring. Containerized with Docker and deployed on AWS EC2 with CI/CD automation.",
      stack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "Docker",
        "AWS EC2",
        "GitHub Actions",
      ],
      link: "https://github.com/YashChauhan-2303/SoloFlow",
    },

    {
      year: "2026",
      title: "Antibiotic Resistance Predictor",
      description:
        "Machine learning system that predicts resistance patterns across 15 antibiotics using patient and diagnostic data. Includes FastAPI inference endpoints and a React frontend for real-time predictions.",
      stack: ["Python", "Machine Learning", "FastAPI", "React", "Scikit-learn"],
      link: "https://github.com/YashChauhan-2303/Antibiotic-Resistance-Predictor",
    },

    {
      year: "2025",
      title: "Voice to Visualization",
      description:
        "AI-assisted analytics platform that converts voice and natural language inputs into executable SQL queries using Gemini API and visualizes results through an interactive dashboard.",
      stack: ["React", "Node.js", "Gemini API", "SQL", "NLP", "Data Visualization"],
      link: "https://github.com/YashChauhan-2303/voiceToSQL",
    },

    {
      year: "2025",
      title: "LoopMIT Pod GUI",
      description:
        "Real-time monitoring and control system for an autonomous Hyperloop pod. Processes live telemetry streams, visualizes sensor data, and implements anomaly detection and safety alert mechanisms.",
      stack: ["Python", "Real-Time Systems", "Sensor Analytics", "Data Visualization"],
      link: "https://github.com/YashChauhan-2303/LoopMIT-ESP32SensorCodes-with-HeartBeat-Integrated",
    },
  ],

  education: {
    period: "2023 — 2027",
    institution: "Manipal Institute of Technology",
    degree: "B.Tech Computer Science Engineering",
    gpa: "8.15 CGPA",
    coursework:
      "Data Structures & Algorithms, Database Systems, Operating Systems, Probability & Statistics",
  },

  skills: [
    {
      label: "Languages",
      items: ["Python", "C++", "JavaScript", "SQL"],
    },
    {
      label: "Frontend",
      items: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"],
    },
    {
      label: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS EC2", "Docker", "Docker Compose", "GitHub Actions", "CI/CD"],
    },
    {
      label: "AI / ML",
      items: ["Neural Networks", "Supervised Learning", "Model Evaluation", "Data Analysis"],
    },
  ],

  now: {
    prompt: "yash@portfolio ~ %",
    learning: "AI Engineering & System Design",
    reading: "Building scalable AI-powered applications",
    building: "Anthropic-powered AI project",
    listening: "Lo-fi, Synthwave & Deep Focus",
    coffee: "Cold coffee > hot coffee",
    status: "Actively seeking Software Engineering and AI internships",
  },

  footer: {
    tagline: "Full-Stack Developer | AI Engineer | Cloud Enthusiast",
    colophon: "Built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    lastUpdated: "Last updated · May 2026",
  },
};
