import { colors } from '../theme';

export default function HomeIndicator() {
  return (
    <div className="h-7 relative shrink-0 w-full">
      <div className="relative size-full">
        <div 
          className="absolute bottom-2 h-[5px] rounded-[100px] translate-x-[-50%] w-[134px]"
          style={{ 
            backgroundColor: colors.gray[900],
            left: "calc(50% + 0.5px)" 
          }}
        />
      </div>
    </div>
  );
}