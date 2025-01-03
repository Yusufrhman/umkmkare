import STOREBANNER from "@/public/dev/store-banner.png";
import StoreBanner from "@/components/store/StoreBanner";

import StoreDescription from "@/components/store/StoreDescription";
import StoreGallery from "@/components/store/StoreGallery";
import H3 from "@/components/title/H3";
import Image from "next/image";
import Link from "next/link";

export default function Store({ params }: { params: { productId: string } }) {
  const productData = {
    name: decodeURIComponent(params.productId),
  };

  return <main className="min-h-[100vh]">{productData.name}</main>;
}
