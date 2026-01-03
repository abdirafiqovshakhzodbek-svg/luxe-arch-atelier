import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Send } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/pixel_aurora_architect',
      icon: Instagram,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Pixel_Aurora_Architect',
      icon: Send,
    },
  ];

  return (
    <footer id="contact" className="py-section bg-luxury-charcoal border-t border-border/20">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl tracking-[0.2em] font-light text-foreground">
              Pixel Aurora Architect
            </a>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed max-w-md">
              {t('footer.brand.description')}
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border/30 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">{t('footer.navigation')}</h4>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors font-light">
                {t('nav.home')}
              </a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-light">
                {t('nav.services')}
              </a>
              <a href="#properties" className="text-foreground/80 hover:text-foreground transition-colors font-light">
                {t('nav.projects')}
              </a>
              <a href="#request" className="text-foreground/80 hover:text-foreground transition-colors font-light">
                {t('nav.request')}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">{t('footer.contacts')}</h4>
            <div className="flex flex-col gap-3 text-foreground/80 font-light">
              <p>studio@pixelaurora.uz</p>
              <p>+998 90 125-48-68</p>
              <p className="text-muted-foreground">
                {t('footer.address.street')}
                <br />
                {t('footer.address.city')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
