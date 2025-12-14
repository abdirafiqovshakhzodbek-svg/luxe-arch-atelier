import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#about', label: 'О нас' },
  { href: '#properties', label: 'Проекты' },
  { href: '#services', label: 'Услуги' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contact', label: 'Контакты' },
];

const languages = [
  { code: 'eng', label: 'ENG' },
  { code: 'rus', label: 'RUS' },
  { code: 'uzb-lat', label: 'UZB' },
  { code: 'uzb-cyr', label: 'ЎЗБ' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('rus');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLanguage = languages.find(l => l.code === currentLang);

  const LanguageSwitcher = ({ className = '' }: { className?: string }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-1 text-xs tracking-widest font-light text-foreground/80 hover:text-foreground transition-colors duration-300 focus:outline-none ${className}`}>
        {currentLanguage?.label}
        <ChevronDown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[100px] bg-white/90 backdrop-blur-md border border-border/30 shadow-lg"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className={`text-xs tracking-widest cursor-pointer ${
              currentLang === lang.code ? 'font-medium text-foreground' : 'text-foreground/70'
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-white/40 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.05)]'
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#home" className="font-display text-xl md:text-2xl tracking-[0.2em] font-light text-foreground">
            Pixel Aurora
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="luxury-nav-link"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="luxury-container py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="luxury-nav-link text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border/20">
            <LanguageSwitcher className="text-sm" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
