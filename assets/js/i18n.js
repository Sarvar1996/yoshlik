/* Yoshlik-Yu — i18n. Vanilla JS, no deps. */
(function () {
  "use strict";

  var T = {
    ru: {
      "nav.advantages": "Преимущества",
      "nav.about": "О компании",
      "nav.channels": "Каналы продаж",
      "nav.brands": "Бренды",
      "nav.team": "Команда",
      "nav.faq": "FAQ",
      "nav.contact": "Связаться",

      "hero.eyebrow": "Дистрибьюторская компания · с 1991 года",
      "hero.title": "Дистрибуция<br /><span>по всему Узбекистану</span>",
      "hero.lead": "YOSHLIK-YU - качественная дистрибьюция полного цикла",
      "hero.cta1": "Каналы продаж",
      "hero.cta2": "Стать партнёром",
      "hero.cta3": "Скачать презентацию",
      "hero.stat1": "лет на рынке",
      "hero.stat2": "брендов",
      "hero.stat3": "торговых точек",
      "hero.stat4": "сотрудников",

      "numbers.h2": "В ЦИФРАХ",
      "numbers.kpi1": "АКБ — покрытие через партнёров",
      "numbers.kpi2": "АКБ — прямое покрытие",
      "numbers.kpi3": "собственные склады",
      "numbers.kpi4": "собственные офисы",
      "numbers.kpi5": "наименований SKU",
      "numbers.kpi6": "единиц автопарка",
      "numbers.kpi7": "дилеров",
      "numbers.kpi8": "сотрудников",

      "adv.eyebrow": "Почему мы",
      "adv.h2": 'Преимущества <span class="alt-nowrap">Yoshlik-Yu</span>',
      "adv.sub": "Причины по которым нам доверяют.",
      "adv1.h3": "35 лет на рынке",
      "adv1.p":
        "Работаем с 1991 года. Глубокое понимание рынка Узбекистана и устойчивые связи с ключевыми игроками отрасли.",
      "adv2.h3": "Собственная инфраструктура",
      "adv2.p":
        "Автопарк из 24 единиц, склады 2070 м² и офисы 490 м² — контролируем каждый этап от приёмки до доставки на полку.",
      "adv3.h3": "Каналы продаж",
      "adv3.p":
        "Key Account, Традиционная розница, Farm, HoReCa, Опт, Fitness and Wellness, B2B, E-commerce - охватываем все каналы продаж.",
      "adv4.h3": "Команда экспертов",
      "adv4.p":
        "90+ сотрудников охватывающих различные сферы, каналы и специфики рынка: менеджеры, супервайзеры, торговые представители, категорийные менеджеры, аналитики, менеджеры по работе с маркетплейсами или бренд менеджеры.",
      "adv5.h3": "Контроль качества",
      "adv5.p":
        "Машины доставки с рефрежераторами, склады с температурными режимами хранения, FIFO и FEFO - учёт на складах, регулируемый аудит торговых точек и партнёрских сетей.",
      "adv6.h3": "Прозрачная отчётность",
      "adv6.p":
        "Ежемесячные отчёты по продажам, остаткам и покрытию в разрезе SKU, региона и канала — партнёр видит реальную картину.",

      "about.eyebrow": "О компании",
      "about.h2": "Дистрибуция, которой доверяют с 1991 года",
      "about.p1":
        "Мы — современная дистрибьюторская компания, специализирующаяся на продвижении и развитии брендов на рынке Узбекистана. Наша деятельность охватывает полный цикл дистрибуции: от импорта и логистики до продаж, маркетинга и построения эффективной системы представленности продукции в ключевых каналах сбыта.",
      "about.p2":
        "Компания сотрудничает с международными производителями, обеспечивая качественное покрытие рынка через развитую партнёрскую сеть, профессиональную команду продаж и современные инструменты аналитики. Мы работаем с розничными сетями, аптечными сетями, традиционной розницей, HoReCa, фитнес-центрами и e-commerce каналами.",
      "about.bodyhead": "Основные направления нашей работы",
      "about.li1": "Дистрибуция FMCG-продукции",
      "about.li2": "Продвижение брендов и развитие продаж",
      "about.li3": "Трейд-маркетинг и мерчандайзинг",
      "about.li4": "Логистика и складская инфраструктура",
      "about.li5": "Запуск и масштабирование новых брендов на рынке",
      "about.li6":
        "Построение долгосрочных партнёрских отношений с клиентами и поставщиками",
      "about.goal":
        "Наша цель — быть надёжным стратегическим партнёром для производителей и создавать эффективную систему продаж, обеспечивающую рост, узнаваемость и долгосрочный успех брендов.",

      "tl.1991": "Основание строительной компании",
      "tl.2017": "Запуск дистрибуции",
      "tl.2019": "Расширение Non-Food",
      "tl.2020": "Косметика и бытовая химия",
      "tl.2022": "Спортивное питание и снеки",
      "tl.2023": "Food-категория",
      "tl.2024": "Напитки",
      "tl.2025": "Витамины",
      "tl.fdp": "Создание второго дивизиона и направления",

      "ch.eyebrow": "НАПРАВЛЕНИЯ ДИСТРИБЬЮЦИИ",
      "ch.h2": "ВСЕ КАНАЛЫ ПРОДАЖ",
      "ch.sub": "Дистрибуция Yoshlik-Yu охватывает все ключевые каналы рынка.",
      "ch1.p": "Аптечный канал — поставки в аптечные сети и точки.",
      "ch2.p": "Контракты с крупными сетями страны.",
      "ch3.h3": "Розница",
      "ch3.p": "Tr-trade — покрытие розничных торговых точек по всей стране.",
      "ch4.p": "ON-TRADE - кофейни, рестораны и кафе, гостиницы и фуд-корты",
      "ch5.h3": "Опт",
      "ch5.p": "Крупнооптовые поставки суб-дистрибьюторам и партнёрам.",
      "ch6.p":
        "Фитнесс центры и спортивные клубы, магазины здорового и спортивного питания.",
      "ch7.p": "Дистрибуция через маркетплейсы и интернет-магазины.",
      "ch8.h3": "Ваш канал?",
      "ch8.p": "Подберём схему дистрибуции под ваш продукт.",
      "ch8.cta": "Обсудить",

      "proc.eyebrow": "Партнёрство",
      "proc.h2": "Как мы работаем",
      "proc.sub":
        "Понятный процесс запуска дистрибуции — от первого контакта до ежемесячных отчётов.",
      "proc1.h3": "Знакомство и аудит",
      "proc1.time": "1–2 недели",
      "proc1.p":
        "Изучаем ваш продукт, текущее присутствие на рынке, делаем расчет ценовой модели, определяем конкурентов, проводим аудит и делаем сравнение.",
      "proc2.h3": "ПЛАНИРОВАНИЕ",
      "proc2.time": "1 неделя",
      "proc2.p":
        "Запрашиваем образцы, подбираем каналы продаж, предоставляем предложение своим партнёрам.",
      "proc3.h3": "Запуск",
      "proc3.time": "2–4 недели",
      "proc3.p":
        "Согласовываем ассортимент, планы, цели, стратегию запуска, размещаем заказ, проводим обучение для торговой команды, после поступления товара на склад начинаем активные продажи.",
      "proc4.h3": "Развитие",
      "proc4.time": "постоянно",
      "proc4.p":
        "Ежемесячная отчётность, совместный маркетинг, расширение покрытия и оптимизация ассортимента по данным продаж.",

      "brands.eyebrow": "Портфель",
      "brands.h2": "20 брендов",
      "brands.sub":
        "FOOD и NON-FOOD бренды, дистрибьюцией которых мы занимаемся на рынке Узбекистана.",

      "team.eyebrow": "Команда",
      "team.h2": "Руководство компании",
      "role.ceo": "Генеральный директор",
      "role.cco": "Коммерческий директор",
      "role.production": "Производство и строительство",
      "role.sales": "Руководитель отдела продаж",
      "role.nonfood": "Менеджер NON FOOD направления",
      "role.food": "Менеджер FOOD направления",
      "role.key": "Менеджер по работе с ключевыми клиентами",

      "faq.eyebrow": "Вопросы и ответы",
      "faq.h2": "Частые вопросы партнёров",
      "faq1.q": "С какими брендами и категориями вы работаете?",
      "faq1.a":
        "В портфеле 19 брендов в категориях Food и Non-Food: спортивное питание, снеки, БАДы, детское питание, косметика и бытовая химия. Открыты к рассмотрению новых брендов.",
      "faq2.q": "Работаете ли вы по всей территории Узбекистана?",
      "faq2.a":
        "Да. Прямое покрытие — 2000+ торговых точек, через партнёрскую сеть — 6000+ точек во всех регионах страны: Ташкент, Самарканд, Бухара, Фергана, Андижан, Наманган, Нукус, Термез и другие.",
      "faq3.q": "Как стать вашим партнёром?",
      "faq3.a":
        "Отправьте заявку через форму контактов или напишите на почту — в течение 3 рабочих дней мы свяжемся, проведём первичный аудит и предложим план дистрибуции под ваш продукт.",
      "faq4.q": "Какие условия и форматы сотрудничества?",
      "faq4.a":
        "Работаем как по модели эксклюзивной дистрибуции, так и по модели импорт-партнёра. Условия — выкуп товара, отсрочка, консигнация — обсуждаются индивидуально под объём и категорию.",
      "faq5.q": "Как выглядит отчётность для партнёра?",
      "faq5.a":
        "Ежемесячно предоставляем отчёт по продажам, остаткам, ротации SKU и покрытию в разрезе канала и региона. Доступ к дашборду — в режиме реального времени.",
      "faq6.q": "Есть ли у вас собственная логистика?",
      "faq6.a":
        "Да. 2070 м² собственных складов в Ташкенте, автопарк из 24 единиц, включая рефрижераторы. Это позволяет контролировать сроки, температурный режим и сохранность товара.",

      "contact.eyebrow": "Сотрудничество",
      "contact.h2": "Стать партнёром.",
      "contact.p": "Свяжитесь с нами - обсудим возможности сотрудничества.",
      "contact.email_btn": "Написать на почту",
      "contact.addr_h": "Адрес",
      "contact.phone_h": "Телефон",
      "contact.email_h": "Почта",
      "footer.copy": "© Yoshlik-Yu 2026 · Дистрибуция в Узбекистане",

      "contact.addr1": "г. Ташкент,<br />ул. Чиланзарская, 83",
      "contact.addr2": "г. Ташкент,<br />ул. Олтин Топган, 25А",

      "member1.name": "Юсупов Анвар Ганиевич",
      "member2.name": "Юсупов Дамир Анварович",
      "member3.name": "Бурханов Зокир Мухаммадиевич",
      "member4.name": "Сагайдак Александр Станиславович",
      "member5.name": "Мавланкулов Джавохир",
      "member6.name": "Гафуров Анвар",
      "member7.name": "Ким Владимир",
    },

    uz: {
      "nav.advantages": "Afzalliklar",
      "nav.about": "Kompaniya haqida",
      "nav.channels": "Sotish kanallari",
      "nav.brands": "Brendlar",
      "nav.team": "Jamoa",
      "nav.faq": "FAQ",
      "nav.contact": "Bog'lanish",

      "hero.eyebrow": "Distribyutorlik kompaniyasi · 1991 yildan",
      "hero.title":
        "Distribyutsiya<br /><span>butun O'zbekiston bo'ylab</span>",
      "hero.lead": "YOSHLIK-YU — to'liq tsiklli sifatli distribyutsiya",
      "hero.cta1": "Sotish kanallari",
      "hero.cta2": "Hamkor bo'lish",
      "hero.cta3": "Taqdimotni yuklab olish",
      "hero.stat1": "yil bozorda",
      "hero.stat2": "brend",
      "hero.stat3": "savdo nuqtasi",
      "hero.stat4": "xodim",

      "numbers.h2": "RAQAMLARDA",
      "numbers.kpi1": "AKB — hamkorlar orqali qamrov",
      "numbers.kpi2": "AKB — to'g'ridan-to'g'ri qamrov",
      "numbers.kpi3": "o'z omborlari",
      "numbers.kpi4": "o'z ofislari",
      "numbers.kpi5": "SKU nomenklatura",
      "numbers.kpi6": "avtomobil parki birligi",
      "numbers.kpi7": "diler",
      "numbers.kpi8": "xodim",

      "adv.eyebrow": "Nima uchun biz",
      "adv.h2": '<span class="alt-nowrap">Yoshlik-Yu</span> afzalliklari',
      "adv.sub": "Bizga ishonishlarining sabablari.",
      "adv1.h3": "Bozorda 35 yil",
      "adv1.p":
        "1991 yildan ishlayapmiz. O'zbekiston bozorini chuqur tushunish va soha asosiy ishtirokchilari bilan mustahkam aloqalar.",
      "adv2.h3": "O'z infratuzilmasi",
      "adv2.p":
        "24 ta transport birligi, 2070 m² omborlar va 490 m² ofislar — qabul qilishdan javon yetkazib berishgacha har bir bosqichni nazorat qilamiz.",
      "adv3.h3": "Sotish kanallari",
      "adv3.p":
        "Key Account, An'anaviy chakana savdo, Farm, HoReCa, Ulgurji, Fitness va Wellness, B2B, E-commerce — barcha savdo kanallarini qamrab olamiz.",
      "adv4.h3": "Mutaxassislar jamoasi",
      "adv4.p":
        "90+ xodim turli sohalar, kanallar va bozor o'ziga xosliklarini qamrab oladi: menejerlar, supervayzerlar, savdo vakillari, kategoriya menejerlari, analitiklar, marketplace va brend menejerlari.",
      "adv5.h3": "Sifat nazorati",
      "adv5.p":
        "Sovutgichli yetkazib berish mashinalari, harorat rejimli saqlash omborlari, FIFO va FEFO — ombor hisobi, savdo nuqtalari va hamkorlik tarmoqlarining tartibga solingan auditi.",
      "adv6.h3": "Shaffof hisobot",
      "adv6.p":
        "SKU, mintaqa va kanal bo'yicha sotish, qoldiqlar va qamrov bo'yicha oylik hisobotlar — hamkor haqiqiy manzarani ko'radi.",

      "about.eyebrow": "Kompaniya haqida",
      "about.h2": "1991 yildan beri ishonchli distribyutsiya",
      "about.p1":
        "Biz — O'zbekiston bozorida brendlarni ilgari surish va rivojlantirishga ixtisoslashgan zamonaviy distribyutorlik kompaniyasimiz. Faoliyatimiz distribyutsiyaning to'liq tsiklini qamrab oladi: import va logistikadan tortib, asosiy sotuv kanallarida mahsulotni samarali tarzda taqdim etishgacha.",
      "about.p2":
        "Kompaniya xalqaro ishlab chiqaruvchilar bilan hamkorlik qiladi, rivojlangan hamkorlik tarmog'i, professional sotuv jamoasi va zamonaviy tahlil vositalari orqali bozorni sifatli qamrab oladi. Biz chakana tarmoqlar, dorixona tarmoqlari, an'anaviy chakana savdo, HoReCa, fitnes markazlari va e-commerce kanallari bilan ishlaymiz.",
      "about.bodyhead": "Asosiy faoliyat yo'nalishlari",
      "about.li1": "FMCG mahsulotlarini distribyutsiya qilish",
      "about.li2": "Brendlarni ilgari surish va savdoni rivojlantirish",
      "about.li3": "Savdo marketingi va merchandayzing",
      "about.li4": "Logistika va ombor infratuzilmasi",
      "about.li5": "Bozorda yangi brendlarni ishga tushirish va miqyoslash",
      "about.li6":
        "Mijozlar va yetkazib beruvchilar bilan uzoq muddatli hamkorlik munosabatlarini qurish",
      "about.goal":
        "Bizning maqsadimiz — ishlab chiqaruvchilar uchun ishonchli strategik hamkor bo'lish va brendlarning o'sishi, tanilishi va uzoq muddatli muvaffaqiyatini ta'minlovchi samarali sotuv tizimini yaratish.",

      "tl.1991": "Qurilish kompaniyasi tashkil etildi",
      "tl.2017": "Distribyutsiya ishga tushirildi",
      "tl.2019": "Non-Food kengayishi",
      "tl.2020": "Kosmetika va maishiy kimyo",
      "tl.2022": "Sport ovqatlanish va sneklar",
      "tl.2023": "Food kategoriyasi",
      "tl.2024": "Ichimliklar",
      "tl.2025": "Vitaminlar",
      "tl.fdp": "Ikkinchi divizion va yo'nalish yaratildi",

      "ch.eyebrow": "DISTRIBYUTSIYA YO'NALISHLARI",
      "ch.h2": "BARCHA SOTISH KANALLARI",
      "ch.sub":
        "Yoshlik-Yu distribyutsiyasi bozorning barcha asosiy kanallarini qamrab oladi.",
      "ch1.p":
        "Dorixona kanali — dorixona tarmoqlari va nuqtalariga yetkazib berish.",
      "ch2.p": "Mamlakat yirik tarmoqlari bilan shartnomalar.",
      "ch3.h3": "Chakana savdo",
      "ch3.p":
        "Tr-trade — butun mamlakat bo'ylab chakana savdo nuqtalarini qamrab olish.",
      "ch4.p":
        "ON-TRADE — qahvaxonalar, restoranlar va kafelar, mehmonxonalar va food-courtlar",
      "ch5.h3": "Ulgurji",
      "ch5.p":
        "Subdistributorlar va hamkorlarga yirik ulgurji yetkazib berish.",
      "ch6.p":
        "Fitnes markazlari va sport klublari, sog'lom va sport ovqatlanish do'konlari.",
      "ch7.p": "Marketpleyslar va internet-do'konlar orqali distribyutsiya.",
      "ch8.h3": "Sizning kanalingiz?",
      "ch8.p": "Mahsulotingizga mos distribyutsiya sxemasini tanlaymiz.",
      "ch8.cta": "Muhokama qilish",

      "proc.eyebrow": "Hamkorlik",
      "proc.h2": "Biz qanday ishlaymiz",
      "proc.sub":
        "Distribyutsiyani ishga tushirishning tushunarli jarayoni — birinchi aloqadan oylik hisobotlargacha.",
      "proc1.h3": "Tanishish va audit",
      "proc1.time": "1–2 hafta",
      "proc1.p":
        "Mahsulotingizni, bozordagi joriy mavjudligingizni o'rganamiz, narx modelini hisoblaymiz, raqobatchilarni aniqlaymiz, audit o'tkazamiz va taqqoslash qilamiz.",
      "proc2.h3": "Rejalashtirish",
      "proc2.time": "1 hafta",
      "proc2.p":
        "Namunalarni so'raymiz, sotish kanallarini tanlaymiz, hamkorlarimizga taklif taqdim etamiz.",
      "proc3.h3": "Ishga tushirish",
      "proc3.time": "2–4 hafta",
      "proc3.p":
        "Assortiment, rejalar, maqsadlar, ishga tushirish strategiyasini muvofiqlashtiramiz, buyurtma beramiz, savdo jamoasi uchun o'quv o'tkazamiz, tovar omborga kelgandan so'ng faol sotuvni boshlaymiz.",
      "proc4.h3": "Rivojlanish",
      "proc4.time": "doimiy",
      "proc4.p":
        "Oylik hisobot, qo'shma marketing, qamrovni kengaytirish va sotuv ma'lumotlari asosida assortimentni optimallash.",

      "brands.eyebrow": "Portfel",
      "brands.h2": "20 brend",
      "brands.sub":
        "O'zbekiston bozorida biz distribyutsiya qiladigan FOOD va NON-FOOD brendlar.",

      "team.eyebrow": "Jamoa",
      "team.h2": "Kompaniya rahbariyati",
      "role.ceo": "Bosh direktor",
      "role.cco": "Tijorat direktori",
      "role.production": "Ishlab chiqarish va qurilish",
      "role.sales": "Sotuv bo'limi rahbari",
      "role.nonfood": "NON FOOD yo'nalishi menejeri",
      "role.food": "FOOD yo'nalishi menejeri",
      "role.key": "Asosiy mijozlar bilan ishlash menejeri",

      "faq.eyebrow": "Savol va javoblar",
      "faq.h2": "Hamkorlarning tez-tez beriladigan savollari",
      "faq1.q": "Qanday brendlar va kategoriyalar bilan ishlaysiz?",
      "faq1.a":
        "Portfelda Food va Non-Food kategoriyalarida 19 brend bor: sport ovqatlanish, sneklar, BADlar, bolalar ovqatlanishi, kosmetika va maishiy kimyo. Yangi brendlarni ko'rib chiqishga tayyormiz.",
      "faq2.q": "Butun O'zbekiston hududida ishlaysizmi?",
      "faq2.a":
        "Ha. To'g'ridan-to'g'ri qamrov — 2000+ savdo nuqtasi, hamkorlik tarmog'i orqali — mamlakatning barcha hududlarida 6000+ nuqta: Toshkent, Samarqand, Buxoro, Farg'ona, Andijon, Namangan, Nukus, Termiz va boshqalar.",
      "faq3.q": "Hamkoringiz bo'lish uchun nima qilish kerak?",
      "faq3.a":
        "Aloqa formasi orqali ariza yuboring yoki emailga yozing — 3 ish kuni ichida siz bilan bog'lanamiz, dastlabki auditni o'tkazamiz va mahsulotingizga mos distribyutsiya rejasini taklif qilamiz.",
      "faq4.q": "Hamkorlikning qanday shartlari va formatlari mavjud?",
      "faq4.a":
        "Biz ham eksklyuziv distribyutsiya, ham import-hamkor modeli bo'yicha ishlaymiz. Shartlar — tovarni sotib olish, muhlat, konsignatsiya — hajm va kategoriyaga qarab individual muhokama qilinadi.",
      "faq5.q": "Hamkor uchun hisobotlar qanday ko'rinishda bo'ladi?",
      "faq5.a":
        "Har oyda sotish, qoldiqlar, SKU aylanishi va kanal va mintaqa bo'yicha qamrov bo'yicha hisobot taqdim etamiz. Dashboardga kirish — real vaqt rejimida.",
      "faq6.q": "O'z logistikangiz bormi?",
      "faq6.a":
        "Ha. Toshkentda 2070 m² o'z omborlarimiz, sovutgichli mashinalarni o'z ichiga olgan 24 birlikli avtomobil parki. Bu muddatlar, harorat rejimi va tovar saqlanishini nazorat qilish imkonini beradi.",

      "contact.eyebrow": "Hamkorlik",
      "contact.h2": "Hamkor bo'lish.",
      "contact.p":
        "Biz bilan bog'laning — hamkorlik imkoniyatlarini muhokama qilamiz.",
      "contact.email_btn": "Emailga yozish",
      "contact.addr_h": "Manzil",
      "contact.phone_h": "Telefon",
      "contact.email_h": "Email",
      "footer.copy": "© Yoshlik-Yu 2026 · O'zbekistonda distribyutsiya",

      "contact.addr1": "Toshkent sh.,<br />Chilonzor ko'chasi, 83",
      "contact.addr2": "Toshkent sh.,<br />Oltin Topgan ko'chasi, 25A",

      "member1.name": "Yusupov Anvar G'aniyevich",
      "member2.name": "Yusupov Damir Anvarovich",
      "member3.name": "Burxanov Zokir Muhammadiyevich",
      "member4.name": "Sagaydak Aleksandr Stanislavovich",
      "member5.name": "Mavlanqulov Javohir",
      "member6.name": "G'afurov Anvar",
      "member7.name": "Kim Vladimir",
    },

    en: {
      "nav.advantages": "Advantages",
      "nav.about": "About Us",
      "nav.channels": "Sales Channels",
      "nav.brands": "Brands",
      "nav.team": "Team",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "hero.eyebrow": "Distribution Company · Since 1991",
      "hero.title": "Distribution<br /><span>across Uzbekistan</span>",
      "hero.lead": "YOSHLIK-YU — Full-cycle quality distribution",
      "hero.cta1": "Sales Channels",
      "hero.cta2": "Become a Partner",
      "hero.cta3": "Download Presentation",
      "hero.stat1": "years in market",
      "hero.stat2": "brands",
      "hero.stat3": "trade points",
      "hero.stat4": "employees",

      "numbers.h2": "IN NUMBERS",
      "numbers.kpi1": "Active customer base — partner coverage",
      "numbers.kpi2": "Active customer base — direct coverage",
      "numbers.kpi3": "own warehouses",
      "numbers.kpi4": "own offices",
      "numbers.kpi5": "SKU positions",
      "numbers.kpi6": "fleet vehicles",
      "numbers.kpi7": "dealers",
      "numbers.kpi8": "employees",

      "adv.eyebrow": "Why Us",
      "adv.h2": '<span class="alt-nowrap">Yoshlik-Yu</span> Advantages',
      "adv.sub": "Reasons why leading brands trust us.",
      "adv1.h3": "35 years in market",
      "adv1.p":
        "Operating since 1991. Deep understanding of the Uzbekistan market and strong ties with key industry players.",
      "adv2.h3": "Own Infrastructure",
      "adv2.p":
        "24-vehicle fleet, 2,070 m² warehouses and 490 m² offices — we control every step from intake to shelf delivery.",
      "adv3.h3": "Sales Channels",
      "adv3.p":
        "Key Account, Traditional retail, Farm, HoReCa, Wholesale, Fitness & Wellness, B2B, E-commerce — covering all sales channels.",
      "adv4.h3": "Expert Team",
      "adv4.p":
        "90+ employees covering various fields, channels and market specifics: managers, supervisors, sales representatives, category managers, analysts, marketplace and brand managers.",
      "adv5.h3": "Quality Control",
      "adv5.p":
        "Refrigerated delivery vehicles, temperature-controlled warehouses, FIFO and FEFO inventory accounting, regulated audits of trade points and partner networks.",
      "adv6.h3": "Transparent Reporting",
      "adv6.p":
        "Monthly reports on sales, stock levels and coverage by SKU, region and channel — partners see the real picture.",

      "about.eyebrow": "About the Company",
      "about.h2": "Distribution trusted since 1991",
      "about.p1":
        "We are a modern distribution company specializing in promoting and developing brands in the Uzbekistan market. Our activities cover the full distribution cycle: from import and logistics to sales, marketing and building an effective product presence in key sales channels.",
      "about.p2":
        "The company works with international manufacturers, providing quality market coverage through an extensive partner network, a professional sales team and modern analytics tools. We work with retail chains, pharmacy networks, traditional retail, HoReCa, fitness centers and e-commerce channels.",
      "about.bodyhead": "Our Main Areas of Work",
      "about.li1": "FMCG product distribution",
      "about.li2": "Brand promotion and sales development",
      "about.li3": "Trade marketing and merchandising",
      "about.li4": "Logistics and warehouse infrastructure",
      "about.li5": "Launching and scaling new brands in the market",
      "about.li6": "Building long-term partnerships with clients and suppliers",
      "about.goal":
        "Our goal is to be a reliable strategic partner for manufacturers and to create an effective sales system that ensures the growth, recognition and long-term success of brands.",

      "tl.1991": "Construction company founded",
      "tl.2017": "Distribution launched",
      "tl.2019": "Non-Food expansion",
      "tl.2020": "Cosmetics and household chemicals",
      "tl.2022": "Sports nutrition and snacks",
      "tl.2023": "Food category",
      "tl.2024": "Beverages",
      "tl.2025": "Vitamins",
      "tl.fdp": "Second division and direction created",

      "ch.eyebrow": "DISTRIBUTION DIRECTIONS",
      "ch.h2": "ALL SALES CHANNELS",
      "ch.sub": "Yoshlik-Yu distribution covers all key market channels.",
      "ch1.p": "Pharmacy channel — deliveries to pharmacy chains and outlets.",
      "ch2.p": "Contracts with major retail chains nationwide.",
      "ch3.h3": "Retail",
      "ch3.p": "Tr-trade — coverage of retail trade points across the country.",
      "ch4.p":
        "ON-TRADE — coffee shops, restaurants and cafes, hotels and food courts",
      "ch5.h3": "Wholesale",
      "ch5.p": "Large wholesale deliveries to sub-distributors and partners.",
      "ch6.p":
        "Fitness centers and sports clubs, healthy and sports nutrition stores.",
      "ch7.p": "Distribution through marketplaces and online stores.",
      "ch8.h3": "Your Channel?",
      "ch8.p": "We will select a distribution scheme for your product.",
      "ch8.cta": "Discuss",

      "proc.eyebrow": "Partnership",
      "proc.h2": "How We Work",
      "proc.sub":
        "A clear distribution launch process — from first contact to monthly reports.",
      "proc1.h3": "Introduction and Audit",
      "proc1.time": "1–2 weeks",
      "proc1.p":
        "We study your product, current market presence, calculate the pricing model, identify competitors, conduct an audit and make a comparison.",
      "proc2.h3": "Planning",
      "proc2.time": "1 week",
      "proc2.p":
        "We request samples, select sales channels, and present a proposal to our partners.",
      "proc3.h3": "Launch",
      "proc3.time": "2–4 weeks",
      "proc3.p":
        "We coordinate the assortment, plans, goals and launch strategy, place the order, conduct training for the sales team, and begin active sales once goods arrive at the warehouse.",
      "proc4.h3": "Development",
      "proc4.time": "ongoing",
      "proc4.p":
        "Monthly reporting, joint marketing, coverage expansion and assortment optimization based on sales data.",

      "brands.eyebrow": "Portfolio",
      "brands.h2": "20 Brands",
      "brands.sub":
        "FOOD and NON-FOOD brands we distribute in the Uzbekistan market.",

      "team.eyebrow": "Team",
      "team.h2": "Company Management",
      "role.ceo": "CEO",
      "role.cco": "Commercial Director",
      "role.production": "Production and Construction",
      "role.sales": "Head of Sales",
      "role.nonfood": "NON FOOD Category Manager",
      "role.food": "FOOD Category Manager",
      "role.key": "Key Account Manager",

      "faq.eyebrow": "Q&A",
      "faq.h2": "Partner FAQs",
      "faq1.q": "What brands and categories do you work with?",
      "faq1.a":
        "The portfolio has 19 brands in Food and Non-Food categories: sports nutrition, snacks, dietary supplements, baby food, cosmetics and household chemicals. Open to considering new brands.",
      "faq2.q": "Do you operate across all of Uzbekistan?",
      "faq2.a":
        "Yes. Direct coverage — 2,000+ trade points, through the partner network — 6,000+ points in all regions: Tashkent, Samarkand, Bukhara, Fergana, Andijan, Namangan, Nukus, Termez and others.",
      "faq3.q": "How do I become your partner?",
      "faq3.a":
        "Submit a request through the contact form or write to us by email — within 3 working days we will get in touch, conduct an initial audit and offer a distribution plan for your product.",
      "faq4.q": "What are the terms and formats of cooperation?",
      "faq4.a":
        "We work both on the exclusive distribution model and the import-partner model. Terms — product buyout, deferred payment, consignment — are discussed individually based on volume and category.",
      "faq5.q": "What does reporting look like for a partner?",
      "faq5.a":
        "We provide monthly reports on sales, stock levels, SKU rotation and coverage by channel and region. Dashboard access is available in real time.",
      "faq6.q": "Do you have your own logistics?",
      "faq6.a":
        "Yes. 2,070 m² of own warehouses in Tashkent, a fleet of 24 vehicles including refrigerators. This allows us to control delivery times, temperature conditions and product preservation.",

      "contact.eyebrow": "Cooperation",
      "contact.h2": "Become a Partner.",
      "contact.p": "Contact us — let's discuss partnership opportunities.",
      "contact.email_btn": "Send an Email",
      "contact.addr_h": "Address",
      "contact.phone_h": "Phone",
      "contact.email_h": "Email",
      "footer.copy": "© Yoshlik-Yu 2026 · Distribution in Uzbekistan",

      "contact.addr1": "Tashkent,<br />Chilanzarskaya St., 83",
      "contact.addr2": "Tashkent,<br />Oltin Topgan St., 25A",

      "member1.name": "Anvar Ganievich Yusupov",
      "member2.name": "Damir Anvarovich Yusupov",
      "member3.name": "Zokir Muhammadievich Burkhanov",
      "member4.name": "Alexander Stanislavovich Sagaydak",
      "member5.name": "Javohir Mavlankulov",
      "member6.name": "Anvar Gafurov",
      "member7.name": "Vladimir Kim",
    },
  };

  var LANGS = ["ru", "uz", "en"];
  var currentLang = localStorage.getItem("yyLang") || "ru";

  function applyLang(lang) {
    if (!T[lang]) return;
    currentLang = lang;
    localStorage.setItem("yyLang", lang);
    document.documentElement.lang =
      lang === "uz" ? "uz" : lang === "en" ? "en" : "ru";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    document.querySelectorAll(".alt-lang__btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    var pptLink = document.getElementById("alt-ppt-link");
    if (pptLink) {
      pptLink.href =
        lang === "en"
          ? "assets/files/presentation2.pdf"
          : "assets/files/presentation.pdf";
    }
  }

  document.querySelectorAll(".alt-lang__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(currentLang);
})();
