import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { Lines } from '@/components/Motion';
import { gallery } from '@/content/site';

export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <>
      <PageHero title={['Galleria', 'of GNIU']} tone="ink" />
      {gallery.map((g) => (
        <section className="section-tight album" key={g.title}>
          <div className="wrap">
            <Lines className="h1" lines={[g.title]} />
            <Gallery images={g.images} />
          </div>
        </section>
      ))}
      <div className="spacer" />
    </>
  );
}
