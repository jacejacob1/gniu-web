'use client';

import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { gown } from '@/content/site';

export const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Headline that rises line by line out of a mask. */
export function Lines({
  lines,
  as: Tag = 'h2',
  className,
  delay = 0,
  onLoad = false,
}: {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  onLoad?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const show = onLoad || seen;
  return (
    <Tag ref={ref as never} className={className} aria-label={lines.join(' ')}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i} aria-hidden="true">
          <motion.span
            className="line-inner"
            initial={{ y: '108%' }}
            animate={show ? { y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Quiet rise for body copy and blocks. */
export function Rise({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'p' | 'section';
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/** Paragraph whose words ink in as you scroll through it. */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span aria-hidden="true" style={{ opacity }}>
      {children}{' '}
    </motion.span>
  );
}

/** Number that counts up the first time it is seen. */
export function Count({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const controls = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [seen, to]);
  return (
    <span ref={ref} className="count">
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

/** Photograph uncovered by five gown-coloured panels. */
export function Unveil({
  src,
  alt,
  className,
  onLoad = false,
  delay = 0,
  parallax = true,
}: {
  src: string;
  alt: string;
  className?: string;
  onLoad?: boolean;
  delay?: number;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const show = onLoad || seen;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const colors = [gown.saffron, gown.oxblood, gown.violet, gown.rose, gown.cobalt];
  return (
    <div ref={ref} className={`unveil ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        style={parallax ? { y, scale: 1.16 } : undefined}
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : undefined}
        transition={{ duration: 0.01, delay }}
      />
      <div className="unveil-panels" aria-hidden="true">
        {colors.map((c, i) => (
          <motion.span
            key={c}
            style={{ background: c }}
            initial={{ y: 0 }}
            animate={show ? { y: '-101%' } : undefined}
            transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1], delay: delay + 0.1 + i * 0.07 }}
          />
        ))}
      </div>
    </div>
  );
}

/** Button wrapper that leans toward the pointer. */
export function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });
  return (
    <motion.span
      className="magnetic"
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** The five gown colours as a thin band; the site's recurring mark. */
export function Stripes({ className }: { className?: string }) {
  return (
    <span className={`stripes ${className ?? ''}`} aria-hidden="true">
      <i style={{ background: gown.saffron }} />
      <i style={{ background: gown.oxblood }} />
      <i style={{ background: gown.violet }} />
      <i style={{ background: gown.rose }} />
      <i style={{ background: gown.cobalt }} />
    </span>
  );
}
