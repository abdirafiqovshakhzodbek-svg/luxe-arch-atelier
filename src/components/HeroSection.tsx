import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-house.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern luxury house at dusk"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative h-full luxury-container flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-5xl">
          {/* Main Heading */}
          <h1 className="text-display-xl font-display font-light text-foreground uppercase tracking-wider opacity-0 animate-fade-up">
            {t('hero.title1')}
            <br />
            <span className="text-muted-foreground">{t('hero.title2')}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl opacity-0 animate-fade-up delay-200">
            {t('hero.subtitle')}
          </p>

          <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-fade-up delay-400">
            <a href="#services" className="luxury-button">
              {t('hero.services')}
            </a>
            <Link to="/projects" className="luxury-button">
              {t('nav.projects')}
            </Link>
            <a href="#request" className="luxury-button-outline">
              {t('hero.contact')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
