import { useMutation } from '@tanstack/react-query';
import { requestPhoneVerification, verifyPhoneCode } from './axios';

// 휴대폰 번호 인증 요청 mutation
export const usePhoneVerificationMutation = () => {
  return useMutation({
    mutationFn: (phoneNumber: string) => requestPhoneVerification(phoneNumber),
    onSuccess: (data) => {
      console.log('인증 요청 성공:', data);
    },
    onError: (error) => {
      console.error('인증 요청 실패:', error);
    },
  });
};

// 인증 코드 확인 mutation
export const useVerifyPhoneCodeMutation = () => {
  return useMutation({
    mutationFn: ({ phoneNumber, code }: { phoneNumber: string; code: string }) => 
      verifyPhoneCode(phoneNumber, code),
    onSuccess: (data) => {
      console.log('인증 확인 성공:', data);
    },
    onError: (error) => {
      console.error('인증 확인 실패:', error);
    },
  });
};