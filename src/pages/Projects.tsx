import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ProjectsContent = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
        { id: 'kitchen', name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop' },
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
            {activeCategory === 'interior' && interiorCategory?.subcategories ? (
              <motion.div
                key="interior-subcategories"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                {/* Back Button */}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
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
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
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
