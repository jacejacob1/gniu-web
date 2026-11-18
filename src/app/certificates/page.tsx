import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { Rise } from '@/components/Motion';
import { certificates, site } from '@/content/site';

export const metadata: Metadata = { title: 'Certifications' };

export default function Certificates() {
  return (
    <>
      <PageHero title={['Certifications']} tone="ink" />
      <section className="section">
        <div className="wrap next-step">
          <Rise>
            <p className="lead lead-serif">{certificates.note}</p>
          </Rise>
          {/* On Wix this page was the File Share app. A static site cannot password-protect files,
              so until a certificate portal is connected, students are pointed to the admin. */}
          <a href={`mailto:${site.emails[0]}?subject=${encodeURIComponent('My certificate')}`} className="btn btn-ink btn-lg">
            Email the admin for your certificate
          </a>
        </div>
      </section>
    </>
  );
}
