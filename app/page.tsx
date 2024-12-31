import HeroSection from "@/components/landingPage/HeroSection";
import HighlightSection from "@/components/landingPage/HighlightSection";
import H3 from "@/components/title/H3";

import MADU from "@/public/dev/madu.png";
import StoreCard from "@/components/cards/StoreCard";

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
              <li className="h-full w-full">
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
    </main>
  );
}
