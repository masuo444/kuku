import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from './Container';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const navItems = [
    { key: 'guidelines', href: `/${locale}/guidelines` },
    { key: 'license', href: `/${locale}/license` },
    { key: 'contest', href: `/${locale}/contest` },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/kuku_mark.svg" alt="KUKU" className="h-10 w-10 brightness-0 invert" />
              <span className="text-2xl font-bold">KUKU</span>
            </div>
            <p className="text-sm text-white/80">{t('description')}</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <img src="/assets/kuku_badge.svg" alt="KUKU Open Use" className="h-16 brightness-0 invert" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          {t('copyright')}
        </div>
      </Container>
    </footer>
  );
}
