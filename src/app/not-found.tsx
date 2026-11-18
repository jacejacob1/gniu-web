import { TLink } from '@/components/Transition';

export default function NotFound() {
  return (
    <section className="page-hero tone-paper">
      <div className="wrap">
        <h1 className="display">Page not found</h1>
        <div className="next-step" style={{ marginTop: '3rem' }}>
          <p className="lead">This address does not lead anywhere on the site. The home page has links to everything.</p>
          <TLink href="/" className="btn btn-ink btn-lg">
            Go to the home page
          </TLink>
        </div>
      </div>
    </section>
  );
}
