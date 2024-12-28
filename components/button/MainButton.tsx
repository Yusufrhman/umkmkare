import { FaArrowRight } from "react-icons/fa";

export default function MainButton({
  children,
  reversed,
  className,
}: {
  children: React.ReactNode;
  reversed?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`text-white font-thin py-2 px-3 border rounded-md flex items-center justify-center gap-2 ${className}`}
    >
      {children}
      <div className="bg-white p-1 rounded-full cursor-pointer -rotate-45">
        <FaArrowRight size={10} color="black" />
      </div>
    </button>
  );
}
