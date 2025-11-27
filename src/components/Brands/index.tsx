"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  createdAt: string;
  updatedAt: string;
}

const Brands = () => {
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
    <section className="pt-16 slide-up" ref={ref}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px] animate-fade-in">
              {isLoading ? (
                <div className="w-full text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">Loading clients...</p>
                </div>
              ) : clients.length === 0 ? (
                <div className="w-full text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">No clients available</p>
                </div>
              ) : (
                clients.map((client) => (
                  <SingleBrand key={client.id} client={client} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ client }: { client: Client }) => {
  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 stagger-item">
      <div className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 hover-scale">
        <Image 
          src={client.logo} 
          alt={client.name} 
          fill 
          className="object-contain"
        />
      </div>
    </div>
  );
};
