'use client';

import { useRouter } from 'next/navigation';
import { Header, Button, HomeIndicator } from '../../../shared/components';
import { MobileContainer, ContentSection, ButtonContainer } from '../../../shared/layouts';
import { colors, typography, WarningIcon } from '../../../shared/theme';

export default function SignupFailedPageView() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const handleRetry = () => {
    router.push('/join-the-membership');
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
            style={{ backgroundColor: colors.gray[100] }}
          >
            <WarningIcon size={40} color="#F59E0B" />
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
            가입할 수 없는 번호입니다
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
            해당 번호는 가입 의지가 없는 번호로 등록되어 있습니다.
            <br />
            다른 번호로 다시 시도해주세요.
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <Button onClick={handleRetry}>
              다른 번호로 가입하기
            </Button>
            
            <button
              onClick={handleGoHome}
              className="w-full py-4 rounded-2xl"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${colors.gray[300]}`,
                fontFamily: typography.body.large.bold.fontFamily,
                fontWeight: typography.body.large.bold.fontWeight,
                fontSize: typography.body.large.bold.fontSize,
                color: colors.text.secondary
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