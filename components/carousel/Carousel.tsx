"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ArrowButton from "../button/ArrowButton";

type Item = {
  title: string;
  image: StaticImageData;
};

export default function Carousel({ items }: { items: Item[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="w-full h-[30rem] rounded-t-md overflow-clip relative">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="w-full h-full object-cover rounded-xl"
          layout="fill"
        />
      </motion.div>
      <motion.h2
        key={items[currentIndex].title}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 bottom-0 font-semibold tracking-wider leading-[3.5rem] text-5xl text-white z-30 p-10 w-[45rem]"
      >
        {items[currentIndex].title}
      </motion.h2>
      <div className="absolute right-0 bottom-0 px-20 py-10 z-30 flex gap-6 items-center justify-center">
        <ArrowButton direction="left" onClick={prevItem} />
        <ArrowButton onClick={nextItem} />
      </div>
      <div className="w-full h-full absolute bg-gradient-to-t from-[#1f1f1fdf] via-[#4242423a]  to-transparent z-20"></div>
    </div>
  );
}
