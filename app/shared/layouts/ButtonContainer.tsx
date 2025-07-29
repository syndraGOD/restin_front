interface ButtonContainerProps {
  children: React.ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-end left-0 p-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip px-6 py-3 relative shrink-0 w-full">
        {children}
      </div>
    </div>
  );
}