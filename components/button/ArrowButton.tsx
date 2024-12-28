import { FaArrowRight } from "react-icons/fa";

export default function ArrowButton({
  direction = "right",
  className,
  onClick,
  size,
}: {
  direction?:
    | "up"
    | "right"
    | "down"
    | "left"
    | "up-right"
    | "up-left"
    | "down-right"
    | "down-left";
  className?: string;
  onClick?: () => void;
  size?: number;
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
    case "up-right":
      rotation = "-rotate-45"; // Rotate up-right
      break;
    case "up-left":
      rotation = "rotate-45"; // Rotate up-left
      break;
    case "down-right":
      rotation = "rotate-135"; // Rotate down-right
      break;
    case "down-left":
      rotation = "-rotate-135"; // Rotate down-left
      break;
    default:
      rotation = "rotate-0";
  }

  return (
    <button
      className={`flex items-center justify-center bg-custom-sage-green p-3 rounded-full hover:bg-custom-lime-green cursor-pointer  ${rotation} ${className}`}
      onClick={onClick}
    >
      <FaArrowRight size={size ? size : 20} />
    </button>
  );
}
