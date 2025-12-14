import floorPlan from '@/assets/floor-plan.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HousePlanSection = () => {
  const { t } = useLanguage();

  const rooms = [
    { key: 'plan.room.living', area: 45 },
    { key: 'plan.room.master', area: 28 },
    { key: 'plan.room.kitchen', area: 22 },
    { key: 'plan.room.dining', area: 18 },
    { key: 'plan.room.bedroom2', area: 16 },
    { key: 'plan.room.bedroom3', area: 14 },
    { key: 'plan.room.bathroom', area: 12 },
    { key: 'plan.room.terrace', area: 35 },
  ];

  const totalArea = rooms.reduce((sum, room) => sum + room.area, 0);

  return (
    <section id="properties" className="py-section bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="luxury-number text-sm">{t('plan.label')}</span>
          <h2 className="mt-4 text-display-lg luxury-heading">
            {t('plan.title')}
          </h2>
          <p className="mt-6 text-muted-foreground font-light text-lg">
            {t('plan.area')} <span className="text-foreground">{totalArea} м²</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Room List */}
          <div className="order-2 lg:order-1">
            <div className="space-y-1">
              {rooms.map((room, index) => (
                <div
                  key={room.key}
                  className="flex items-center justify-between py-4 border-b border-border/30 group hover:border-border transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="luxury-number text-xs w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-foreground font-light tracking-wide group-hover:text-muted-foreground transition-colors">
                      {t(room.key)}
                    </span>
                  </div>
                  <span className="text-muted-foreground font-light tabular-nums">
                    {room.area} м²
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <span className="text-sm tracking-[0.15em] uppercase text-muted-foreground">
                {t('plan.totalArea')}
              </span>
              <span className="text-2xl font-display font-light text-foreground">
                {totalArea} м²
              </span>
            </div>
          </div>

          {/* Floor Plan Image */}
          <div className="order-1 lg:order-2">
            <div className="relative luxury-card p-4 md:p-8">
              <img
                src={floorPlan}
                alt="Architectural floor plan"
                className="w-full h-auto"
              />
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-foreground/20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousePlanSection;
