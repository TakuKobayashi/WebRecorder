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
      inLanguage: ['en', 'ja-JP'],
    },
    {
      '@type': 'WebApplication',
      '@id': `${APP_URL}/#app`,
      name: 'WebRecorder',
      url: `${APP_URL}/`,
      description:
        'A free web application for browser-based screen recording, audio capture, real-time transcription, and WebM or MP4 downloads.',
      applicationCategory: 'MultimediaApplication',
      applicationSubCategory: 'Screen Recorder',
      operatingSystem: 'Web browser',
      browserRequirements:
        'Requires JavaScript, MediaRecorder API, and getDisplayMedia API support.',
      inLanguage: ['en', 'ja-JP'],
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Browser screen recording',
        'Screen audio or microphone capture',
        'WebM and MP4 downloads',
        'Real-time transcription',
        'Light and dark themes',
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
