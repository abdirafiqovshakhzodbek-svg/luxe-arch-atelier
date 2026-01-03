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
    'nav.request': 'Submit Request',
    
    // Projects Page
    'projects.label': 'Portfolio',
    'projects.title': 'Our Projects',
    'projects.description': 'Explore our portfolio of architectural visualizations, interior designs, and 3D projects that showcase our commitment to precision and aesthetics.',
    
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
    'services.description': 'We provide comprehensive architectural and design solutions — from concept to precise calculations. Each project is built on visual accuracy, professional work with light, materials, and space, as well as detailed preparation for implementation.',
    'services.01.title': 'Visual Concept',
    'services.01.description': 'Creating architectural and interior concepts with a focus on form, light, and atmosphere. We shape the visual image of the project that reflects style, functionality, and character of the space.',
    'services.02.title': 'Interior & Exterior Design',
    'services.02.description': 'Development of interior and exterior spaces with professional selection of materials, textures, and color solutions. Every detail is subordinate to the overall architectural logic.',
    'services.03.title': 'Visualization & Animation',
    'services.03.description': 'Photorealistic 3D visualizations and short animations that allow you to see the project before implementation. Maximum precision of light, materials, and proportions.',
    'services.04.title': 'Material Specifications & Project Details',
    'services.04.description': 'Precise calculations of materials (Bill of Materials), lighting, and finishes. Budget optimization and project preparation for implementation without unnecessary costs.',
    
    // About
    'about.label': 'About Us',
    'about.title': 'About Us',
    'about.intro': 'Pixel Aurora Architect is a studio of architectural visualization, interior and exterior design, focused on precision, aesthetics, and practical project implementation.',
    'about.history': 'We have been working since December 2024 and during this time have successfully completed visual 3D projects and layouts for office spaces, kitchens, bedrooms, cafes, and exhibition stands. Our team specializes in creating photorealistic visualizations, working with materials, light and proportions, as well as preparing projects as close to real results as possible.',
    'about.animation': 'A separate area of our work is creating short animated videos for advertising, presentation, and demonstration purposes. We professionally perform visual improvements, adapt projects to different formats and tasks, while maintaining a unified style and architectural logic.',
    'about.approach.title': 'Our Approach',
    'about.approach.intro': 'We believe that quality design is never accidental.',
    'about.approach.description': 'As in any business, steps taken without a plan rarely lead to sustainable results. Similarly, construction or design without a clearly developed project inevitably leads to loss of time, resources, and budget.',
    'about.approach.focus': 'That is why in our work we pay special attention to:',
    'about.approach.item1': 'preliminary concept,',
    'about.approach.item2': 'precise visualization,',
    'about.approach.item3': 'professional selection of materials and lighting,',
    'about.approach.item4': 'detailed project development and specifications.',
    'about.goal.title': 'Our Goal',
    'about.goal.description': 'Our goal is to create quality, stable, and durable design that remains relevant over time and is logically implemented in reality. We strive not just for a beautiful picture, but for an understandable, justified, and feasible project that helps our clients make confident decisions.',
    'about.why.title': 'Why Pixel Aurora Architect',
    'about.why.item1': 'Professional approach to visualization and design',
    'about.why.item2': 'Precise work with light, materials, and scale',
    'about.why.item3': 'Understanding of architectural logic and budget',
    'about.why.item4': 'Visualizations and animations focused on real results',
    'about.why.item5': 'Clear work structure and responsibility at every stage',
    'about.conclusion': 'We are ready to become your professional partner and help implement the project at a high level — from idea to final visual solution.',

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
    'footer.copyright': '© 2024 Pixel Aurora. All rights reserved.',
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
    'nav.request': 'Оставить заявку',
    
    // Projects Page
    'projects.label': 'Портфолио',
    'projects.title': 'Наши проекты',
    'projects.description': 'Изучите наше портфолио архитектурных визуализаций, интерьерных дизайнов и 3D-проектов, демонстрирующих нашу приверженность точности и эстетике.',
    
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
    'services.description': 'Мы предоставляем комплексные архитектурные и дизайнерские решения — от идеи до точных расчётов. Каждый проект строится на визуальной точности, профессиональной работе со светом, материалами и пространством, а также детальной подготовке к реализации.',
    'services.01.title': 'Визуальная концепция',
    'services.01.description': 'Создание архитектурной и интерьерной идеи с фокусом на форму, свет и атмосферу. Мы формируем визуальный образ проекта, который отражает стиль, функциональность и характер пространства.',
    'services.02.title': 'Дизайн интерьера и экстерьера',
    'services.02.description': 'Проработка внутренних и внешних пространств с профессиональным подбором материалов, фактур и цветовых решений. Каждая деталь подчинена общей архитектурной логике.',
    'services.03.title': 'Визуализация и анимация',
    'services.03.description': 'Фотореалистичные 3D-визуализации и короткие анимации, позволяющие увидеть проект до начала реализации. Максимальная точность света, материалов и пропорций.',
    'services.04.title': 'Ведомость материалов и проектная детализация',
    'services.04.description': 'Точные расчёты материалов (Ведомость материалов), освещения и отделки. Оптимизация бюджета и подготовка проекта к реализации без лишних затрат.',
    
    // About
    'about.label': 'О нас',
    'about.title': 'О нас',
    'about.intro': 'Pixel Aurora Architect — студия архитектурной визуализации, интерьерного и экстерьерного дизайна, ориентированная на точность, эстетику и практическую реализацию проектов.',
    'about.history': 'Мы работаем с декабря 2024 года и за это время успешно реализовали визуальные 3D-проекты и макеты для офисных пространств, кухонь, спален, кафе, а также выставочных стендов. Наша команда специализируется на создании фотореалистичных визуализаций, проработке материалов, света и пропорций, а также подготовке проектов, максимально приближённых к реальному результату.',
    'about.animation': 'Отдельным направлением нашей работы является создание коротких анимационных видеороликов для рекламных, презентационных и демонстрационных задач. Мы профессионально выполняем визуальные доработки, адаптацию проектов под разные форматы и задачи, сохраняя единый стиль и архитектурную логику.',
    'about.approach.title': 'Наш подход',
    'about.approach.intro': 'Мы убеждены, что качественный дизайн не бывает случайным.',
    'about.approach.description': 'Как и в любом деле, шаги, сделанные без плана, редко приводят к устойчивому результату. Точно так же строительство или дизайн без чётко проработанного проекта неизбежно ведёт к потере времени, ресурсов и бюджета.',
    'about.approach.focus': 'Именно поэтому в своей работе мы уделяем особое внимание:',
    'about.approach.item1': 'предварительной концепции,',
    'about.approach.item2': 'точной визуализации,',
    'about.approach.item3': 'профессиональному подбору материалов и освещения,',
    'about.approach.item4': 'детальной проектной проработке и спецификациям.',
    'about.goal.title': 'Наша цель',
    'about.goal.description': 'Наша цель — создавать качественный, стабильный и долговечный дизайн, который остаётся актуальным со временем и логично реализуется в реальности. Мы стремимся не просто к красивой картинке, а к понятному, обоснованному и реализуемому проекту, который помогает нашим клиентам принимать уверенные решения.',
    'about.why.title': 'Почему Pixel Aurora Architect',
    'about.why.item1': 'Профессиональный подход к визуализации и дизайну',
    'about.why.item2': 'Точная работа со светом, материалами и масштабом',
    'about.why.item3': 'Понимание архитектурной логики и бюджета',
    'about.why.item4': 'Визуализации и анимации, ориентированные на реальный результат',
    'about.why.item5': 'Чёткая структура работы и ответственность на каждом этапе',
    'about.conclusion': 'Мы готовы стать вашим профессиональным партнёром и помочь реализовать проект на высоком уровне — от идеи до финального визуального решения.',

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
    'footer.copyright': '© 2024 Pixel Aurora. Все права защищены.',
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
    'nav.request': "So'rov qoldirish",
    
    // Projects Page
    'projects.label': 'Portfolio',
    'projects.title': 'Bizning loyihalar',
    'projects.description': "Aniqlik va estetikaga bo'lgan sadoqatimizni namoyish etuvchi arxitektura vizualizatsiyalari, interer dizaynlari va 3D-loyihalar portfoliomizni ko'rib chiqing.",
    
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
    'services.description': "Biz kontseptsiyadan aniq hisob-kitoblargacha keng qamrovli arxitektura va dizayn yechimlarini taqdim etamiz. Har bir loyiha vizual aniqlik, yorug'lik, materiallar va makon bilan professional ishlash, shuningdek amalga oshirish uchun batafsil tayyorgarlik asosida qurilgan.",
    'services.01.title': 'Vizual kontseptsiya',
    'services.01.description': "Shakl, yorug'lik va atmosferaga e'tibor qaratgan holda arxitektura va interer g'oyalarini yaratish. Biz uslub, funksionallik va makon xarakterini aks ettiruvchi loyihaning vizual tasvirini shakllantiramiz.",
    'services.02.title': 'Interer va eksterer dizayn',
    'services.02.description': "Materiallar, fakturalar va rang yechimlarini professional tanlash bilan ichki va tashqi makonlarni ishlab chiqish. Har bir detal umumiy arxitektura mantiqiga bo'ysunadi.",
    'services.03.title': 'Vizualizatsiya va animatsiya',
    'services.03.description': "Loyihani amalga oshirishdan oldin ko'rish imkonini beruvchi fotorealistik 3D-vizualizatsiyalar va qisqa animatsiyalar. Yorug'lik, materiallar va nisbatlarning maksimal aniqligi.",
    'services.04.title': 'Materiallar spetsifikatsiyasi va loyiha tafsilotlari',
    'services.04.description': "Materiallar (Materiallar ro'yxati), yoritish va pardozning aniq hisob-kitoblari. Byudjetni optimallashtirish va loyihani ortiqcha xarajatlarsiz amalga oshirishga tayyorlash.",
    
    // About
    'about.label': 'Biz haqimizda',
    'about.title': 'Biz haqimizda',
    'about.intro': "Pixel Aurora Architect — aniqlik, estetika va loyihalarni amaliy amalga oshirishga yo'naltirilgan arxitektura vizualizatsiyasi, interer va eksterer dizayn studiyasi.",
    'about.history': "Biz 2024 yilning dekabridan beri ishlaymiz va bu vaqt ichida ofis makonlari, oshxonalar, yotoqxonalar, kafelar va ko'rgazma stendlari uchun vizual 3D-loyihalar va maketlarni muvaffaqiyatli amalga oshirdik. Bizning jamoamiz fotorealistik vizualizatsiyalar yaratish, materiallar, yorug'lik va nisbatlar bilan ishlash, shuningdek haqiqiy natijaga iloji boricha yaqin loyihalarni tayyorlashga ixtisoslashgan.",
    'about.animation': "Ishimizning alohida yo'nalishi reklama, taqdimot va namoyish maqsadlari uchun qisqa animatsion videolar yaratishdir. Biz vizual yaxshilashlarni, loyihalarni turli formatlarga va vazifalarga moslashtirish, yagona uslub va arxitektura mantiqini saqlab qolishni professional tarzda bajaramiz.",
    'about.approach.title': "Bizning yondashuv",
    'about.approach.intro': "Biz sifatli dizayn hech qachon tasodifiy bo'lmasligiga ishonamiz.",
    'about.approach.description': "Har qanday ishda bo'lgani kabi, rejasiz qilingan qadamlar kamdan-kam hollarda barqaror natijaga olib keladi. Xuddi shunday, aniq ishlab chiqilgan loyihasiz qurilish yoki dizayn muqarrar ravishda vaqt, resurslar va byudjet yo'qotilishiga olib keladi.",
    'about.approach.focus': "Shuning uchun biz ishimizda alohida e'tibor qaratamiz:",
    'about.approach.item1': 'dastlabki kontseptsiya,',
    'about.approach.item2': 'aniq vizualizatsiya,',
    'about.approach.item3': "materiallar va yoritishni professional tanlash,",
    'about.approach.item4': "batafsil loyiha ishlanmasi va spetsifikatsiyalar.",
    'about.goal.title': "Bizning maqsad",
    'about.goal.description': "Bizning maqsadimiz — vaqt o'tishi bilan dolzarbligini saqlab qoluvchi va haqiqatda mantiqiy ravishda amalga oshiriladigan sifatli, barqaror va uzoq muddatli dizayn yaratish. Biz nafaqat chiroyli rasmga, balki mijozlarimizga ishonchli qarorlar qabul qilishga yordam beradigan tushunarli, asoslangan va amalga oshiriladigan loyihaga intilamiz.",
    'about.why.title': 'Nima uchun Pixel Aurora Architect',
    'about.why.item1': "Vizualizatsiya va dizaynga professional yondashuv",
    'about.why.item2': "Yorug'lik, materiallar va masshtab bilan aniq ishlash",
    'about.why.item3': "Arxitektura mantiqi va byudjetni tushunish",
    'about.why.item4': "Haqiqiy natijaga yo'naltirilgan vizualizatsiyalar va animatsiyalar",
    'about.why.item5': "Aniq ish tuzilmasi va har bir bosqichda mas'uliyat",
    'about.conclusion': "Biz sizning professional hamkoringiz bo'lishga va loyihani yuqori darajada amalga oshirishga yordam berishga tayyormiz — g'oyadan yakuniy vizual yechimgacha.",

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
    'footer.copyright': '© 2024 Pixel Aurora. Barcha huquqlar himoyalangan.',
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
    'nav.request': 'Сўров қолдириш',
    
    // Projects Page
    'projects.label': 'Портфолио',
    'projects.title': 'Бизнинг лойиҳалар',
    'projects.description': 'Аниқлик ва эстетикага бўлган содиқлигимизни намойиш этувчи архитектура визуализациялари, интерер дизайнлари ва 3D-лойиҳалар портфолиомизни кўриб чиқинг.',
    
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
    'services.description': 'Биз концепциядан аниқ ҳисоб-китобларгача кенг қамровли архитектура ва дизайн ечимларини тақдим этамиз. Ҳар бир лойиҳа визуал аниқлик, ёруғлик, материаллар ва макон билан профессионал ишлаш, шунингдек амалга ошириш учун батафсил тайёргарлик асосида қурилган.',
    'services.01.title': 'Визуал концепция',
    'services.01.description': 'Шакл, ёруғлик ва атмосферага эътибор қаратган ҳолда архитектура ва интерер ғояларини яратиш. Биз услуб, функционаллик ва макон характерини акс эттирувчи лойиҳанинг визуал тасвирини шакллантирамиз.',
    'services.02.title': 'Интерер ва экстерер дизайн',
    'services.02.description': 'Материаллар, фактуралар ва ранг ечимларини профессионал танлаш билан ички ва ташқи маконларни ишлаб чиқиш. Ҳар бир детал умумий архитектура мантиғига бўйсунади.',
    'services.03.title': 'Визуализация ва анимация',
    'services.03.description': 'Лойиҳани амалга оширишдан олдин кўриш имконини берувчи фотореалистик 3D-визуализациялар ва қисқа анимациялар. Ёруғлик, материаллар ва нисбатларнинг максимал аниқлиги.',
    'services.04.title': 'Материаллар спецификацияси ва лойиҳа тафсилотлари',
    'services.04.description': 'Материаллар (Материаллар рўйхати), ёритиш ва пардознинг аниқ ҳисоб-китоблари. Бюджетни оптималлаштириш ва лойиҳани ортиқча харажатларсиз амалга оширишга тайёрлаш.',
    
    // About
    'about.label': 'Биз ҳақимизда',
    'about.title': 'Биз ҳақимизда',
    'about.intro': 'Pixel Aurora Architect — аниқлик, эстетика ва лойиҳаларни амалий амалга оширишга йўналтирилган архитектура визуализацияси, интерер ва экстерер дизайн студияси.',
    'about.history': 'Биз 2024 йилнинг декабридан бери ишлаймиз ва бу вақт ичида офис маконлари, ошхоналар, ётоқхоналар, кафелар ва кўргазма стендлари учун визуал 3D-лойиҳалар ва макетларни муваффақиятли амалга оширдик. Бизнинг жамоамиз фотореалистик визуализациялар яратиш, материаллар, ёруғлик ва нисбатлар билан ишлаш, шунингдек ҳақиқий натижага иложи борича яқин лойиҳаларни тайёрлашга ихтисослашган.',
    'about.animation': 'Ишимизнинг алоҳида йўналиши реклама, тақдимот ва намойиш мақсадлари учун қисқа анимацион видеолар яратишдир. Биз визуал яхшилашларни, лойиҳаларни турли форматларга ва вазифаларга мослаштириш, ягона услуб ва архитектура мантиғини сақлаб қолишни профессионал тарзда бажарамиз.',
    'about.approach.title': 'Бизнинг ёндашув',
    'about.approach.intro': 'Биз сифатли дизайн ҳеч қачон тасодифий бўлмаслигига ишонамиз.',
    'about.approach.description': 'Ҳар қандай ишда бўлгани каби, режасиз қилинган қадамлар камдан-кам ҳолларда барқарор натижага олиб келади. Худди шундай, аниқ ишлаб чиқилган лойиҳасиз қурилиш ёки дизайн муқаррар равишда вақт, ресурслар ва бюджет йўқотилишига олиб келади.',
    'about.approach.focus': 'Шунинг учун биз ишимизда алоҳида эътибор қаратамиз:',
    'about.approach.item1': 'дастлабки концепция,',
    'about.approach.item2': 'аниқ визуализация,',
    'about.approach.item3': 'материаллар ва ёритишни профессионал танлаш,',
    'about.approach.item4': 'батафсил лойиҳа ишланмаси ва спецификациялар.',
    'about.goal.title': 'Бизнинг мақсад',
    'about.goal.description': 'Бизнинг мақсадимиз — вақт ўтиши билан долзарблигини сақлаб қолувчи ва ҳақиқатда мантиқий равишда амалга ошириладиган сифатли, барқарор ва узоқ муддатли дизайн яратиш. Биз нафақат чиройли расмга, балки мижозларимизга ишончли қарорлар қабул қилишга ёрдам берадиган тушунарли, асосланган ва амалга ошириладиган лойиҳага интиламиз.',
    'about.why.title': 'Нима учун Pixel Aurora Architect',
    'about.why.item1': 'Визуализация ва дизайнга профессионал ёндашув',
    'about.why.item2': 'Ёруғлик, материаллар ва масштаб билан аниқ ишлаш',
    'about.why.item3': 'Архитектура мантиғи ва бюджетни тушуниш',
    'about.why.item4': 'Ҳақиқий натижага йўналтирилган визуализациялар ва анимациялар',
    'about.why.item5': 'Аниқ иш тузилмаси ва ҳар бир босқичда масъулият',
    'about.conclusion': 'Биз сизнинг профессионал ҳамкорингиз бўлишга ва лойиҳани юқори даражада амалга оширишга ёрдам беришга тайёрмиз — ғоядан якуний визуал ечимгача.',

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
    'footer.copyright': '© 2024 Pixel Aurora. Барча ҳуқуқлар ҳимояланган.',
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