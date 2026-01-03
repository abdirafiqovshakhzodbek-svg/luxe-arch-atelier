import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import kitchen1 from '@/assets/kitchen-1.jpg';
import kitchen2 from '@/assets/kitchen-2.jpg';
import kitchen3 from '@/assets/kitchen-3.jpg';
import kitchen4 from '@/assets/kitchen-4.jpg';
import bathroom1 from '@/assets/bathroom-1.png';
import bathroom2 from '@/assets/bathroom-2.png';
import bathroom3 from '@/assets/bathroom-3.png';
import bathroom4 from '@/assets/bathroom-4.png';
import bathroom5 from '@/assets/bathroom-5.png';
import bathroom2_1 from '@/assets/bathroom-2-1.png';
import bathroom2_2 from '@/assets/bathroom-2-2.png';
import bathroom2_3 from '@/assets/bathroom-2-3.png';
import bathroom2_4 from '@/assets/bathroom-2-4.png';
import bathroom2_5 from '@/assets/bathroom-2-5.png';
import bathroom2_6 from '@/assets/bathroom-2-6.png';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full hover:bg-white/20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full hover:bg-white/20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        alt="Project image"
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </motion.div>
  );
};

const ProjectsContent = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [activeBathroomProject, setActiveBathroomProject] = useState<number>(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const kitchenProject = {
    title: 'Современная кухня',
    subtitle: 'Modern Kitchen',
    idea: 'Минимализм и функциональность, светлое и открытое пространство. Сочетание дерева, металла и мрамора.',
    features: 'Чистые линии, эффективное освещение, эргономичная мебель и простор для движения.',
    images: [kitchen1, kitchen2, kitchen3, kitchen4],
  };

  // Bathroom Project 1 - Guest Bathroom
  const bathroomContent1 = {
    eng: {
      title: 'Modern Luxury Guest Bathroom',
      subtitle: 'Minimalism and natural stone.',
      features: ['Organic mirror', 'Soft lighting', 'Console sink creates an atmosphere of comfort and status.'],
      tagline: 'Compact, aesthetic, premium.',
    },
    rus: {
      title: 'Современный luxury гостевой санузел',
      subtitle: 'Минимализм и натуральный камень.',
      features: ['Органичное зеркало', 'Мягкая подсветка', 'Консольная раковина создают атмосферу уюта и статуса.'],
      tagline: 'Компактно, эстетично, премиально.',
    },
    uzb: {
      title: 'Zamonaviy luxury mehmon sanuzeli',
      subtitle: "Minimalizm va tabiiy tosh.",
      features: ['Organik oyna', 'Yumshoq yoritish', "Konsol lavabo qulaylik va maqom muhitini yaratadi."],
      tagline: "Ixcham, estetik, premium.",
    },
    'uzb-cyr': {
      title: 'Замонавий luxury меҳмон санузели',
      subtitle: 'Минимализм ва табиий тош.',
      features: ['Органик ойна', 'Юмшоқ ёритиш', 'Консол лаваба қулайлик ва мақом муҳитини яратади.'],
      tagline: 'Ихчам, эстетик, премиум.',
    },
  };

  // Bathroom Project 2 - Luxury Bathroom
  const bathroomContent2 = {
    eng: {
      title: 'Modern Luxury Bathroom',
      subtitle: 'Elegant minimalism with elements of natural luxury.',
      description: 'Natural stone, warm palette and soft lighting create an atmosphere of comfort and private luxury.',
      features: 'Hidden storage systems, scenario LED lighting and walk-in shower create a clean, status and thoughtful space.',
    },
    rus: {
      title: 'Современная luxury ванная комната',
      subtitle: 'Элегантный минимализм с элементами природной роскоши.',
      description: 'Натуральный камень, тёплая палитра и мягкая подсветка создают атмосферу уюта и приватного luxury.',
      features: 'Скрытые системы хранения, сценарное LED-освещение и walk-in душевая формируют чистое, статусное и продуманное пространство.',
    },
    uzb: {
      title: "Zamonaviy luxury hammom xonasi",
      subtitle: "Tabiiy hashamat elementlari bilan nafis minimalizm.",
      description: "Tabiiy tosh, iliq rang palitrasi va yumshoq yoritish qulaylik va xususiy hashamat muhitini yaratadi.",
      features: "Yashirin saqlash tizimlari, ssenariy LED yoritish va walk-in dush toza, statusli va o'ylangan makonni shakllantiradi.",
    },
    'uzb-cyr': {
      title: 'Замонавий luxury ҳаммом хонаси',
      subtitle: 'Табиий ҳашамат элементлари билан нафис минимализм.',
      description: 'Табиий тош, илиқ ранг палитраси ва юмшоқ ёритиш қулайлик ва хусусий ҳашамат муҳитини яратади.',
      features: 'Яширин сақлаш тизимлари, сценарий LED ёритиш ва walk-in душ тоза, статусли ва ўйланган маконни шакллантиради.',
    },
  };

  const currentBathroom1 = bathroomContent1[language];
  const currentBathroom2 = bathroomContent2[language];
  
  const bathroomProjects = [
    {
      title: currentBathroom1.title,
      subtitle: currentBathroom1.subtitle,
      features: currentBathroom1.features,
      tagline: currentBathroom1.tagline,
      images: [bathroom1, bathroom2, bathroom3, bathroom4, bathroom5],
    },
    {
      title: currentBathroom2.title,
      subtitle: currentBathroom2.subtitle,
      description: currentBathroom2.description,
      features: currentBathroom2.features,
      images: [bathroom2_1, bathroom2_2, bathroom2_3, bathroom2_4, bathroom2_5, bathroom2_6],
    },
  ];

  const currentBathroomProject = bathroomProjects[activeBathroomProject];

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
        { id: 'bathroom', name: 'Bathroom', image: bathroom1, hasDetail: true },
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

  const getCategoryImages = () => {
    return mainCategories.map(c => c.image);
  };

  const getSubcategoryImages = () => {
    return interiorCategory?.subcategories?.map(s => s.image) || [];
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
            {/* Bathroom Detail View */}
            {activeSubcategory === 'bathroom' ? (
              <motion.div
                key="bathroom-detail"
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

                {/* Project Selector */}
                <div className="flex gap-4 mb-12">
                  {bathroomProjects.map((project, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveBathroomProject(index)}
                      className={`px-6 py-3 rounded-full text-sm tracking-wider transition-all duration-300 ${
                        activeBathroomProject === index
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'bg-muted/50 text-foreground/70 hover:bg-muted'
                      }`}
                    >
                      {language === 'eng' ? `Project ${index + 1}` : language === 'rus' ? `Проект ${index + 1}` : language === 'uzb-cyr' ? `Лойиҳа ${index + 1}` : `Loyiha ${index + 1}`}
                    </button>
                  ))}
                </div>

                {/* Project Header */}
                <div className="mb-16">
                  <motion.div
                    key={activeBathroomProject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl"
                  >
                    <span className="text-sm tracking-[0.3em] text-primary/80 uppercase font-light flex items-center gap-2">
                      <span className="text-lg">🎨</span> {language === 'eng' ? 'Project' : language === 'rus' ? 'Проект' : language === 'uzb-cyr' ? 'Лойиҳа' : 'Loyiha'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light mt-4 mb-3 tracking-tight">
                      {currentBathroomProject.title}
                    </h2>
                    
                    {/* Elegant subtitle */}
                    <p className="text-foreground/60 text-xl md:text-2xl italic font-light mb-8 leading-relaxed">
                      {currentBathroomProject.subtitle}
                    </p>
                    
                    {/* Description for project 2 */}
                    {'description' in currentBathroomProject && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                      >
                        <p className="text-lg text-foreground/70 font-light leading-relaxed border-l-2 border-primary/30 pl-6">
                          {currentBathroomProject.description}
                        </p>
                      </motion.div>
                    )}
                    
                    {/* Features - different display for each project type */}
                    {Array.isArray(currentBathroomProject.features) ? (
                      <div className="space-y-4 mb-8">
                        {currentBathroomProject.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-center gap-4"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary/60" />
                            <span className="text-lg text-foreground/80 font-light">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8"
                      >
                        <p className="text-lg text-foreground/70 font-light leading-relaxed border-l-2 border-primary/30 pl-6">
                          {currentBathroomProject.features}
                        </p>
                      </motion.div>
                    )}

                    {/* Tagline for project 1 */}
                    {'tagline' in currentBathroomProject && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl font-light text-primary/90 border-l-2 border-primary/40 pl-6 italic"
                      >
                        {currentBathroomProject.tagline}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Image Gallery - Masonry style */}
                <motion.div 
                  key={`gallery-${activeBathroomProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {currentBathroomProject.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                      onClick={() => openLightbox(currentBathroomProject.images, index)}
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                        index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[3/4]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Bathroom design ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to view
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : activeSubcategory === 'kitchen' ? (
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
                      onClick={() => openLightbox(kitchenProject.images, index)}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`Kitchen design ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to view
                        </span>
                      </div>
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
                      onClick={() => sub.hasDetail ? handleSubcategoryClick(sub.id, sub.hasDetail) : openLightbox(getSubcategoryImages(), index)}
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
                        <p className="text-white/50 text-sm mt-1">
                          {sub.hasDetail ? 'View project →' : 'Click to view'}
                        </p>
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
                      onClick={() => category.subcategories ? setActiveCategory(category.id) : openLightbox(getCategoryImages(), index)}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
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
                        <p className="text-white/50 text-sm mt-1">
                          {category.subcategories ? 'Click to explore' : 'Click to view'}
                        </p>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImages.length > 0 && (
          <Lightbox
            images={lightboxImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
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
