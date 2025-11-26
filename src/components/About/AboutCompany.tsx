"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

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
            <div className="relative h-[550px] w-full text-center lg:h-[550px]">
              <Image src="/images/logo/mmainCv.png" alt="About Data Cipta Celebes " fill />
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
