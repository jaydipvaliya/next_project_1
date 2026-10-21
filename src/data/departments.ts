import type { Department } from "@/types/department";

export const departments: Department[] = [
  {
    id: "computer-science",
    slug: "computer-science",
    name: "Computer Science",
    code: "CS",
    icon: "code",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledStudentsCount: 320,
    academicLead: "Dr. Evelyn Wright",
    specializations: [
      {
        slug: "web-development",
        name: "Web Development",
        trackCode: "CS-SPEC-04",
        description:
          "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        primaryCoreLab: "Turing Hall 408",
        totalEnrollment: "4 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: ["STU-1042", "STU-1155", "STU-1310", "STU-1388"],
      },
      {
        slug: "artificial-intelligence",
        name: "Artificial Intelligence & ML",
        trackCode: "CS-SPEC-01",
        description:
          "Exploration of machine learning theory, deep neural networks, natural language understanding, and autonomous systems.",
        academicLead: "Dr. Jonathan Hayes",
        primaryCoreLab: "Shannon Lab 204",
        totalEnrollment: "14 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: [],
      },
      {
        slug: "cybersecurity",
        name: "Cybersecurity & Systems Defense",
        trackCode: "CS-SPEC-02",
        description:
          "Network defense, binary exploitation analysis, cryptography, privacy preserving protocols, and applied ethical hacking.",
        academicLead: "Prof. Sarah Jenkins",
        primaryCoreLab: "Lovelace Cyber Range",
        totalEnrollment: "9 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: [],
      },
      {
        slug: "cloud-computing",
        name: "Cloud Architecture & Distributed Systems",
        trackCode: "CS-SPEC-03",
        description:
          "Large-scale distributed systems, container orchestration, event-driven messaging pipelines, and serverless architectures.",
        academicLead: "Prof. David Krum",
        primaryCoreLab: "Hopper Cloud Cluster",
        totalEnrollment: "11 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: [],
      },
    ],
  },
  {
    id: "design",
    slug: "design",
    name: "Design",
    code: "DES",
    icon: "design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledStudentsCount: 185,
    academicLead: "Prof. Clara Hughes",
    specializations: [
      {
        slug: "visual-communication",
        name: "Visual Communication",
        trackCode: "DES-SPEC-02",
        description:
          "Branding systems, typography studios, visual semiotics, and cross-platform creative campaigns.",
        academicLead: "Prof. Maya Sterling",
        primaryCoreLab: "Studio Bauhaus 104",
        totalEnrollment: "6 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: ["STU-1089"],
      },
      {
        slug: "interaction-design",
        name: "Interaction Design",
        trackCode: "DES-SPEC-01",
        description:
          "Human-computer interaction patterns, physical computing, tactile user feedback, and accessibility ergonomics.",
        academicLead: "Prof. Clara Hughes",
        primaryCoreLab: "Studio Bauhaus 102",
        totalEnrollment: "5 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: ["STU-1201"],
      },
      {
        slug: "product-prototyping",
        name: "Product Prototyping",
        trackCode: "DES-SPEC-03",
        description:
          "Rapid physical and digital prototyping, user testing, ergonomics, and production manufacturing workflows.",
        academicLead: "Prof. Liam O'Connor",
        primaryCoreLab: "Maker Space 301",
        totalEnrollment: "7 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: [],
      },
    ],
  },
  {
    id: "business",
    slug: "business",
    name: "Business",
    code: "BUS",
    icon: "business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledStudentsCount: 240,
    academicLead: "Prof. Rebecca Adams",
    specializations: [
      {
        slug: "fintech",
        name: "Financial Technology",
        trackCode: "BUS-SPEC-01",
        description:
          "Algorithmic market making, decentralized finance, financial analytics, and modern payment infrastructure.",
        academicLead: "Prof. Kenneth Ward",
        primaryCoreLab: "Wall Street Simulation Lab",
        totalEnrollment: "8 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: ["STU-1244"],
      },
      {
        slug: "strategic-management",
        name: "Strategic Management",
        trackCode: "BUS-SPEC-02",
        description:
          "Corporate strategy, global market development, organizational agility, and merger execution analytics.",
        academicLead: "Prof. Rebecca Adams",
        primaryCoreLab: "Executive Suite 501",
        totalEnrollment: "6 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: ["STU-1120"],
      },
      {
        slug: "entrepreneurship",
        name: "International Entrepreneurship",
        trackCode: "BUS-SPEC-03",
        description:
          "Venture acceleration, startup fundraising, product-market fit verification, and cross-border commercial law.",
        academicLead: "Prof. Sandeep Patel",
        primaryCoreLab: "Venture Incubator Hub",
        totalEnrollment: "10 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
        studentIds: [],
      },
    ],
  },
];
