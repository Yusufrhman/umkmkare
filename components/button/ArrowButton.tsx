import { FaArrowRight } from "react-icons/fa";

export default function ArrowButton({
  direction = "right",
  className,
  onClick,
}: {
  direction?: "up" | "right" | "down" | "left";
  className?: string;
  onClick?: () => void;
}) {
  let rotation;

  switch (direction) {
    case "up":
      rotation = "-rotate-90";
      break;
    case "right":
      rotation = "rotate-0";
      break;
    case "down":
      rotation = "rotate-90";
      break;
    case "left":
      rotation = "rotate-180";
      break;
    default:
      rotation = "rotate-0";
  }

  return (
    <div
      className={`bg-custom-sage-green p-3 rounded-full hover:bg-custom-lime-green cursor-pointer ${className}`}
      onClick={onClick}
    >
      <FaArrowRight size={20} className={rotation} />
    </div>
  );
}
