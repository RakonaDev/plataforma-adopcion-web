type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Title({
  children,
  className = "",
  htmlTag = "h1",
}: TitleProps) {
  const Tag = htmlTag;

  return (
    <Tag className={`text-5xl/[1.2] font-bold text-slate-800 ${className}`}>
      {children}
    </Tag>
  );
}

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  htmlTag?: HeadingTag;
}