// Mock data for Backend Developer Portfolio

export const mockData = {
  // Personal Info
  personal: {
    name: "Ananda Ikhsan",
    title: "Backend Developer",
    tagline: "Building scalable systems and robust APIs",
    bio: "Passionate backend developer with 5+ years of experience designing and implementing scalable distributed systems. Specialized in microservices architecture, API development, and database optimization. Strong advocate for clean code and test-driven development.",
    email: "amikhsan99@gmail.com",
    phone: "+62 88980619746",
    location: "Yogyakarta, Indonesia",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },

  // Work Experience
  experience: [
    {
      id: 1,
      company: "Appfuxion Indonesia",
      position: "Backend Developer",
      period: "November 2022 - November 2025",
      location: "Tangerang, Indonesia",
      description: "Contributed as a backend developer to multiple enterprise projects, including ETL for e-invoice, ESG reporting, and Silverlake Axis banking batch processing. Developed backend systems using Spring Boot and Spring Batch, focusing on reliability, performance, and maintainability. Wrote technical documentation and collaborated with cross-functional teams to support project delivery.",
      achievements: [
        "Developed ETL batch jobs for e-invoice project, automating data extraction and transformation workflows.",
        "Built backend modules for ESG reporting system to support sustainability data tracking and submission.",
        "Contributed to Silverlake Axis banking project by implementing EOD batch processing with Spring Batch.",
        "Improved code quality and maintainability through documentation and collaborative reviews"
      ]
    },
    {
      id: 2,
      company: "Erasys Consulting",
      position: "Backend Developer",
      period: "May 2021 - November 2022",
      location: "Yogyakarta, Indonesia",
      description: "Worked as a backend developer on the UOB Infinity digital business banking platform. Developed and maintained backend services using Spring Boot and Apache Camel, supporting integrations, routing, and data processing. Collaborated with QA and frontend teams to ensure feature stability and compliance.",
      achievements: [
        "Implemented RESTful APIs and routing logic for business banking services.",
        "Built and tested backend integrations with third-party and internal banking systems.",
        "Wrote unit tests to ensure reliability and maintain high code quality.",
        "Supported deployment and troubleshooting across staging and production environments."
      ]
    },
    {
      id: 3,
      company: "Divistant Indonesia",
      position: "Backend Developer",
      period: "January 2020 - May 2021",
      location: "Yogyakarta, Indonesia",
      description: "Contributed to the development of a Disaster Reporting System using PHP Laravel. Implemented backend APIs and business logic to manage disaster data, user submissions, and notifications. Worked closely with the frontend team to ensure consistent and reliable data flow..",
      achievements: [
        "Designed and implemented RESTful APIs for disaster reporting and user management.",
        "Integrated authentication and role-based access control.",
        "Enhanced system reliability through improved data validation and error handling.",
        "Delivered backend documentation to support long-term maintenance."
      ]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Universitas Negeri Yogyakarta",
      degree: "Bachelor of Education",
      field: "Informatics Engineering",
      period: "2017 - 2024",
      location: "Yogyakarta, Indoensia",
      description: "Focused on distributed systems, database management, and software engineering principles."
    }
  ],

  // Skills
  skills: {
    languages: [
      { name: "Java", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "SQL", level: 92 },
      { name: "TypeScript", level: 80 },
      { name: "PHP", level: 80 }
    ],
    frameworks: [
      { name: "Spring Boot", level: 85 },
      { name: "Laravel", level: 88 },
      { name: "Quarkus", level: 87 }
    ],
    databases: [
      { name: "PostgreSQL", level: 93 },
      { name: "Redis", level: 88 },
      { name: "MySQL", level: 85 }
    ],
    tools: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 88 },
      { name: "Git", level: 95 },
      { name: "Jenkins", level: 80 },
      { name: "Kafka", level: 83 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Distributed Task Scheduler",
      description: "Built a distributed task scheduling system handling 100K+ tasks daily with fault tolerance and auto-scaling capabilities.",
      tech: ["Python", "Redis", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      github: "https://github.com/example/task-scheduler",
      demo: null
    },
    {
      id: 2,
      title: "Real-time Analytics API",
      description: "Developed high-performance API for real-time analytics processing 10M+ events per day with sub-100ms latency.",
      tech: ["Go", "PostgreSQL", "Redis", "GraphQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com/example/analytics-api",
      demo: null
    },
    {
      id: 3,
      title: "Microservices E-commerce Backend",
      description: "Architected microservices-based e-commerce platform with payment processing, inventory management, and order fulfillment.",
      tech: ["Java", "Spring Boot", "MongoDB", "Kafka"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "https://github.com/example/ecommerce-backend",
      demo: null
    },
    {
      id: 4,
      title: "Authentication Service",
      description: "Built OAuth2/JWT-based authentication service with multi-factor authentication and session management.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop",
      github: "https://github.com/example/auth-service",
      demo: null
    }
  ],

  // Social Links
  social: {
    github: "https://github.com/anandaikhsan",
    linkedin: "https://www.linkedin.com/in/ananda-ikhsan/",
    email: "amikhsan99@gmail.com"
  }
};
