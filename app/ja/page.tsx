import RecordingApp from '@/components/RecordingApp';
import { localizedMetadata, localizedStructuredData } from '@/lib/seo';

export const metadata = localizedMetadata('ja');
const structuredData = localizedStructuredData('ja');

export default function JapanesePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <RecordingApp locale="ja" />
    </>
  );
}
