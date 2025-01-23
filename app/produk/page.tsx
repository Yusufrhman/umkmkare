"use server";
import ProductCard from "@/components/product/ProductCard";
import { getAllProducts } from "@/lib/database/actions/product";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getAllProducts({});
  return (
    <main className="max-w-[90rem] mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-5 my-3 sm:my-4 md:my-6 lg:my-8">
        {products.map((product: any, index: number) => (
          <li key={index} className="w-full tracking-wide">
            <Link href={`/produk/${product.id}`}>
              <ProductCard
                imageSrc={`${process.env.ADMIN_URL}storage/${product.image_url[0]}`}
                name={product.name}
                price={product.price}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
