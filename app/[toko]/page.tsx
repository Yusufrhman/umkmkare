"use server"
import STOREBANNER from "@/public/dev/store-banner.png";
import StoreBanner from "@/components/store/StoreBanner";

import StoreDescription from "@/components/store/StoreDescription";

import StoreGallery from "@/components/store/StoreGallery";
import H3 from "@/components/title/H3";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

export type paramsType = Promise<{ toko: string }>;
export default async function StorePage({ params }: { params: paramsType }) {
  const { toko } = await params;
  const storeData = {
    name: decodeURIComponent(toko),
    rating: 4.7,
    description:
      "Ghaniya Furniture menawarkan berbagai furnitur berkualitas dengan desain khas yang menggabungkan sentuhan modern dan tradisional. Dibuat dari material pilihan oleh pengrajin berpengalaman, setiap produk menghadirkan kenyamanan, daya tahan, dan estetika yang sempurna untuk melengkapi keindahan rumah Anda.",
    banner: STOREBANNER.src,
    gallery_images: [
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
      STOREBANNER.src,
    ],
    products: [],
  };

  return (
    <main className="min-h-[100vh]">
      <section>
        <StoreBanner imageSrc={storeData.banner} storeName={storeData.name} />
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 my-10 mx-0 sm:mx-2 md:mx-4 lg:mx-10">
        <StoreDescription
          storeName={storeData.name}
          // rating={storeData.rating}
          description={storeData.description}
        />
        <div className="w-full lg:w-3/5 h-fit">
          <StoreGallery images={storeData.gallery_images} />
        </div>
      </section>

      <section className="my-12 mx-0 sm:mx-5 md:mx-10 lg:mx-20">
        <H3 className="text-center via-custom-olive-green">Produk</H3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-5 my-3 sm:my-4 md:my-6 lg:my-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className="w-full tracking-wide">
              <Link href={`/${toko}/product`}>
                <ProductCard
                  imageSrc={STOREBANNER.src}
                  name={"Product"}
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
