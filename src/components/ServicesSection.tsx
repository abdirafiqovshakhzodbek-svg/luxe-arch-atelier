import serviceShowcase from '@/assets/service-showcase.jpg';
import servicePlanning from '@/assets/service-planning.jpg';
import serviceDesign from '@/assets/service-design.jpg';
import serviceSpace from '@/assets/service-space.jpg';

const services = [
  {
    number: '01',
    title: 'Property Showcase',
    description: 'Presenting luxury properties with cinematic precision, capturing every architectural detail.',
    image: serviceShowcase,
  },
  {
    number: '02',
    title: 'Site Planning',
    description: 'Strategic land analysis and development planning for optimal architectural integration.',
    image: servicePlanning,
  },
  {
    number: '03',
    title: 'Building Design',
    description: 'Creating distinctive structures that harmonize form, function, and environment.',
    image: serviceDesign,
  },
  {
    number: '04',
    title: 'Space Planning',
    description: 'Optimizing interior layouts for enhanced flow, comfort, and aesthetic experience.',
    image: serviceSpace,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-section bg-luxury-navy">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="luxury-number text-sm">Services</span>
          <h2 className="mt-4 text-display-lg luxury-heading">
            Our Services
          </h2>
          <p className="mt-6 text-muted-foreground font-light max-w-2xl leading-relaxed">
            We offer comprehensive architectural and design services, transforming visions into exceptional living spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="group luxury-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Number Overlay */}
                <span className="absolute top-6 left-6 text-7xl font-display font-light text-foreground/10">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="luxury-number text-xs">{service.number}</span>
                    <h3 className="mt-2 text-xl md:text-2xl font-display font-light text-foreground tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
