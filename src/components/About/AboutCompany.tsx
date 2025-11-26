"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";

const AboutCompany = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="about-company"
      className="py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                {/* Background Gradient Circles */}
                <circle
                  cx="250"
                  cy="200"
                  r="180"
                  fill="url(#gradientAbout)"
                  opacity="0.08"
                />
                <circle
                  cx="250"
                  cy="200"
                  r="180"
                  stroke="url(#gradientAboutStroke)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Main Content Box */}
                <rect
                  x="80"
                  y="50"
                  width="340"
                  height="300"
                  rx="20"
                  fill="url(#gradientBox)"
                  opacity="0.9"
                />
                <rect
                  x="80"
                  y="50"
                  width="340"
                  height="300"
                  rx="20"
                  stroke="url(#gradientBoxStroke)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Icon/Symbol */}
                <g transform="translate(200, 80)">
                  {/* Building Icon */}
                  <rect
                    x="20"
                    y="30"
                    width="60"
                    height="70"
                    rx="4"
                    fill="none"
                    stroke="url(#iconGradient)"
                    strokeWidth="3"
                  />
                  <line
                    x1="35"
                    y1="30"
                    x2="35"
                    y2="100"
                    stroke="url(#iconGradient)"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="30"
                    x2="50"
                    y2="100"
                    stroke="url(#iconGradient)"
                    strokeWidth="2"
                  />
                  <line
                    x1="65"
                    y1="30"
                    x2="65"
                    y2="100"
                    stroke="url(#iconGradient)"
                    strokeWidth="2"
                  />
                  {/* Windows */}
                  <rect
                    x="25"
                    y="40"
                    width="10"
                    height="10"
                    fill="url(#iconGradient)"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="10"
                    height="10"
                    fill="url(#iconGradient)"
                  />
                  <rect
                    x="55"
                    y="40"
                    width="10"
                    height="10"
                    fill="url(#iconGradient)"
                  />
                </g>

                {/* Text Content */}
                <text
                  x="250"
                  y="200"
                  textAnchor="middle"
                  className="fill-current"
                  fontSize="20"
                  fontWeight="600"
                  opacity="0.8"
                >
                  Data Cipta
                </text>
                <text
                  x="250"
                  y="230"
                  textAnchor="middle"
                  className="fill-current"
                  fontSize="20"
                  fontWeight="600"
                  opacity="0.8"
                >
                  Celebes
                </text>

                <defs>
                  <linearGradient
                    id="gradientAbout"
                    x1="70"
                    y1="20"
                    x2="430"
                    y2="380"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4A6CF7" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                  <linearGradient
                    id="gradientAboutStroke"
                    x1="70"
                    y1="20"
                    x2="430"
                    y2="380"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4A6CF7" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                  <linearGradient
                    id="gradientBox"
                    x1="80"
                    y1="50"
                    x2="420"
                    y2="350"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient
                    id="gradientBoxStroke"
                    x1="80"
                    y1="50"
                    x2="420"
                    y2="350"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4A6CF7" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                  <linearGradient
                    id="iconGradient"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#4A6CF7" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div>
              <SectionTitle
                title="Tentang Data Cipta Celebes"
                paragraph="Kami adalah tim profesional yang berdedikasi untuk menghadirkan solusi software dan aplikasi berkualitas tinggi. Dengan pengalaman bertahun-tahun, kami telah membantu ratusan klien mewujudkan visi digital mereka."
                mb="24px"
              />

              <div className="mb-9">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  🎯 Visi Kami
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Menjadi mitra teknologi terpercaya yang menghadirkan inovasi digital untuk pertumbuhan bisnis Indonesia.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  💡 Misi Kami
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Memberikan solusi software yang efisien, scalable, dan disesuaikan dengan kebutuhan bisnis setiap klien.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  ✨ Komitmen Kami
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Kualitas tinggi, support responsif, dan hasil yang melebihi ekspektasi klien adalah prioritas utama kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
