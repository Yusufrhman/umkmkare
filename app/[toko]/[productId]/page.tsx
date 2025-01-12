import STOREBANNER from "@/public/dev/store-banner.png";
import H3 from "@/components/title/H3";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

import IMG1 from "@/public/dev/store-banner.png";
import IMG2 from "@/public/dev/carousel.png";
import IMG3 from "@/public/dev/madu.png";

import ProductImageGallery from "@/components/product/ProductImageGallery";
import MainButton from "@/components/button/MainButton";
const productData = {
  name: "Jam Dinding Kayu",
  description:
    "Ghaniya Furniture menawarkan berbagai furnitur berkualitas dengan desain khas yang menggabungkan sentuhan modern dan tradisional. Dibuat dari material pilihan oleh pengrajin berpengalaman, setiap produk menghadirkan kenyamanan, daya tahan, dan estetika yang sempurna untuk melengkapi keindahan rumah Anda.",
  price: "150.000",
  images: [{ image: IMG1.src }, { image: IMG2.src }, { image: IMG3.src }],
};

export default function Store({ params }: { params: { productId: string } }) {
  // const productData = {
  //   name: decodeURIComponent(params.productId),
  // };

  return (
    <main className="min-h-[100vh] space-y-10 mx-20">
      <section className="flex gap-14 h-[25rem]">
        <ProductImageGallery images={productData.images} className="" />
        <div className=" h-full rounded-2xl ring-4 ring-custom-sage-green p-8 flex flex-col justify-between max-w-[30rem] min-w-[25rem]">
          <h1 className="bg-gradient-to-r from-custom-dark-green via-custom-olive-green to-custom-light-olive-green text-transparent bg-clip-text text-3xl font-semibold tracking-wider">
            Jam Dinding Kayu
          </h1>
          <div className="space-y-2">
            <h2 className="bg-gradient-to-r from-custom-dark-green via-custom-olive-green to-custom-light-olive-green text-transparent bg-clip-text text-xl font-semibold tracking-wider">
              Deskripsi
            </h2>
            <p className="tracking-widest text-justify line-clamp-6">
              {productData.description}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-custom-dark-green font-bold tracking-wider text-3xl">
              Rp. {productData.price}
            </p>
            <MainButton>Beli Produk</MainButton>
          </div>
        </div>
      </section>
      <section className="space-y-5">
        <H3 className=" text-[1.5rem]">Produk Lain dari Toko ini</H3>
        <ul className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="w-full tracking-wide">
              <Link href={`/toko/product`}>
                <ProductCard
                  imageSrc={STOREBANNER.src}
                  name={"product"}
                  price={150000}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-5">
        <H3 className=" text-xl">Produk Terkait</H3>
        <ul className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="w-full tracking-wide">
              <Link href={`/toko/product`}>
                <ProductCard
                  imageSrc={STOREBANNER.src}
                  name={"product"}
                  price={150000}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
