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
    <div className="w-full h-full border border-custom-light-olive-green border-opacity-70 rounded-xl p-2 md:p-3 lg:p-4 hover:bg-custom-off-white transition-all duration-200 ease-in-out hover:shadow-lg">
      <div className="overflow-hidden relative w-full aspect-[4/3] rounded-lg">
        <Image
          src={imageSrc}
          alt=""
          layout="fill"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
        />
      </div>
      <p className="font-medium text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl py-2 truncate">{name}</p>
      <p className="text-custom-olive-green text-sm sm:text-base md:text-sm lg:text-base font-semibold">
        {formatRupiah(price)}
      </p>
    </div>
  );
}
