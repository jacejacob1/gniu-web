import HomeHero from '@/components/HomeHero';
import { Count, Lines, Rise, ScrollWords } from '@/components/Motion';
import { TLink } from '@/components/Transition';
import { about, home, programs } from '@/content/site';

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="section intro">
        <div className="wrap intro-grid">
          <ScrollWords className="intro-text" text={home.intro} />
          <Rise className="intro-side">
            <TLink href="/about/" className="link">
              Read more
            </TLink>
          </Rise>
        </div>
      </section>

      <section className="section growth">
        <div className="wrap">
          <p className="growth-line">
            <span>
              Good News Bible College opened in Chennai in 2012 with <Count to={8} /> students.
            </span>
            <span>
              More than <Count to={2000} /> have studied here since.
            </span>
          </p>
          <ul className="growth-facts">
            <Rise as="li">
              <strong>
                <Count to={8000} />+
              </strong>
              books for the usage of the students
            </Rise>
            <Rise as="li" delay={0.08}>
              <strong>
                <Count to={about.centres.length} />
              </strong>
              extension centers: {about.centres.join(', ')}
            </Rise>
            <Rise as="li" delay={0.16}>
              <strong>
                <Count to={programs.list.length} />
              </strong>
              degrees, from B.Th to Ph.D
            </Rise>
          </ul>
        </div>
      </section>

      <section className="section know">
        <div className="wrap know-head">
          <p className="know-mark" aria-hidden="true">
            GN-
            <br />
            IU
          </p>
          <Lines className="h1" lines={['Know more', 'about Us!']} />
        </div>
        <div className="doors">
          {home.doors.map((d) => (
            <TLink key={d.href} href={d.href} className="door" style={{ '--c': d.color } as React.CSSProperties} data-dark={d.dark}>
              <span className="door-img">
                <img src={d.image} alt="" loading="lazy" />
              </span>
              <span className="door-body">
                <span className="h3">{d.title}</span>
                <span className="door-text">{d.text}</span>
                <span className="door-cta">{d.cta}</span>
              </span>
            </TLink>
          ))}
        </div>
      </section>

      <section className="verse-band">
        <div className="wrap">
          <Lines
            as="p"
            className="verse-big"
            lines={['“..teaching every man', 'in all wisdom; that we may', 'present every man', 'perfect in Christ Jesus”']}
          />
          <Rise>
            <p className="verse-ref">{home.verseRef}</p>
          </Rise>
        </div>
      </section>
    </>
  );
}
