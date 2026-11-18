import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { Rise } from '@/components/Motion';
import { TLink } from '@/components/Transition';
import { downloads, site } from '@/content/site';

export const metadata: Metadata = { title: 'Downloads' };

export default function Downloads() {
  return (
    <>
      <PageHero title={['Downloads']} lead={downloads.intro} />
      <section className="section-tight">
        <ul className="wrap dl-list">
          {downloads.items.map((d, i) => (
            <Rise as="li" key={d.title} delay={i * 0.08}>
              <article className="dl" style={{ '--c': d.color } as React.CSSProperties} data-dark={d.dark}>
                <h2 className="h2">{d.title}</h2>
                <p>{d.text}</p>
                {'internal' in d && d.internal ? (
                  <TLink href={d.file} className="btn btn-plain">
                    Open my certificates
                  </TLink>
                ) : d.file ? (
                  <a href={d.file} download className="btn btn-plain">
                    Download the {d.title.toLowerCase()}
                  </a>
                ) : (
                  // No file has been added yet (see src/content/site.ts), so offer the next best route.
                  <a
                    href={`mailto:${site.emails[0]}?subject=${encodeURIComponent(`Please send me the ${d.title}`)}`}
                    className="btn btn-plain"
                  >
                    Ask for it by email
                  </a>
                )}
              </article>
            </Rise>
          ))}
        </ul>
      </section>
      <div className="spacer" />
    </>
  );
}
