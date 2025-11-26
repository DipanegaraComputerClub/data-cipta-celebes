"use client";

import Link from "next/link";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const { displayedText, isComplete } = useTypewriter({
    text: "Solusi Software & Custom App Development untuk transformasi digital bisnis Anda. Dengan teknologi terkini dan tim profesional, kami siap menghadirkan inovasi yang membuat bisnis Anda berkembang pesat.",
    speed: 30,
    delay: 300,
  });

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pb-16 pt-[120px] dark:from-gray-dark dark:via-gray-dark/90 dark:to-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Left Content */}
            <div className="w-full px-0 lg:w-1/2 lg:px-4">
              <div className="slide-left px-4 lg:px-0">
                <div className="mb-4 inline-block">
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    ✨ Transformasi Digital Dimulai Di Sini
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-5xl">
                  Data Cipta{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Celebes
                  </span>
                </h1>

                <div className="mb-8 min-h-[7rem] text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                  <p>
                    {displayedText}
                    <span
                      className={`inline-block w-1 bg-primary ml-1 ${
                        isComplete ? "animate-pulse" : "animate-blink"
                      }`}
                      style={{
                        height: "1.5em",
                        verticalAlign: "middle",
                      }}
                    />
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20berkonsultasi"
                    className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/50 active:translate-y-0"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      📞 Konsultasi Gratis
                    </span>
                  </Link>
                  <Link
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-primary/5 px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 dark:border-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20"
                  >
                    <span>Lihat Portofolio</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">500+</h3>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Klien Puas</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">200+</h3>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Proyek Sukses</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">10+</h3>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Tahun Expertise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="w-full px-0 lg:w-1/2 lg:px-4 flex justify-center">
              <div className="slide-right w-full max-w-[500px] relative h-[500px]">
                {/* Background Gradient Blob */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-600/10 blur-3xl" />

                  {/* Main Illustration SVG */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 drop-shadow-2xl"
                  >
                    {/* 3D Cube/Box Illustration */}
                    {/* Front face */}
                    <path
                      d="M 100 150 L 250 100 L 400 150 L 250 200 Z"
                      fill="url(#cubeFront)"
                      stroke="url(#cubeStroke)"
                      strokeWidth="2"
                    />
                    {/* Top face */}
                    <path
                      d="M 250 100 L 400 150 L 400 250 L 250 200 Z"
                      fill="url(#cubeTop)"
                      stroke="url(#cubeStroke)"
                      strokeWidth="2"
                    />
                    {/* Left face */}
                    <path
                      d="M 100 150 L 250 200 L 250 400 L 100 350 Z"
                      fill="url(#cubeLeft)"
                      stroke="url(#cubeStroke)"
                      strokeWidth="2"
                    />

                    {/* Floating Elements */}
                    <circle cx="150" cy="80" r="15" fill="#4A6CF7" opacity="0.6" />
                    <circle cx="420" cy="320" r="12" fill="#0EA5E9" opacity="0.5" />
                    <circle cx="80" cy="420" r="10" fill="#4A6CF7" opacity="0.4" />

                    {/* Icons in cube */}
                    {/* Code Icon */}
                    <g transform="translate(230, 150)">
                      <text x="0" y="20" fontSize="30" fill="white" textAnchor="middle">
                        &lt;/&gt;
                      </text>
                    </g>

                    {/* Database Icon */}
                    <g transform="translate(350, 200)">
                      <text x="0" y="20" fontSize="28" fill="white" textAnchor="middle">
                        💾
                      </text>
                    </g>

                    {/* Rocket Icon */}
                    <g transform="translate(120, 280)">
                      <text x="0" y="20" fontSize="28" fill="white" textAnchor="middle">
                        🚀
                      </text>
                    </g>

                    {/* Decorative Lines */}
                    <line x1="50" y1="400" x2="150" y2="420" stroke="url(#cubeStroke)" strokeWidth="2" opacity="0.5" />
                    <line x1="430" y1="100" x2="420" y2="180" stroke="url(#cubeStroke)" strokeWidth="2" opacity="0.5" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="cubeFront" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A6CF7" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                      <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                      <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                      <linearGradient id="cubeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A6CF7" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating Badges */}
                  <div className="absolute bottom-16 left-8 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-gray-dark">
                    <p className="text-sm font-semibold text-primary">Next.js</p>
                  </div>
                  <div className="absolute right-8 top-24 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-gray-dark">
                    <p className="text-sm font-semibold text-primary">React</p>
                  </div>
                  <div className="absolute bottom-32 right-12 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-gray-dark">
                    <p className="text-sm font-semibold text-primary">TypeScript</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 z-0 opacity-20 lg:opacity-30">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="150" stroke="#4A6CF7" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" stroke="#0EA5E9" strokeWidth="1" />
            <circle cx="200" cy="200" r="50" stroke="#4A6CF7" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-0 opacity-20 lg:opacity-30">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="150" stroke="#0EA5E9" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" stroke="#4A6CF7" strokeWidth="1" />
            <circle cx="200" cy="200" r="50" stroke="#0EA5E9" strokeWidth="1" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
