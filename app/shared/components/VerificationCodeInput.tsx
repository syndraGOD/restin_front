import { colors, typography } from '../theme';

interface VerificationCodeInputProps {
  value: string;
  length: number;
}

export default function VerificationCodeInput({ value, length }: VerificationCodeInputProps) {
  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }, (_, index) => (
        <div
          key={index}
          className="w-12 h-12 flex items-center justify-center rounded-lg border"
          style={{
            borderColor: value.length > index ? colors.primary.primary : colors.gray[300],
            backgroundColor: colors.background.default
          }}
        >
          <span
            style={{
              fontFamily: typography.body.large.bold.fontFamily,
              fontWeight: typography.body.large.bold.fontWeight,
              fontSize: '20px',
              color: colors.text.primary
            }}
          >
            {value[index] || ''}
          </span>
        </div>
      ))}
    </div>
  );
}