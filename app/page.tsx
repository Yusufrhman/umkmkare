import HeroSection from "@/components/landingPage/HeroSection";
import HighlightSection from "@/components/landingPage/HighlightSection";
import H3 from "@/components/title/H3";

import { motion } from "framer-motion";

import MADU from "@/public/dev/madu.png";
import StoreCard from "@/components/cards/StoreCard";
import MainButton from "@/components/button/MainButton";

import GALERI from "@/public/dev/galeri.png";
import Image from "next/image";
import GaleryCard from "@/components/cards/GaleryCard";
import Link from "next/link";

const storeCardData = [
  {
    imageSrc: MADU.src,
    title: "Madu Asli Kare",
    description:
      "Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan.",
  },
  {
    imageSrc: MADU.src,
    title: "Madu Asli Kare",
    description:
      "Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan.",
  },
  {
    imageSrc: MADU.src,
    title: "Madu Asli Kare",
    description:
      "Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan.",
  },
  {
    imageSrc: MADU.src,
    title: "Madu Asli Kare",
    description:
      "Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan.",
  },
  {
    imageSrc: MADU.src,
    title: "Madu Asli Kare",
    description:
      "Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan. Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan.Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan.",
  },
  {
    imageSrc: MADU.src,
    title: "Madu Asli Kare",
    description:
      "Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightSection />
      <section className=" mt-14 mx-4 lg:mx-12">
        <H3 className="text-center text-xl md:text-2xl lg:text-3xl xl:w-1/2 mx-auto">
          Eksplorasi Produk Terbaru dari UMKM Kare
        </H3>
        <div className="overflow-scroll -mx-8">
          <ul className="flex sm:grid place-items-center sm:justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-8 mx-8">
            {storeCardData.map((data, index) => {
              return (
                <li
                  className="w-full min-w-[17.5rem] max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem]"
                  key={index}
                >
                  <Link href={data.title}>
                    <StoreCard
                      imageSrc={data.imageSrc}
                      title={data.title}
                      description={data.description}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-custom-off-white -mx-4 md:-mx-6 lg:-mx-10 my-10 py-10">
        <h4 className="text-black text-xl tracking-wide font-medium text-center mx-auto">
          Koleksi Terbaik dari UMKM Lokal
        </h4>
        <H3 className="from-custom-dark-green via-custom-olive-green to-custom-olive-green text-center mx-auto w-[90%] md:w-3/4 lg:w-2/3 my-4">
          Selami Dunia Kreativitas Desa Kare, Tempat Produk Lokal Berkualitas
          Hadir dengan Pesona
        </H3>
        <section className="w-full py-8 flex flex-wrap items-center justify-center gap-4 px-4">
          <GaleryCard
            className="w-full sm:w-[12rem] md:w-[14rem] lg:w-[16rem] h-[14rem] lg:h-[16rem]"
            imageSrc={GALERI.src}
            title="Produk Keripik"
            description="Galeri ini menampilkan karya unggulan dari UMKM Desa Kare – mulai dari kerajinan tangan khas, makanan tradisional, hingga produk herbal alami. Setiap produk adalah hasil jerih payah dan kreativitas masyarakat lokal, membawa warisan budaya dan cita rasa khas desa kami langsung kepada Anda."
          />
          <section className="flex flex-col gap-4  w-full sm:w-fit">
            <GaleryCard
              className="w-full sm:w-[12rem] md:w-[14rem] lg:w-[16rem] h-[10rem] lg:h-[12rem]"
              imageSrc={GALERI.src}
              title="Produk Keripik"
              description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
            />
            <GaleryCard
              className="w-full sm:w-[12rem] md:w-[14rem] lg:w-[16rem] h-[10rem] lg:h-[12rem]"
              imageSrc={GALERI.src}
              title="Produk Keripik"
              description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
            />
          </section>
          <GaleryCard
            className="w-full sm:w-[12rem] md:w-[14rem] lg:w-[16rem] h-[14rem] lg:h-[16rem]"
            imageSrc={GALERI.src}
            title="Produk Keripik"
            description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
          />
          <div className="flex flex-col  sm:flex-row items-center justify-center gap-4 w-full sm:w-fit">
            <GaleryCard
              className="w-full sm:w-[12rem] md:w-[16rem] lg:w-[18rem] h-[14rem] lg:h-[20rem]"
              imageSrc={GALERI.src}
              title="Produk Keripik"
              description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
            />
            <GaleryCard
              className="w-full sm:w-[12rem] md:w-[14rem] lg:w-[16rem] h-[14rem] lg:h-[16rem]"
              imageSrc={GALERI.src}
              title="Produk Keripik"
              description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
            />
          </div>
        </section>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4">
          <p className="w-full lg:w-[65%] text-center lg:text-left text-xs sm:text-sm md:text-base">
            Galeri ini menampilkan karya unggulan dari UMKM Desa Kare – mulai
            dari kerajinan tangan khas, makanan tradisional, hingga produk
            herbal alami. Setiap produk adalah hasil jerih payah dan kreativitas
            masyarakat lokal, membawa warisan budaya dan cita rasa khas desa
            kami langsung kepada Anda.
          </p>
          <MainButton className="w-fit h-fit text-sm md:text-base">
            Bergabung di UMKM Kare
          </MainButton>
        </div>
      </section>
    </main>
  );
}
