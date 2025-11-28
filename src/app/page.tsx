import AboutCompany from "@/components/About/AboutCompany";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import ClientsSupport from "@/components/ClientsSupport";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsCarousel from "@/components/Projects/ProjectsCarousel";
import StackAdvantages from "@/components/StackAdvantages";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Cipta Celebes - Software & Custom App Development",
  description:
    "Solusi software dan aplikasi custom untuk bisnis Anda. Kami menghadirkan inovasi digital dengan teknologi terkini.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutCompany />
      </div>
      <div id="projects">
        <ProjectsCarousel />
      </div>
      <div id="tech-stack">
        <StackAdvantages />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="clients">
        <ClientsSupport />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
