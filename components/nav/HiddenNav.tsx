"use client";
import { HiddenNavCtx } from "@/context/hiddenNav/HiddenNavCtx";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import NavLink from "./NavLink";

export default function HiddenNav() {
  const { isOpen, toggleNav } = useContext(HiddenNavCtx);
  console.log(isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="w-screen h-screen fixed top-0 z-40   bg-[#00000077]  -ml-4 md:hidden">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "100vh",
                transition: { duration: 0.5, type: "spring" },
              },
              visible: {
                opacity: 1,
                x: "0vh",
                transition: { duration: 0.5, type: "spring" },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className=" fixed z-50 top-[6.5rem] bottom-5 right-4 left-4 bg-custom-olive-green rounded-lg px-10 py-8"
          >
            <ul className="flex flex-col gap-4">
              <li className="" onClick={toggleNav}>
                <NavLink href={"/"} className="text-white text-md font-thin">
                  Beranda
                </NavLink>
              </li>
              <li className="" onClick={toggleNav}>
                <NavLink
                  href={"/produk"}
                  className="text-white text-md font-thin"
                >
                  Produk
                </NavLink>
              </li>
              <li className="" onClick={toggleNav}>
                <NavLink
                  href={"/umkm"}
                  className="text-white text-md font-thin"
                >
                  UMKM
                </NavLink>
              </li>
              <li className="" onClick={toggleNav}>
                <NavLink
                  href={"/kontak"}
                  className="text-white text-md font-thin"
                >
                  Kontak
                </NavLink>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
