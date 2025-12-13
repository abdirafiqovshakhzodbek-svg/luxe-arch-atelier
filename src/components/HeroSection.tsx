import heroImage from '@/assets/hero-house.jpg';

const HeroSection = () => {
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
            Architecture
            <br />
            <span className="text-muted-foreground">Reimagined</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl opacity-0 animate-fade-up delay-200">
            Новый стандарт современной жизни
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4 opacity-0 animate-fade-up delay-400">
            <a href="#services" className="luxury-button">
              Explore Services
            </a>
            <a href="#contact" className="luxury-button-outline">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-600">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
