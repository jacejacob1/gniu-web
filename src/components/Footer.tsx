import { nav, offices, partners, site } from '@/content/site';
import { TLink } from './Transition';
import { Stripes } from './Motion';

function Marquee({ items, reverse }: { items: { src: string; name: string }[]; reverse?: boolean }) {
  // The list is doubled so the loop is seamless; the copy is hidden from assistive tech.
  return (
    <div className="marquee" data-reverse={reverse}>
      <ul>
        {[0, 1, 2, 3].map((n) =>
          items.map((p) => (
            <li key={p.name + n} aria-hidden={n > 0}>
              <img src={p.src} alt={n === 0 ? p.name : ''} loading="lazy" />
              <span>{p.name}</span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

export function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="wrap partners-head">
        <h2 id="partners-title" className="h3">
          {site.name}
          <br />
          {site.iso}
        </h2>
        <p>Partners &amp; affiliations with</p>
      </div>
      <Marquee items={partners.accredited} />
      <Marquee items={partners.affiliated} reverse />
    </section>
  );
}

export default function Footer() {
  const links = nav.flatMap((item) => (item.children ? item.children : [item]));
  const social = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <p className="footer-call">
            Join us today!
            <TLink href="/admissions/" className="btn btn-saffron">
              See how admission works
            </TLink>
          </p>
          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.href + l.label}>
                <TLink href={l.href}>{l.label}</TLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="offices">
          {offices.map((o) => (
            <address key={o.name}>
              <strong>{o.name}</strong>
              {o.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </address>
          ))}
          <address>
            <strong>Mobile &amp; mail</strong>
            {site.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
                {p}
              </a>
            ))}
            {site.emails.map((e) => (
              <a key={e} href={`mailto:${e}`}>
                {e}
              </a>
            ))}
          </address>
        </div>
      </div>

      <p className="footer-mark" aria-hidden="true">
        <img src={site.logoLarge} alt="" loading="lazy" />
        GNIU
      </p>
      <Stripes className="stripes-wide" />
      <div className="wrap footer-base">
        <span>
          ©{new Date().getFullYear()} by GNIU. All Rights Reserved.
        </span>
        {social.length > 0 && (
          <span className="footer-social">
            {social.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                {name[0].toUpperCase() + name.slice(1)}
              </a>
            ))}
          </span>
        )}
      </div>
    </footer>
  );
}
