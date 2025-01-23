"use server";
import ProductCard from "@/components/product/ProductCard";
import { getAllProducts } from "@/lib/database/actions/product";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getAllProducts({});
  return (
    <main className="max-w-[100rem] mx-auto">
      <ul className="grid grid-cols-4 gap-4 overflow-scroll">
        {products.map((product: any, index: number) => (
          <li key={index} className="min-w-[12.5rem] w-full tracking-wide">
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
