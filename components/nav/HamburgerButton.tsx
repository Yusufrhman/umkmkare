import React from "react";

interface HamburgerButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      id="menu-btn"
      onClick={onClick}
      className="block md:hidden focus:outline-none"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
    >
      <span
        className={`hamburger-line block w-6 h-1 bg-white my-1 transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`hamburger-line block w-6 h-1 bg-white my-1 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`hamburger-line block w-6 h-1 bg-white my-1 transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
}
