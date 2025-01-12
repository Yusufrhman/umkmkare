"use client";
import Image from "next/image";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function ProductImageGallery({
  images,
  className,
}: {
  images: { image: string; }[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className={`flex gap-4  ${className}`}>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
        className="aspect-square rounded-2xl overflow-hidden relative w-2/3"
      >
        <Image
          className="w-full h-full object-cover"
          src={images[activeIndex].image}
          width={500}
          height={500}
          alt=""
        />
      </motion.div>
      <ul className="flex flex-col h-full gap-4 w-1/3">
        {Array.from({ length: 3 }).map((_, i) => {
          const isActive = activeIndex === i;
          return (
            <li key={images[i].image} className="h-1/3">
              <button
                onClick={() => setActiveIndex(i)}
                className={`h-full w-full rounded-2xl relative`}
              >
                {isActive && (
                  <motion.div
                    layoutId="product-gallery-indicator"
                    className="absolute w-full h-full bg-transparent ring-4 ring-custom-sage-green rounded-xl"
                  ></motion.div>
                )}
                <Image
                  className="w-full h-full object-cover rounded-xl"
                  src={images[i].image}
                  width={500}
                  height={500}
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
