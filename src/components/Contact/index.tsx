"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-28 slide-up"
      ref={ref}
    >
      <div className="container">
        <SectionTitle
          title="Hubungi Kami"
          paragraph="Punya pertanyaan atau siap mengembangkan aplikasi impian Anda? Hubungi tim kami sekarang"
          center
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-12">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark">
            <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama Anda"
                  suppressHydrationWarning
                  className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:shadow-md dark:border-stroke-dark dark:bg-gray-dark dark:text-body-color-dark dark:focus:border-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukkan email Anda"
                  suppressHydrationWarning
                  className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:shadow-md dark:border-stroke-dark dark:bg-gray-dark dark:text-body-color-dark dark:focus:border-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Topik yang ingin didiskusikan"
                  suppressHydrationWarning
                  className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:shadow-md dark:border-stroke-dark dark:bg-gray-dark dark:text-body-color-dark dark:focus:border-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Jelaskan kebutuhan Anda..."
                  className="border-stroke w-full resize-none rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus:shadow-md dark:border-stroke-dark dark:bg-gray-dark dark:text-body-color-dark dark:focus:border-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                className="w-full rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:translate-y-0"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 dark:from-primary/20 dark:to-blue-600/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                Whatsapp & Telepon
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                +62 821-9785-5715
              </p>
              <Link
                href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20berkonsultasi"
                className="mt-3 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300"
              >
                Chat di WhatsApp →
              </Link>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 dark:from-primary/20 dark:to-blue-600/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                Email
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                info@datacipta.com
              </p>
              <Link
                href="mailto:info@datacipta.com"
                className="mt-3 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300"
              >
                Kirim Email →
              </Link>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 dark:from-primary/20 dark:to-blue-600/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                Lokasi
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Makassar, Sulawesi Selatan, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-primary to-blue-600 p-8 text-center md:p-12">
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Siap Mulai Project Anda?
          </h3>
          <p className="mb-6 text-white/90">
            Jadilah bagian dari 500+ klien yang telah mempercayai kami untuk mengembangkan solusi software mereka
          </p>
          <Link
            href="https://wa.me/6282197855715?text=Halo%20saya%20ingin%20memulai%20project"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            🚀 Hubungi Kami Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
