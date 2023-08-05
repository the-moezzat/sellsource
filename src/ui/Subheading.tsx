function Subheading({
  text,
  color,
  className,
}: {
  text: string;
  color: string;
  className: string;
}) {
  return (
    <p className={`uppercase tracking-widest text-${color} ${className}`}>
      {text}
    </p>
  );
}

export default Subheading;
