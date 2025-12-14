import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uzb' | 'uzb-cyr' | 'rus' | 'eng';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  eng: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contacts',
    
    // Hero
    'hero.title1': 'Architecture',
    'hero.title2': 'Reimagined',
    'hero.subtitle': 'A new standard of modern living',
    'hero.services': 'Our Services',
    'hero.contact': 'Contact Us',
    'hero.scroll': 'Scroll',
    
    // Services
    'services.label': 'Services',
    'services.title': 'Our Services',
    'services.description': 'We offer comprehensive architectural and design services, transforming ideas into exceptional living spaces.',
    'services.01.title': 'Property Showcase',
    'services.01.description': 'Presenting elite real estate with cinematic precision, capturing every architectural detail.',
    'services.02.title': 'Site Planning',
    'services.02.description': 'Strategic land analysis and development planning for optimal architectural integration.',
    'services.03.title': 'Building Design',
    'services.03.description': 'Creating unique structures that harmoniously blend form, function, and environment.',
    'services.04.title': 'Space Planning',
    'services.04.description': 'Optimizing interior solutions for improved flow, comfort, and aesthetic perception.',
    
    // House Plan
    'plan.label': 'Featured Project',
    'plan.title': 'House Plan',
    'plan.area': 'Area',
    'plan.totalArea': 'Total Area',
    'plan.room.living': 'Living Room',
    'plan.room.master': 'Master Bedroom',
    'plan.room.kitchen': 'Kitchen',
    'plan.room.dining': 'Dining Room',
    'plan.room.bedroom2': 'Bedroom 2',
    'plan.room.bedroom3': 'Bedroom 3',
    'plan.room.bathroom': 'Bathroom',
    'plan.room.terrace': 'Terrace',
    
    // Footer
    'footer.brand.description': 'Creating exceptional architectural experiences that redefine modern living. Each project is a testament to precision, elegance, and innovation.',
    'footer.navigation': 'Navigation',
    'footer.contacts': 'Contacts',
    'footer.copyright': '© 2025 Pixel Aurora. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.address.street': 'Amir Temur St., 456',
    'footer.address.city': 'Tashkent, 123456',

    // Contact Form
    'contact.label': 'Contact Us',
    'contact.title': 'Submit a Request',
    'contact.description': 'Fill out the form and we will contact you shortly',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message or Comment',
    'contact.submit': 'Submit Request',
    'contact.submitting': 'Sending...',
    'contact.success': 'Request sent successfully!',
    'contact.error': 'Error sending request. Please try again.',
    'contact.captchaError': 'Incorrect answer. Please try again.',
    'contact.phoneError': 'Please enter a valid phone number',
    'contact.captcha': 'Security check',
    'contact.captchaPlaceholder': 'Your answer',
    'contact.phonePlaceholder': '+998 XX XXX XX XX',
  },
  rus: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.projects': 'Проекты',
    'nav.services': 'Услуги',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title1': 'Архитектура',
    'hero.title2': 'Переосмыслена',
    'hero.subtitle': 'Новый стандарт современной жизни',
    'hero.services': 'Наши услуги',
    'hero.contact': 'Связаться',
    'hero.scroll': 'Листать',
    
    // Services
    'services.label': 'Услуги',
    'services.title': 'Наши услуги',
    'services.description': 'Мы предлагаем комплексные архитектурные и дизайнерские услуги, превращая идеи в исключительные жилые пространства.',
    'services.01.title': 'Презентация объектов',
    'services.01.description': 'Представление элитной недвижимости с кинематографической точностью, запечатлевая каждую архитектурную деталь.',
    'services.02.title': 'Планирование участка',
    'services.02.description': 'Стратегический анализ земли и планирование застройки для оптимальной архитектурной интеграции.',
    'services.03.title': 'Проектирование зданий',
    'services.03.description': 'Создание уникальных сооружений, гармонично сочетающих форму, функцию и окружающую среду.',
    'services.04.title': 'Планировка пространства',
    'services.04.description': 'Оптимизация интерьерных решений для улучшенного потока, комфорта и эстетического восприятия.',
    
    // House Plan
    'plan.label': 'Избранный проект',
    'plan.title': 'План дома',
    'plan.area': 'Площадь',
    'plan.totalArea': 'Общая площадь',
    'plan.room.living': 'Гостиная',
    'plan.room.master': 'Главная спальня',
    'plan.room.kitchen': 'Кухня',
    'plan.room.dining': 'Столовая',
    'plan.room.bedroom2': 'Спальня 2',
    'plan.room.bedroom3': 'Спальня 3',
    'plan.room.bathroom': 'Ванная',
    'plan.room.terrace': 'Терраса',
    
    // Footer
    'footer.brand.description': 'Создаём исключительный архитектурный опыт, переосмысливающий современную жизнь. Каждый проект — свидетельство точности, элегантности и инноваций.',
    'footer.navigation': 'Навигация',
    'footer.contacts': 'Контакты',
    'footer.copyright': '© 2025 Pixel Aurora. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.address.street': 'ул. Амир Темур, 456',
    'footer.address.city': 'Ташкент, 123456',

    // Contact Form
    'contact.label': 'Связаться',
    'contact.title': 'Оставить заявку',
    'contact.description': 'Заполните форму и мы свяжемся с вами в ближайшее время',
    'contact.firstName': 'Имя',
    'contact.lastName': 'Фамилия',
    'contact.phone': 'Номер телефона',
    'contact.message': 'Сообщение или комментарий',
    'contact.submit': 'Отправить заявку',
    'contact.submitting': 'Отправка...',
    'contact.success': 'Заявка успешно отправлена!',
    'contact.error': 'Ошибка отправки. Попробуйте ещё раз.',
    'contact.captchaError': 'Неверный ответ. Попробуйте ещё раз.',
    'contact.phoneError': 'Введите корректный номер телефона',
    'contact.captcha': 'Проверка безопасности',
    'contact.captchaPlaceholder': 'Ваш ответ',
    'contact.phonePlaceholder': '+998 XX XXX XX XX',
  },
  uzb: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.projects': 'Loyihalar',
    'nav.services': 'Xizmatlar',
    'nav.gallery': 'Galereya',
    'nav.contact': 'Aloqa',
    
    // Hero
    'hero.title1': 'Arxitektura',
    'hero.title2': 'Qayta tasavvur',
    'hero.subtitle': 'Zamonaviy hayotning yangi standarti',
    'hero.services': 'Bizning xizmatlar',
    'hero.contact': "Bog'lanish",
    'hero.scroll': 'Aylantirish',
    
    // Services
    'services.label': 'Xizmatlar',
    'services.title': 'Bizning xizmatlar',
    'services.description': "Biz g'oyalarni ajoyib yashash joylariga aylantirib, keng qamrovli arxitektura va dizayn xizmatlarini taklif etamiz.",
    'services.01.title': "Ko'chmas mulk taqdimoti",
    'services.01.description': "Har bir arxitektura tafsilotini aks ettirgan holda, elita ko'chmas mulkni kinematografik aniqlik bilan taqdim etish.",
    'services.02.title': 'Yer rejalash',
    'services.02.description': "Optimal arxitektura integratsiyasi uchun strategik er tahlili va qurilish rejalashtirish.",
    'services.03.title': 'Bino loyihalash',
    'services.03.description': "Shakl, funksiya va atrof-muhitni uyg'un ravishda birlashtiruvchi noyob inshootlarni yaratish.",
    'services.04.title': 'Makon rejalashtirish',
    'services.04.description': "Yaxshilangan oqim, qulaylik va estetik idrok uchun ichki yechimlarni optimallashtirish.",
    
    // House Plan
    'plan.label': 'Tanlangan loyiha',
    'plan.title': 'Uy rejasi',
    'plan.area': 'Maydon',
    'plan.totalArea': 'Umumiy maydon',
    'plan.room.living': 'Yashash xonasi',
    'plan.room.master': 'Asosiy yotoqxona',
    'plan.room.kitchen': 'Oshxona',
    'plan.room.dining': "Ovqatlanish xonasi",
    'plan.room.bedroom2': 'Yotoqxona 2',
    'plan.room.bedroom3': 'Yotoqxona 3',
    'plan.room.bathroom': 'Hammom',
    'plan.room.terrace': 'Terrasa',
    
    // Footer
    'footer.brand.description': "Zamonaviy hayotni qayta belgilaydigan ajoyib arxitektura tajribalarini yaratamiz. Har bir loyiha aniqlik, nafislik va innovatsiyaning dalilidir.",
    'footer.navigation': 'Navigatsiya',
    'footer.contacts': 'Aloqa',
    'footer.copyright': '© 2025 Pixel Aurora. Barcha huquqlar himoyalangan.',
    'footer.privacy': 'Maxfiylik siyosati',
    'footer.terms': 'Foydalanish shartlari',
    'footer.address.street': 'Amir Temur ko\'chasi, 456',
    'footer.address.city': 'Toshkent, 123456',

    // Contact Form
    'contact.label': "Bog'lanish",
    'contact.title': "So'rov qoldirish",
    'contact.description': "Formani to'ldiring va biz tez orada siz bilan bog'lanamiz",
    'contact.firstName': 'Ism',
    'contact.lastName': 'Familiya',
    'contact.phone': 'Telefon raqami',
    'contact.message': 'Xabar yoki izoh',
    'contact.submit': "So'rov yuborish",
    'contact.submitting': 'Yuborilmoqda...',
    'contact.success': "So'rov muvaffaqiyatli yuborildi!",
    'contact.error': "Yuborishda xatolik. Qayta urinib ko'ring.",
    'contact.captchaError': "Noto'g'ri javob. Qayta urinib ko'ring.",
    'contact.phoneError': "To'g'ri telefon raqamini kiriting",
    'contact.captcha': 'Xavfsizlik tekshiruvi',
    'contact.captchaPlaceholder': 'Javobingiz',
    'contact.phonePlaceholder': '+998 XX XXX XX XX',
  },
  'uzb-cyr': {
    // Navigation
    'nav.home': 'Бош саҳифа',
    'nav.about': 'Биз ҳақимизда',
    'nav.projects': 'Лойиҳалар',
    'nav.services': 'Хизматлар',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Алоқа',
    
    // Hero
    'hero.title1': 'Архитектура',
    'hero.title2': 'Қайта тасаввур',
    'hero.subtitle': 'Замонавий ҳаётнинг янги стандарти',
    'hero.services': 'Бизнинг хизматлар',
    'hero.contact': 'Боғланиш',
    'hero.scroll': 'Айлантириш',
    
    // Services
    'services.label': 'Хизматлар',
    'services.title': 'Бизнинг хизматлар',
    'services.description': 'Биз ғояларни ажойиб яшаш жойларига айлантириб, кенг қамровли архитектура ва дизайн хизматларини таклиф этамиз.',
    'services.01.title': 'Кўчмас мулк тақдимоти',
    'services.01.description': 'Ҳар бир архитектура тафсилотини акс эттирган ҳолда, элита кўчмас мулкни кинематографик аниқлик билан тақдим этиш.',
    'services.02.title': 'Ер режалаш',
    'services.02.description': 'Оптимал архитектура интеграцияси учун стратегик ер таҳлили ва қурилиш режалаштириш.',
    'services.03.title': 'Бино лойиҳалаш',
    'services.03.description': 'Шакл, функция ва атроф-муҳитни уйғун равишда бирлаштирувчи ноёб иншоотларни яратиш.',
    'services.04.title': 'Макон режалаштириш',
    'services.04.description': 'Яхшиланган оқим, қулайлик ва эстетик идрок учун ички ечимларни оптималлаштириш.',
    
    // House Plan
    'plan.label': 'Танланган лойиҳа',
    'plan.title': 'Уй режаси',
    'plan.area': 'Майдон',
    'plan.totalArea': 'Умумий майдон',
    'plan.room.living': 'Яшаш хонаси',
    'plan.room.master': 'Асосий ётоқхона',
    'plan.room.kitchen': 'Ошхона',
    'plan.room.dining': 'Овқатланиш хонаси',
    'plan.room.bedroom2': 'Ётоқхона 2',
    'plan.room.bedroom3': 'Ётоқхона 3',
    'plan.room.bathroom': 'Ҳаммом',
    'plan.room.terrace': 'Терраса',
    
    // Footer
    'footer.brand.description': 'Замонавий ҳаётни қайта белгилайдиган ажойиб архитектура тажрибаларини яратамиз. Ҳар бир лойиҳа аниқлик, нафислик ва инновациянинг далилидир.',
    'footer.navigation': 'Навигация',
    'footer.contacts': 'Алоқа',
    'footer.copyright': '© 2025 Pixel Aurora. Барча ҳуқуқлар ҳимояланган.',
    'footer.privacy': 'Махфийлик сиёсати',
    'footer.terms': 'Фойдаланиш шартлари',
    'footer.address.street': 'Амир Темур кўчаси, 456',
    'footer.address.city': 'Тошкент, 123456',

    // Contact Form
    'contact.label': 'Боғланиш',
    'contact.title': 'Сўров қолдириш',
    'contact.description': 'Формани тўлдиринг ва биз тез орада сиз билан боғланамиз',
    'contact.firstName': 'Исм',
    'contact.lastName': 'Фамилия',
    'contact.phone': 'Телефон рақами',
    'contact.message': 'Хабар ёки изоҳ',
    'contact.submit': 'Сўров юбориш',
    'contact.submitting': 'Юборилмоқда...',
    'contact.success': 'Сўров муваффақиятли юборилди!',
    'contact.error': 'Юборишда хатолик. Қайта уриниб кўринг.',
    'contact.captchaError': 'Нотўғри жавоб. Қайта уриниб кўринг.',
    'contact.phoneError': 'Тўғри телефон рақамини киритинг',
    'contact.captcha': 'Хавфсизлик текшируви',
    'contact.captchaPlaceholder': 'Жавобингиз',
    'contact.phonePlaceholder': '+998 XX XXX XX XX',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('rus');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
