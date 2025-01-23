"use client";

import ContactSection from "@/components/tentangPage/ContactSection";


export default function TentangPage() {
  return (
    <main className="min-h-[100vh] max-w-[100rem] mx-auto space-y-20">
      <section className="grid grid-cols-1 md:grid-cols-2 h-fit justify-center gap-4 md:gap-10">
        <iframe
          className="w-full h-full rounded-xl md:rounded-2xl aspect-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EPO_J4yvDzs?si=n7Oy8USAofZLvuW1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="px-4 py-4 md:p-10 lg:px-15 xl:px-18 bg-custom-off-white flex flex-col  md:justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-15 rounded-xl md:rounded-2xl md:aspect-video">
          <h1 className="text-custom-light-olive-green text-xl sm:text-2xl lg:text-4xl">
            UMKM Desa Kare
          </h1>
          <p className="lg:tracking-widest text-justify text-sm sm:text-base">
            UMKM Desa Kare, Madiun, bergerak di bidang pertanian, kerajinan, dan
            olahan makanan khas yang menggali potensi lokal untuk meningkatkan
            ekonomi masyarakat. Dengan memanfaatkan sumber daya alam dan tenaga
            kerja setempat, UMKM ini tidak hanya mendorong kesejahteraan warga
            tetapi juga melestarikan tradisi dan budaya khas Madiun.
          </p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
