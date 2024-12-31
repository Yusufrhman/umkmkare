export default function H3({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  let classes =
    "bg-gradient-to-r from-custom-dark-green via-custom-dark-green to-custom-olive-green text-transparent bg-clip-text text-4xl font-semibold tracking-wider ";
  classes += className;
  return (
    <h3 className={classes}>
      {children}
    </h3>
  );
}
