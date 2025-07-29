import { colors, typography, ArrowLeftIcon } from '../theme';

interface HeaderProps {
  title?: string;
  onBackClick?: () => void;
}

export default function Header({ title = "", onBackClick }: HeaderProps) {
  return (
    <div className="relative w-full h-[50px]" style={{ backgroundColor: colors.background.default }}>
      <div 
        className="absolute left-1/2 text-center text-nowrap translate-x-[-50%]"
        style={{
          fontFamily: typography.special.headerTitle.fontFamily,
          fontWeight: typography.special.headerTitle.fontWeight,
          fontSize: typography.special.headerTitle.fontSize,
          lineHeight: typography.special.headerTitle.lineHeight,
          letterSpacing: typography.special.headerTitle.letterSpacing,
          color: colors.text.secondary,
          top: "calc(50% - 11px)",
          fontVariationSettings: "'CTGR' 0, 'wdth' 100"
        }}
      >
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{title}</p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%]">
        <button 
          className="flex items-center justify-center size-[50px] cursor-pointer" 
          onClick={onBackClick}
        >
          <ArrowLeftIcon size={20} color={colors.icon.gray} />
        </button>
      </div>
    </div>
  );
}