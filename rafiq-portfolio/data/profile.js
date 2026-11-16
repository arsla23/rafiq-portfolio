// All the text on the site lives here. Edit this file to update the portfolio.
// Links set to null are hidden until you fill them in.

export const profile = {
  name: "Mohd Rafiq Mir",
  shortName: "Rafiq Mir",
  role: "RPA and AI developer",
  intro:
    "I find the task someone does by hand every day and make it run on its own. Second-year Computer Science student at IIUM and part-time developer, building AI automation with Python, Microsoft Azure, Power Automate and UiPath.",
  location: "Kuala Lumpur, Malaysia",
  timeZone: "Asia/Kuala_Lumpur",
  status: "Open to automation projects and internships",
  email: "meerarslan27@gmail.com",
  links: {
    linkedin: null, // e.g. "https://www.linkedin.com/in/yourname"
    github: null, // e.g. "https://github.com/yourname"
    cv: null, // e.g. "/cv.pdf" after you put cv.pdf in the public folder
  },
  photo: "/photo.jpg",
  about: [
    "I work part-time as a software developer while studying. I've built data scraping pipelines on Microsoft Azure, workflows in Python, Power Automate and UiPath, and AI automation on top of ChatGPT and DALL·E that writes content, summarises reports and handles email.",
    "Alongside work I'm studying Computer Science at the International Islamic University Malaysia, where coursework has taken me into assembly language, routing and machine learning.",
    "Outside of code: reading, football, trying new tech, and making digital content.",
  ],
  facts: [
    ["Studying", "Bachelor of Computer Science, IIUM Gombak"],
    ["CGPA", "3.73"],
    ["Working at", "Scout Sparrow, Bangsar (part-time)"],
    ["Graduating", "October 2027"],
  ],
};

export const work = [
  {
    title: "Software developer (part-time)",
    org: "Scout Sparrow",
    place: "Bangsar",
    when: "April 2025 to present",
    stat: { value: "2–3 h", label: "of manual work saved per day for each client" },
    points: [
      "Design and build automated workflows in Python, Power Automate and UiPath that take over repetitive business tasks.",
      "Build AI-powered tools with ChatGPT and DALL·E for content generation, report summaries and email automation.",
      "Delivered projects for small businesses and student organisations.",
      "Create end-to-end mini-projects that scrape data, summarise it with AI and send automated reports.",
    ],
    tools: ["Python", "Power Automate", "UiPath", "ChatGPT", "DALL·E"],
  },
];

// size: "wide" | "tall" | "full" | "normal" controls the grid layout
export const projects = [
  {
    id: "azure",
    title: "Data scraping on Microsoft Azure",
    kind: "Automation",
    size: "wide",
    visual: "cloud",
    text:
      "Scraping pipelines that run in Microsoft Azure: they collect data from websites automatically, clean it, and store it ready for reports and analysis, with no manual copying.",
    tools: ["Microsoft Azure", "Python", "Web scraping"],
  },
  {
    id: "ospf",
    title: "OSPF network, troubleshot with AI",
    kind: "Networking",
    size: "tall",
    visual: "routers",
    text:
      "Built and verified a two-router OSPF network in Cisco Packet Tracer. Then led the AI-assisted troubleshooting: putting faults to an AI model, checking each proposed fix against the router output myself, repeating trials and writing up how reliable its answers were.",
    tools: ["OSPF", "Cisco Packet Tracer", "AI evaluation"],
  },
  {
    id: "ai-automation",
    title: "AI automation",
    kind: "AI",
    size: "normal",
    visual: "agent",
    text:
      "Workflows where AI does the thinking step: summarising long reports, drafting email replies and generating content and images, triggered automatically through Power Automate and UiPath.",
    tools: ["AI automation", "ChatGPT", "DALL·E", "Power Automate", "UiPath"],
  },
  {
    id: "pipeline",
    title: "Scrape, summarise, report",
    kind: "Automation",
    size: "normal",
    visual: "pipeline",
    text:
      "An end-to-end pipeline that collects data from the web, has an AI model pull out what matters, and sends it as an automated report.",
    tools: ["Python", "Web scraping", "ChatGPT", "Automated reporting"],
  },
  {
    id: "aquasense",
    title: "AquaSense",
    kind: "Embedded systems",
    size: "full",
    visual: "registers",
    text:
      "An IoT system for automated fish farming, written in MIPS assembly and simulated in MARS. Group project for BICS 2304, now in the design phase.",
    tools: ["MIPS assembly", "MARS", "Computer architecture"],
  },
];

export const skills = [
  { group: "Automation", items: ["Python", "Microsoft Azure", "Power Automate", "UiPath", "Web scraping", "Automated reporting"] },
  { group: "AI", items: ["AI automation", "ChatGPT", "DALL·E", "AI evaluation", "Machine learning"] },
  { group: "Engineering", items: ["Debugging", "Software testing", "Version control", "Code optimisation"] },
  { group: "Systems", items: ["MIPS assembly", "MARS", "Computer architecture", "OSPF", "Cisco Packet Tracer"] },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "International Islamic University Malaysia, Gombak",
  when: "October 2024 to October 2027",
  grade: "CGPA 3.73",
  courses: [
    "Machine Learning (BICS 4340)",
    "Computer Architecture and Assembly Language (BICS 2304)",
    "Data Structures and Algorithms",
    "Decision Science",
  ],
};

export const certificates = [
  ["UiPath RPA Developer Foundation", "UiPath Academy"],
  ["Power Automate", "Microsoft Learn"],
  ["AI and Machine Learning", "Microsoft Learn"],
  ["Python for Data Science", "DataCamp"],
  ["Computer Networking", "Cisco Networking Academy"],
];

export const languages = [
  ["Kashmiri", "Native"],
  ["English", "C2"],
  ["Urdu", "C2"],
  ["Hindi", "C2"],
  ["Arabic", "A2"],
  ["Turkish", "A2"],
];
