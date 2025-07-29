'use client';

import { useRouter } from 'next/navigation';
import { Button, HomeIndicator } from '../../../shared/components';
import { MobileContainer, ContentSection, ButtonContainer } from '../../../shared/layouts';
import { colors, typography, CheckIcon } from '../../../shared/theme';

export default function SignupCompletePageView() {
  const router = useRouter();

  const handleStartUsing = () => {
    // 메인 서비스 페이지로 이동
    router.push('/');
  };

  return (
    <MobileContainer>
      {/* Content */}
      <div className="absolute left-0 top-0 w-full h-[calc(100vh-92px)]">
        <ContentSection className="h-full flex flex-col justify-center items-center text-center">
          {/* Success Icon */}
          <div 
            className="w-24 h-24 rounded-full mb-8 flex items-center justify-center"
            style={{ backgroundColor: colors.primary.primary }}
          >
            <CheckIcon size={48} color={colors.text.inverse} />
          </div>

          {/* Congratulations */}
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
            가입이 완료되었습니다!
          </div>

          {/* Welcome Message */}
          <div 
            className="mb-12 px-4"
            style={{
              fontFamily: typography.body.medium.medium.fontFamily,
              fontWeight: typography.body.medium.medium.fontWeight,
              fontSize: typography.body.medium.medium.fontSize,
              lineHeight: typography.body.medium.medium.lineHeight,
              color: colors.text.tertiary
            }}
          >
            레스틴에 오신 것을 환영합니다!
            <br />
            이제 카페의 빈 좌석을 저렴하게 이용해보세요.
          </div>

          {/* Benefits List */}
          <div className="w-full mb-8 space-y-4">
            <div className="flex items-center justify-start px-4">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: colors.primary.primary }}
              >
                <CheckIcon size={12} color={colors.text.inverse} />
              </div>
              <span 
                style={{
                  fontFamily: typography.body.medium.medium.fontFamily,
                  fontWeight: typography.body.medium.medium.fontWeight,
                  fontSize: typography.body.medium.medium.fontSize,
                  color: colors.text.primary
                }}
              >
                빈 좌석 실시간 확인
              </span>
            </div>
            
            <div className="flex items-center justify-start px-4">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: colors.primary.primary }}
              >
                <CheckIcon size={12} color={colors.text.inverse} />
              </div>
              <span 
                style={{
                  fontFamily: typography.body.medium.medium.fontFamily,
                  fontWeight: typography.body.medium.medium.fontWeight,
                  fontSize: typography.body.medium.medium.fontSize,
                  color: colors.text.primary
                }}
              >
                저렴한 좌석 이용료
              </span>
            </div>
            
            <div className="flex items-center justify-start px-4">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: colors.primary.primary }}
              >
                <CheckIcon size={12} color={colors.text.inverse} />
              </div>
              <span 
                style={{
                  fontFamily: typography.body.medium.medium.fontFamily,
                  fontWeight: typography.body.medium.medium.fontWeight,
                  fontSize: typography.body.medium.medium.fontSize,
                  color: colors.text.primary
                }}
              >
                간편한 예약 시스템
              </span>
            </div>
          </div>
        </ContentSection>
      </div>
      
      {/* Button and Home Indicator */}
      <ButtonContainer>
        <Button onClick={handleStartUsing}>
          레스틴 시작하기
        </Button>
        <HomeIndicator />
      </ButtonContainer>
    </MobileContainer>
  );
}