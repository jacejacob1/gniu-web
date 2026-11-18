import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { Rise } from '@/components/Motion';
import { offices, site } from '@/content/site';

export const metadata: Metadata = { title: 'Contact Us' };

export default function Contact() {
  const india = offices[0];
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(india.lines.join(' '))}`;
  return (
    <>
      <PageHero title={['Contact Us!']} tone="saffron" />
      <section className="section">
        <div className="wrap contact-grid">
          <Rise>
            <h2 className="h3">Mobile &amp; Mail</h2>
            <ul className="contact-big">
              {site.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                </li>
              ))}
              {site.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`}>{e}</a>
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.1}>
            <h2 className="h3">Address</h2>
            <div className="contact-offices">
              {offices.map((o, i) => (
                <address key={o.name}>
                  <strong>{o.name}</strong>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                  {i === 0 && (
                    <a href={mapUrl} target="_blank" rel="noreferrer" className="link">
                      Open in Google Maps
                    </a>
                  )}
                </address>
              ))}
            </div>
          </Rise>
        </div>
      </section>
    </>
  );
}
