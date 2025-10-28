import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

export default function ContestPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('contest');

  return (
    <Section className="bg-gradient-to-br from-primary/5 to-accent pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('title')}</h1>
          <p className="text-xl text-ink/80 mb-6">{t('subtitle')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Badge variant="success" className="text-lg px-6 py-2 scale-in">{t('prize1')}</Badge>
            <Badge variant="accent" className="text-lg px-6 py-2 scale-in" style={{ animationDelay: '0.1s' }}>{t('prize2')}</Badge>
          </div>
        </div>

        <Card className="mb-8 slide-up">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            {t('requirementsTitle')}
          </h2>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-primary text-xl flex-shrink-0">•</span>
                <span className="text-ink/80 leading-relaxed">{t(`req${i}` as any)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            {t('criteriaTitle')}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary hover:bg-primary/10 transition-colors">
                <p className="text-ink/80 font-medium">{t(`criteria${i}` as any)}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">📅</span>
            {t('scheduleTitle')}
          </h2>
          <ol className="space-y-4">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-bold text-primary text-xl flex-shrink-0 bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">{i}</span>
                <span className="text-ink/80 leading-relaxed pt-1">{t(`schedule${i}` as any)}</span>
              </li>
            ))}
          </ol>
        </Card>

        <div className="text-center mb-8 scale-in" style={{ animationDelay: '0.3s' }}>
          <Button href="https://tally.so/r/placeholder" variant="primary" className="text-lg px-10 py-4">
            {t('submitButton')}
          </Button>
        </div>

        {/* Submission Tips */}
        <Card className="mb-8 slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            {t('tipsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-l-4 border-primary pl-4 hover:bg-primary/5 p-3 rounded-r transition-colors">
                <h3 className="font-bold text-primary mb-2">{t(`tip${i}Title` as any)}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{t(`tip${i}Desc` as any)}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Judging Process */}
        <Card className="mb-8 slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            {t('processTitle')}
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center bg-primary/5 p-5 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="text-4xl font-bold text-primary mb-3">{i}</div>
                <h3 className="font-bold text-primary mb-2 text-sm">{t(`processStep${i}` as any)}</h3>
                <p className="text-xs text-ink/70 leading-relaxed">{t(`processStep${i}Desc` as any)}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* FAQ */}
        <Card className="mb-8 slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">❓</span>
            {t('faqTitle')}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-accent/30 p-5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                <p className="font-bold text-primary mb-2 flex items-start gap-2">
                  <span className="text-primary flex-shrink-0">Q.</span>
                  <span>{t(`faq${i}Q` as any)}</span>
                </p>
                <p className="text-sm text-ink/80 leading-relaxed pl-6">
                  <span className="font-bold text-green-600">A. </span>
                  {t(`faq${i}A` as any)}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="slide-up border-2 border-red-600/20" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            {t('notesTitle')}
          </h2>
          <ul className="space-y-4">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-red-600 text-xl flex-shrink-0">⚠</span>
                <span className="text-sm text-ink/80 leading-relaxed">{t(`note${i}` as any)}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* CTA */}
        <div className="mt-8 text-center bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-2xl slide-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="mb-6 text-white/90">{t('ctaDesc')}</p>
          <Button href="https://tally.so/r/placeholder" variant="secondary" className="bg-white text-primary hover:bg-accent text-lg px-10 py-4">
            {t('ctaButton')}
          </Button>
        </div>
      </div>
    </Section>
  );
}
