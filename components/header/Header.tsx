import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-custom-olive-green via-custom-light-olive-green to-custom-lime-green w-full h-fit rounded-xl p-5 my-5 sticky top-5 z-[1000] shadow-lg">
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
          <Link href={"/"} className="text-white text-3xl font-Grenze-Gotisch">
            UMKM Desa Kare
          </Link>
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
    </header>
  );
}
