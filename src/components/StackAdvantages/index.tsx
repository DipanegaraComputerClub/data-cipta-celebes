"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const advantagesData: Advantage[] = [
  {
    id: 1,
    title: "Modern Tech Stack",
    description: "Menggunakan teknologi terkini seperti Next.js, React, Node.js, dan Cloud Infrastructure",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Scalable Architecture",
    description: "Arsitektur yang dapat berkembang sesuai pertumbuhan bisnis Anda",
    icon: "📈",
  },
  {
    id: 3,
    title: "Security First",
    description: "Keamanan data dan enkripsi tingkat enterprise adalah prioritas utama",
    icon: "🔒",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Tim support kami siap membantu Anda kapan saja dibutuhkan",
    icon: "🎧",
  },
  {
    id: 5,
    title: "Fast Performance",
    description: "Aplikasi yang dioptimalkan untuk kecepatan dan performa maksimal",
    icon: "⚙️",
  },
  {
    id: 6,
    title: "Custom Solutions",
    description: "Solusi yang fully customized sesuai kebutuhan spesifik bisnis Anda",
    icon: "🎯",
  },
];

const stackData = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
];

const StackAdvantages = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="advantages"
      className="py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Tech Stack & Keunggulan Kami"
          paragraph="Teknologi terdepan dan komitmen excellence untuk memberikan solusi terbaik"
          center
        />

        {/* Advantages Grid */}
        <div className="mb-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {advantagesData.map((advantage, index) => (
            <div
              key={advantage.id}
              className="stagger-item"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-600 text-3xl shadow-lg">
                {advantage.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {advantage.title}
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 border-t border-stroke dark:border-stroke-dark pt-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white">
            Tech Stack Yang Kami Gunakan
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {stackData.map((tech, index) => (
              <div
                key={index}
                className="stagger-item group rounded-lg bg-gray-light p-6 text-center transition-all duration-300 hover:bg-primary/10 dark:bg-gray-dark dark:hover:bg-primary/20"
              >
                <div className="mb-2 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackAdvantages;
