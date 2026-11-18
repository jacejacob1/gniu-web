import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Steps from '@/components/Steps';
import { Lines, Magnetic } from '@/components/Motion';
import { TLink } from '@/components/Transition';
import { admissions } from '@/content/site';

export const metadata: Metadata = { title: 'Admission Procedure' };

export default function Admissions() {
  return (
    <>
      <PageHero title={['Admission', 'Process']} tone="violet" />
      <section className="section">
        <div className="wrap">
          <Steps steps={admissions} />
        </div>
      </section>
      <section className="join">
        <div className="wrap">
          <Lines className="display" lines={['Join us', 'today!']} />
          <div className="join-actions">
            <Magnetic>
              <TLink href="/contact/" className="btn btn-ink btn-lg">
                Contact us for an application
              </TLink>
            </Magnetic>
            <TLink href="/programs/" className="link">
              See the degrees
            </TLink>
          </div>
        </div>
      </section>
    </>
  );
}
