"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";

const servicesData = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal dan UI/UX modern."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web Application",
    description: "Aplikasi web responsif dengan teknologi modern seperti Next.js, React, dan Node.js untuk kebutuhan bisnis Anda."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Database Management",
    description: "Perancangan dan optimasi database untuk menjamin keamanan, kecepatan, dan skalabilitas data bisnis Anda."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Integration",
    description: "Integrasi aplikasi dengan layanan cloud seperti AWS, Google Cloud, atau Azure untuk skalabilitas maksimal."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "API Development",
    description: "Pembuatan RESTful API dan GraphQL yang aman, terstruktur, dan mudah diintegrasikan dengan sistem lain."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Maintenance & Support",
    description: "Layanan maintenance rutin dan support teknis untuk memastikan aplikasi Anda berjalan optimal 24/7."
  }
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="services"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Layanan Kami"
          paragraph="Solusi software development lengkap untuk mengakselerasi transformasi digital bisnis Anda"
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="stagger-item group relative overflow-hidden rounded-lg border border-stroke bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:border-stroke-dark dark:bg-gray-dark"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {service.title}
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-150"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20konsultasi%20layanan%20software%20development"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            Konsultasi Gratis
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
