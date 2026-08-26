import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WebRecorder — Browser Screen Recorder',
    short_name: 'WebRecorder',
    description:
      'A free browser-based screen recorder with audio capture and real-time transcription.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f7fb',
    theme_color: '#6d5dfc',
    lang: 'en',
    categories: ['productivity', 'utilities'],
  };
}
