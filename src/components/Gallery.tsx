'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EASE } from './Motion';

type Img = { src: string; alt: string };

/** Photo grid. Pressing a photo grows it into a full-screen viewer from where it sits. */
export default function Gallery({ images, variant = 'photos' }: { images: Img[]; variant?: 'photos' | 'documents' }) {
  const id = useId();
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    window.__lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.__lenis?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <ul className={`gallery gallery-${variant}`} data-count={images.length}>
        {images.map((img, i) => (
          <motion.li
            key={img.src}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.08 }}
          >
            <button onClick={() => setIndex(i)} aria-label={`Open photo: ${img.alt}`}>
              <motion.img layoutId={`${id}-${img.src}`} src={img.src} alt={img.alt} loading="lazy" />
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            data-lenis-prevent
            initial={{ backgroundColor: 'rgba(16,18,36,0)' }}
            animate={{ backgroundColor: 'rgba(16,18,36,0.94)' }}
            exit={{ backgroundColor: 'rgba(16,18,36,0)' }}
            transition={{ duration: 0.4 }}
            onClick={close}
          >
            <motion.img
              key={images[index].src}
              layoutId={`${id}-${images[index].src}`}
              src={images[index].src}
              alt={images[index].alt}
              transition={{ duration: 0.6, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              className="lightbox-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span>
                {index + 1} / {images.length}
              </span>
              {images.length > 1 && (
                <>
                  <button onClick={() => step(-1)}>Previous</button>
                  <button onClick={() => step(1)}>Next</button>
                </>
              )}
              <button onClick={close} autoFocus>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
