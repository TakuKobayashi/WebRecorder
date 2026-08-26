import type { Metadata } from 'next';
import LocaleRedirect from '@/components/LocaleRedirect';

export const metadata: Metadata = {
  title: 'WebRecorder',
  description: 'Redirecting to the localized WebRecorder experience.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: '/en/',
    languages: { 'en-US': '/en/', 'ja-JP': '/ja/', 'x-default': '/en/' },
  },
};

export default function Page() {
  return <LocaleRedirect />;
}
