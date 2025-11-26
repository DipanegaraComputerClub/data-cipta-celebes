export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  features: string[];
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "Platform e-commerce lengkap dengan sistem pembayaran, inventory management, dan analytics dashboard real-time",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    category: "Web App",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Analytics Dashboard",
      "Multi-vendor Support",
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe API", "AWS"],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    slug: "mobile-banking-app",
    description:
      "Aplikasi perbankan mobile dengan fitur transfer, pembayaran, investasi, dan keamanan tingkat enterprise",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    category: "Mobile App",
    features: [
      "Fund Transfer",
      "Bill Payment",
      "Investment Management",
      "Biometric Security",
      "Transaction History",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "JWT"],
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    slug: "dashboard-analytics",
    description:
      "Dashboard analytics real-time untuk monitoring data bisnis dengan visualisasi data yang komprehensif",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Web App",
    features: [
      "Real-time Data",
      "Custom Reports",
      "Data Visualization",
      "Export to PDF/Excel",
      "Role-based Access",
    ],
    technologies: ["Next.js", "Chart.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: 4,
    title: "CRM System",
    slug: "crm-system",
    description:
      "Sistem manajemen customer relationship untuk meningkatkan efisiensi sales dan customer service",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Web App",
    features: [
      "Customer Management",
      "Sales Pipeline",
      "Email Integration",
      "Task Automation",
      "Performance Analytics",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "SendGrid", "AWS"],
  },
  {
    id: 5,
    title: "Learning Management",
    slug: "learning-management",
    description:
      "Platform pembelajaran online dengan video course, quiz interaktif, dan progress tracking untuk siswa",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Web App",
    features: [
      "Video Streaming",
      "Quiz & Assessment",
      "Progress Tracking",
      "Certificate Generation",
      "Discussion Forum",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "FFmpeg", "AWS S3"],
  },
  {
    id: 6,
    title: "IoT Control System",
    slug: "iot-control-system",
    description:
      "Sistem kontrol IoT untuk smart home dan industrial automation dengan monitoring jarak jauh",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "IoT",
    features: [
      "Remote Control",
      "Real-time Monitoring",
      "Automated Triggers",
      "Mobile App Control",
      "Data Logging",
    ],
    technologies: ["Node.js", "MQTT", "MongoDB", "React", "Arduino"],
  },
];
