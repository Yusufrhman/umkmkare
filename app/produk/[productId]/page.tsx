"use server";
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
  images: [IMG1.src, IMG3.src, IMG2.src, IMG3.src],
};

export type paramsType = Promise<{ productId: string }>;

export default async function ProductPage({ params }: { params: paramsType }) {
  // const productData = {
  //   name: decodeURIComponent(params.productId),
  // };
  const { productId } = await params;
  return (
    <main
      className="min-h-[100vh] space-y-10 max-w-[100rem] mx-auto "
    >
      <section className="flex flex-col lg:flex-row gap-6 md:gap-6 lg:gap-10  h-fit sm:mx-8 md:mx-25 xl:mx-20 justify-center 2xl:aspect-[20/5]">
        <div className="lg:w-1/2 aspect-video sm:aspect-[2/1] md:aspect-[2/1] lg:aspect-video w-full">
          <ProductImageGallery images={productData.images} className="" />
        </div>
        <div className=" h-auto rounded-2xl ring-4 ring-custom-sage-green p-4 sm:p-6 md:p-8 flex flex-col justify-start lg:max-w-[30rem] gap-2 md:gap-4">
          <h1 className="bg-gradient-to-r from-custom-dark-green via-custom-olive-green to-custom-light-olive-green text-transparent bg-clip-text text-lg sm:text-2xl md:text-2xl lg:text-3xl font-semibold tracking-wider">
            Jam Dinding Kayu
          </h1>
          <div className="flex flex-col-reverse gap-2 md:gap-4 h-full justify-between lg:flex-col">
            <div className="space-y-2">
              <h2 className="bg-gradient-to-r from-custom-dark-green via-custom-olive-green to-custom-light-olive-green text-transparent bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider">
                Deskripsi
              </h2>
              <p className="tracking-normal md:tracking-wide text-justify lg:line-clamp-6 text-sm md:text-base">
                {productData.description}
              </p>
            </div>
            <div className="flex justify-between lg:justify-start items-center gap-8">
              <p className="text-custom-dark-green font-bold tracking-wider text-lg sm:text-xl md:text-2xl">
                Rp. {productData.price}
              </p>
              <MainButton className="text-xs sm:text-sm md:text-base">
                Beli Produk
              </MainButton>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5 mx-0 sm:mx-5 md:mx-10 lg:mx-20">
        <H3 className=" text-[1.5rem] xl:text-2xl">
          Produk Lain dari Toko ini
        </H3>
        <ul className="flex gap-4 overflow-scroll">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="min-w-[12.5rem] w-full tracking-wide">
              <Link href={`/produk/${i}`}>
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
      <section className="space-y-5 mx-0 sm:mx-5 md:mx-10 lg:mx-20">
        <H3 className=" text-xl  xl:text-2xl">Produk Terkait</H3>
        <ul className="flex gap-4 overflow-scroll">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="min-w-[12.5rem] w-full tracking-wide">
              <Link href={`/produk/${i}`}>
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