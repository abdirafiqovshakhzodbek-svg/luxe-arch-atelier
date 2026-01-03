import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import kitchen1 from '@/assets/kitchen-1.jpg';
import kitchen2 from '@/assets/kitchen-2.jpg';
import kitchen3 from '@/assets/kitchen-3.jpg';
import kitchen4 from '@/assets/kitchen-4.jpg';

const ProjectsContent = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const kitchenProject = {
    title: 'Современная кухня',
    subtitle: 'Modern Kitchen',
    idea: 'Минимализм и функциональность, светлое и открытое пространство. Сочетание дерева, металла и мрамора.',
    features: 'Чистые линии, эффективное освещение, эргономичная мебель и простор для движения.',
    images: [kitchen1, kitchen2, kitchen3, kitchen4],
  };

  const mainCategories = [
    {
      id: 'exterior',
      name: 'Exterior',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    },
    {
      id: 'interior',
      name: 'Interior',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      subcategories: [
        { id: 'bedroom', name: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop' },
        { id: 'bathroom', name: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop' },
        { id: 'kitchen', name: 'Kitchen', image: kitchen1, hasDetail: true },
        { id: 'library', name: 'Library', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop' },
      ],
    },
    {
      id: 'office',
      name: 'Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    },
  ];

  const interiorCategory = mainCategories.find(c => c.id === 'interior');

  const handleSubcategoryClick = (subId: string, hasDetail?: boolean) => {
    if (hasDetail) {
      setActiveSubcategory(subId);
    }
  };

  const handleBack = () => {
    if (activeSubcategory) {
      setActiveSubcategory(null);
    } else {
      setActiveCategory(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="luxury-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="luxury-label">{t('projects.label')}</span>
            <h1 className="luxury-heading mt-4">{t('projects.title')}</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-6 text-lg">
              {t('projects.description')}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {/* Kitchen Detail View */}
            {activeSubcategory === 'kitchen' ? (
              <motion.div
                key="kitchen-detail"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-12 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Interior</span>
                </button>

                {/* Project Header */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <span className="text-sm tracking-[0.3em] text-primary/80 uppercase font-light">
                      Проект
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light mt-4 mb-2 tracking-tight">
                      {kitchenProject.title}
                    </h2>
                    <p className="text-foreground/50 text-lg italic mb-8">
                      {kitchenProject.subtitle}
                    </p>
                    
                    <div className="space-y-6 text-foreground/80">
                      <div className="border-l-2 border-primary/30 pl-6">
                        <span className="text-xs tracking-[0.2em] text-primary/60 uppercase block mb-2">
                          Идея
                        </span>
                        <p className="text-lg font-light leading-relaxed">
                          {kitchenProject.idea}
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-primary/30 pl-6">
                        <span className="text-xs tracking-[0.2em] text-primary/60 uppercase block mb-2">
                          Особенности
                        </span>
                        <p className="text-lg font-light leading-relaxed">
                          {kitchenProject.features}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {kitchenProject.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                    >
                      <img
                        src={img}
                        alt={`Kitchen design ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : activeCategory === 'interior' && interiorCategory?.subcategories ? (
              <motion.div
                key="interior-subcategories"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Categories</span>
                </button>

                <h2 className="text-2xl font-light mb-8">Interior Categories</h2>

                {/* Interior Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {interiorCategory.subcategories.map((sub, index) => (
                    <motion.div
                      key={sub.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => handleSubcategoryClick(sub.id, sub.hasDetail)}
                      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${sub.hasDetail ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-sm tracking-widest text-white/90 uppercase font-medium">
                          {sub.name}
                        </span>
                        {sub.hasDetail && (
                          <p className="text-white/50 text-sm mt-1">View project →</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="main-categories"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                {/* Main Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mainCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => category.subcategories && setActiveCategory(category.id)}
                      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${category.subcategories ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs tracking-widest text-white/70 uppercase">
                          {category.name}
                        </span>
                        {category.subcategories && (
                          <p className="text-white/50 text-sm mt-1">Click to explore</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Projects = () => {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
};

export default Projects;
