'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('ja')}
        className={`px-3 py-1 rounded ${
          locale === 'ja' ? 'bg-primary text-white' : 'text-primary hover:bg-accent'
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded ${
          locale === 'en' ? 'bg-primary text-white' : 'text-primary hover:bg-accent'
        }`}
      >
        English
      </button>
    </div>
  );
}
