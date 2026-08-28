import type { Metadata } from 'next';
import { messages, type Locale } from './i18n';

export const APP_URL = 'https://web-recorder.taptappun.workers.dev';

export function localizedMetadata(locale: Locale): Metadata {
  const isJapanese = locale === 'ja';
  const path = `/${locale}/`;
  const title = messages[locale].pageTitle;
  const description = messages[locale].pageDescription;
  const imageAlt = isJapanese
    ? 'WebRecorder — ブラウザだけで、かんたん画面録画'
    : 'WebRecorder browser screen recording application';

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: { 'en-US': '/en/', 'ja-JP': '/ja/', 'x-default': '/' },
    },
    openGraph: {
      title,
      description,
      url: `${APP_URL}${path}`,
      siteName: 'WebRecorder',
      type: 'website',
      locale: isJapanese ? 'ja_JP' : 'en_US',
      alternateLocale: [isJapanese ? 'en_US' : 'ja_JP'],
      images: [{ url: '/og.png', width: 1728, height: 907, alt: imageAlt, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: '/og.png', alt: imageAlt }],
    },
  };
}

export function localizedStructuredData(locale: Locale) {
  const isJapanese = locale === 'ja';
  const path = `/${locale}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${APP_URL}${path}#website`,
        url: `${APP_URL}${path}`,
        name: 'WebRecorder',
        inLanguage: isJapanese ? 'ja-JP' : 'en-US',
      },
      {
        '@type': 'WebApplication',
        '@id': `${APP_URL}${path}#app`,
        name: 'WebRecorder',
        url: `${APP_URL}${path}`,
        description: messages[locale].pageDescription,
        applicationCategory: 'MultimediaApplication',
        applicationSubCategory: 'Screen Recorder',
        operatingSystem: 'Web browser',
        inLanguage: isJapanese ? 'ja-JP' : 'en-US',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: isJapanese ? 'JPY' : 'USD' },
      },
    ],
  };
}
