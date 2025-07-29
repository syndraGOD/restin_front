import { colors, typography } from '../theme';

interface InputFieldProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function InputField({ 
  title, 
  placeholder, 
  value, 
  onChange, 
  error 
}: InputFieldProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
      <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div 
            className="relative shrink-0 text-left text-nowrap"
            style={{
              fontFamily: typography.body.medium.bold.fontFamily,
              fontWeight: typography.body.medium.bold.fontWeight,
              fontSize: typography.body.medium.bold.fontSize,
              lineHeight: typography.body.medium.bold.lineHeight,
              color: colors.text.tertiary
            }}
          >
            <p className="block leading-[1.5] whitespace-pre">{title}</p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-row grow h-[33px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div 
              className="absolute inset-0 pointer-events-none border-solid border-[0px_0px_1px]"
              style={{ borderColor: colors.border.default }}
            />
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="box-border content-stretch flex flex-col h-[33px] items-start justify-center p-0 relative shrink-0 w-full bg-transparent border-none outline-none text-justify tracking-[-0.144px]"
              style={{
                fontFamily: typography.header.header4.regular.fontFamily,
                fontWeight: typography.header.header4.regular.fontWeight,
                fontSize: typography.header.header4.regular.fontSize,
                lineHeight: typography.header.header4.regular.lineHeight,
                color: colors.text.placeholder
              }}
            />
          </div>
        </div>
      </div>
      {error && (
        <div 
          className="text-red-500"
          style={{
            fontFamily: typography.body.small.medium.fontFamily,
            fontWeight: typography.body.small.medium.fontWeight,
            fontSize: typography.body.small.medium.fontSize,
            lineHeight: typography.body.small.medium.lineHeight
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}