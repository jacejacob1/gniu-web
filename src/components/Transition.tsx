'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gown } from '@/content/site';

/**
 * Page transition: five gown-coloured panels rise to cover the page,
 * the route changes behind them, then they carry on upward and leave.
 */

type Phase = 'idle' | 'cover' | 'leave';
const Ctx = createContext<(href: string) => void>(() => {});
const COLORS = [gown.saffron, gown.oxblood, gown.violet, gown.rose, gown.cobalt];
const DURATION = 620; // ms per panel
const STAGGER = 55;
const TOTAL = DURATION + STAGGER * (COLORS.length - 1);

const clean = (p: string) => (p.split('#')[0].replace(/\/+$/, '') || '/');

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const target = useRef<string | null>(null);
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const leave = useCallback(() => {
    target.current = null;
    window.__lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    setPhase('leave');
    later(() => setPhase('idle'), TOTAL + 40);
  }, []);

  const go = useCallback(
    (href: string) => {
      if (clean(href) === clean(pathname) || target.current) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        router.push(href);
        return;
      }
      target.current = href;
      router.prefetch(href);
      setPhase('cover');
      later(() => router.push(href), TOTAL);
      // Safety net: never leave the curtain down.
      later(() => target.current && leave(), TOTAL + 5000);
    },
    [pathname, router, leave],
  );

  useEffect(() => {
    if (target.current && clean(target.current) === clean(pathname)) {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      // let the new page paint once before lifting
      later(leave, 80);
    }
  }, [pathname, leave]);

  return (
    <Ctx.Provider value={go}>
      {children}
      <div className="curtain" data-phase={phase} aria-hidden="true">
        {COLORS.map((c, i) => (
          <span
            key={c}
            style={{
              background: c,
              transitionDuration: phase === 'idle' ? '0ms' : `${DURATION}ms`,
              transitionDelay: phase === 'idle' ? '0ms' : `${i * STAGGER}ms`,
            }}
          />
        ))}
      </div>
    </Ctx.Provider>
  );
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

/** Internal link that plays the page transition. */
export function TLink({ href, onClick, children, ...rest }: LinkProps) {
  const go = useContext(Ctx);
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        go(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

declare global {
  interface Window {
    __lenis?: {
      scrollTo: (t: number | string | HTMLElement, o?: Record<string, unknown>) => void;
      stop: () => void;
      start: () => void;
    };
  }
}
