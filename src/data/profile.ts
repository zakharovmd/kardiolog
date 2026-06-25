const messageText = 'Здравствуйте, хотел(а) бы записаться на консультацию';
const encodedMessage = encodeURIComponent(messageText);

export const labels = {
  onlineBooking: 'Онлайн-запись доступна',
  experience: 'Стаж',
  appointment: 'Прием',
  quickActions: 'Быстрые действия',
  bookOnline: 'Записаться онлайн',
  callClinic: 'Позвонить в клинику',
  close: 'Закрыть',
  addresses: 'Адреса приема',
  clinicProfile: 'Профиль на сайте клиники',
  social: 'Соцсети',
  telegram: 'Telegram @dr_sivokha',
  whatsapp: 'WhatsApp',
  helpEyebrow: 'Направления',
  helpTitle: 'С чем можно обратиться',
  approachEyebrow: 'Подход',
  approachTitle: 'Спокойная кардиология без лишнего стресса',
  approachText: 'Прием строится вокруг понятного плана: разбор жалоб, анализ исследований, объяснение рисков и подбор терапии, которую пациент сможет соблюдать в обычной жизни.',
  educationEyebrow: 'Образование',
  educationTitle: 'Профессиональная база',
  reviewEyebrow: 'Отзывы',
  reviewTitle: 'Пациенты отмечают внимательность',
  reviewRating: 'Оценка 5 из 5',
  reviewText: 'В отзывах чаще всего выделяют подробные объяснения, аккуратный осмотр и понятные рекомендации после приема.',
  reviewLink: 'Отзывы на ПроДокторов',
  contactsEyebrow: 'Контакты',
  contactsTitle: 'Где принимает',
};

export const doctor = {
  name: 'Дарья Павловна Сивоха',
  title: 'Кардиолог, липидолог',
  subtitle: 'Прием взрослых пациентов в клинике «Скандинавия», Санкт-Петербург',
  experience: '10 лет',
  price: 'от 5 500 ₽',
  phone: '+7 (812) 600-77-77',
  bookingUrl: 'https://booking.avaclinic.ru/spb/doctor/%D0%A1%D0%B8%D0%B2%D0%BE%D1%85%D0%B0%20%D0%94%D0%B0%D1%80%D1%8C%D1%8F%20%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0?source=https://www.avaclinic.ru/',
  telegramUrl: `https://t.me/dr_sivokha?text=${encodedMessage}`,
  whatsappUrl: `https://wa.me/79609960098?text=${encodedMessage}`,
  reviewsUrl: 'https://prodoctorov.ru/spb/vrach/534893-sivoha/',
  primaryClinicMapUrl: 'https://yandex.ru/maps/?text=191014%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%9B%D0%B8%D1%82%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80.%2C%2055%D0%90',
  sourceUrl: 'https://www.avaclinic.ru/doctors/sivokha-darya-pavlovna/',
  photo: 'https://www.avaclinic.ru/upload/resize_cache/iblock/a41/57babo1zd1bbnzfik7vhafcg0fuhd45t/450_585_2/Sivoha_Darya_Pavlovna.jpg',
  photoAlt: 'Сивоха Дарья Павловна',
};

export const callCenter = {
  title: 'Позвонить в клинику для записи через колл-центр',
  phone: '+7 (812) 600-77-77',
  scheduleTitle: 'График работы колл-центра:',
  schedule: [
    'понедельник — суббота: с 8:00 до 22:00',
    'воскресенье: с 9:00 до 19:00',
  ],
};

export const helpItems = [
  'Нарушение ритма сердца',
  'Боль и дискомфорт в груди',
  'Повышенное давление',
  'Одышка и отеки',
  'Снижение толерантности к нагрузкам',
  'Повышенный холестерин и другие изменения в липидограмме',
  'Для подбора и коррекции терапии',
  'Профилактический осмотр',
  'Долгосрочное ведение пациентов после хирургических операций на сердце и сосудах',
];

export const educationItems = [
  'Омский государственный медицинский университет — лечебное дело, 2010-2016 г.',
  'Интернатура по специальности «Терапия» на базе Омского государственного медицинского университета, 2016-2017 г.',
  'Профессиональная переподготовка по «Кардиологии», РНИМУ им. Н. И. Пирогова, 2017 г.',
  'Профессиональная переподготовка по «Функциональной диагностике», СЗГМУ им. И. И. Мечникова, 2023 г.',
  'Цикл повышения квалификации по специальности «Липидология», 2025 г.',
];

export const featureItems = [
  'Акцент на доказательной медицине',
  'Персонализированный подход',
  'Совместное принятие решений',
  'Современные методы диагностики и лечения',
  'Работа с психологическими аспектами в лечении кардиологических заболеваний',
];

export const locations = [
  {
    name: 'Отделение «Литейное»',
    address: '191014, Санкт-Петербург, Литейный пр., 55А',
  },
  {
    name: 'Отделение «Василеостровское»',
    address: '199397, Санкт-Петербург, ул. Беринга, 27',
  },
  {
    name: 'Отделение «Аптекарское»',
    address: '197022, Санкт-Петербург, Аптекарский пр-кт, 16Д',
  },
];
