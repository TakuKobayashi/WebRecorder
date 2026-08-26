'use client';

import { useEffect } from 'react';
import { detectLocale } from '@/lib/i18n';

export default function LocaleRedirect() {
  useEffect(() => {
    const locale = detectLocale(
      navigator.languages?.length ? navigator.languages : [navigator.language]
    );
    window.location.replace(`/${locale}/`);
  }, []);

  return <main aria-live="polite">Redirecting to WebRecorder…</main>;
}
