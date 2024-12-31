import Carousel from "@/components/carousel/Carousel";

import { FaLocationDot } from "react-icons/fa6";
import MainButton from "@/components/button/MainButton";

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
export default function HeroSection() {
  return (
    <>
      <Carousel items={dummyItems} />
      <div className="w-full h-fit px-8 py-8 bg-gradient-to-r from-custom-dark-green via-custom-dark-green to-custom-olive-green my-5 rounded-b-xl flex items-center justify-start">
        <section className="w-fit flex flex-col items-start justify-center pr-5">
          <section className="flex gap-4 items-center justify-start w-fit">
            <FaLocationDot size={50} color="white" />
            <h1 className="text-5xl font-Grenze-Gotisch text-white w-fit">
              Desa Kare
            </h1>
          </section>
          <a
            href="https://maps.app.goo.gl/CVprZFof3Vg6P7ph9"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-4"
          >
            <MainButton>Lihat di Maps</MainButton>
          </a>
        </section>
        <section className="flex gap-4 items-center justify-center w-[80%] border-l border-white pl-5">
          <p className="text-white text-base text-justify">
            Desa Kare Kecamatan Kare Kabupaten Madiun terletak di Pegunungan
            Wilis paling tenggara Kabupaten Madiun berbatasan dengan Kabupaten
            Ponorogo, Trenggalek, Tulungagung, Nganjuk dan Kediri. Potensi flora
            dan fauna yang ada di Pegunungan Wilis serta kekayaan alam Desa
            Wisata Kare menguatkan Desa Wisata Kare untuk fokus berkomitmen pada
            konservasi alam dan ikut berperan aktif menjaga ekosistem alam.
            Banyak daya tarik wisata yang bersifat alam, budaya dan buatan.
            Untuk itu perlu kebersamaan dalam pengelolaan alam yang ada di Desa
            Kare melalui berbagai sektor dan inovasi yang terus menerus untuk
            melestarikan wisata alam tersebut guna kesejahteraan masyarakat dan
            mewujudkan pariwisata yang berkelanjutan sehingga Desa Kare mampu
            membangun desa dari Pariwisata.
          </p>
        </section>
      </div>
    </>
  );
}
