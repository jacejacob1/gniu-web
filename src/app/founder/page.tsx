import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { Lines, Rise, Unveil } from '@/components/Motion';
import { founder } from '@/content/site';

export const metadata: Metadata = { title: 'The Founder' };

export default function Founder() {
  return (
    <>
      <PageHero title={['Our Founder']} tone="saffron" />

      <section className="section founder">
        <div className="wrap founder-grid">
          <div className="founder-portrait">
            <Unveil
              src={founder.portrait}
              alt="Prof. Rev. Dr. Jacob Simon in a yellow academic gown, speaking at a lectern"
              onLoad
              delay={0.6}
              parallax={false}
            />
            <p className="founder-name">
              Prof. Rev. Dr. Jacob Simon
              <span>Founder / Chancellor</span>
            </p>
          </div>

          <div className="founder-text">
            <Rise>
              <p className="lead lead-serif">{founder.lead}</p>
            </Rise>
            {founder.sections.map((s) => (
              <Rise key={s.title} className="prose">
                <h2 className="h3">{s.title}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Rise>
            ))}
            <Rise className="prose">
              <h2 className="h3">Family</h2>
              <p>{founder.family}</p>
            </Rise>
          </div>
        </div>
      </section>

      <section className="section positions">
        <div className="wrap">
          <Lines className="h1" lines={['Positions held', 'currently']} />
          <ol className="position-list">
            {founder.positions.map(([role, org], i) => (
              <Rise as="li" key={org} delay={(i % 3) * 0.05}>
                <span className="position-role">{role}</span>
                <span className="position-org">{org}</span>
              </Rise>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Lines className="h1" lines={['Achievements', '& Awards']} />
          <Gallery images={founder.awards} />
        </div>
      </section>
    </>
  );
}
