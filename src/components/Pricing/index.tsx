"use client";
import SectionTitle from "../Common/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Starter",
    price: "2JT",
    description: "Paket dasar untuk aplikasi sederhana",
    features: [
      "Single Page Application",
      "Database Basic",
      "Responsive Design",
      "1 Month Support",
      "Deployment Infrastructure",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "5JT",
    description: "Solusi lengkap untuk bisnis menengah",
    features: [
      "Web + Mobile App",
      "Database Advanced",
      "Custom Design & UX",
      "3 Months Support",
      "Cloud Infrastructure",
      "API Integration",
      "Analytics Dashboard",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    description: "Solusi enterprise dengan customization penuh",
    features: [
      "Multi-platform Development",
      "Enterprise Database",
      "Full Custom Solution",
      "12 Months Support",
      "Dedicated Infrastructure",
      "Advanced Integration",
      "Real-time Analytics",
      "Machine Learning",
    ],
  },
];

const Pricing = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="pricing"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Paket Harga Custom App & Software"
          paragraph="Harga kompetitif untuk mengembangkan aplikasi & software custom sesuai kebutuhan bisnis Anda"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`stagger-item relative rounded-lg transition-all duration-300 ${
                tier.highlighted
                  ? "border-2 border-primary bg-white shadow-2xl lg:scale-105 dark:bg-gray-dark"
                  : "border border-stroke bg-white shadow-lg dark:border-stroke-dark dark:bg-gray-dark"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                  ⭐ RECOMMENDED
                </div>
              )}

              <div className="px-8 py-10">
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                  {tier.name}
                </h3>
                <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
                  {tier.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="ml-2 text-sm text-body-color dark:text-body-color-dark">
                      +
                    </span>
                  )}
                </div>

                <Link
                  href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20konsultasi%20paket%20app"
                  className={`mb-8 block w-full rounded-lg py-3 text-center font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg hover:-translate-y-1"
                      : "border-2 border-primary text-primary hover:bg-primary/5 dark:text-primary"
                  }`}
                >
                  Konsultasi Sekarang
                </Link>

                <div className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 text-primary text-lg">✓</span>
                      <span className="text-sm text-body-color dark:text-body-color-dark">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              🎯 Paket Custom Tidak Terbatas?
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Tidak menemukan paket yang sesuai? Kami siap memberikan solusi custom
              sesuai kebutuhan spesifik bisnis Anda dengan harga yang kompetitif.
            </p>
            <Link
              href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20konsultasi%20custom%20app"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              📞 Hubungi Kami untuk Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
