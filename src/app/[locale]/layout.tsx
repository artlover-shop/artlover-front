import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getTranslations, getLocale } from 'next-intl/server';
import { getDefaultMetadata } from '@/shared/utils/generateDefaultMetadata';
import Navbar from '@/modules/navbar/Navbar';
import SubscribeNews from '@/modules/subscribeNews/SubscribeNews';
import Footer from '@/modules/footer/Footer';

import '../../styles/style.css';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});
const denistina = localFont({
  src: '../denistina.ttf',
  variable: '--font-denistina',
});

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations('metaData');

  return getDefaultMetadata(t, locale);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${denistina.variable} relative z-[1] flex min-h-screen flex-col antialiased
          `}
      >
        <NextIntlClientProvider>
          <div id="modal" style={{ zIndex: 100 }}></div>
          <Navbar />
          <main className="flex-1 pt-22 xl:pt-[98px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
              className="xl:hidden -z-10 absolute top-0 right-[calc(50%-100px)]"
            >
              <Image
                src="/images/navbar/figureCenterMob.svg"
                alt="figure background"
                width="114"
                height="43"
              />
            </motion.div>
            {children}
          </main>
          <SubscribeNews />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
