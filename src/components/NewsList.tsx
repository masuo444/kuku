import React from 'react';
import { useTranslations } from 'next-intl';

export default function NewsList() {
  const t = useTranslations('news');

  const newsItems = [
    { date: t('item1Date'), text: t('item1Text') },
    { date: t('item2Date'), text: t('item2Text') },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-primary mb-6">{t('title')}</h2>
      <div className="space-y-3">
        {newsItems.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 bg-accent/50 rounded-lg">
            <time className="text-sm font-semibold text-primary whitespace-nowrap">
              {item.date}
            </time>
            <p className="text-sm text-ink">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
