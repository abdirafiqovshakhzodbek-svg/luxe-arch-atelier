const Footer = () => {
  return (
    <footer id="contact" className="py-section bg-luxury-charcoal border-t border-border/20">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl tracking-[0.2em] font-light text-foreground">
              Pixel Aurora
            </a>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed max-w-md">
              Creating exceptional architectural experiences that redefine modern living. 
              Every project is a testament to precision, elegance, and innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors font-light">Home</a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-light">About</a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-light">Services</a>
              <a href="#properties" className="text-foreground/80 hover:text-foreground transition-colors font-light">Properties</a>
              <a href="#gallery" className="text-foreground/80 hover:text-foreground transition-colors font-light">Gallery</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-foreground/80 font-light">
              <p>studio@archform.com</p>
              <p>+1 (555) 123-4567</p>
              <p className="text-muted-foreground">
                456 Design Avenue<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2024 ARCHFORM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
