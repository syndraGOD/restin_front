import { colors, typography } from '../theme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'disabled';
}

export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary' 
}: ButtonProps) {
  const currentVariant = disabled ? 'disabled' : variant;
  
  const variantStyles = {
    primary: {
      backgroundColor: colors.primary.primary,
      color: colors.text.inverse,
      cursor: 'pointer'
    },
    disabled: {
      backgroundColor: colors.background.disabled,
      color: colors.text.disabled,
      cursor: 'not-allowed'
    }
  };

  return (
    <button 
      className="box-border content-stretch flex flex-row items-center justify-center min-w-[312px] overflow-clip px-0 py-4 relative rounded-2xl shrink-0 w-full text-center text-nowrap"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        ...variantStyles[currentVariant],
        fontFamily: typography.body.large.bold.fontFamily,
        fontWeight: typography.body.large.bold.fontWeight,
        fontSize: typography.body.large.bold.fontSize,
        lineHeight: typography.body.large.bold.lineHeight
      }}
    >
      <p className="block leading-[1.5] whitespace-pre">{children}</p>
    </button>
  );
}