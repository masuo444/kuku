'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Container from './Container';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: `/${locale}#about` },
    { key: 'howto', href: `/${locale}#howto` },
    { key: 'guidelines', href: `/${locale}/guidelines` },
    { key: 'license', href: `/${locale}/license` },
    { key: 'contest', href: `/${locale}/contest` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <img src="/assets/kuku_mark.svg" alt="KUKU" className="h-10 w-10" />
            <span className="text-2xl font-bold text-primary">KUKU</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-semibold text-ink hover:text-primary transition-colors relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
              </Link>
            ))}
            <LangSwitcher />
          </nav>

          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 slide-up" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-sm font-semibold text-ink hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-4 border-t border-accent">
              <LangSwitcher />
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
