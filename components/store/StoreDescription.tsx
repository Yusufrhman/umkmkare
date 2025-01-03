// components/store/StoreDescription.tsx
import { FaStar } from "react-icons/fa";
import MainButton from "@/components/button/MainButton";

interface StoreDescriptionProps {
  storeName: string;
  rating: number;
  description: string;
}

export default function StoreDescription({
  storeName,
  rating,
  description,
}: StoreDescriptionProps) {
  return (
    <div className="flex flex-col gap-2 w-2/5">
      <h2 className="text-custom-olive-green text-4xl font-semibold tracking-wider">
        {storeName}
      </h2>
      <div>
        <p className="text-custom-olive-green text-3xl inline font-medium">
          {rating}
        </p>
        <ul className="ml-3 gap-1 inline-flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <FaStar
                color={i < Math.round(rating) ? "#FF8700" : "#E0E0E0"}
                size={24}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-2xl tracking-wide">Deskripsi</h4>
        <p className="tracking-wide font-thin text-sm line-clamp-[7] text-justify">
          {description}
        </p>
      </div>
      <MainButton className="w-fit text-sm">Lihat di Instagram</MainButton>
    </div>
  );
}
