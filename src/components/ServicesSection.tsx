import serviceConcept from '@/assets/service-concept.jpg';
import serviceInterior from '@/assets/service-interior.jpg';
import serviceVisualization from '@/assets/service-visualization.mp4';
import serviceMaterials from '@/assets/service-materials.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      number: '01',
      titleKey: 'services.01.title',
      descriptionKey: 'services.01.description',
      media: serviceConcept,
      isVideo: false,
    },
    {
      number: '02',
      titleKey: 'services.02.title',
      descriptionKey: 'services.02.description',
      media: serviceInterior,
      isVideo: false,
    },
    {
      number: '03',
      titleKey: 'services.03.title',
      descriptionKey: 'services.03.description',
      media: serviceVisualization,
      isVideo: true,
    },
    {
      number: '04',
      titleKey: 'services.04.title',
      descriptionKey: 'services.04.description',
      media: serviceMaterials,
      isVideo: false,
    },
  ];

  return (
    <section id="services" className="py-section bg-luxury-navy">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="luxury-number text-sm">{t('services.label')}</span>
          <h2 className="mt-4 text-display-lg luxury-heading">
            {t('services.title')}
          </h2>
          <p className="mt-6 text-muted-foreground font-light max-w-2xl leading-relaxed">
            {t('services.description')}
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
              {/* Media */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                {service.isVideo ? (
                  <video
                    src={service.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={service.media}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
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
                      {t(service.titleKey)}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                  {t(service.descriptionKey)}
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
