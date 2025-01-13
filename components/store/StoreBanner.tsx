import Image from "next/image";

export default function StoreBanner({
  imageSrc,
  storeName,
}: {
  imageSrc: string;
  storeName?: string;
}) {
  return (
    <div className="w-full aspect-[7/4] sm:aspect-[10/4] md:aspect-[1400/423] lg:aspect-[1546/423] bg-custom-off-white rounded-xl overflow-clip relative">
      <Image
        src={imageSrc}
        className="object-cover object-center w-full h-full absolute z-0"
        alt={storeName ? storeName + " Banner" : "Store Banner"}
        width={2000}
        height={2000}
      />
      <div className="w-full h-full bg-gradient-to-t from-[#000000b6] to-transparent  absolute z-10"></div>
    </div>
  );
}
