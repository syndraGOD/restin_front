// 인증 코드 확인 (샘플 구현)
export const verifyCode = async (phoneNumber: string, code: string) => {
  // 실제 API 대신 샘플 응답 반환
  await new Promise(resolve => setTimeout(resolve, 1000)); // 로딩 시뮬레이션
  
  // 샘플 로직: 인증 코드에 따라 다른 결과 반환
  if (code === '000000') {
    return {
      success: true,
      nextStep: 'signup-complete',
      message: '인증이 완료되었습니다.'
    };
  } else if (code === '567890') {
    return {
      success: false,
      nextStep: 'signup-failed',
      message: '가입 의지가 없는 번호입니다.'
    };
  } else if (code === '999999') {
    return {
      success: true,
      nextStep: 'signup-incomplete',
      message: '추가 정보가 필요합니다.'
    };
  } else if (code === '123456') {
    return {
      success: true,
      nextStep: 'signup-existing',
      message: '이미 가입된 번호입니다.'
    };
  } else {
    throw new Error('잘못된 인증번호입니다.');
  }
};