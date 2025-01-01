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
      <section className="mt-14 mx-10">
        <H3 className="text-center lg:w-1/2 xl:w-2/5 mx-auto">
          Eksplorasi Produk Terbaru dari UMKM Kare
        </H3>
        <ul className="grid grid-cols-3 gap-8 my-5">
          {storeCardData.map((data, index) => {
            return (
              <li className="h-full w-full" key={index}>
                <StoreCard
                  imageSrc={data.imageSrc}
                  title={data.title}
                  description={data.description}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section className="bg-custom-off-white -mx-10 my-10 py-10">
        <h4 className="text-black text-xl tracking-wide font-medium w-fit mx-auto">
          Koleksi Terbaik dari UMKM Lokal
        </h4>
        <H3 className="from-custom-dark-green via-custom-olive-green to-custom-olive-green text-center mx-auto lg:w-2/3 my-4">
          Selami Dunia Kreativitas Desa Kare, Tempat Produk Lokal Berkualitas
          Hadir dengan Pesona
        </H3>
        <section className="w-full py-8 flex items-center justify-center gap-5">
          <GaleryCard
            className="w-[15rem] h-[17.5rem] "
            imageSrc={GALERI.src}
            title="Produk Keripik"
            description=" Galeri ini menampilkan karya unggulan dari UMKM Desa Kare – mulai
            dari kerajinan tangan khas, makanan tradisional, hingga produk
            herbal alami. Setiap produk adalah hasil jerih payah dan kreativitas
            masyarakat lokal, membawa warisan budaya dan cita rasa khas desa
            kami langsung kepada Anda."
          />
          <section className="flex flex-col gap-5">
            <GaleryCard
              className="w-[15rem] h-[12.5rem]"
              imageSrc={GALERI.src}
              title="Produk Keripik"
              description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
            />
            <GaleryCard
              className="w-[15rem] h-[12.5rem]"
              imageSrc={GALERI.src}
              title="Produk Keripik"
              description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
            />
          </section>
          <GaleryCard
            className="w-[15rem] h-[17.5rem] "
            imageSrc={GALERI.src}
            title="Produk Keripik"
            description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
          />
          <GaleryCard
            className="w-[20rem] h-[25rem] "
            imageSrc={GALERI.src}
            title="Produk Keripik"
            description="Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
          />
          <GaleryCard
            className="w-[15rem] h-[17.5rem] "
            imageSrc={GALERI.src}
            title="Produk Keripik"
            description=" Nikmati keaslian madu hutan murni yang dihasilkan dari alam Desa Kare, kaya akan nutrisi dan bermanfaat untuk kesehatan."
          />
        </section>
        <div className="flex items-center justify-center gap-10">
          <p className="w-[70%]">
            Galeri ini menampilkan karya unggulan dari UMKM Desa Kare – mulai
            dari kerajinan tangan khas, makanan tradisional, hingga produk
            herbal alami. Setiap produk adalah hasil jerih payah dan kreativitas
            masyarakat lokal, membawa warisan budaya dan cita rasa khas desa
            kami langsung kepada Anda.
          </p>
          <MainButton className="w-fit h-fit">
            Bergabung di UMKM Kare
          </MainButton>
        </div>
      </section>
    </main>
  );
}
