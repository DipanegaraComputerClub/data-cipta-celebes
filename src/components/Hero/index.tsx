import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pb-16 pt-[120px] dark:from-gray-dark dark:via-gray-dark/90 dark:to-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="slide-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-5xl lg:leading-tight">
                  Data Cipta Celebes{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Next.js Template
                  </span>
                </h1>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                  Build stunning, responsive landing pages with modern Tailwind CSS styling and smooth animations. Perfect for startups, SaaS, and business websites with built-in Next.js 15 and professional design.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <Link
                    href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20bertanya"
                    className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:translate-y-0"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      📞 Whatsapp
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-800 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary dark:hover:bg-primary/10 dark:hover:text-primary"
                  >
                    <span>See Project</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Icon/Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="slide-right flex justify-center">
                <div className="relative w-full max-w-[400px]">
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 450 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-lg"
                  >
                    {/* Outer Circle */}
                    <circle
                      cx="225"
                      cy="225"
                      r="200"
                      fill="url(#gradientCircle)"
                      opacity="0.1"
                    />
                    <circle
                      cx="225"
                      cy="225"
                      r="200"
                      stroke="url(#gradientStroke)"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Inner Decorative Circles */}
                    <circle
                      cx="225"
                      cy="225"
                      r="150"
                      fill="url(#gradientInner)"
                      opacity="0.05"
                    />
                    <circle
                      cx="225"
                      cy="225"
                      r="100"
                      fill="url(#gradientCenter)"
                      opacity="0.1"
                    />

                    {/* Icon Background */}
                    <circle cx="225" cy="225" r="80" fill="url(#gradientIcon)" />

                    {/* Data/Code Icon */}
                    <g transform="translate(185, 185)">
                      {/* Opening Bracket */}
                      <path
                        d="M 15 5 L 10 15 L 10 55 L 15 65"
                        stroke="white"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Horizontal Line */}
                      <line
                        x1="10"
                        y1="35"
                        x2="70"
                        y2="35"
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Closing Bracket */}
                      <path
                        d="M 65 5 L 70 15 L 70 55 L 65 65"
                        stroke="white"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </g>

                    {/* Decorative Dots */}
                    <circle cx="100" cy="100" r="4" fill="url(#gradientDot)" />
                    <circle cx="350" cy="120" r="3" fill="url(#gradientDot)" />
                    <circle cx="80" cy="320" r="3" fill="url(#gradientDot)" />
                    <circle cx="360" cy="300" r="4" fill="url(#gradientDot)" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient
                        id="gradientCircle"
                        x1="25"
                        y1="25"
                        x2="425"
                        y2="425"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#4A6CF7" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                      <linearGradient
                        id="gradientStroke"
                        x1="25"
                        y1="25"
                        x2="425"
                        y2="425"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#4A6CF7" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                      <linearGradient
                        id="gradientInner"
                        x1="75"
                        y1="75"
                        x2="375"
                        y2="375"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#4A6CF7" />
                      </linearGradient>
                      <linearGradient
                        id="gradientCenter"
                        x1="125"
                        y1="125"
                        x2="325"
                        y2="325"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#4A6CF7" />
                      </linearGradient>
                      <linearGradient
                        id="gradientIcon"
                        x1="145"
                        y1="145"
                        x2="305"
                        y2="305"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#4A6CF7" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                      <radialGradient
                        id="gradientDot"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop offset="0%" stopColor="#4A6CF7" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
