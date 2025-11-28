"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";

interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
}

const ClientsSupport = () => {
  const ref = useScrollAnimation();
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients");
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

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

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Loading clients...</p>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No clients available</p>
          </div>
        ) : (
          <div className="mb-12 relative overflow-hidden">
            <div className="animate-scroll-horizontal flex gap-6">
              {/* Duplicate clients for seamless loop */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 group rounded-lg bg-gradient-to-br from-gray-light to-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:from-gray-dark dark:to-gray-dark min-w-[200px]"
                >
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="mb-4 h-12 w-12 mx-auto group-hover:scale-110 transition-transform duration-300 object-contain"
                    />
                  ) : (
                    <div className="mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                      🏢
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {client.industry}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

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
