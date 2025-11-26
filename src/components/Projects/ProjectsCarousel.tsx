"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";
import { projectsData } from "./projectsData";
import Image from "next/image";

const ProjectsCarousel = () => {
  const ref = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto scroll every 5 seconds
  useEffect(() => {
    autoScrollTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
      setDirection("right");
    }, 5000);

    return () => clearInterval(autoScrollTimer.current);
  }, []);

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
    resetAutoScroll();
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }
    autoScrollTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
      setDirection("right");
    }, 5000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setDirection(index > currentIndex ? "right" : "left");
    resetAutoScroll();
  };

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

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-dark">
            {/* Carousel Slide */}
            <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[20/10]">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : direction === "right"
                        ? index < currentIndex
                          ? "opacity-0 -translate-x-full"
                          : "opacity-0 translate-x-full"
                        : index > currentIndex
                          ? "opacity-0 translate-x-full"
                          : "opacity-0 -translate-x-full"
                  }`}
                >
                  <div className="grid h-full grid-cols-1 md:grid-cols-2">
                    {/* Image Side */}
                    <div className="relative h-full overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12">
                      <div>
                        <div className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                          {project.category}
                        </div>
                        <h2 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl lg:text-4xl">
                          {project.title}
                        </h2>
                        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                          {project.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h3 className="mb-3 text-sm font-semibold text-black dark:text-white">
                            Fitur Utama:
                          </h3>
                          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                            {project.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-1 text-primary">✓</span>
                                <span className="text-sm text-body-color dark:text-body-color-dark">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h3 className="mb-2 text-sm font-semibold text-black dark:text-white">
                            Tech Stack:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="rounded-full bg-gray-light px-3 py-1 text-xs font-medium text-body-color dark:bg-gray-dark dark:text-body-color-dark"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/project/${project.slug}`}
                        className="inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        Lihat Detail Proyek →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-gray-dark/80 dark:text-white dark:hover:bg-gray-dark"
              aria-label="Previous slide"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-gray-dark/80 dark:text-white dark:hover:bg-gray-dark"
              aria-label="Next slide"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators/Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-primary">
              {projectsData.length}+
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              Proyek Selesai
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-primary">
              {new Set(projectsData.flatMap((p) => p.technologies)).size}+
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              Teknologi yang Dikuasai
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
            <div className="mb-2 text-3xl font-bold text-primary">
              {new Set(projectsData.map((p) => p.category)).size}+
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              Tipe Aplikasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
