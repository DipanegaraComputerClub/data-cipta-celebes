"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";

interface Project {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Platform e-commerce lengkap dengan payment gateway dan inventory management",
    icon: "🛒",
    category: "Web App",
  },
  {
    id: 2,
    name: "Mobile Banking App",
    description: "Aplikasi perbankan mobile dengan fitur transfer, pembayaran, dan investasi",
    icon: "🏦",
    category: "Mobile App",
  },
  {
    id: 3,
    name: "Dashboard Analytics",
    description: "Dashboard real-time untuk monitoring data dan analytics bisnis",
    icon: "📊",
    category: "Web App",
  },
  {
    id: 4,
    name: "CRM System",
    description: "Sistem manajemen customer relationship untuk meningkatkan efisiensi sales",
    icon: "👥",
    category: "Web App",
  },
  {
    id: 5,
    name: "Learning Management",
    description: "Platform pembelajaran online dengan video, quiz, dan progress tracking",
    icon: "📚",
    category: "Web App",
  },
  {
    id: 6,
    name: "IoT Control System",
    description: "Sistem kontrol IoT untuk smart home dan industrial automation",
    icon: "⚙️",
    category: "IoT",
  },
];

const ProjectsList = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="projects"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Daftar Aplikasi & Proyek"
          paragraph="Portofolio lengkap aplikasi dan software yang telah kami kembangkan untuk klien dari berbagai industri"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="stagger-item rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-dark"
            >
              <div className="mb-6 text-5xl">{project.icon}</div>
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                {project.category}
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {project.name}
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
