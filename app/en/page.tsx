import RecordingApp from '@/components/RecordingApp';
import { localizedMetadata, localizedStructuredData } from '@/lib/seo';

export const metadata = localizedMetadata('en');
const structuredData = localizedStructuredData('en');

export default function EnglishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <RecordingApp locale="en" />
    </>
  );
}
