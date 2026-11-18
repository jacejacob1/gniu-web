'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { nav, site } from '@/content/site';
import { TLink } from './Transition';
import { EASE } from './Motion';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 240 && y > prev);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, '')));

  return (
    <>
      <header className="header" data-hidden={hidden && !open} data-scrolled={scrolled}>
        <TLink href="/" className="brand" aria-label={`${site.name}, home`}>
          <img src={site.logo} alt="" width={44} height={49} />
          <span>
            Good News
            <br />
            International University
          </span>
        </TLink>

        <nav className="nav" aria-label="Main">
          <ul>
            {nav.slice(1).map((item) => (
              <li key={item.label} className={item.children ? 'has-children' : undefined}>
                <TLink href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </TLink>
                {item.children && (
                  <ul className="subnav">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <TLink href={c.href}>{c.label}</TLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <TLink href="/programs/" className="btn btn-ink header-apply">
          Apply now
        </TLink>

        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <i />
          <i />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu"
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {nav.flatMap((item) => (item.children ? item.children : [item])).map((item, i) => (
                <li key={item.href + item.label} className="line-mask">
                  <motion.span
                    className="line-inner"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.045 }}
                  >
                    <TLink href={item.href}>{item.label === 'Home' ? 'Home' : item.label}</TLink>
                  </motion.span>
                </li>
              ))}
            </ul>
            <p className="menu-contact">
              <a href={`tel:${site.phones[0].replace(/\s/g, '')}`}>{site.phones[0]}</a>
              <a href={`mailto:${site.emails[0]}`}>{site.emails[0]}</a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
