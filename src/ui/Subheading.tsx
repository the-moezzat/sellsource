function Subheading({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <p className={`uppercase tracking-widest ${className}`}>{children}</p>;
}

export default Subheading;
