import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function GuidelinesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('guidelines');

  return (
    <>
    <Section className="bg-gradient-to-br from-primary/5 to-accent pt-32 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">{t('title')}</h1>
          <p className="text-xl text-ink/70 mb-4 fade-in">KUKUを使った創作のガイドライン</p>
          <p className="text-lg text-ink/60 fade-in">適切な使用例と注意事項をご確認ください</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="slide-up border-2 border-green-600/20 hover:border-green-600/40 transition-colors">
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span className="text-3xl">✓</span>
              {t('okTitle')}
            </h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-ink/80">{t(`ok${i}` as any)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="slide-up border-2 border-red-600/20 hover:border-red-600/40 transition-colors" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <span className="text-3xl">✗</span>
              {t('ngTitle')}
            </h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                  <span className="text-ink/80">{t(`ng${i}` as any)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('creditTitle')}</h2>
          <div className="bg-accent/50 p-4 rounded-lg font-mono text-sm border-l-4 border-primary">{t('creditExample')}</div>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6">{t('promptTitle')}</h2>
          <div className="space-y-4">
            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <span className="text-lg">🎬</span> Video Prompt:
              </p>
              <p className="text-sm font-mono text-ink/80 leading-relaxed">{t('promptVideo')}</p>
            </div>
            <div className="bg-primary/5 p-5 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <span className="text-lg">🎵</span> Music Prompt:
              </p>
              <p className="text-sm font-mono text-ink/80 leading-relaxed">{t('promptMusic')}</p>
            </div>
          </div>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6">{t('colorsTitle')}</h2>
          <p className="text-ink/80 mb-6 leading-relaxed">{t('colorsDesc')}</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="h-24 bg-primary rounded-xl mb-3 shadow-lg hover:shadow-xl transition-shadow"></div>
              <p className="text-sm font-bold text-primary">Primary</p>
              <p className="text-xs text-ink/60 font-mono">#0B3D2E</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-accent rounded-xl mb-3 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary/10"></div>
              <p className="text-sm font-bold text-primary">Accent</p>
              <p className="text-xs text-ink/60 font-mono">#F2EDE4</p>
            </div>
            <div className="text-center">
              <div className="h-24 bg-ink rounded-xl mb-3 shadow-lg hover:shadow-xl transition-shadow"></div>
              <p className="text-sm font-bold text-primary">Ink</p>
              <p className="text-xs text-ink/60 font-mono">#111111</p>
            </div>
          </div>
        </Card>

        <Card className="mb-8 slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('badgeTitle')}</h2>
          <p className="text-ink/80 mb-6 leading-relaxed">{t('badgeDesc')}</p>
          <div className="flex justify-center bg-accent/30 p-8 rounded-xl">
            <img src="/assets/kuku_badge.svg" alt="KUKU Badge" className="h-20 hover:scale-110 transition-transform" />
          </div>
        </Card>

        {/* Quick Start Guide */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            クイックスタートガイド
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h3 className="font-bold text-primary mb-2">スターターパック入手</h3>
              <p className="text-sm text-ink/70">キャラ設定、プロンプト例、ロゴ、音素材を無料ダウンロード</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h3 className="font-bold text-primary mb-2">AIツールで制作</h3>
              <p className="text-sm text-ink/70">動画、画像、音楽、小説など、お好きなツールで創作</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h3 className="font-bold text-primary mb-2">クレジット表記して公開</h3>
              <p className="text-sm text-ink/70">必須のクレジット表記を付けてSNSに投稿</p>
            </div>
          </div>
        </Card>

        {/* Usage Examples */}
        <Card className="mb-8 slide-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            創作アイデア例
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-2">🎬 ショートアニメ</h3>
              <p className="text-sm text-ink/70 mb-2">60秒のAI生成アニメーション。KUKUと森の精霊たちの物語を描く</p>
              <div className="bg-primary/5 px-3 py-1 rounded text-xs inline-block">推奨ツール: Runway, Pika</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-2">📖 Web小説</h3>
              <p className="text-sm text-ink/70 mb-2">KUKUの世界観を広げるオリジナルストーリー。エピソードシリーズも可</p>
              <div className="bg-primary/5 px-3 py-1 rounded text-xs inline-block">推奨ツール: ChatGPT, Claude</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-2">🎵 BGM・サウンドトラック</h3>
              <p className="text-sm text-ink/70 mb-2">森の雰囲気に合わせた環境音楽やオリジナルサウンドトラック</p>
              <div className="bg-primary/5 px-3 py-1 rounded text-xs inline-block">推奨ツール: Suno AI, Udio</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-primary mb-2">🎨 ビジュアルアート</h3>
              <p className="text-sm text-ink/70 mb-2">KUKUのキャラクターイラスト、コンセプトアート、背景画</p>
              <div className="bg-primary/5 px-3 py-1 rounded text-xs inline-block">推奨ツール: Midjourney, DALL-E</div>
            </div>
          </div>
        </Card>

        {/* Hashtag Guide */}
        <Card className="mb-8 slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">#️⃣</span>
            推奨ハッシュタグ
          </h2>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-primary/5 p-3 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
              <p className="font-mono text-primary font-bold">#KUKU</p>
            </div>
            <div className="bg-primary/5 p-3 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
              <p className="font-mono text-primary font-bold">#FOMUS</p>
            </div>
            <div className="bg-primary/5 p-3 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
              <p className="font-mono text-primary font-bold">#KUKU二次創作</p>
            </div>
            <div className="bg-primary/5 p-3 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
              <p className="font-mono text-primary font-bold">#AIアート</p>
            </div>
          </div>
          <p className="text-sm text-ink/60 mt-4">これらのハッシュタグを使うことで、他のクリエイターの作品を発見したり、コミュニティとつながることができます。</p>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-2xl slide-up" style={{ animationDelay: '0.9s' }}>
          <h2 className="text-2xl font-bold mb-4">今すぐKUKUで創作を始めよう</h2>
          <p className="mb-6 text-white/90">スターターパックをダウンロードして、あなたの創造力を解放しましょう</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/assets/KUKU_Starter_Pack.zip" download variant="secondary" className="bg-white text-primary hover:bg-accent">
              スターターパックを入手
            </Button>
            <Button href={`/${locale}/license`} variant="outline" className="border-white text-white hover:bg-white/10">
              ライセンスを確認
            </Button>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
}
