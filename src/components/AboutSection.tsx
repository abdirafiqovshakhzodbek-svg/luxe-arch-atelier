import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const approachItems = [
    t('about.approach.item1'),
    t('about.approach.item2'),
    t('about.approach.item3'),
    t('about.approach.item4'),
  ];

  const whyItems = [
    t('about.why.item1'),
    t('about.why.item2'),
    t('about.why.item3'),
    t('about.why.item4'),
    t('about.why.item5'),
  ];

  return (
    <section id="about" className="py-section bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="luxury-number text-sm">{t('about.label')}</span>
          <h2 className="mt-4 text-display-lg luxury-heading">
            {t('about.title')}
          </h2>
        </div>

        {/* Intro */}
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-8">
            {t('about.intro')}
          </p>
          
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p>{t('about.history')}</p>
            <p>{t('about.animation')}</p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mt-20 md:mt-32">
          <h3 className="text-2xl md:text-3xl font-display font-light text-foreground tracking-wide mb-8">
            {t('about.approach.title')}
          </h3>
          
          <div className="max-w-4xl">
            <p className="text-xl font-light text-foreground mb-4 italic">
              {t('about.approach.intro')}
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              {t('about.approach.description')}
            </p>
            <p className="text-foreground font-light mb-6">
              {t('about.approach.focus')}
            </p>
            
            <ul className="space-y-3">
              {approachItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground font-light">
                  <span className="text-accent mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Goal */}
        <div className="mt-20 md:mt-32">
          <h3 className="text-2xl md:text-3xl font-display font-light text-foreground tracking-wide mb-8">
            {t('about.goal.title')}
          </h3>
          
          <div className="max-w-4xl">
            <p className="text-muted-foreground font-light leading-relaxed">
              {t('about.goal.description')}
            </p>
          </div>
        </div>

        {/* Why Pixel Aurora */}
        <div className="mt-20 md:mt-32">
          <h3 className="text-2xl md:text-3xl font-display font-light text-foreground tracking-wide mb-10">
            {t('about.why.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {whyItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/30"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-20 md:mt-32 max-w-4xl">
          <div className="p-8 md:p-12 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border/50">
            <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
              {t('about.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;