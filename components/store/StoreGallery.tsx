import Image from "next/image";

export default function StoreGallery({ images }: { images: string[] }) {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {Array.from({ length: 9 }).map((_, i) => (
        <li key={i} className="w-full aspect-[6/4]">
          <div className="w-full h-full rounded-lg  overflow-hidden relative">
            <Image
              src={images[i]}
              alt={"gallery " + i.toString}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
