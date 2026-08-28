import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'WebRecorder | Free browser screen recorder' },
  description: 'Record your screen in the browser for free. No installation or sign-up required.',
  alternates: {
    canonical: '/en/',
    languages: { 'en-US': '/en/', 'ja-JP': '/ja/', 'x-default': '/en/' },
  },
};

const localeRedirectScript = `
  (() => {
    const supportedLocales = new Set(['en', 'ja']);
    const preferredLocales = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    const locale = preferredLocales
      .map((language) => language.toLowerCase().split('-')[0])
      .find((language) => supportedLocales.has(language)) ?? 'en';

    location.replace('/' + locale + '/' + location.search + location.hash);
  })();
`;

export default function Page() {
  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en/" />
      </noscript>
    </main>
  );
}
