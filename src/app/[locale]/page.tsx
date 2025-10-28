import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import NewsList from '@/components/NewsList';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('hero');
  const tVision = useTranslations('vision');
  const tAbout = useTranslations('about');
  const tHowto = useTranslations('howto');

  return (
    <>
      <Section className="bg-gradient-to-br from-primary/5 to-accent pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-6 mb-6 leading-tight">
              <span className="inline-block">{t('title')}</span> <Badge variant="success" className="inline-block ml-3 align-middle">{t('badge')}</Badge>
            </h1>
            <p className="text-xl text-ink/80 mb-4 leading-relaxed">{t('lead')}</p>
            <p className="text-lg italic text-ink/60 mb-8">{t('tagline')}</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="/assets/KUKU_Starter_Pack.zip" download>
                {t('ctaDownload')}
              </Button>
              <Button href={`/${locale}/license`} variant="outline">
                {t('ctaLicense')}
              </Button>
            </div>
          </div>
          <div className="relative scale-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(11,61,46,0.3)] transition-all duration-500">
              <img
                src="/assets/hero_sample.jpg"
                alt="KUKU"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <img src="/assets/kuku_badge.svg" alt="Open Use" className="h-12" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="vision" className="bg-accent/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 fade-in">{tVision('title')}</h2>
          <p className="text-lg text-ink/80 leading-relaxed fade-in">{tVision('lead')}</p>
        </div>
      </Section>

      <Section id="about" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 fade-in">{tAbout('title')}</h2>
          <p className="text-lg text-ink/80 mb-12 leading-relaxed fade-in">{tAbout('description')}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 hover:bg-primary hover:text-white">
                    <span className="text-2xl font-bold text-primary hover:text-white transition-colors">{i}</span>
                  </div>
                  <p className="text-sm">{tAbout(`feature${i}` as any)}</p>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-lg text-ink/80 leading-relaxed border-t-2 border-primary/20 pt-8 fade-in">
            {tAbout('closingStatement')}
          </p>
        </div>
      </Section>

      <Section id="howto" className="bg-accent/50">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center fade-in">{tHowto('title')}</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  {i}
                </div>
                <h3 className="font-bold text-primary mb-2">{tHowto(`step${i}Title` as any)}</h3>
                <p className="text-sm text-ink/70">{tHowto(`step${i}Desc` as any)}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <NewsList />
        </div>
      </Section>
    </>
  );
}
