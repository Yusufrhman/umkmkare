import STOREBANNER from "@/public/dev/store-banner.png";
import StoreBanner from "@/components/store/StoreBanner";

import StoreDescription from "@/components/store/StoreDescription";
import StoreGallery from "@/components/store/StoreGallery";
import H3 from "@/components/title/H3";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

export default function Store({ params }: { params: { toko: string } }) {
  const storeData = {
    name: decodeURIComponent(params.toko),
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
    products: []
  };

  return (
    <main className="min-h-[100vh]">
      <section>
        <StoreBanner imageSrc={storeData.banner} storeName={storeData.name} />
      </section>
      <section className="flex items-center justify-center gap-10 my-10 mx-10">
        <StoreDescription
          storeName={storeData.name}
          rating={storeData.rating}
          description={storeData.description}
        />
        <div className="w-3/5 h-fit">
          <StoreGallery images={storeData.gallery_images} />
        </div>
      </section>
      <section className="my-12 mx-20">
        <H3 className="text-center via-custom-olive-green">Produk</H3>
        <ul className="grid grid-cols-4 gap-5 my-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className="w-full tracking-wide">
              <Link href={`/${params.toko}/product`}>
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
