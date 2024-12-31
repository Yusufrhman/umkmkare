import Image from "next/image";
import { HighlightCard } from "@/components/cards/HighlightCard";
import KOPI from "@/public/dev/kopi.png";
import { MdFastfood } from "react-icons/md";
import H3 from "../title/H3";

export default function HighlightSection() {
  return (
    <section className="my-10  gap-16 mx-10 h-fit flex items-start justify-center">
      <div className="flex flex-col justify-between w-[55%] h-[25rem] 2xl:h-[27.5rem]">
        <div>
          <H3>UMKM Desa Kare, Menyajikan Produk Lokal yang Berbeda</H3>
          <p className="text-base text-black tracking-widest text-justify mt-3">
            Jelajahi pilihan produk khas dari UMKM Desa Kare, dari kerajinan
            tangan unik hingga kuliner tradisional. Setiap produk membawa
            kekayaan budaya dan kualitas asli dari para pelaku usaha lokal.
          </p>
        </div>
        <ul className="flex gap-4 h-fit mt-5">
          <li>
            <HighlightCard.Root className="h-[12.5rem] 2xl:h-[15rem]">
              <HighlightCard.Icon>
                <MdFastfood size={24} />
              </HighlightCard.Icon>
              <HighlightCard.Title>Kuliner Khas Kare</HighlightCard.Title>

              <HighlightCard.Description>
                Produk kami dibuat dengan bahan-bahan alami dan prinsip
                keberlanjutan untuk menjaga lingkungan tetap lestari.
              </HighlightCard.Description>
            </HighlightCard.Root>
          </li>
          <li>
            <HighlightCard.Root className="h-[12.5rem] 2xl:h-[15rem]">
              <HighlightCard.Icon>
                <MdFastfood size={24} />
              </HighlightCard.Icon>
              <HighlightCard.Title>Kuliner Khas Kare</HighlightCard.Title>

              <HighlightCard.Description>
                Produk kami dibuat dengan bahan-bahan alami dan prinsip
                keberlanjutan untuk menjaga lingkungan tetap lestari.
              </HighlightCard.Description>
            </HighlightCard.Root>
          </li>
        </ul>
      </div>
      <div className="h-full">
        <div className="h-[25rem] 2xl:h-[27.5rem] col-span-5 relative w-[30rem] 2xl:w-[32.5rem] flex ">
          <Image
            src={KOPI}
            className="object-cover object-left-bottom w-full h-full rounded-lg"
            alt="kopi kare enak"
            layout="fill"
            objectFit="cover"
          />
          <HighlightCard.Root className="h-[12.5rem] 2xl:h-[15rem] absolute top-0 right-0 m-4">
            <HighlightCard.Icon>
              <MdFastfood size={24} />
            </HighlightCard.Icon>
            <HighlightCard.Title>Kuliner Khas Kare</HighlightCard.Title>

            <HighlightCard.Description>
              Produk kami dibuat dengan bahan-bahan alami dan prinsip
              keberlanjutan untuk menjaga lingkungan tetap lestari.
            </HighlightCard.Description>
          </HighlightCard.Root>
        </div>
      </div>
    </section>
  );
}
