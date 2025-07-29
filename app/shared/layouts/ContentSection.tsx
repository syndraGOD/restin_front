interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({ children, className = '' }: ContentSectionProps) {
  return (
    <div className={`box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}