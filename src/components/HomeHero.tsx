'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { home } from '@/content/site';
import { EASE, Lines, Magnetic, Unveil } from './Motion';
import { TLink } from './Transition';

export default function HomeHero() {
  const stage = useRef<HTMLDivElement>(null);
  // The photograph starts inset and opens to the full width of the window as it is scrolled into.
  const { scrollYProgress } = useScroll({ target: stage, offset: ['start 0.9', 'start 0.15'] });
  const inset = useTransform(scrollYProgress, [0, 1], ['inset(0% 5% 0% 5%)', 'inset(0% 0% 0% 0%)']);

  return (
    <section className="hero">
      <div className="wrap hero-head">
        <motion.p
          className="hero-welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to
        </motion.p>
        <Lines as="h1" className="display hero-title" lines={['Good News', 'International', 'University']} onLoad delay={0.25} />
        <motion.figure
          className="hero-verse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.9 }}
        >
          <blockquote>{home.verse}</blockquote>
          <figcaption>{home.verseRef}</figcaption>
        </motion.figure>
      </div>

      <motion.div ref={stage} className="hero-stage" style={{ clipPath: inset }}>
        <Unveil
          src="/images/conv25-2.jpg"
          alt="The Chancellor addresses the convocation from the lectern while faculty in coloured gowns sit on stage beneath a row of national flags"
          onLoad
          delay={0.55}
        />
        <div className="hero-cta">
          <Magnetic>
            <TLink href="/about/" className="btn btn-saffron btn-lg">
              Read more
            </TLink>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
