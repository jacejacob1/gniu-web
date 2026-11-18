'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Rise } from './Motion';

/** Numbered steps with a line that fills as the reader moves down the list. */
export default function Steps({ steps }: { steps: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <div ref={ref} className="steps-wrap">
      <span className="steps-track" aria-hidden="true">
        <motion.span style={{ scaleY }} />
      </span>
      <ol className="steps">
      {steps.map((s, i) => (
        <Rise as="li" key={i}>
          <span className="step-n" aria-hidden="true">
            {i + 1}
          </span>
          <p>{s}</p>
        </Rise>
      ))}
      </ol>
    </div>
  );
}
