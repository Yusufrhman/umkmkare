import Image from "next/image";
import MainButton from "../button/MainButton";

interface StoreCardProps {
  imageSrc: string; // Path gambar harus berupa string
  title: string; // Judul toko atau produk
  description: string; // Deskripsi toko atau produk
}

const StoreCard: React.FC<StoreCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="border-2 border-custom-sage-green p-4 rounded-lg h-full group bg-white">
      <div className="w-full h-[15rem] rounded-md overflow-clip">
        <Image
          src={imageSrc}
          alt={title}
          className=" w-full h-full object-cover object-center group-hover:scale-110 transition"
          objectFit="cover"
          objectPosition="center"
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-between items-center my-3">
        <h4 className="text-2xl">{title}</h4>
        <MainButton>Lihat Toko</MainButton>
      </div>
      <p className="text-black text-base font-thin tracking-wider text-justify line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default StoreCard;
