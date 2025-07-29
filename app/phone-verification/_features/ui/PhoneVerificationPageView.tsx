'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header, Button, HomeIndicator, NumberKeypad, VerificationCodeInput } from '../../../shared/components';
import { MobileContainer, ContentSection, ButtonContainer } from '../../../shared/layouts';
import { colors, typography } from '../../../shared/theme';
import { VerificationCodeForm } from '../../_entities/model/types';
import { useVerifyCodeMutation } from '../../api/queries';

export default function PhoneVerificationPageView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get('phone') || '';
  
  const [form, setForm] = useState<VerificationCodeForm>({
    code: '',
    phoneNumber: phoneNumber
  });
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초
  const [error, setError] = useState<string>('');
  
  const verifyCodeMutation = useVerifyCodeMutation();

  // 타이머 효과
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleNumberPress = (number: string) => {
    if (form.code.length < 6) {
      setForm(prev => ({ ...prev, code: prev.code + number }));
      setError('');
    }
  };

  const handleBackspace = () => {
    setForm(prev => ({ ...prev, code: prev.code.slice(0, -1) }));
    setError('');
  };

  const handleSubmit = async () => {
    if (form.code.length !== 6) {
      setError('인증번호 6자리를 입력해주세요.');
      return;
    }

    try {
      const result = await verifyCodeMutation.mutateAsync({
        phoneNumber: form.phoneNumber,
        code: form.code
      });

      if (result.success) {
        // 성공 시 다음 단계로 이동
        switch (result.nextStep) {
          case 'signup-complete':
            router.push('/signup-complete');
            break;
          case 'signup-failed':
            router.push('/signup-failed');
            break;
          case 'signup-incomplete':
            router.push('/signup-incomplete');
            break;
          case 'signup-existing':
            router.push('/signup-existing');
            break;
          default:
            router.push('/');
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : '인증에 실패했습니다.');
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleResendCode = () => {
    setTimeLeft(180);
    setForm(prev => ({ ...prev, code: '' }));
    setError('');
    // 여기서 인증번호 재전송 API 호출
  };

  const isFormValid = form.code.length === 6;

  return (
    <MobileContainer>
      {/* Header */}
      <div 
        className="absolute h-[50px] left-0 overflow-clip top-0 w-full"
        style={{ backgroundColor: colors.background.default }}
      >
        <Header title="인증번호 확인" onBackClick={handleBackClick} />
      </div>
      
      {/* Content */}
      <div className="absolute left-0 top-[50px] w-full h-[calc(100vh-192px)]">
        <ContentSection className="h-full flex flex-col justify-start">
          {/* Title and Description */}
          <div className="text-center mb-8">
            <div 
              className="mb-2"
              style={{
                fontFamily: typography.header.header2.bold.fontFamily,
                fontWeight: typography.header.header2.bold.fontWeight,
                fontSize: typography.header.header2.bold.fontSize,
                lineHeight: typography.header.header2.bold.lineHeight,
                color: colors.text.primary
              }}
            >
              인증번호를 입력해주세요
            </div>
            <div 
              className="mb-4"
              style={{
                fontFamily: typography.body.medium.medium.fontFamily,
                fontWeight: typography.body.medium.medium.fontWeight,
                fontSize: typography.body.medium.medium.fontSize,
                lineHeight: typography.body.medium.medium.lineHeight,
                color: colors.text.tertiary
              }}
            >
              {phoneNumber}로 전송된 인증번호를 입력해주세요
            </div>
            <div 
              style={{
                fontFamily: typography.body.small.medium.fontFamily,
                fontWeight: typography.body.small.medium.fontWeight,
                fontSize: typography.body.small.medium.fontSize,
                lineHeight: typography.body.small.medium.lineHeight,
                color: colors.primary.primary
              }}
            >
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Verification Code Input */}
          <div className="mb-8">
            <VerificationCodeInput value={form.code} length={6} />
          </div>

          {/* Error Message */}
          {error && (
            <div 
              className="text-center mb-4"
              style={{
                fontFamily: typography.body.small.medium.fontFamily,
                fontWeight: typography.body.small.medium.fontWeight,
                fontSize: typography.body.small.medium.fontSize,
                color: '#ef4444'
              }}
            >
              {error}
            </div>
          )}

          {/* Resend Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleResendCode}
              disabled={timeLeft > 0}
              className="underline"
              style={{
                fontFamily: typography.body.medium.medium.fontFamily,
                fontWeight: typography.body.medium.medium.fontWeight,
                fontSize: typography.body.medium.medium.fontSize,
                color: timeLeft > 0 ? colors.text.tertiary : colors.primary.primary,
                backgroundColor: 'transparent',
                border: 'none',
                cursor: timeLeft > 0 ? 'not-allowed' : 'pointer'
              }}
            >
              인증번호 재전송
            </button>
          </div>

          {/* Number Keypad */}
          <div className="flex-1 flex items-end pb-4">
            <NumberKeypad 
              onNumberPress={handleNumberPress}
              onBackspace={handleBackspace}
            />
          </div>
        </ContentSection>
      </div>
      
      {/* Button and Home Indicator */}
      <ButtonContainer>
        <Button 
          onClick={handleSubmit}
          disabled={!isFormValid || verifyCodeMutation.isPending}
        >
          {verifyCodeMutation.isPending ? '인증 중...' : '확인'}
        </Button>
        <HomeIndicator />
      </ButtonContainer>
    </MobileContainer>
  );
}