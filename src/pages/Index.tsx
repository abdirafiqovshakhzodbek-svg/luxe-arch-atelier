import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HousePlanSection from '@/components/HousePlanSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <HousePlanSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
