"use client";
import { FaArrowRight } from "react-icons/fa";

export default function MainButton({
  children,
  reversed,
  className,
  onClick,
}: {
  children: React.ReactNode;
  reversed?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  let iconColor = "#6c7a3f";
  let background = "bg-custom-light-olive-green hover:bg-custom-olive-green";
  if (reversed) {
    iconColor = "#283618";
    background = "bg-transparent";
  }
  return (
    <button
      onClick={onClick}
      className={`text-white font-thin py-2 px-3 border rounded-md flex items-center justify-center gap-2 ${background} ${className}`}
    >
      {children}
      <div className="bg-white p-1 rounded-full cursor-pointer -rotate-45">
        <FaArrowRight size={10} color={iconColor} />
      </div>
    </button>
  );
}
