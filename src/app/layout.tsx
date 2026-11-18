import type { Metadata } from 'next';
import '@fontsource/gloock/400.css';
import '@fontsource-variable/hanken-grotesk';
import 'lenis/dist/lenis.css';
import './globals.css';
import Header from '@/components/Header';
import Footer, { Partners } from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { TransitionProvider } from '@/components/Transition';
import { MotionRoot } from '@/components/Motion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: { default: `${site.name} | GNIU`, template: '%s | GNIU' },
  description:
    'Good News International University, Chennai. Theology degrees and certification programs for pastors, leaders and all who seek theological education.',
  icons: { icon: '/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionRoot>
          <TransitionProvider>
            <SmoothScroll />
            <a href="#main" className="skip">
              Skip to content
            </a>
            <Header />
            <main id="main">{children}</main>
            <Partners />
            <Footer />
          </TransitionProvider>
        </MotionRoot>
      </body>
    </html>
  );
}
