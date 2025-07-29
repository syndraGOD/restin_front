export interface VerificationCodeForm {
  code: string;
  phoneNumber: string;
}

export interface VerificationResult {
  success: boolean;
  message?: string;
  nextStep?: 'signup-complete' | 'signup-failed' | 'signup-incomplete' | 'signup-existing';
}