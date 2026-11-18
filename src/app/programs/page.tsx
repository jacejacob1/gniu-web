import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { Lines, Rise } from '@/components/Motion';
import { TLink } from '@/components/Transition';
import { programs } from '@/content/site';

export const metadata: Metadata = { title: 'Degrees & Programs' };

export default function Programs() {
  return (
    <>
      <PageHero title={['Programs', 'Offered']} lead={programs.intro} />
      <section className="section-tight">
        <div className="wrap">
          <Lines className="h1" lines={['Courses @ GNIU']} />
        </div>
        <ul className="programs">
          {programs.list.map((p, i) => (
            <Rise as="li" key={p.abbr} delay={i * 0.05}>
              <a
                className="program"
                href={p.apply}
                target="_blank"
                rel="noreferrer"
                style={{ '--c': p.color } as React.CSSProperties}
                data-dark={p.dark}
              >
                <span className="program-abbr">{p.abbr}</span>
                <span className="program-name">{p.name}</span>
                <span className="btn btn-outline">
                  Apply now<span className="sr-only"> for {p.name} (opens the application form in a new tab)</span>
                </span>
              </a>
            </Rise>
          ))}
        </ul>
      </section>
      <section className="section">
        <div className="wrap next-step">
          <p className="lead lead-serif">Not sure how applying works? The admission procedure has nine steps, from first contact to graduation.</p>
          <TLink href="/admissions/" className="btn btn-ink btn-lg">
            Read the admission procedure
          </TLink>
        </div>
      </section>
    </>
  );
}
