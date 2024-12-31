import Link from "next/link";
import NavLink from "../header/NavLink";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-custom-dark-green via-custom-dark-green to-custom-olive-green w-full h-fit rounded-xl py-6 px-8 mb-5 mt-20 shadow-lg">
      <section className="flex items-center justify-between pb-4">
        <Link href={"/"} className="text-white text-3xl font-Grenze-Gotisch">
          UMKM Desa Kare
        </Link>
        <ul className="text-center flex items-center justify-center gap-10">
          <li>
            <NavLink href={"/"} className="text-white text-md font-thin">
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink href={"/"} className="text-white text-md font-thin">
              Produk
            </NavLink>
          </li>
          <li>
            <NavLink href={"/"} className="text-white text-md font-thin">
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink href={"/"} className="text-white text-md font-thin">
              Kontak
            </NavLink>
          </li>
        </ul>
        <ul className="text-center flex items-center justify-center gap-3">
          <li>
            <RiInstagramFill size={24} color="white" />
          </li>
          <li>
            <RiFacebookCircleFill size={24} color="white" />
          </li>
          <li>
            <RiTwitterFill size={24} color="white" />
          </li>
          <li>
            <RiYoutubeFill size={24} color="white" />
          </li>
        </ul>
      </section>
      <hr className="opacity-40" />
      <section className="flex justify-between items-center pt-4 font-thin text-sm text-custom-off-white opacity-80">
        <p>©Copyright 2024. All Rights Reserved</p>
        <p className="text-right">
          Pengabdian Masyarakat Statistika{" "}
          <span className="block">Universitas Airlangga</span>
        </p>
      </section>
    </footer>
  );
}
