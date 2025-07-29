import { Suspense } from 'react';
import PhoneVerificationPageView from './_features/ui/PhoneVerificationPageView';

export default function PhoneVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PhoneVerificationPageView />
    </Suspense>
  );
}