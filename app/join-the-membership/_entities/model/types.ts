export interface PhoneNumberForm {
  phoneNumber: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface PhoneNumberValidationResult {
  isValid: boolean;
  error?: string;
}