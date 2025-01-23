import Link from "next/link";

export default function NavLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link href={href} className={`text-white text-md font-thin ${className}`}>
      {children}
    </Link>
  );
}
