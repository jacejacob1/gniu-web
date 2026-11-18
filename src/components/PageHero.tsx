import { Lines, Rise, Stripes } from './Motion';

/** Title block used at the top of every inner page. */
export default function PageHero({
  title,
  lead,
  tone = 'paper',
}: {
  title: string[];
  lead?: string;
  tone?: 'paper' | 'saffron' | 'oxblood' | 'violet' | 'ink';
}) {
  return (
    <section className={`page-hero tone-${tone}`}>
      <div className="wrap">
        <Lines as="h1" className="display" lines={title} onLoad delay={0.35} />
        <div className="page-hero-foot">
          <Stripes />
          {lead && (
            <Rise delay={0.6}>
              <p className="lead">{lead}</p>
            </Rise>
          )}
        </div>
      </div>
    </section>
  );
}
