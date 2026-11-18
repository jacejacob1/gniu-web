import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { Rise } from '@/components/Motion';
import { faith } from '@/content/site';

export const metadata: Metadata = { title: 'Statement of Faith' };

export default function Faith() {
  return (
    <>
      <PageHero title={['Our Statement', 'of Faith']} tone="oxblood" />
      <section className="section creed">
        <div className="wrap creed-grid">
          {/* "We believe" stays pinned while the seven clauses scroll past it. */}
          <p className="creed-pin" aria-hidden="true">
            We
            <br />
            believe
          </p>
          <ul className="creed-list">
            {faith.map((clause) => (
              <Rise as="li" key={clause}>
                <span className="sr-only">We believe </span>
                {clause}
              </Rise>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
