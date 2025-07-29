'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header, Button, HomeIndicator, InputField } from '../../../shared/components';
import { MobileContainer, ContentSection, ButtonContainer } from '../../../shared/layouts';
import { colors, typography } from '../../../shared/theme';

interface UserInfoForm {
  name: string;
  email: string;
  birthYear: string;
  gender: 'M' | 'F' | '';
}

export default function SignupIncompletePageView() {
  const router = useRouter();
  
  const [form, setForm] = useState<UserInfoForm>({
    name: '',
    email: '',
    birthYear: '',
    gender: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleBackClick = () => {
    router.back();
  };

  const handleInputChange = (field: keyof UserInfoForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleGenderSelect = (gender: 'M' | 'F') => {
    setForm(prev => ({ ...prev, gender }));
    if (errors.gender) {
      setErrors(prev => ({ ...prev, gender: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!form.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!form.birthYear.trim()) {
      newErrors.birthYear = '출생년도를 입력해주세요.';
    } else if (!/^\d{4}$/.test(form.birthYear) || parseInt(form.birthYear) < 1900 || parseInt(form.birthYear) > new Date().getFullYear()) {
      newErrors.birthYear = '올바른 출생년도를 입력해주세요.';
    }

    if (!form.gender) {
      newErrors.gender = '성별을 선택해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // 샘플 구현: 회원가입 완료 처리
      console.log('회원가입 정보:', form);
      router.push('/signup-complete');
    }
  };

  const isFormValid = form.name && form.email && form.birthYear && form.gender;

  return (
    <MobileContainer>
      {/* Header */}
      <div 
        className="absolute h-[50px] left-0 overflow-clip top-0 w-full"
        style={{ backgroundColor: colors.background.default }}
      >
        <Header title="추가 정보 입력" onBackClick={handleBackClick} />
      </div>
      
      {/* Content */}
      <div className="absolute left-0 top-[50px] w-full h-[calc(100vh-192px)] overflow-y-auto">
        <ContentSection className="space-y-6">
          {/* Title */}
          <div className="text-center mb-6">
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
              추가 정보를 입력해주세요
            </div>
            <div 
              style={{
                fontFamily: typography.body.medium.medium.fontFamily,
                fontWeight: typography.body.medium.medium.fontWeight,
                fontSize: typography.body.medium.medium.fontSize,
                lineHeight: typography.body.medium.medium.lineHeight,
                color: colors.text.tertiary
              }}
            >
              서비스 이용을 위해 기본 정보가 필요합니다
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <InputField
              title="이름"
              placeholder="이름을 입력해주세요"
              value={form.name}
              onChange={(value) => handleInputChange('name', value)}
              error={errors.name}
            />

            <InputField
              title="이메일"
              placeholder="이메일을 입력해주세요"
              value={form.email}
              onChange={(value) => handleInputChange('email', value)}
              error={errors.email}
            />

            <InputField
              title="출생년도"
              placeholder="YYYY"
              value={form.birthYear}
              onChange={(value) => handleInputChange('birthYear', value)}
              error={errors.birthYear}
            />

            {/* Gender Selection */}
            <div>
              <div 
                className="mb-2"
                style={{
                  fontFamily: typography.body.medium.bold.fontFamily,
                  fontWeight: typography.body.medium.bold.fontWeight,
                  fontSize: typography.body.medium.bold.fontSize,
                  lineHeight: typography.body.medium.bold.lineHeight,
                  color: colors.text.tertiary
                }}
              >
                성별
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleGenderSelect('M')}
                  className="flex-1 py-3 rounded-lg border"
                  style={{
                    backgroundColor: form.gender === 'M' ? colors.primary.primary : colors.background.default,
                    borderColor: form.gender === 'M' ? colors.primary.primary : colors.gray[300],
                    color: form.gender === 'M' ? colors.text.inverse : colors.text.primary,
                    fontFamily: typography.body.medium.medium.fontFamily,
                    fontWeight: typography.body.medium.medium.fontWeight,
                    fontSize: typography.body.medium.medium.fontSize
                  }}
                >
                  남성
                </button>
                <button
                  onClick={() => handleGenderSelect('F')}
                  className="flex-1 py-3 rounded-lg border"
                  style={{
                    backgroundColor: form.gender === 'F' ? colors.primary.primary : colors.background.default,
                    borderColor: form.gender === 'F' ? colors.primary.primary : colors.gray[300],
                    color: form.gender === 'F' ? colors.text.inverse : colors.text.primary,
                    fontFamily: typography.body.medium.medium.fontFamily,
                    fontWeight: typography.body.medium.medium.fontWeight,
                    fontSize: typography.body.medium.medium.fontSize
                  }}
                >
                  여성
                </button>
              </div>
              {errors.gender && (
                <div 
                  className="mt-1"
                  style={{
                    fontFamily: typography.body.small.medium.fontFamily,
                    fontWeight: typography.body.small.medium.fontWeight,
                    fontSize: typography.body.small.medium.fontSize,
                    color: '#ef4444'
                  }}
                >
                  {errors.gender}
                </div>
              )}
            </div>
          </div>
        </ContentSection>
      </div>
      
      {/* Button and Home Indicator */}
      <ButtonContainer>
        <Button 
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          회원가입 완료
        </Button>
        <HomeIndicator />
      </ButtonContainer>
    </MobileContainer>
  );
}