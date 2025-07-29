'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header, InputField, Button, HomeIndicator } from '../../../shared/components';
import { MobileContainer, ContentSection, ButtonContainer } from '../../../shared/layouts';
import { colors, typography } from '../../../shared/theme';
import { PhoneNumberForm } from '../../_entities/model/types';
import { usePhoneVerificationMutation } from '../../api/queries';

export default function JoinTheMembershipPageView() {
  const router = useRouter();
  const [form, setForm] = useState<PhoneNumberForm>({
    phoneNumber: ''
  });
  const [error, setError] = useState<string>('');
  
  const phoneVerificationMutation = usePhoneVerificationMutation();

  const handleChangePhoneNumber = (value: string) => {
    setForm(prev => ({ ...prev, phoneNumber: value }));
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async () => {
    if (!form.phoneNumber.trim()) {
      setError('휴대폰 번호를 입력해주세요.');
      return;
    }
    
    // 휴대폰 번호 형식 검증
    const phoneRegex = /^01[0-9]-?[0-9]{4}-?[0-9]{4}$/;
    const cleanPhoneNumber = form.phoneNumber.replace(/[^0-9]/g, '');
    
    if (!phoneRegex.test(cleanPhoneNumber)) {
      setError('올바른 휴대폰 번호를 입력해주세요.');
      return;
    }

    try {
      // 인증 요청
      await phoneVerificationMutation.mutateAsync(form.phoneNumber);
      
      // 성공 시 인증번호 입력 페이지로 이동
      router.push(`/phone-verification?phone=${encodeURIComponent(form.phoneNumber)}`);
    } catch (error) {
      setError('인증번호 전송에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const isFormValid = form.phoneNumber.trim().length > 0;

  return (
    <MobileContainer>
      {/* Header */}
      <div 
        className="absolute h-[50px] left-0 overflow-clip top-0 w-full"
        style={{ backgroundColor: colors.background.default }}
      >
        <Header title="" onBackClick={handleBackClick} />
      </div>
      
      {/* Title */}
      <div className="absolute h-[126px] left-0 overflow-clip top-[50px] w-full">
        <div className="relative size-full">
          <div 
            className="absolute left-6 not-italic text-left top-6 tracking-[-0.192px]"
            style={{
              fontFamily: typography.header.header2.bold.fontFamily,
              fontWeight: typography.header.header2.bold.fontWeight,
              fontSize: typography.header.header2.bold.fontSize,
              lineHeight: typography.header.header2.bold.lineHeight,
              letterSpacing: "-0.192px",
              color: colors.text.primary
            }}
          >
            <p className="adjustLetterSpacing block mb-0">안녕하세요!</p>
            <p className="adjustLetterSpacing block">휴대폰 번호를 알려주세요</p>
          </div>
        </div>
      </div>
      
      {/* Input Contents */}
      <div className="absolute h-28 left-0 overflow-clip top-[234px] w-full">
        <ContentSection className="absolute h-28 items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start overflow-clip p-0 relative shrink-0 w-full">
            <InputField
              title="이름"
              placeholder="성명 입력"
              value={form.phoneNumber}
              onChange={handleChangePhoneNumber}
              error={error}
            />
          </div>
        </ContentSection>
      </div>
      
      {/* Button and Home Indicator */}
      <ButtonContainer>
        <Button 
          onClick={handleSubmit}
          disabled={!isFormValid || phoneVerificationMutation.isPending}
        >
          {isFormValid ? '사용 시작하기' : '인증 문자받기'}
        </Button>
        <HomeIndicator />
      </ButtonContainer>
    </MobileContainer>
  );
}