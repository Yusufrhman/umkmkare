"use server";
import Link from "next/link";
import ProductCard from "../product/ProductCard";
import { getAllProductByUMKMid } from "@/lib/database/actions/product";

export default async function AnotherStoreProducts({
  umkmId,
  currentProductId,
}: {
  umkmId: string;
  currentProductId?: string;
}) {
  const products = await getAllProductByUMKMid({
    umkmId: umkmId,
    limit: 4,
    excludeId: currentProductId,
  });
  return (
    <div className="w-full">
      <ul className="flex md:grid grid-cols-3 lg:grid-cols-4 gap-4 overflow-scroll w-full">
        {products.map((product: any, index: number) => (
          <li
            key={index}
            className="min-w-[12.5rem] max-h-[15rem] md:max-h-none tracking-wide col-span-1"
          >
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
    </div>
  );
}
