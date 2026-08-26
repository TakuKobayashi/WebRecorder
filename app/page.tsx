import RecordingApp from '@/components/RecordingApp';

const APP_URL = 'https://web-recorder.taptappun.workers.dev';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${APP_URL}/#website`,
      url: `${APP_URL}/`,
      name: 'WebRecorder',
      inLanguage: 'ja-JP',
    },
    {
      '@type': 'WebApplication',
      '@id': `${APP_URL}/#app`,
      name: 'WebRecorder',
      url: `${APP_URL}/`,
      description:
        'ブラウザだけで画面録画、音声録音、リアルタイム文字起こし、WebM・MP4保存ができる無料Webアプリケーションです。',
      applicationCategory: 'MultimediaApplication',
      applicationSubCategory: 'Screen Recorder',
      operatingSystem: 'Web browser',
      browserRequirements: 'JavaScript、MediaRecorder API、getDisplayMedia APIへの対応が必要です。',
      inLanguage: ['ja-JP', 'en'],
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY',
      },
      featureList: [
        'ブラウザでの画面録画',
        '画面音声またはマイク音声の録音',
        'WebM・MP4形式での保存',
        'リアルタイム文字起こし',
        'ライト・ダークモード',
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <RecordingApp />
    </>
  );
}
