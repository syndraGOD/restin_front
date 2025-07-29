import { useMutation } from '@tanstack/react-query';
import { verifyCode } from './axios';

export const useVerifyCodeMutation = () => {
  return useMutation({
    mutationFn: ({ phoneNumber, code }: { phoneNumber: string; code: string }) => 
      verifyCode(phoneNumber, code),
    onSuccess: (data) => {
      console.log('인증 성공:', data);
    },
    onError: (error) => {
      console.error('인증 실패:', error);
    },
  });
};