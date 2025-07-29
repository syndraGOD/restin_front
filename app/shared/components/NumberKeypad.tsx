import { colors, typography } from '../theme';

interface NumberKeypadProps {
  onNumberPress: (number: string) => void;
  onBackspace: () => void;
}

export default function NumberKeypad({ onNumberPress, onBackspace }: NumberKeypadProps) {
  const numbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'backspace']
  ];

  return (
    <div className="w-full grid grid-cols-3 gap-2 px-4">
      {numbers.flat().map((item, index) => {
        if (item === '') {
          return <div key={index} className="h-[60px]" />;
        }
        
        if (item === 'backspace') {
          return (
            <button
              key={index}
              onClick={onBackspace}
              className="h-[60px] flex items-center justify-center rounded-lg"
              style={{
                backgroundColor: 'transparent',
                color: colors.text.primary,
                fontFamily: typography.body.large.bold.fontFamily,
                fontWeight: typography.body.large.bold.fontWeight,
                fontSize: typography.body.large.bold.fontSize
              }}
            >
              ⌫
            </button>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onNumberPress(item)}
            className="h-[60px] flex items-center justify-center rounded-lg"
            style={{
              backgroundColor: 'transparent',
              color: colors.text.primary,
              fontFamily: typography.body.large.bold.fontFamily,
              fontWeight: typography.body.large.bold.fontWeight,
              fontSize: '24px'
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}