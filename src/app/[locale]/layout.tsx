import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = locale === 'ja' ? 'KUKU - 世界80億人と創るオープンIP' : 'KUKU - Co-Create with 8 Billion People';
  const description =
    locale === 'ja'
      ? '世界80億人と創るオープンIP。KUKUは、誰もが自由に使えるキャラクターと世界観。AIで、あなたの物語・音楽・映像を生み出そう。非商用利用無料。'
      : 'Co-Create an Open IP with 8 Billion People. KUKU is a character and world anyone can freely use. Create your stories, music, and videos with AI.';

  return {
    metadataBase: new URL('https://kuku-official.vercel.app'),
    title: {
      default: title,
      template: `%s | KUKU`,
    },
    description,
    keywords: ['KUKU', 'FOMUS', 'Open IP', 'AI', locale === 'ja' ? '二次創作' : 'Fan Creation', locale === 'ja' ? 'オープンIP' : 'Open IP', locale === 'ja' ? 'キャラクター' : 'Character'],
    authors: [{ name: 'FOMUS' }],
    creator: 'FOMUS',
    publisher: 'FOMUS',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://kuku-official.vercel.app/${locale}`,
      siteName: 'KUKU Official',
      images: [{ url: '/assets/og_kuku.png', width: 1200, height: 630, alt: 'KUKU - Open IP Project' }],
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/og_kuku.png'],
      creator: '@FOMUS_official',
    },
    alternates: {
      canonical: `https://kuku-official.vercel.app/${locale}`,
      languages: {
        'ja': 'https://kuku-official.vercel.app/ja',
        'en': 'https://kuku-official.vercel.app/en',
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!['ja', 'en'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0B3D2E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-accent/30">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
