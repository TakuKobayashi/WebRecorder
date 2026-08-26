import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://web-recorder.taptappun.workers.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${APP_URL}/en/`,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${APP_URL}/en/`,
          ja: `${APP_URL}/ja/`,
        },
      },
    },
    {
      url: `${APP_URL}/ja/`,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${APP_URL}/en/`,
          ja: `${APP_URL}/ja/`,
        },
      },
    },
  ];
}
