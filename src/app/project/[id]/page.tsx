"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string | null;
  repoUrl: string | null;
  features: string;
  technologies: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const response = await fetch("/api/projects");
        const allProjects: Project[] = await response.json();
        
        // Find project by ID
        const foundProject = allProjects.find((p) => p.id.toString() === id);
        
        if (!foundProject) {
          setError("Project tidak ditemukan");
          setIsLoading(false);
          return;
        }
        
        setProject(foundProject);
        
        // Get related projects (exclude current project, limit to 3)
        const related = allProjects
          .filter((p) => p.id.toString() !== id)
          .slice(0, 3);
        setRelatedProjects(related);
        
      } catch (error) {
        console.error("Failed to fetch project:", error);
        setError("Gagal memuat project");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProjectDetail();
    }
  }, [id]);

  if (isLoading) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="text-center">
            <p className="text-xl text-body-color dark:text-body-color-dark">
              Loading...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
              {error || "Project tidak ditemukan"}
            </h1>
            <Link
              href="/#projects"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-base font-semibold text-white hover:bg-primary/90"
            >
              Kembali ke Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const features = project.features ? JSON.parse(project.features) : [];
  const technologies = project.technologies ? JSON.parse(project.technologies) : [];

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Main Content */}
            <div className="w-full px-4 lg:w-8/12">
              <div>
                {/* Project Header */}
                <div className="mb-6 flex items-center gap-4">
                  <h1 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                    {project.title}
                  </h1>
                  {project.status && (
                    <span className={`rounded-full px-4 py-1 text-sm font-semibold text-white ${
                      project.status.toLowerCase() === 'completed' ? 'bg-green-500' :
                      project.status.toLowerCase() === 'in progress' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}>
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Project Image */}
                <div className="mb-10">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/images/hero/hero-image.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    Tentang Project
                  </h2>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                {features.length > 0 && (
                  <div className="mb-10">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Fitur Utama
                    </h2>
                    <ul className="space-y-3">
                      {features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-base text-body-color dark:text-body-color-dark">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {technologies.length > 0 && (
                  <div className="mb-10">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      Teknologi yang Digunakan
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary/90"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Related Projects */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:shadow-none rounded-sm bg-white px-6 py-8 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2 className="border-b border-body-color/10 pb-4 text-2xl font-semibold text-black dark:border-white/10 dark:text-white">
                  Project Lainnya
                </h2>
                <div className="mt-8 space-y-6">
                  {relatedProjects.length > 0 ? (
                    relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        href={`/project/${relatedProject.id}`}
                        className="group block"
                      >
                        <div className="overflow-hidden rounded-lg">
                          <div className="relative h-32 w-full overflow-hidden">
                            <Image
                              src={relatedProject.image || "/images/hero/hero-image.jpg"}
                              alt={relatedProject.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="text-base font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary line-clamp-2 transition-colors">
                              {relatedProject.title}
                            </h3>
                            <p className="mt-2 text-sm text-body-color dark:text-body-color-dark line-clamp-2">
                              {relatedProject.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Tidak ada project terkait
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
