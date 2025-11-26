import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="stagger-item group w-full">
      <div className="h-full rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover-lift dark:bg-gray-800">
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl text-primary shadow-md transition-all duration-300 group-hover:scale-110 dark:from-primary/30 dark:to-primary/20">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
