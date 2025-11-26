"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";

interface Client {
  id: number;
  name: string;
  industry: string;
}

const clientsData: Client[] = [
  { id: 1, name: "Retail & E-Commerce", industry: "🛒" },
  { id: 2, name: "Banking & Finance", industry: "🏦" },
  { id: 3, name: "Healthcare", industry: "🏥" },
  { id: 4, name: "Education", industry: "🎓" },
  { id: 5, name: "Manufacturing", industry: "🏭" },
  { id: 6, name: "Real Estate", industry: "🏢" },
  { id: 7, name: "Hospitality", industry: "🏨" },
  { id: 8, name: "Logistics", industry: "🚚" },
];

const ClientsSupport = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="clients"
      className="py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Industri & Klien yang Kami Layani"
          paragraph="Kami telah membantu berbagai industri mengembangkan solusi software yang tepat"
          center
        />

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="stagger-item group rounded-lg bg-gradient-to-br from-gray-light to-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:from-gray-dark dark:to-gray-dark"
            >
              <div className="mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                {client.industry}
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {client.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Support Info */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-blue-600/10 p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">👥</div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                500+
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Klien Puas
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                200+
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Proyek Selesai
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">⭐</div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                4.9/5
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Rating Kepuasan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSupport;
