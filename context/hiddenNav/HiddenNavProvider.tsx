"use client"
import { useState } from "react";
import { HiddenNavCtx } from "./HiddenNavCtx";

export const HiddenNavProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNav() {
    setIsOpen((prev) => !prev);
  }
  return (
    <HiddenNavCtx.Provider
      value={{
        isOpen,
        toggleNav,
      }}
    >
      {children}
    </HiddenNavCtx.Provider>
  );
};
