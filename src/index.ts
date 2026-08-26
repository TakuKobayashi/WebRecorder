import { Hono, type Context } from 'hono';

type AppEnvironment = { Bindings: CloudflareBindings };
type Locale = 'en' | 'ja';

export function preferredLocale(acceptLanguage: string | undefined): Locale {
  if (!acceptLanguage) return 'en';

  const preferences = acceptLanguage
    .split(',')
    .map((part, index) => {
      const [language, ...parameters] = part.trim().toLowerCase().split(';');
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith('q='));
      const quality = qualityParameter ? Number.parseFloat(qualityParameter.split('=')[1]) : 1;
      return { language, quality: Number.isFinite(quality) ? quality : 0, index };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { language } of preferences) {
    if (language === 'ja' || language.startsWith('ja-')) return 'ja';
    if (language === 'en' || language.startsWith('en-') || language === '*') return 'en';
  }

  return 'en';
}

const app = new Hono<AppEnvironment>();

function redirectToLocalizedPage(c: Context<AppEnvironment>) {
  const requestUrl = new URL(c.req.url);
  const locale = preferredLocale(c.req.header('Accept-Language'));
  const destination = new URL(`/${locale}/${requestUrl.search}`, requestUrl);

  c.header('Vary', 'Accept-Language');
  c.header('Cache-Control', 'private, no-store');
  return c.redirect(destination.toString(), 302);
}

app.get('/', redirectToLocalizedPage);
app.get('/index.html', redirectToLocalizedPage);
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
