import type { Metadata, Viewport } from 'next';
import '@fontsource/ibm-plex-mono/300.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import './globals.css';

// ── Metadata ───────────────────────────────────────────────────────────────────
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://web-recorder.taptappun.workers.dev';
const APP_NAME = 'WebRecorder';
const TITLE = 'WebRecorder | Free browser screen recorder';
const DESCRIPTION =
  'Record your screen in the browser for free. Capture screen or microphone audio, save as WebM or MP4, and create real-time transcripts. No installation or sign-up required.';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: TITLE,
    template: `%s | ${APP_NAME}`,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },

  keywords: [
    'screen recorder',
    'browser screen recording',
    'speech to text',
    'transcription',
    'screen capture',
    'webrtc',
    'mediarecorder',
    'no install',
    'online screen recorder',
    '画面録画',
    'ブラウザ 画面録画',
    'オンライン スクリーンレコーダー',
    '無料 画面録画',
    'WebM 録画',
    'MP4 録画',
    'リアルタイム文字起こし',
  ],

  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  publisher: APP_NAME,
  category: 'productivity',
  classification: 'Screen recording and transcription tool',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Open Graph ───────────────────────────────────────────
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ja_JP'],
    images: [
      {
        url: '/og.png',
        width: 1728,
        height: 907,
        alt: 'WebRecorder browser screen recording application',
        type: 'image/png',
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og.png',
        alt: 'WebRecorder browser screen recording application',
      },
    ],
  },

  // ── Robots ───────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── App metadata ─────────────────────────────────────────
  applicationName: APP_NAME,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '1254x1254' }],
    shortcut: '/icon.png',
    apple: [{ url: '/icon.png', type: 'image/png', sizes: '1254x1254' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#101116' },
  ],
};

const themeInitScript = `
  (() => {
    try {
      const saved = localStorage.getItem('webrecorder-theme');
      const theme = saved === 'light' || saved === 'dark'
        ? saved
        : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {}
  })();
`;

// ── Layout ─────────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
