import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function LicensePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('license');

  return (
    <Section className="bg-gradient-to-br from-primary/5 to-accent pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">{t('title')}</h1>
        <p className="text-lg text-ink/80 mb-12 fade-in">{t('intro')}</p>

        <Card className="mb-8 slide-up">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('nonCommercialTitle')}</h2>
          <ul className="space-y-4 text-ink/80">
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <span>{t('nonCommercialDesc')}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <span>{t('nonCommercialCredit')}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-red-600 text-xl flex-shrink-0">✗</span>
              <span>{t('nonCommercialProhibited')}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <span>{t('nonCommercialDistribution')}</span>
            </li>
          </ul>
        </Card>

        <div id="commercial">
        <Card className="mb-8 slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('commercialTitle')}</h2>
          <ul className="space-y-4 text-ink/80 mb-6">
            <li className="flex gap-3 items-start"><span className="text-primary text-xl flex-shrink-0">•</span><span>{t('commercialDesc')}</span></li>
            <li className="flex gap-3 items-start"><span className="text-primary text-xl flex-shrink-0">•</span><span>{t('commercialReview')}</span></li>
            <li className="flex gap-3 items-start"><span className="text-primary text-xl flex-shrink-0">•</span><span>{t('commercialSpecial')}</span></li>
          </ul>
          <Button href="https://tally.so/r/placeholder" variant="primary">
            {t('commercialApply')}
          </Button>
        </Card>
        </div>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('aiPolicyTitle')}</h2>
          <ul className="space-y-4 text-ink/80">
            <li className="flex gap-3 items-start"><span className="text-primary text-xl flex-shrink-0">✓</span><span>{t('aiPolicyWelcome')}</span></li>
            <li className="flex gap-3 items-start"><span className="text-primary text-xl flex-shrink-0">•</span><span>{t('aiPolicyCopyright')}</span></li>
            <li className="flex gap-3 items-start"><span className="text-primary text-xl flex-shrink-0">•</span><span>{t('aiPolicyTraining')}</span></li>
          </ul>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('logoTitle')}</h2>
          <p className="text-ink/80 leading-relaxed">{t('logoDesc')}</p>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('exampleTitle')}</h2>
          <div className="bg-accent/50 p-4 rounded-lg font-mono text-sm border-l-4 border-primary">{t('exampleCredit')}</div>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('jurisdictionTitle')}</h2>
          <p className="text-ink/80 leading-relaxed">{t('jurisdictionDesc')}</p>
        </Card>

        <div className="bg-accent/80 p-6 rounded-xl text-center border-2 border-primary/20 fade-in">
          <p className="text-sm text-ink/70 leading-relaxed">{t('disclaimer')}</p>
        </div>
      </div>
    </Section>
  );
}
