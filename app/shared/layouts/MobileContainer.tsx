import { colors } from '../theme';

interface MobileContainerProps {
  children: React.ReactNode;
}

export default function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div 
      className="relative w-full min-h-screen mx-auto"
      style={{ 
        backgroundColor: colors.background.default,
        maxWidth: '375px'
      }}
    >
      {children}
    </div>
  );
}