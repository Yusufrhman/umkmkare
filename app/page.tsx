import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import CAROUSEL from "@/public/dev/carousel.png";

const dummyItems = [
  {
    title: "Mari Kenali dan Dukung UMKM Desa Kare",
    image: CAROUSEL,
  },
  {
    title: "lorem ipsum",
    image: CAROUSEL,
  },
  {
    title: "loremmm iokasnksk",
    image: CAROUSEL,
  },
  {
    title: " nasjknsajkn naksdnkdasn kask ksnadkds",
    image: CAROUSEL,
  },
];

export default function Home() {
  return (
    <main>
      <Carousel items={dummyItems} />
    </main>
  );
}
