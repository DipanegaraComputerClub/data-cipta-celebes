"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  features: string;
  technologies: string;
  link: string;
  github: string;
  createdAt: string;
}

const ProjectsCarousel = () => {
  const ref = useScrollAnimation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isLoading, setIsLoading] = useState(true);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (projects.length === 0) return;

    autoScrollTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setDirection("right");
    }, 5000);

    return () => clearInterval(autoScrollTimer.current);
  }, [projects.length]);

  const handlePrev = () => {
    if (projects.length === 0) return;
    setDirection("left");
    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
    resetAutoScroll();
  };

  const handleNext = () => {
    if (projects.length === 0) return;
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }
    autoScrollTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
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
            {isLoading ? (
              <div className="aspect-video md:aspect-[16/9] lg:aspect-[20/10] flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
              </div>
            ) : projects.length === 0 ? (
              <div className="aspect-video md:aspect-[16/9] lg:aspect-[20/10] flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">No projects available</p>
              </div>
            ) : (
              <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[20/10]">
                {projects.map((project, index) => {
                  // Parse JSON fields if they're strings
                  const features = typeof project.features === "string" ? JSON.parse(project.features) : (project.features || []);
                  const technologies = typeof project.technologies === "string" ? JSON.parse(project.technologies) : (project.technologies || []);

                  return (
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
                        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 md:h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                        </div>

                        {/* Content Side */}
                        <div className="flex flex-col justify-between overflow-y-auto p-4 md:p-10 lg:p-12">
                          <div>
                            <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:mb-3 md:px-4 md:py-1 md:text-sm">
                              {project.category}
                            </div>
                            <h2 className="mb-2 text-lg font-bold text-black dark:text-white md:mb-4 md:text-3xl lg:text-4xl">
                              {project.title}
                            </h2>
                            <p className="mb-3 text-xs leading-relaxed text-body-color dark:text-body-color-dark md:mb-6 md:text-base lg:text-lg">
                              {project.description}
                            </p>

                            {/* Features */}
                            <div className="mb-3 md:mb-6">
                              <h3 className="mb-2 text-xs font-semibold text-black dark:text-white md:mb-3 md:text-sm">
                                Fitur Utama:
                              </h3>
                              <div className="grid grid-cols-2 gap-1 md:gap-2 lg:grid-cols-3">
                                {Array.isArray(features) && features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-1 md:gap-2"
                                  >
                                    <span className="mt-0.5 flex-shrink-0 text-primary md:mt-1">✓</span>
                                    <span className="text-xs text-body-color dark:text-body-color-dark md:text-sm">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-3 md:mb-6">
                              <h3 className="mb-1 text-xs font-semibold text-black dark:text-white md:mb-2 md:text-sm">
                                Tech Stack:
                              </h3>
                              <div className="flex flex-wrap gap-1 md:gap-2">
                                {Array.isArray(technologies) && technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="rounded-full bg-gray-light px-2 py-0.5 text-xs font-medium text-body-color dark:bg-gray-dark dark:text-body-color-dark md:px-3 md:py-1"
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
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 md:mt-0 md:px-6 md:py-3 md:text-sm"
                          >
                            Lihat Detail →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-gray-dark/80 dark:text-white dark:hover:bg-gray-dark md:left-4 md:p-3"
              aria-label="Previous slide"
            >
              <svg
                className="h-4 w-4 md:h-6 md:w-6"
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
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black transition-all duration-300 hover:bg-white hover:shadow-lg dark:bg-gray-dark/80 dark:text-white dark:hover:bg-gray-dark md:right-4 md:p-3"
              aria-label="Next slide"
            >
              <svg
                className="h-4 w-4 md:h-6 md:w-6"
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
          <div className="mt-4 flex justify-center gap-2 md:mt-8 md:gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 h-2 md:w-8 bg-primary"
                    : "w-2 h-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-dark md:p-8">
            <div className="mb-2 text-2xl font-bold text-primary md:text-3xl">
              {projects.length}+
            </div>
            <p className="text-xs text-body-color dark:text-body-color-dark md:text-base">
              Proyek Selesai
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-dark md:p-8">
            <div className="mb-2 text-2xl font-bold text-primary md:text-3xl">
              {new Set(projects.flatMap((p) => {
                const technologies = typeof p.technologies === "string" ? JSON.parse(p.technologies) : (p.technologies || []);
                return Array.isArray(technologies) ? technologies : [];
              })).size}+
            </div>
            <p className="text-xs text-body-color dark:text-body-color-dark md:text-base">
              Teknologi yang Dikuasai
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-dark md:p-8">
            <div className="mb-2 text-2xl font-bold text-primary md:text-3xl">
              {new Set(projects.map((p) => p.category)).size}+
            </div>
            <p className="text-xs text-body-color dark:text-body-color-dark md:text-base">
              Tipe Aplikasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
