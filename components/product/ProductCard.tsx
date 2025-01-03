import formatRupiah from "@/utils/FormatRupiah";
import Image from "next/image";

export default function ProductCard({
  imageSrc,
  name,
  price,
}: {
  imageSrc: string;
  name: string;
  price: number;
}) {
  return (
    <div className="w-full h-full border border-custom-light-olive-green border-opacity-70 rounded-xl p-4 hover:bg-custom-off-white">
      <div className="overflow-clip relative w-full aspect-[4/3] rounded-lg">
        <Image
          src={imageSrc}
          alt=""
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-medium text-lg py-2">{name}</p>
      <p className="text-custom-olive-green">
        {formatRupiah(price)}
      </p>
    </div>
  );
}
