import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { Lines, Rise, Unveil } from '@/components/Motion';
import { about } from '@/content/site';

export const metadata: Metadata = { title: 'About Us' };

export default function About() {
  const [first, ...rest] = about.paragraphs;
  return (
    <>
      <PageHero title={['About Us']} />

      <section className="section-tight">
        <div className="wrap about-open">
          <Rise>
            <p className="lead lead-serif">{first}</p>
          </Rise>
          <Unveil src="/images/prev-1.jpg" alt="Graduates and faculty in coloured gowns at the 2022-23 convocation" className="about-photo" />
        </div>
      </section>

      <section className="section">
        <div className="wrap prose-cols">
          {rest.map((p, i) => (
            <Rise key={i} delay={(i % 2) * 0.08}>
              <p>{p}</p>
            </Rise>
          ))}
        </div>
      </section>

      <section className="mission">
        <div className="wrap">
          <Lines
            as="p"
            className="verse-big"
            lines={['Our Vision and Mission', 'is to fulfil the Great', 'Commission of God', 'in this end time.']}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Lines className="h1" lines={['Our Credentials']} />
          <Gallery images={about.credentials} variant="documents" />
        </div>
      </section>
    </>
  );
}
