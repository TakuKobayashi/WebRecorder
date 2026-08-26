import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WebRecorder — ブラウザ画面録画',
    short_name: 'WebRecorder',
    description:
      'インストール不要で画面録画、音声録音、リアルタイム文字起こしができる無料Webアプリケーションです。',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f7fb',
    theme_color: '#6d5dfc',
    lang: 'ja',
    categories: ['productivity', 'utilities'],
  };
}
