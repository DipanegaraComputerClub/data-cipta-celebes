"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const ref = useScrollAnimation();

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 slide-up" ref={ref}>
        <div className="container">
          <div className="animate-fade-in-up mb-12">
            <SectionTitle
              title="Main Features"
              paragraph="Packed with powerful features to help you build amazing landing pages with smooth animations and professional design."
              center
            />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
