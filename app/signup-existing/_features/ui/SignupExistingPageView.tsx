'use client';

import { useRouter } from 'next/navigation';
import { Header, Button, HomeIndicator } from '../../../shared/components';
import { MobileContainer, ContentSection, ButtonContainer } from '../../../shared/layouts';
import { colors, typography, UserIcon } from '../../../shared/theme';

export default function SignupExistingPageView() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleLogin = () => {
    // 로그인 페이지로 이동
    router.push('/login');
  };

  const handleFindPassword = () => {
    // 비밀번호 찾기 페이지로 이동
    router.push('/find-password');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <MobileContainer>
      {/* Header */}
      <div 
        className="absolute h-[50px] left-0 overflow-clip top-0 w-full"
        style={{ backgroundColor: colors.background.default }}
      >
        <Header title="회원가입" onBackClick={handleBackClick} />
      </div>
      
      {/* Content */}
      <div className="absolute left-0 top-[50px] w-full h-[calc(100vh-192px)]">
        <ContentSection className="h-full flex flex-col justify-center items-center text-center">
          {/* Icon or Illustration */}
          <div 
            className="w-20 h-20 rounded-full mb-8 flex items-center justify-center"
            style={{ backgroundColor: colors.primary.primary }}
          >
            <UserIcon size={40} color={colors.text.inverse} />
          </div>

          {/* Title */}
          <div 
            className="mb-4"
            style={{
              fontFamily: typography.header.header2.bold.fontFamily,
              fontWeight: typography.header.header2.bold.fontWeight,
              fontSize: typography.header.header2.bold.fontSize,
              lineHeight: typography.header.header2.bold.lineHeight,
              color: colors.text.primary
            }}
          >
            이미 가입된 번호입니다
          </div>

          {/* Description */}
          <div 
            className="mb-8 px-4"
            style={{
              fontFamily: typography.body.medium.medium.fontFamily,
              fontWeight: typography.body.medium.medium.fontWeight,
              fontSize: typography.body.medium.medium.fontSize,
              lineHeight: typography.body.medium.medium.lineHeight,
              color: colors.text.tertiary
            }}
          >
            해당 번호로 이미 가입하신 계정이 있습니다.
            <br />
            로그인하여 서비스를 이용해주세요.
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <Button onClick={handleLogin}>
              로그인하기
            </Button>
            
            <button
              onClick={handleFindPassword}
              className="w-full py-4 rounded-2xl"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${colors.primary.primary}`,
                fontFamily: typography.body.large.bold.fontFamily,
                fontWeight: typography.body.large.bold.fontWeight,
                fontSize: typography.body.large.bold.fontSize,
                color: colors.primary.primary
              }}
            >
              비밀번호 찾기
            </button>

            <button
              onClick={handleGoHome}
              className="w-full py-4"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontFamily: typography.body.medium.medium.fontFamily,
                fontWeight: typography.body.medium.medium.fontWeight,
                fontSize: typography.body.medium.medium.fontSize,
                color: colors.text.tertiary,
                textDecoration: 'underline'
              }}
            >
              홈으로 돌아가기
            </button>
          </div>
        </ContentSection>
      </div>
      
      {/* Home Indicator */}
      <ButtonContainer>
        <HomeIndicator />
      </ButtonContainer>
    </MobileContainer>
  );
}