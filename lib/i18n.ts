export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** English is served at "/", every other locale at "/<locale>/". */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}/`);

const en = {
  meta: {
    title: "Northline Health — Calm, modern outpatient care",
    description:
      "Northline Health is a modern outpatient clinic with unhurried visits, digital follow-up and doctors who explain things clearly. Book your visit online.",
  },
  nav: { services: "Services", doctors: "Doctors", journey: "Patient journey", book: "Book a visit" },
  cta: "Book a visit",
  hero: {
    eyebrow: "Outpatient clinic · Digital-first care",
    title: "Healthcare that",
    titleEmph: "takes its time.",
    lead: "Longer appointments, clear answers and a calm space — backed by digital follow-up, so your care continues long after you leave the clinic.",
    primary: "Book a visit",
    secondary: "Explore services",
    trust: [
      { value: "40 min", label: "average visit length" },
      { value: "< 48 h", label: "to first available slot" },
      { value: "4.9 / 5", label: "patient satisfaction" },
    ],
    badge: "Next available today",
  },
  services: {
    eyebrow: "Services",
    title: "Everyday care, thoughtfully organised",
    lead: "From annual check-ups to ongoing conditions, one coordinated team looks after the whole picture.",
    items: [
      { title: "Primary care", text: "Check-ups, vaccinations, preventive screening and a doctor who knows your history." },
      { title: "Women’s health", text: "Gynaecology, contraception, pregnancy planning and menopause support in one place." },
      { title: "Cardiology", text: "Blood pressure, ECG and risk assessment with clear, practical heart-health plans." },
      { title: "Mental wellbeing", text: "Short-term therapy and psychiatry consultations in a private, supportive setting." },
      { title: "Diagnostics & lab", text: "On-site blood tests and ultrasound, with results delivered securely to your phone." },
      { title: "Online consultations", text: "Video visits for follow-ups, prescriptions and quick questions — from wherever you are." },
    ],
    link: "Learn more",
  },
  doctors: {
    eyebrow: "Our doctors",
    title: "Clinicians who listen first",
    lead: "Experienced, multilingual and trained to explain — not rush.",
    next: "Next slot",
    people: [
      { name: "Dr. Mira Lindqvist", role: "Family medicine", langs: "EN · SV · DE", slot: "Today, 16:30", initials: "ML" },
      { name: "Dr. Daniel Okoye", role: "Cardiology", langs: "EN · FR", slot: "Tomorrow, 09:15", initials: "DO" },
      { name: "Dr. Sofia Rinaldi", role: "Women’s health", langs: "EN · IT · ES", slot: "Today, 18:00", initials: "SR" },
      { name: "Dr. Aron Weiss", role: "Psychiatry", langs: "EN · DE · HE", slot: "Thu, 11:00", initials: "AW" },
    ],
  },
  journey: {
    eyebrow: "Patient journey",
    title: "Simple from the first click to the follow-up",
    lead: "We designed every step to remove waiting, paperwork and uncertainty.",
    steps: [
      { n: "1", title: "Book online", text: "Choose a doctor and a time in under two minutes. No phone queues." },
      { n: "2", title: "Prepare", text: "Fill in a short secure questionnaire so your doctor arrives informed." },
      { n: "3", title: "Visit", text: "An unhurried 30–40 minute appointment with time for every question." },
      { n: "4", title: "Follow up", text: "A clear written plan, lab results and messaging with your care team." },
    ],
  },
  booking: {
    eyebrow: "Book a visit",
    title: "Pick a time that suits your day",
    lead: "Choose the type of visit and a convenient slot. We confirm by email within one working hour.",
    type: "Type of visit",
    types: ["Primary care", "Women’s health", "Cardiology", "Mental wellbeing", "Online consultation"],
    day: "Day",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    time: "Time",
    times: ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"],
    submit: "Request this visit",
    note: "This is a demo form — it opens your email app with the request prepared.",
    email: "visit@northline-health.example",
    hours: "Open Monday–Saturday, 8:00–19:00",
  },
  footer: {
    tagline: "Calm, modern outpatient care.",
    demo: "Demo website for a fictional clinic. It does not provide medical advice. In an emergency, call your local emergency number.",
    rights: "© 2026 Northline Health",
    language: "Language",
  },
};

export type Dict = typeof en;

const uk: Dict = {
  meta: {
    title: "Northline Health — Спокійна сучасна амбулаторна допомога",
    description:
      "Northline Health — сучасна амбулаторна клініка з неквапливими прийомами, цифровим супроводом і лікарями, які зрозуміло все пояснюють. Запишіться онлайн.",
  },
  nav: { services: "Послуги", doctors: "Лікарі", journey: "Шлях пацієнта", book: "Запис на візит" },
  cta: "Записатися",
  hero: {
    eyebrow: "Амбулаторна клініка · Цифровий супровід",
    title: "Медицина, яка",
    titleEmph: "не поспішає.",
    lead: "Довші прийоми, зрозумілі відповіді та спокійний простір — із цифровим супроводом, щоб турбота про вас тривала й після візиту.",
    primary: "Записатися на візит",
    secondary: "Переглянути послуги",
    trust: [
      { value: "40 хв", label: "середня тривалість візиту" },
      { value: "< 48 год", label: "до першого вільного слоту" },
      { value: "4,9 / 5", label: "задоволеність пацієнтів" },
    ],
    badge: "Найближчий вільний час — сьогодні",
  },
  services: {
    eyebrow: "Послуги",
    title: "Щоденна турбота — продумана до дрібниць",
    lead: "Від щорічних оглядів до хронічних станів: одна злагоджена команда дбає про цілісну картину здоров’я.",
    items: [
      { title: "Первинна допомога", text: "Огляди, вакцинація, профілактичний скринінг і лікар, який знає вашу історію." },
      { title: "Жіноче здоров’я", text: "Гінекологія, контрацепція, планування вагітності та підтримка в менопаузі — в одному місці." },
      { title: "Кардіологія", text: "Тиск, ЕКГ та оцінка ризиків із чіткими практичними планами для здоров’я серця." },
      { title: "Ментальне благополуччя", text: "Короткострокова терапія та консультації психіатра в приватній, підтримувальній атмосфері." },
      { title: "Діагностика та лабораторія", text: "Аналізи крові й УЗД на місці, результати надходять безпечно у ваш телефон." },
      { title: "Онлайн-консультації", text: "Відеовізити для повторних прийомів, рецептів і швидких питань — звідки зручно." },
    ],
    link: "Докладніше",
  },
  doctors: {
    eyebrow: "Наші лікарі",
    title: "Лікарі, які спершу слухають",
    lead: "Досвідчені, багатомовні й навчені пояснювати, а не поспішати.",
    next: "Найближчий слот",
    people: [
      { name: "Др Міра Ліндквіст", role: "Сімейна медицина", langs: "EN · SV · DE", slot: "Сьогодні, 16:30", initials: "МЛ" },
      { name: "Др Даніель Окойє", role: "Кардіологія", langs: "EN · FR", slot: "Завтра, 09:15", initials: "ДО" },
      { name: "Др Софія Рінальді", role: "Жіноче здоров’я", langs: "EN · IT · ES", slot: "Сьогодні, 18:00", initials: "СР" },
      { name: "Др Арон Вайс", role: "Психіатрія", langs: "EN · DE · HE", slot: "Чт, 11:00", initials: "АВ" },
    ],
  },
  journey: {
    eyebrow: "Шлях пацієнта",
    title: "Просто — від першого кліку до повторної консультації",
    lead: "Ми продумали кожен крок, щоб прибрати очікування, папери й невизначеність.",
    steps: [
      { n: "1", title: "Запис онлайн", text: "Оберіть лікаря й час менш ніж за дві хвилини. Без черг на телефоні." },
      { n: "2", title: "Підготовка", text: "Заповніть коротку захищену анкету, щоб лікар зустрів вас поінформованим." },
      { n: "3", title: "Візит", text: "Неквапливий прийом на 30–40 хвилин із часом на кожне питання." },
      { n: "4", title: "Супровід", text: "Чіткий письмовий план, результати аналізів і листування з командою лікарів." },
    ],
  },
  booking: {
    eyebrow: "Запис на візит",
    title: "Оберіть час, що пасує вашому дню",
    lead: "Виберіть тип візиту та зручний слот. Підтвердимо електронною поштою протягом однієї робочої години.",
    type: "Тип візиту",
    types: ["Первинна допомога", "Жіноче здоров’я", "Кардіологія", "Ментальне благополуччя", "Онлайн-консультація"],
    day: "День",
    days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    time: "Час",
    times: ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"],
    submit: "Надіслати запит",
    note: "Це демонстраційна форма — вона відкриє поштовий застосунок із підготовленим запитом.",
    email: "visit@northline-health.example",
    hours: "Працюємо з понеділка по суботу, 8:00–19:00",
  },
  footer: {
    tagline: "Спокійна сучасна амбулаторна допомога.",
    demo: "Демонстраційний сайт вигаданої клініки. Не є медичною порадою. У невідкладних випадках телефонуйте на місцевий номер екстреної допомоги.",
    rights: "© 2026 Northline Health",
    language: "Мова",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, uk };
export const getDict = (locale: Locale): Dict => dictionaries[locale];
