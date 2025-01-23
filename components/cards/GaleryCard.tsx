"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GaleryCard({
  className,
  imageSrc,
  title,
  description,
}: {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`rounded-xl overflow-hidden relative group grayscale hover:grayscale-0 transition-all ${className}`}

      transition={{ duration: 0.1 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Image
        src={imageSrc}
        className="h-full w-full object-cover absolute"
        alt="Galeri"
        width={500}
        height={500}
      />
      <motion.div
        className="absolute z-20 text-white bottom-0 p-5"
        initial={{ translateY: "100%" }}
        animate={{ translateY: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.2 }}
      >
        <h5 className="text-lg">{title}</h5>
        <p className="text-xs font-thin line-clamp-4">{description}</p>
      </motion.div>

      <div
        className={`absolute bg-gradient-to-t from-[#283618ce] to-transparent w-full h-full ${
          !isOpen && "opacity-0"
        }`}
      ></div>
    </motion.div>
  );
}
