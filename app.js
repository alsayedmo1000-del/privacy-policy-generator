/**
 * App Privacy Policy & Terms Generator - Multi-Language Engine
 * Supports 12 Global Languages: AR, EN, FR, ES, DE, TR, PT, RU, ZH, JA, HI, IT
 */

// Supported Languages with Native Names and Flags
const SUPPORTED_LANGUAGES = [
  { code: 'ar', name: 'العربية', country: 'العالم العربي', flag: '🇸🇦', dir: 'rtl' },
  { code: 'en', name: 'English', country: 'United States / UK', flag: '🇬🇧', dir: 'ltr' },
  { code: 'fr', name: 'Français', country: 'France / Canada', flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', name: 'Español', country: 'España / Latinoamérica', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', country: 'Deutschland / Österreich', flag: '🇩🇪', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', country: 'Türkiye', flag: '🇹🇷', dir: 'ltr' },
  { code: 'pt', name: 'Português', country: 'Brasil / Portugal', flag: '🇧🇷', dir: 'ltr' },
  { code: 'ru', name: 'Русский', country: 'Россия / СНГ', flag: '🇷🇺', dir: 'ltr' },
  { code: 'zh', name: '中文 (简体)', country: '中国', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ja', name: '日本語', country: '日本', flag: '🇯🇵', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', country: 'भारत', flag: '🇮🇳', dir: 'ltr' },
  { code: 'it', name: 'Italiano', country: 'Italia', flag: '🇮🇹', dir: 'ltr' }
];

// Comprehensive Database of Third-Party SDKs and Services
const THIRD_PARTY_SERVICES = [
  // Advertising
  {
    id: 'google-admob',
    name: 'Google AdMob',
    category: 'ads',
    url: 'https://support.google.com/admob/answer/6128543?hl=en',
    desc: 'Mobile advertising & monetization network by Google',
    icon: 'fa-solid fa-rectangle-ad',
    badge: 'Ads'
  },
  {
    id: 'meta-audience-network',
    name: 'Meta Audience Network',
    category: 'ads',
    url: 'https://developers.facebook.com/docs/audience-network/policy',
    desc: 'Meta (Facebook & Instagram) mobile ads SDK',
    icon: 'fa-brands fa-facebook',
    badge: 'Ads'
  },
  {
    id: 'unity-ads',
    name: 'Unity Ads',
    category: 'ads',
    url: 'https://unity.com/legal/privacy-policy',
    desc: 'Mobile game ads and rewarded video platform',
    icon: 'fa-brands fa-unity',
    badge: 'Gaming Ads'
  },
  {
    id: 'applovin',
    name: 'AppLovin / MAX',
    category: 'ads',
    url: 'https://www.applovin.com/privacy/',
    desc: 'Ad mediation and programmatic app monetization',
    icon: 'fa-solid fa-chart-line',
    badge: 'Mediation'
  },
  {
    id: 'ironsource',
    name: 'ironSource / LevelPlay',
    category: 'ads',
    url: 'https://www.is.com/privacy-policy/',
    desc: 'Ad monetization, mediation and app scaling',
    icon: 'fa-solid fa-layer-group',
    badge: 'Mediation'
  },
  {
    id: 'startapp',
    name: 'StartApp / Start.io',
    category: 'ads',
    url: 'https://www.start.io/policy/privacy-policy/',
    desc: 'Mobile consumer insights and ad network',
    icon: 'fa-solid fa-bolt',
    badge: 'Ads'
  },
  {
    id: 'inmobi',
    name: 'InMobi',
    category: 'ads',
    url: 'https://www.inmobi.com/privacy-policy',
    desc: 'Global contextual mobile advertising platform',
    icon: 'fa-solid fa-bullhorn',
    badge: 'Ads'
  },

  // Analytics & Diagnostics
  {
    id: 'google-analytics-firebase',
    name: 'Google Analytics for Firebase',
    category: 'analytics',
    url: 'https://firebase.google.com/support/privacy',
    desc: 'Real-time event tracking and analytics by Google',
    icon: 'fa-brands fa-google',
    badge: 'Analytics'
  },
  {
    id: 'firebase-crashlytics',
    name: 'Firebase Crashlytics',
    category: 'analytics',
    url: 'https://firebase.google.com/support/privacy',
    desc: 'Real-time crash reporting and ANR diagnostics',
    icon: 'fa-solid fa-bug',
    badge: 'Crashes'
  },
  {
    id: 'sentry',
    name: 'Sentry',
    category: 'analytics',
    url: 'https://sentry.io/privacy/',
    desc: 'Application error monitoring and performance tracing',
    icon: 'fa-solid fa-shield-virus',
    badge: 'Monitoring'
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    category: 'analytics',
    url: 'https://mixpanel.com/legal/privacy-policy/',
    desc: 'Advanced user journey and product analytics',
    icon: 'fa-solid fa-chart-pie',
    badge: 'Analytics'
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    category: 'analytics',
    url: 'https://amplitude.com/privacy',
    desc: 'Digital product intelligence and user optimization',
    icon: 'fa-solid fa-chart-simple',
    badge: 'Analytics'
  },
  {
    id: 'appsflyer',
    name: 'AppsFlyer',
    category: 'analytics',
    url: 'https://www.appsflyer.com/legal/privacy-policy/',
    desc: 'Mobile attribution and marketing analytics suite',
    icon: 'fa-solid fa-bullseye',
    badge: 'Attribution'
  },
  {
    id: 'adjust',
    name: 'Adjust',
    category: 'analytics',
    url: 'https://www.adjust.com/terms/privacy-policy/',
    desc: 'Mobile measurement partner and fraud prevention',
    icon: 'fa-solid fa-compass',
    badge: 'Attribution'
  },

  // Backend, Cloud & Auth
  {
    id: 'google-play-services',
    name: 'Google Play Services',
    category: 'backend',
    url: 'https://policies.google.com/privacy',
    desc: 'Core Android libraries and APIs provided by Google',
    icon: 'fa-brands fa-google-play',
    badge: 'Core SDK'
  },
  {
    id: 'firebase-auth-db',
    name: 'Firebase (Auth & Cloud Firestore)',
    category: 'backend',
    url: 'https://firebase.google.com/support/privacy',
    desc: 'Cloud authentication, real-time database and storage',
    icon: 'fa-solid fa-fire',
    badge: 'Backend'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'backend',
    url: 'https://supabase.com/privacy',
    desc: 'Open-source Firebase alternative with PostgreSQL',
    icon: 'fa-solid fa-database',
    badge: 'Database'
  },

  // Notifications
  {
    id: 'onesignal',
    name: 'OneSignal',
    category: 'notifications',
    url: 'https://onesignal.com/privacy_policy',
    desc: 'Push notifications, SMS and in-app messaging engine',
    icon: 'fa-solid fa-bell',
    badge: 'Push'
  },
  {
    id: 'firebase-fcm',
    name: 'Firebase Cloud Messaging (FCM)',
    category: 'notifications',
    url: 'https://firebase.google.com/support/privacy',
    desc: 'Cross-platform push messaging service by Google',
    icon: 'fa-solid fa-paper-plane',
    badge: 'Push'
  },

  // Maps & Location
  {
    id: 'google-maps',
    name: 'Google Maps Platform',
    category: 'maps',
    url: 'https://policies.google.com/privacy',
    desc: 'Interactive maps, routes, geocoding and places SDK',
    icon: 'fa-solid fa-map-location-dot',
    badge: 'Maps'
  },
  {
    id: 'mapbox',
    name: 'Mapbox',
    category: 'maps',
    url: 'https://www.mapbox.com/legal/privacy',
    desc: 'Custom vector maps, navigation and location APIs',
    icon: 'fa-solid fa-map',
    badge: 'Maps'
  },

  // Payments & Subscriptions
  {
    id: 'revenuecat',
    name: 'RevenueCat',
    category: 'payment',
    url: 'https://www.revenuecat.com/privacy',
    desc: 'In-app subscriptions, purchases and receipt validation',
    icon: 'fa-solid fa-coins',
    badge: 'Subscriptions'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payment',
    url: 'https://stripe.com/privacy',
    desc: 'Global credit card processing and financial infrastructure',
    icon: 'fa-brands fa-stripe',
    badge: 'Payments'
  },
  {
    id: 'google-play-billing',
    name: 'Google Play In-App Billing',
    category: 'payment',
    url: 'https://policies.google.com/privacy',
    desc: 'Official Google Play billing and digital purchases',
    icon: 'fa-solid fa-credit-card',
    badge: 'Billing'
  },
  {
    id: 'apple-inapp-purchase',
    name: 'Apple In-App Purchases (StoreKit)',
    category: 'payment',
    url: 'https://www.apple.com/legal/privacy/',
    desc: 'Apple StoreKit subscriptions and digital payments',
    icon: 'fa-brands fa-apple',
    badge: 'StoreKit'
  }
];

// Personally Identifiable Information (PII) Data Options (All 12 Languages)
const PII_OPTIONS = [
  {
    id: 'name',
    ar: 'الاسم أو اللقب',
    en: 'Name / Username',
    fr: 'Nom ou pseudo',
    es: 'Nombre de usuario',
    de: 'Name / Benutzername',
    tr: 'İsim / Kullanıcı Adı',
    pt: 'Nome / Nome de usuário',
    ru: 'Имя / Имя пользователя',
    zh: '姓名 / 用户名',
    ja: '氏名・ユーザー名',
    hi: 'नाम / यूज़रनेम',
    it: 'Nome / Nome utente',
    icon: 'fa-user'
  },
  {
    id: 'email',
    ar: 'عنوان البريد الإلكتروني',
    en: 'Email Address',
    fr: 'Adresse e-mail',
    es: 'Correo electrónico',
    de: 'E-Mail-Adresse',
    tr: 'E-posta Adresi',
    pt: 'Endereço de e-mail',
    ru: 'Адрес электронной почты',
    zh: '电子邮箱地址',
    ja: 'メールアドレス',
    hi: 'ईमेल पता',
    it: 'Indirizzo e-mail',
    icon: 'fa-envelope'
  },
  {
    id: 'phone',
    ar: 'رقم الهاتف',
    en: 'Phone Number',
    fr: 'Numéro de téléphone',
    es: 'Número de teléfono',
    de: 'Telefonnummer',
    tr: 'Telefon Numarası',
    pt: 'Número de telefone',
    ru: 'Номер телефона',
    zh: '电话号码',
    ja: '電話番号',
    hi: 'फ़ोन नंबर',
    it: 'Numero di telefono',
    icon: 'fa-phone'
  },
  {
    id: 'location-approx',
    ar: 'الموقع التقريبي (IP Address)',
    en: 'Approximate Location (IP)',
    fr: 'Localisation approximative (IP)',
    es: 'Ubicación aproximada (IP)',
    de: 'Ungefährer Standort (IP)',
    tr: 'Yaklaşık Konum (IP)',
    pt: 'Localização aproximada (IP)',
    ru: 'Приблизительное местоположение (IP)',
    zh: '大致位置 (IP 地址)',
    ja: 'おおよその位置情報 (IP)',
    hi: 'अनुमानित स्थान (IP)',
    it: 'Posizione approssimativa (IP)',
    icon: 'fa-location-dot'
  },
  {
    id: 'location-precise',
    ar: 'الموقع الدقيق (GPS)',
    en: 'Precise Location (GPS)',
    fr: 'Position précise (GPS)',
    es: 'Ubicación precisa (GPS)',
    de: 'Genauer Standort (GPS)',
    tr: 'Hassas Konum (GPS)',
    pt: 'Localização precisa (GPS)',
    ru: 'Точное местоположение (GPS)',
    zh: '精确位置 (GPS)',
    ja: '正確な位置情報 (GPS)',
    hi: 'सटीक स्थान (GPS)',
    it: 'Posizione precisa (GPS)',
    icon: 'fa-crosshairs'
  },
  {
    id: 'photos-storage',
    ar: 'معرض الصور ومساحة التخزين',
    en: 'Photos & Device Storage',
    fr: 'Photos et stockage',
    es: 'Fotos y almacenamiento',
    de: 'Fotos & Gerätespeicher',
    tr: 'Fotoğraflar ve Depolama',
    pt: 'Fotos e armazenamento',
    ru: 'Фотографии и хранилище устройства',
    zh: '相册与设备存储',
    ja: '写真とデバイスストレージ',
    hi: 'फ़ोटो और डिवाइस स्टोरेज',
    it: 'Foto e memoria del dispositivo',
    icon: 'fa-images'
  },
  {
    id: 'camera',
    ar: 'الكاميرا',
    en: 'Camera',
    fr: 'Appareil photo',
    es: 'Cámara',
    de: 'Kamera',
    tr: 'Kamera',
    pt: 'Câmera',
    ru: 'Камера',
    zh: '摄像头权限',
    ja: 'カメラ',
    hi: 'कैमरा',
    it: 'Fotocamera',
    icon: 'fa-camera'
  },
  {
    id: 'microphone',
    ar: 'الميكروفون والتسجيل الصوتي',
    en: 'Microphone & Audio',
    fr: 'Microphone et audio',
    es: 'Micrófono y audio',
    de: 'Mikrofon & Audio',
    tr: 'Mikrofon ve Ses',
    pt: 'Microfone e áudio',
    ru: 'Микрофон и аудиозапись',
    zh: '麦克风与音频录制',
    ja: 'マイクと音声録音',
    hi: 'माइक्रोफ़ोन और ऑडियो',
    it: 'Microfono e audio',
    icon: 'fa-microphone'
  },
  {
    id: 'contacts',
    ar: 'جهات الاتصال',
    en: 'Contacts List',
    fr: 'Liste de contacts',
    es: 'Contactos',
    de: 'Kontaktliste',
    tr: 'Kişiler Listesi',
    pt: 'Lista de contatos',
    ru: 'Список контактов',
    zh: '通讯录联系人',
    ja: '連絡先リスト',
    hi: 'संपर्क सूची (Contacts)',
    it: 'Elenco contatti',
    icon: 'fa-address-book'
  },
  {
    id: 'device-id',
    ar: 'معرّف الجهاز والإعلانات (GAID / IDFA)',
    en: 'Device ID & Advertising ID',
    fr: "Identifiant de l'appareil et ID pub",
    es: 'ID del dispositivo y publicidad',
    de: 'Geräte-ID & Werbe-ID',
    tr: 'Cihaz Kimliği ve Reklam Kimliği',
    pt: 'ID do dispositivo e ID de anúncio',
    ru: 'ID устройства и рекламный ID (GAID/IDFA)',
    zh: '设备标识符与广告 ID (GAID/IDFA)',
    ja: 'デバイスIDおよび広告ID (GAID/IDFA)',
    hi: 'डिवाइस आईडी और विज्ञापन आईडी',
    it: 'ID dispositivo e ID pubblicitario',
    icon: 'fa-mobile-screen'
  },
  {
    id: 'payment-info',
    ar: 'معلومات الدفع والمعاملات المالية',
    en: 'Payment & Financial Info',
    fr: 'Informations de paiement',
    es: 'Información de pago',
    de: 'Zahlungs- & Finanzdaten',
    tr: 'Ödeme ve Finansal Bilgiler',
    pt: 'Informações de pagamento',
    ru: 'Платежная и финансовая информация',
    zh: '支付与交易信息',
    ja: '決済・お支払い情報',
    hi: 'भुगतान और वित्तीय जानकारी',
    it: 'Informazioni di pagamento e transazioni',
    icon: 'fa-wallet'
  },
  {
    id: 'usage-logs',
    ar: 'سجلات الاستخدام وتشخيص الأعطال (Crash Logs)',
    en: 'Usage Logs & Diagnostics',
    fr: 'Journaux et diagnostics',
    es: 'Registros de uso y diagnóstico',
    de: 'Nutzungsprotokolle & Diagnose',
    tr: 'Kullanım Günlükleri ve Teşhis',
    pt: 'Registros de uso e diagnósticos',
    ru: 'Журналы сбоев и диагностика (Crash Logs)',
    zh: '使用日志与崩溃诊断 (Crash Logs)',
    ja: '利用ログ・クラッシュ診断データ',
    hi: 'उपयोग लॉग और क्रैश डायग्नोस्टिक्स',
    it: 'Log di utilizzo e diagnostica arresti anomali',
    icon: 'fa-file-lines'
  },
  {
    id: 'ai-prompt-data',
    ar: 'مدخلات الذكاء الاصطناعي والمحادثات',
    en: 'AI Prompts & Chat Data',
    fr: 'Requêtes IA et conversations',
    es: 'Mensajes de IA y chats',
    de: 'KI-Prompts & Chatverläufe',
    tr: 'Yapay Zeka ve Sohbet Verileri',
    pt: 'Prompts de IA e dados de chat',
    ru: 'Запросы ИИ и данные чата',
    zh: 'AI 提示词与对话内容',
    ja: 'AIプロンプトおよびチャット履歴',
    hi: 'AI प्रॉम्प्ट और चैट डेटा',
    it: 'Prompt IA e cronologia chat',
    icon: 'fa-robot'
  }
];

// Quick Presets
const PRESETS = {
  'ad-game': {
    appName: 'Epic Runner 3D',
    appType: 'ad-supported',
    platform: 'cross',
    collectedData: ['location-approx', 'device-id', 'usage-logs'],
    selectedServices: ['google-play-services', 'google-admob', 'unity-ads', 'firebase-crashlytics'],
    targetChildren: false,
    hasAccounts: false
  },
  'ecommerce': {
    appName: 'ShopSmart Store',
    appType: 'freemium',
    platform: 'cross',
    collectedData: ['name', 'email', 'phone', 'location-approx', 'payment-info', 'device-id', 'usage-logs'],
    selectedServices: ['google-play-services', 'stripe', 'onesignal', 'google-analytics-firebase', 'firebase-crashlytics'],
    targetChildren: false,
    hasAccounts: true
  },
  'offline-utility': {
    appName: 'Ultra Calculator & Notes',
    appType: 'free',
    platform: 'android',
    collectedData: [],
    selectedServices: [],
    targetChildren: false,
    hasAccounts: false
  },
  'saas-freemium': {
    appName: 'ProTasker Cloud',
    appType: 'freemium',
    platform: 'cross',
    collectedData: ['name', 'email', 'device-id', 'usage-logs'],
    selectedServices: ['google-play-services', 'revenuecat', 'firebase-auth-db', 'google-analytics-firebase', 'sentry'],
    targetChildren: false,
    hasAccounts: true
  }
};

// Application State
const state = {
  appName: 'My Awesome App',
  devType: 'individual',
  devName: 'Developer Studio',
  contactEmail: 'support@example.com',
  supportUrl: 'https://example.com/support',
  appType: 'ad-supported',
  platform: 'android',
  effectiveDate: new Date().toISOString().split('T')[0],
  collectedData: ['device-id', 'usage-logs', 'location-approx'],
  customData: [],
  selectedServices: ['google-play-services', 'google-admob', 'firebase-crashlytics'],
  targetChildren: false,
  hasAccounts: true,
  dataDeletionUrl: 'https://example.com/delete-account',
  uiLang: 'ar',
  docLang: 'ar',
  activeDoc: 'privacy',
  activeFormat: 'preview',
  darkMode: true,
  searchTerm: '',
  categoryFilter: 'all'
};

// UI Translations Dictionary for 12 Languages
const I18N = {
  ar: {
    siteTitle: 'صانع سياسة الخصوصية والشروط',
    siteSubtitle: 'أنشئ سياسة خصوصية وشروط استخدام معتمدة لمتاجر Google Play و Apple App Store في دقائق مجاناً',
    badgeGoogleCompliant: 'متوافق مع معايير Google Play 2027',
    step1: 'معلومات التطبيق',
    step2: 'خدمات الطرف الثالث',
    step3: 'توليد الوثائق',
    lblPresets: 'قوالب سريعة بنقرة واحدة (Quick Presets):',
    presetGame: '🎮 لعبة مع إعلانات',
    presetEcommerce: '🛒 متجر إلكتروني',
    presetOffline: '⚡ أداة بدون تتبع',
    presetSaas: '🌟 تطبيق سحابي واشتراكات',
    lblAppName: 'اسم التطبيق أو الموقع (App Name)',
    helpAppName: 'الاسم الرسمي كما سيظهر للمستخدمين في المتجر',
    lblContact: 'البريد الإلكتروني للدعم الفني (Support Contact Email)',
    helpContact: 'البريد أو رابط صفحة المساعدة للتواصل مع المستخدمين',
    lblAppType: 'نوع التطبيق وطريقة التوزيع',
    optFree: 'مجاني بالكامل بدون إعلانات (Free)',
    optAdSupported: 'مجاني مدعوم بالإعلانات (Ad-Supported)',
    optFreemium: 'مجاني مع مشتريات واشتراكات (Freemium)',
    optCommercial: 'مدفوع للشراء المسبق (Paid)',
    optOpenSource: 'مفتوح المصدر (Open Source)',
    lblPlatform: 'نظام التشغيل / المنصة المستهدفة',
    optAndroid: 'أندرويد (Android)',
    optIos: 'آبل (iOS)',
    optCross: 'متعدد المنصات (Android & iOS)',
    optWeb: 'الويب (Web App)',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'تاريخ سريان الوثيقة (Policy Effective Date)',
    lblOwnerType: 'نوع الجهة المالكة',
    optIndividual: 'فرد / مطور مستقل (Individual)',
    optCompany: 'شركة / مؤسسة تجارية (Company)',
    lblDevName: 'اسم المطور أو اسم الشركة',
    lblPii: 'البيانات التي يجمعها التطبيق (Data Safety & PII)',
    selectedUnit: 'محددة',
    helpPii: 'انقر على البيانات التي يطلب التطبيق أذونات الوصول إليها للامتثال لمتطلبات Google Play Data Safety',
    lblCustomData: 'إضافة بيانات مخصصة إضافية:',
    phCustomData: 'اكتب واضغط Enter لإضافة بيان مخصص (مثل: سجل المحادثات)...',
    helpCustomData: 'اضغط Enter بعد كتابة كل بيان مخصص لإدراجه في السياسة',
    btnNextServices: 'التالي',
    step2Instructions: 'اختر جميع الخدمات والمكتبات المدمجة في تطبيقك. سيقوم المولد تلقائياً بتضمين بنودها القانونية وروابط سياساتها الرسمية:',
    searchServicesPh: 'ابحث في الخدمات والمكتبات (مثل AdMob, Firebase, Stripe)...',
    btnSelectPopular: 'تحديد الشائع',
    btnClearAll: 'إلغاء التحديد',
    lblCompliance: 'الامتثال القانوني وحذف البيانات (Google Play & Apple)',
    lblCoppa: 'التطبيق موجه للأطفال دون سن 13 عاماً (قانون COPPA)',
    lblDeletion: 'رابط أو بريد طلب حذف الحساب والبيانات (إلزامي في Google Play):',
    btnBack: 'السابق',
    btnGenerate: 'توليد الوثائق القانونية',
    successTitle: 'تم توليد الوثائق بنجاح وبأعلى معايير الامتثال!',
    successSubtitle: 'اختر الوثيقة واللغة التي ترغب بتصديرها أو تضمينها في تطبيقك:',
    docPrivacy: 'سياسة الخصوصية (Privacy Policy)',
    docTerms: 'الشروط والأحكام (Terms & Conditions)',
    lblDocLang: 'لغة الوثيقة:',
    tabPreview: 'معاينة منسقة',
    tabHtml: 'كود HTML',
    tabMarkdown: 'Markdown',
    btnCopy: 'نسخ الكود',
    btnDownloadHtml: 'تحميل كملف HTML مستقل',
    btnDownloadMd: 'تحميل Markdown',
    btnLiveView: 'معاينة في نافذة مستقلة',
    btnPrint: 'طباعة / PDF',
    btnEdit: 'تعديل البيانات المدخلة',
    copySuccessToast: 'تم النسخ إلى الحافظة بنجاح!',
    presetAppliedToast: 'تم تطبيق القالب السريع بنجاح!'
  },
  en: {
    siteTitle: 'Privacy Policy & Terms Generator',
    siteSubtitle: 'Generate legally structured, Google Play & Apple App Store compliant policies in minutes for free',
    badgeGoogleCompliant: 'Google Play 2027 Compliant',
    step1: 'App Details',
    step2: 'Third-Party Services',
    step3: 'Generate Document',
    lblPresets: 'One-Click Quick Presets:',
    presetGame: '🎮 Ad-Supported Game',
    presetEcommerce: '🛒 E-Commerce Store',
    presetOffline: '⚡ Zero-Tracking Utility',
    presetSaas: '🌟 SaaS / Freemium App',
    lblAppName: 'Application Name',
    helpAppName: 'Official public name as displayed on Google Play or App Store',
    lblContact: 'Support Contact Email',
    helpContact: 'Email or support link where users can reach you for inquiries',
    lblAppType: 'App Monetization & Type',
    optFree: 'Free (No Ads / In-App Purchases)',
    optAdSupported: 'Ad-Supported (Free with Ads)',
    optFreemium: 'Freemium (Free with In-App Purchases)',
    optCommercial: 'Paid / Commercial',
    optOpenSource: 'Open Source',
    lblPlatform: 'Target Platform',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Cross-Platform (Android & iOS)',
    optWeb: 'Web App',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Policy Effective Date',
    lblOwnerType: 'Entity / Ownership Type',
    optIndividual: 'Individual / Indie Developer',
    optCompany: 'Company / Commercial Entity',
    lblDevName: 'Developer or Company Name',
    lblPii: 'Collected User Data (Google Play Data Safety & PII)',
    selectedUnit: 'selected',
    helpPii: 'Declare device permissions and user data types collected by your application',
    lblCustomData: 'Add custom data types:',
    phCustomData: 'Type a custom item and press Enter (e.g. internal chat history)...',
    helpCustomData: 'Press Enter after typing each custom data item to include it in the policy',
    btnNextServices: 'Next',
    step2Instructions: 'Select all integrated third-party SDKs and libraries. Direct links to their official privacy policies will be automatically embedded:',
    searchServicesPh: 'Search services and SDKs (e.g. AdMob, Firebase, Stripe)...',
    btnSelectPopular: 'Select Popular',
    btnClearAll: 'Clear All',
    lblCompliance: 'Legal Compliance & Account Deletion (Google Play & Apple)',
    lblCoppa: 'Application is targeted at children under 13 (COPPA)',
    lblDeletion: 'Account & Data Deletion request channel (Mandatory in Google Play):',
    btnBack: 'Previous',
    btnGenerate: 'Generate Legal Documents',
    successTitle: 'Legal Documents Generated Successfully!',
    successSubtitle: 'Choose a document and output language below to preview, copy, or export:',
    docPrivacy: 'Privacy Policy',
    docTerms: 'Terms & Conditions',
    lblDocLang: 'Document Language:',
    tabPreview: 'Rendered View',
    tabHtml: 'HTML Code',
    tabMarkdown: 'Markdown',
    btnCopy: 'Copy Code',
    btnDownloadHtml: 'Download Standalone HTML',
    btnDownloadMd: 'Download Markdown',
    btnLiveView: 'Open Live View',
    btnPrint: 'Print / Save PDF',
    btnEdit: 'Edit Input Details',
    copySuccessToast: 'Copied to clipboard successfully!',
    presetAppliedToast: 'Quick preset applied!'
  },
  fr: {
    siteTitle: 'Générateur de Politique de Confidentialité',
    siteSubtitle: 'Générez des politiques conformes à Google Play et à l’App Store en quelques minutes',
    badgeGoogleCompliant: 'Conforme Google Play 2027',
    step1: "Informations sur l'application",
    step2: 'Services Tiers',
    step3: 'Générer le Document',
    lblPresets: 'Modèles rapides :',
    presetGame: '🎮 Jeu avec publicités',
    presetEcommerce: '🛒 Boutique E-Commerce',
    presetOffline: '⚡ Utilitaire hors-ligne',
    presetSaas: '🌟 Application SaaS / Freemium',
    lblAppName: "Nom de l'application",
    helpAppName: "Nom officiel tel qu'il apparaîtra sur les stores d'applications",
    lblContact: 'E-mail de support',
    helpContact: 'Adresse de contact pour les demandes des utilisateurs',
    lblAppType: "Type d'application",
    optFree: 'Gratuit (Sans publicité)',
    optAdSupported: 'Gratuit avec publicités',
    optFreemium: 'Freemium (Achats intégrés)',
    optCommercial: 'Payant / Commercial',
    optOpenSource: 'Open Source',
    lblPlatform: 'Plateforme',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Multiplateforme (Android & iOS)',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: "Date d'entrée en vigueur",
    lblOwnerType: 'Type de propriétaire',
    optIndividual: 'Indépendant / Individuel',
    optCompany: 'Société / Entreprise',
    lblDevName: 'Nom du développeur ou de la société',
    lblPii: 'Données collectées (Sécurité des données & PII)',
    selectedUnit: 'sélectionnées',
    helpPii: 'Déclarez les autorisations et les données utilisateur collectées',
    lblCustomData: 'Ajouter des données personnalisées :',
    phCustomData: 'Tapez et appuyez sur Entrée...',
    helpCustomData: 'Appuyez sur Entrée après chaque élément',
    btnNextServices: 'Suivant',
    step2Instructions: 'Sélectionnez tous les services tiers intégrés à votre application :',
    searchServicesPh: 'Rechercher des services (ex. AdMob, Firebase, Stripe)...',
    btnSelectPopular: 'Sélectionner populaires',
    btnClearAll: 'Tout effacer',
    lblCompliance: 'Conformité légale et suppression des données',
    lblCoppa: 'Application destinée aux enfants de moins de 13 ans (COPPA)',
    lblDeletion: 'Lien ou e-mail de suppression de compte (Obligatoire sur Google Play) :',
    btnBack: 'Retour',
    btnGenerate: 'Générer les documents',
    successTitle: 'Documents générés avec succès !',
    successSubtitle: 'Choisissez le document et la langue à exporter :',
    docPrivacy: 'Politique de Confidentialité',
    docTerms: "Conditions d'Utilisation",
    lblDocLang: 'Langue du document :',
    tabPreview: 'Aperçu',
    tabHtml: 'Code HTML',
    tabMarkdown: 'Markdown',
    btnCopy: 'Copier le code',
    btnDownloadHtml: 'Télécharger le fichier HTML',
    btnDownloadMd: 'Télécharger Markdown',
    btnLiveView: 'Ouvrir dans un nouvel onglet',
    btnPrint: 'Imprimer / PDF',
    btnEdit: 'Modifier les informations',
    copySuccessToast: 'Copié dans le presse-papiers !',
    presetAppliedToast: 'Modèle appliqué !'
  },
  es: {
    siteTitle: 'Generador de Política de Privacidad',
    siteSubtitle: 'Genera políticas conformes con Google Play y App Store en minutos gratis',
    badgeGoogleCompliant: 'Conforme Google Play 2027',
    step1: 'Detalles de la Aplicación',
    step2: 'Servicios de Terceros',
    step3: 'Generar Documento',
    lblPresets: 'Plantillas rápidas:',
    presetGame: '🎮 Juego con anuncios',
    presetEcommerce: '🛒 Tienda E-Commerce',
    presetOffline: '⚡ Utilidad sin rastreo',
    presetSaas: '🌟 App SaaS / Freemium',
    lblAppName: 'Nombre de la aplicación',
    helpAppName: 'Nombre oficial en las tiendas de aplicaciones',
    lblContact: 'Correo de soporte y contacto',
    helpContact: 'Email para que los usuarios puedan comunicarse',
    lblAppType: 'Tipo de aplicación',
    optFree: 'Gratis (Sin anuncios)',
    optAdSupported: 'Gratis con anuncios',
    optFreemium: 'Freemium (Compras integradas)',
    optCommercial: 'De pago / Comercial',
    optOpenSource: 'Código Abierto',
    lblPlatform: 'Plataforma',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Multiplataforma (Android & iOS)',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Fecha de vigencia',
    lblOwnerType: 'Tipo de entidad',
    optIndividual: 'Individual / Desarrollador independiente',
    optCompany: 'Empresa / Organización',
    lblDevName: 'Nombre del desarrollador o empresa',
    lblPii: 'Datos recopilados (Seguridad de Datos & PII)',
    selectedUnit: 'seleccionados',
    helpPii: 'Declare los permisos y datos de usuario que utiliza la aplicación',
    lblCustomData: 'Añadir datos personalizados:',
    phCustomData: 'Escriba y presione Enter...',
    helpCustomData: 'Presione Enter después de cada dato personalizado',
    btnNextServices: 'Siguiente',
    step2Instructions: 'Seleccione todos los servicios de terceros integrados en su aplicación:',
    searchServicesPh: 'Buscar servicios (ej. AdMob, Firebase, Stripe)...',
    btnSelectPopular: 'Seleccionar populares',
    btnClearAll: 'Limpiar todo',
    lblCompliance: 'Cumplimiento legal y eliminación de datos',
    lblCoppa: 'Aplicación dirigida a menores de 13 años (COPPA)',
    lblDeletion: 'Enlace o correo para solicitar eliminación de cuenta:',
    btnBack: 'Anterior',
    btnGenerate: 'Generar Documentos',
    successTitle: '¡Documentos generados con éxito!',
    successSubtitle: 'Seleccione el documento y el idioma que desea exportar:',
    docPrivacy: 'Política de Privacidad',
    docTerms: 'Términos y Condiciones',
    lblDocLang: 'Idioma del documento:',
    tabPreview: 'Vista previa',
    tabHtml: 'Código HTML',
    tabMarkdown: 'Markdown',
    btnCopy: 'Copiar Código',
    btnDownloadHtml: 'Descargar HTML',
    btnDownloadMd: 'Descargar Markdown',
    btnLiveView: 'Abrir vista en vivo',
    btnPrint: 'Imprimir / PDF',
    btnEdit: 'Editar datos',
    copySuccessToast: '¡Copiado al portapapeles!',
    presetAppliedToast: '¡Plantilla aplicada!'
  },
  de: {
    siteTitle: 'Datenschutzerklärung Generator',
    siteSubtitle: 'Erstellen Sie DSGVO-, Google Play- und App Store-konforme Richtlinien in Minuten',
    badgeGoogleCompliant: 'Google Play 2027 Konform',
    step1: 'App-Informationen',
    step2: 'Drittanbieter-Dienste',
    step3: 'Dokument generieren',
    lblPresets: 'Schnellvorlagen:',
    presetGame: '🎮 Spiel mit Werbung',
    presetEcommerce: '🛒 Online-Shop',
    presetOffline: '⚡ Offline-Tool',
    presetSaas: '🌟 SaaS / Freemium',
    lblAppName: 'Name der App',
    helpAppName: 'Offizieller Name im Google Play oder App Store',
    lblContact: 'Support-E-Mail-Adresse',
    helpContact: 'Kontaktadresse für Benutzeranfragen',
    lblAppType: 'App-Monetarisierungstyp',
    optFree: 'Kostenlos (Keine Werbung)',
    optAdSupported: 'Kostenlos mit Werbung',
    optFreemium: 'Freemium (In-App-Käufe)',
    optCommercial: 'Kostenpflichtig / Kommerziell',
    optOpenSource: 'Open Source',
    lblPlatform: 'Zielplattform',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Plattformübergreifend (Android & iOS)',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Gültigkeitsdatum',
    lblOwnerType: 'Eigentümertyp',
    optIndividual: 'Einzelperson / Indie-Entwickler',
    optCompany: 'Unternehmen / Firma',
    lblDevName: 'Entwickler- oder Firmenname',
    lblPii: 'Erfasste Daten (Datensicherheit & PII)',
    selectedUnit: 'ausgewählt',
    helpPii: 'Geben Sie Berechtigungen und erfasste Daten an',
    btnNextServices: 'Weiter',
    btnBack: 'Zurück',
    btnGenerate: 'Dokumente generieren',
    docPrivacy: 'Datenschutzerklärung',
    docTerms: 'Allgemeine Geschäftsbedingungen',
    btnCopy: 'Code kopieren',
    btnDownloadHtml: 'HTML-Datei herunterladen',
    btnDownloadMd: 'Markdown herunterladen',
    btnLiveView: 'Live-Ansicht öffnen',
    btnPrint: 'Drucken / PDF',
    btnEdit: 'Eingaben bearbeiten',
    copySuccessToast: 'Erfolgreich kopiert!'
  },
  tr: {
    siteTitle: 'Gizlilik Politikası Oluşturucu',
    siteSubtitle: 'Google Play ve App Store onaylı gizlilik politikası ve koşulları dakikalar içinde oluşturun',
    badgeGoogleCompliant: 'Google Play 2027 Uyumlu',
    step1: 'Uygulama Bilgileri',
    step2: 'Üçüncü Taraf Hizmetleri',
    step3: 'Belgeyi Oluştur',
    lblPresets: 'Hızlı Şablonlar:',
    presetGame: '🎮 Reklamlı Oyun',
    presetEcommerce: '🛒 E-Ticaret Mağazası',
    presetOffline: '⚡ Çevrimdışı Araç',
    presetSaas: '🌟 SaaS / Abonelik',
    lblAppName: 'Uygulama Adı',
    helpAppName: 'Mağazada görünen resmi uygulama adı',
    lblContact: 'Destek E-posta Adresi',
    helpContact: 'Kullanıcıların size ulaşabileceği iletişim e-postası',
    lblAppType: 'Uygulama Türü',
    optFree: 'Ücretsiz (Reklamsız)',
    optAdSupported: 'Reklam Destekli',
    optFreemium: 'Freemium (Uygulama İçi Satın Alma)',
    optCommercial: 'Ücretli',
    optOpenSource: 'Açık Kaynak',
    lblPlatform: 'Platform',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Çoklu Platform (Android & iOS)',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Yürürlük Tarihi',
    lblOwnerType: 'Mülkiyet Türü',
    optIndividual: 'Bireysel / Bağımsız Geliştirici',
    optCompany: 'Şirket / Kuruluş',
    lblDevName: 'Geliştirici veya Şirket Adı',
    lblPii: 'Toplanan Veriler (Veri Güvenliği ve PII)',
    selectedUnit: 'seçildi',
    helpPii: 'Uygulamanın eriştiği cihaz izinlerini ve verileri belirtin',
    btnNextServices: 'İleri',
    btnBack: 'Geri',
    btnGenerate: 'Belgeleri Oluştur',
    docPrivacy: 'Gizlilik Politikası',
    docTerms: 'Kullanım Koşulları',
    btnCopy: 'Kodu Kopyala',
    btnDownloadHtml: 'HTML İndir',
    btnDownloadMd: 'Markdown İndir',
    btnLiveView: 'Canlı Önizleme',
    btnPrint: 'Yazdır / PDF',
    btnEdit: 'Bilgileri Düzenle',
    copySuccessToast: 'Panoya kopyalandı!'
  },
  pt: {
    siteTitle: 'Gerador de Política de Privacidade',
    siteSubtitle: 'Gere políticas em conformidade com o Google Play e a App Store em minutos',
    badgeGoogleCompliant: 'Compatível Google Play 2027',
    step1: 'Detalhes do Aplicativo',
    step2: 'Serviços de Terceiros',
    step3: 'Gerar Documento',
    lblAppName: 'Nome do Aplicativo',
    helpAppName: 'Nome oficial exibido nas lojas de aplicativos',
    lblContact: 'E-mail de Suporte',
    helpContact: 'E-mail para os usuários entrarem em contato',
    lblAppType: 'Tipo de Aplicativo',
    optFree: 'Gratuito (Sem anúncios)',
    optAdSupported: 'Com suporte de anúncios',
    optFreemium: 'Freemium (Compras no app)',
    optCommercial: 'Pago / Comercial',
    optOpenSource: 'Código Aberto',
    lblPlatform: 'Plataforma',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Multiplataforma (Android e iOS)',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Data de Vigência',
    lblOwnerType: 'Tipo de Entidade',
    optIndividual: 'Individual / Desenvolvedor Independente',
    optCompany: 'Empresa / Entidade Comercial',
    lblDevName: 'Nome do Desenvolvedor ou Empresa',
    lblPii: 'Dados Coletados (Segurança de Dados & PII)',
    selectedUnit: 'selecionados',
    helpPii: 'Declare as permissões e dados do usuário acessados',
    btnNextServices: 'Próximo',
    btnBack: 'Anterior',
    btnGenerate: 'Gerar Documentos',
    docPrivacy: 'Política de Privacidade',
    docTerms: 'Termos e Condições',
    btnCopy: 'Copiar Código',
    btnDownloadHtml: 'Baixar HTML',
    btnDownloadMd: 'Baixar Markdown',
    btnLiveView: 'Visualização ao Vivo',
    btnPrint: 'Imprimir / PDF',
    btnEdit: 'Editar Dados',
    copySuccessToast: 'Copiado com sucesso!'
  },
  ru: {
    siteTitle: 'Генератор Политики Конфиденциальности',
    siteSubtitle: 'Создавайте документы для Google Play и App Store за несколько минут бесплатно',
    badgeGoogleCompliant: 'Совместимо с Google Play 2027',
    step1: 'Данные приложения',
    step2: 'Сторонние сервисы',
    step3: 'Генерация документа',
    lblAppName: 'Название приложения',
    helpAppName: 'Официальное название в Google Play или App Store',
    lblContact: 'Контактный email поддержки',
    helpContact: 'Email для связи с пользователями',
    lblAppType: 'Тип приложения',
    optFree: 'Бесплатное (без рекламы)',
    optAdSupported: 'С рекламой (Ad-Supported)',
    optFreemium: 'Freemium (встроенные покупки)',
    optCommercial: 'Платное',
    optOpenSource: 'Открытый исходный код',
    lblPlatform: 'Платформа',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Кроссплатформенное (Android & iOS)',
    optWeb: 'Веб-приложение',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Дата вступления в силу',
    lblOwnerType: 'Тип владельца',
    optIndividual: 'Индивидуальный разработчик',
    optCompany: 'Компания / Организация',
    lblDevName: 'Имя разработчика или компании',
    lblPii: 'Собираемые данные (Data Safety & PII)',
    selectedUnit: 'выбрано',
    helpPii: 'Укажите разрешения и типы собираемых данных',
    btnNextServices: 'Далее',
    btnBack: 'Назад',
    btnGenerate: 'Сгенерировать документы',
    docPrivacy: 'Политика конфиденциальности',
    docTerms: 'Условия использования',
    btnCopy: 'Скопировать код',
    btnDownloadHtml: 'Скачать HTML',
    btnDownloadMd: 'Скачать Markdown',
    btnLiveView: 'Открыть предпросмотр',
    btnPrint: 'Печать / PDF',
    btnEdit: 'Изменить данные',
    copySuccessToast: 'Скопировано в буфер обмена!'
  },
  zh: {
    siteTitle: '应用隐私政策与条款生成器',
    siteSubtitle: '几分钟内免费生成符合 Google Play 和 App Store 标准的合规隐私政策',
    badgeGoogleCompliant: '符合 Google Play 2027 规范',
    step1: '应用信息',
    step2: '第三方服务与 SDK',
    step3: '生成文档',
    lblAppName: '应用名称',
    helpAppName: '在应用商店中显示的官方公开名称',
    lblContact: '支持联系邮箱',
    helpContact: '用户可以联系您的技术支持电子邮箱',
    lblAppType: '应用盈利类型',
    optFree: '完全免费 (无广告)',
    optAdSupported: '包含广告免费版 (Ad-Supported)',
    optFreemium: '免费包含内购 (Freemium)',
    optCommercial: '付费购买 (Commercial)',
    optOpenSource: '开源软件',
    lblPlatform: '目标平台',
    optAndroid: '安卓 (Android)',
    optIos: '苹果 (iOS)',
    optCross: '跨平台 (Android & iOS)',
    optWeb: '网页版 (Web)',
    optKaios: 'KaiOS',
    lblEffectiveDate: '生效日期',
    lblOwnerType: '所有权主体',
    optIndividual: '个人 / 独立开发者',
    optCompany: '企业 / 商业公司',
    lblDevName: '开发者或公司名称',
    lblPii: '收集的个人数据 (Data Safety & PII)',
    selectedUnit: '已选择',
    helpPii: '声明应用获取的设备权限与用户个人数据',
    btnNextServices: '下一步',
    btnBack: '上一步',
    btnGenerate: '立即生成法律文档',
    docPrivacy: '隐私政策 (Privacy Policy)',
    docTerms: '服务条款 (Terms & Conditions)',
    btnCopy: '复制全部代码',
    btnDownloadHtml: '下载独立 HTML 文件',
    btnDownloadMd: '下载 Markdown',
    btnLiveView: '在新窗口预览',
    btnPrint: '打印 / PDF',
    btnEdit: '返回修改信息',
    copySuccessToast: '已成功复制到剪贴板！'
  },
  ja: {
    siteTitle: 'アプリプライバシーポリシー生成ツール',
    siteSubtitle: 'Google Play および App Store に準拠した規約を数分で自動作成',
    badgeGoogleCompliant: 'Google Play 2027 準拠',
    step1: 'アプリの基本情報',
    step2: 'サードパーティサービス',
    step3: 'ドキュメント生成',
    lblAppName: 'アプリ名',
    helpAppName: 'ストアに表示される公式アプリ名',
    lblContact: 'サポート連絡先メール',
    helpContact: 'ユーザーからの問い合わせ用メールアドレス',
    lblAppType: 'アプリのタイプ',
    optFree: '無料（広告なし）',
    optAdSupported: '無料（広告あり）',
    optFreemium: 'アプリ内課金あり（Freemium）',
    optCommercial: '有料アプリ',
    optOpenSource: 'オープンソース',
    lblPlatform: 'プラットフォーム',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'クロスプラットフォーム（Android & iOS）',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: '発効日',
    lblOwnerType: '開発者種別',
    optIndividual: '個人開発者',
    optCompany: '法人 / 企業',
    lblDevName: '開発者名または企業名',
    lblPii: '収集するデータ（データセーフティ & PII）',
    selectedUnit: '選択済み',
    helpPii: 'アプリがアクセスする権限とユーザーデータを指定',
    btnNextServices: '次へ',
    btnBack: '戻る',
    btnGenerate: '規約ドキュメントを生成',
    docPrivacy: 'プライバシーポリシー',
    docTerms: '利用規約',
    btnCopy: 'コードをコピー',
    btnDownloadHtml: 'HTMLファイルをダウンロード',
    btnDownloadMd: 'Markdownをダウンロード',
    btnLiveView: '別タブでプレビュー',
    btnPrint: '印刷 / PDF',
    btnEdit: '入力内容を編集',
    copySuccessToast: 'クリップボードにコピーしました！'
  },
  hi: {
    siteTitle: 'ऐप प्राइवेसी पॉलिसी जेनरेटर',
    siteSubtitle: 'Google Play और App Store के लिए प्राइवेसी पॉलिसी और नियम मुफ़्त में बनाएं',
    badgeGoogleCompliant: 'Google Play 2027 अनुरूप',
    step1: 'ऐप विवरण',
    step2: 'तृतीय-पक्ष सेवाएं',
    step3: 'दस्तावेज़ बनाएं',
    lblAppName: 'ऐप का नाम',
    helpAppName: 'ऐप स्टोर में दिखने वाला आधिकारिक नाम',
    lblContact: 'सहायता ईमेल पता',
    helpContact: 'उपयोगकर्ताओं के संपर्क के लिए ईमेल',
    lblAppType: 'ऐप का प्रकार',
    optFree: 'मुफ़्त (विज्ञापन रहित)',
    optAdSupported: 'विज्ञापन समर्थित (Ad-Supported)',
    optFreemium: 'फ़्रीमियम (In-App Purchases)',
    optCommercial: 'सशुल्क / Commercial',
    optOpenSource: 'ओपन सोर्स',
    lblPlatform: 'प्लेटफ़ॉर्म',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Android और iOS दोनों',
    optWeb: 'वेब',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'प्रभावी तिथि',
    lblOwnerType: 'स्वामित्व का प्रकार',
    optIndividual: 'व्यक्तिगत / Indie डेवलपर',
    optCompany: 'कंपनी / संगठन',
    lblDevName: 'डेवलपर या कंपनी का नाम',
    lblPii: 'एकत्रित डेटा (Data Safety & PII)',
    selectedUnit: 'चयनित',
    helpPii: 'उपयोगकर्ता डेटा और अनुमतियां चुनें',
    btnNextServices: 'अगला',
    btnBack: 'पिछला',
    btnGenerate: 'दस्तावेज़ तैयार करें',
    docPrivacy: 'गोपनीयता नीति (Privacy Policy)',
    docTerms: 'नियम और शर्तें (Terms)',
    btnCopy: 'कोड कॉपी करें',
    btnDownloadHtml: 'HTML फ़ाइल डाउनलोड करें',
    btnDownloadMd: 'Markdown डाउनलोड करें',
    btnLiveView: 'लाइव पूर्वावलोकन',
    btnPrint: 'प्रिंट / PDF',
    btnEdit: 'विवरण संपादित करें',
    copySuccessToast: 'क्लिपबोर्ड पर कॉपी किया गया!'
  },
  it: {
    siteTitle: 'Generatore di Privacy Policy e Termini',
    siteSubtitle: 'Crea politiche conformi a Google Play e App Store in pochi minuti gratuitamente',
    badgeGoogleCompliant: 'Conforme Google Play 2027',
    step1: "Dettagli dell'applicazione",
    step2: 'Servizi di terze parti',
    step3: 'Genera Documento',
    lblAppName: "Nome dell'applicazione",
    helpAppName: 'Nome ufficiale visualizzato negli store',
    lblContact: 'Email di supporto e contatto',
    helpContact: 'Indirizzo email per le richieste degli utenti',
    lblAppType: 'Tipo di applicazione',
    optFree: 'Gratuita (Senza pubblicità)',
    optAdSupported: 'Gratuita con annunci pubblicitari',
    optFreemium: 'Freemium (Acquisti in-app)',
    optCommercial: 'A pagamento / Commerciale',
    optOpenSource: 'Open Source',
    lblPlatform: 'Piattaforma',
    optAndroid: 'Android',
    optIos: 'iOS',
    optCross: 'Multipiattaforma (Android & iOS)',
    optWeb: 'Web',
    optKaios: 'KaiOS',
    lblEffectiveDate: 'Data di entrata in vigore',
    lblOwnerType: 'Tipo di entità',
    optIndividual: 'Individuale / Sviluppatore indipendente',
    optCompany: 'Azienda / Società',
    lblDevName: 'Nome dello sviluppatore o della società',
    lblPii: 'Dati raccolti (Sicurezza dei dati & PII)',
    selectedUnit: 'selezionati',
    helpPii: 'Dichiara le autorizzazioni e i dati utente raccolti',
    btnNextServices: 'Avanti',
    btnBack: 'Indietro',
    btnGenerate: 'Genera Documenti',
    docPrivacy: 'Informativa sulla Privacy',
    docTerms: 'Termini e Condizioni',
    btnCopy: 'Copia Codice',
    btnDownloadHtml: 'Scarica file HTML',
    btnDownloadMd: 'Scarica Markdown',
    btnLiveView: 'Anteprima dal vivo',
    btnPrint: 'Stampa / PDF',
    btnEdit: 'Modifica dati',
    copySuccessToast: 'Copiato negli appunti!'
  }
};

// ==============================================================
// MULTI-LANGUAGE LEGAL DOCUMENT TEMPLATE GENERATOR (12 LANGUAGES)
// ==============================================================

function getPlatformName(platform, lang) {
  const map = {
    ar: { android: 'أندرويد (Android)', ios: 'آبل (iOS)', cross: 'أندرويد وآبل (Android & iOS)', web: 'الويب (Web)', kaios: 'KaiOS' },
    en: { android: 'Android', ios: 'iOS', cross: 'Android & iOS', web: 'Web', kaios: 'KaiOS' },
    fr: { android: 'Android', ios: 'iOS', cross: 'Android et iOS', web: 'Web', kaios: 'KaiOS' },
    es: { android: 'Android', ios: 'iOS', cross: 'Android e iOS', web: 'Web', kaios: 'KaiOS' },
    de: { android: 'Android', ios: 'iOS', cross: 'Android und iOS', web: 'Web', kaios: 'KaiOS' },
    tr: { android: 'Android', ios: 'iOS', cross: 'Android ve iOS', web: 'Web', kaios: 'KaiOS' },
    pt: { android: 'Android', ios: 'iOS', cross: 'Android e iOS', web: 'Web', kaios: 'KaiOS' },
    ru: { android: 'Android', ios: 'iOS', cross: 'Android и iOS', web: 'Web', kaios: 'KaiOS' },
    zh: { android: 'Android', ios: 'iOS', cross: 'Android 与 iOS', web: 'Web 网页端', kaios: 'KaiOS' },
    ja: { android: 'Android', ios: 'iOS', cross: 'Android および iOS', web: 'Web', kaios: 'KaiOS' },
    hi: { android: 'Android', ios: 'iOS', cross: 'Android और iOS', web: 'Web', kaios: 'KaiOS' },
    it: { android: 'Android', ios: 'iOS', cross: 'Android e iOS', web: 'Web', kaios: 'KaiOS' }
  };
  return (map[lang] && map[lang][platform]) || (map.en[platform]) || platform.toUpperCase();
}

function getAppTypeStr(appType, lang) {
  const map = {
    ar: { free: 'مجاني', 'ad-supported': 'مجاني مدعوم بالإعلانات', freemium: 'مجاني مع ميزات مدفوعة واشتراكات', commercial: 'مدفوع', 'open-source': 'مفتوح المصدر' },
    en: { free: 'Free', 'ad-supported': 'Ad-Supported', freemium: 'Freemium', commercial: 'Commercial / Paid', 'open-source': 'Open Source' },
    fr: { free: 'Gratuit', 'ad-supported': 'Gratuit avec publicités', freemium: 'Freemium', commercial: 'Payant', 'open-source': 'Open Source' },
    es: { free: 'Gratuito', 'ad-supported': 'Gratuito con anuncios', freemium: 'Freemium', commercial: 'Comercial', 'open-source': 'Código Abierto' },
    de: { free: 'Kostenlos', 'ad-supported': 'Kostenlos mit Werbung', freemium: 'Freemium', commercial: 'Kommerziell', 'open-source': 'Open Source' },
    tr: { free: 'Ücretsiz', 'ad-supported': 'Reklam Destekli', freemium: 'Freemium', commercial: 'Ticari / Ücretli', 'open-source': 'Açık Kaynak' },
    pt: { free: 'Gratuito', 'ad-supported': 'Gratuito com anúncios', freemium: 'Freemium', commercial: 'Comercial', 'open-source': 'Código Aberto' },
    ru: { free: 'бесплатного', 'ad-supported': 'поддерживаемого рекламой', freemium: 'условно-бесплатного (Freemium)', commercial: 'коммерческого', 'open-source': 'открытого' },
    zh: { free: '免费', 'ad-supported': '广告支持免费', freemium: '免费增值 (Freemium)', commercial: '付费商业', 'open-source': '开源' },
    ja: { free: '無料', 'ad-supported': '広告サポート付き無料', freemium: 'フリーミアム', commercial: '商用・有料', 'open-source': 'オープンソース' },
    hi: { free: 'मुफ़्त', 'ad-supported': 'विज्ञापन-समर्थित', freemium: 'फ़्रीमियम', commercial: 'व्यावसायिक', 'open-source': 'ओपन-सोर्स' },
    it: { free: 'gratuito', 'ad-supported': 'supportato da pubblicità', freemium: 'Freemium', commercial: 'commerciale', 'open-source': 'Open Source' }
  };
  return (map[lang] && map[lang][appType]) || (map.en[appType]) || appType;
}

// Generate Privacy Policy in any of the 12 languages
function generatePrivacyPolicyText(s, lang = 'en') {
  const appName = s.appName || 'My App';
  const devName = s.devName || 'Developer Studio';
  const dateStr = s.effectiveDate || new Date().toISOString().split('T')[0];
  const appTypeStr = getAppTypeStr(s.appType, lang);
  const platformStr = getPlatformName(s.platform, lang);
  const delLink = s.dataDeletionUrl || `mailto:${s.contactEmail}`;
  const delLabel = s.dataDeletionUrl || s.contactEmail;

  // Active PII
  const piiList = s.collectedData.map(id => {
    const item = PII_OPTIONS.find(p => p.id === id);
    if (!item) return id;
    return item[lang] || item.en;
  });
  if (s.customData && s.customData.length > 0) {
    piiList.push(...s.customData);
  }

  // Active Services
  const activeServices = THIRD_PARTY_SERVICES.filter(srv => s.selectedServices.includes(srv.id));

  // --- ARABIC ---
  if (lang === 'ar') {
    return `
<h1>سياسة الخصوصية لتطبيق ${appName}</h1>
<p><strong>تاريخ السريان:</strong> ${dateStr}</p>
<p>تم بناء وتطوير تطبيق <strong>${appName}</strong> بواسطة <strong>${devName}</strong> كخدمة <strong>${appTypeStr}</strong> مخصصة لمنصة <strong>${platformStr}</strong>. توضح هذه الصفحة سياساتنا المتعلقة بجمع واستخدام والإفصاح عن البيانات والمعلومات الشخصية عند استخدامك لخدمتنا وفقاً لأحدث معايير متجر Google Play (Data Safety) ومتجر Apple App Store واللوائح الدولية لحماية البيانات (GDPR).</p>
<hr/>
<h2>1. جمع المعلومات واستخدامها</h2>
${piiList.length > 0 ? `
<p>لتقديم وتطوير خدماتنا وضمان عمل ميزات التطبيق بكفاءة، قد نطلب منك تزويدنا ببعض أذونات ومعلومات التعريف الشخصية، والتي تشمل:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>لا يتطلب التطبيق أو يجمع عمداً أي بيانات تعريف شخصية حساسة بشكل مباشر على خوادمنا الخاصة.</p>`}
<h2>2. بيانات السجلات والتشخيص (Log Data)</h2>
<p>في حال حدوث خطأ أو توقف مفاجئ في التطبيق أثناء استخدامه، فإننا نقوم بجمع بيانات تقنية تشخيصية على هاتفك (تُسمى Log Data) تتضمن عنوان IP الخاص بك، اسم الجهاز، وإصدار نظام التشغيل، ووقت وتاريخ العطل لمساعدتنا في تحسين الاستقرار.</p>
${activeServices.length > 0 ? `
<h2>3. خدمات ومكتبات الطرف الثالث (Third-Party SDKs)</h2>
<p>يستخدم التطبيق الخدمات التابعة لجهات خارجية والمدرجة أدناه لأغراض الإعلانات، والتحليلات، وتشخيص الأعطال، وتخضع لمعايير الخصوصية الخاصة بها:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - سياسة الخصوصية الرسمية</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>4. خصوصية الأطفال (قانون COPPA)</h2>
${s.targetChildren ? `
<p>هذا التطبيق موجه لجميع الفئات بما في ذلك الأطفال. نحن نلتزم بالامتثال الصارم لقانون حماية خصوصية الأطفال على الإنترنت (COPPA).</p>
` : `
<p>هذه الخدمة غير موجهة للأطفال دون سن 13 عاماً، ونحن لا نجمع عن علم أي بيانات شخصية من الأطفال دون سن 13 عاماً. إذا علم ولي أمر بأن طفله قد زودنا بمعلومات دون موافقته، يُرجى التواصل معنا فوراً لحذفها.</p>
`}
<h2>5. حذف الحساب والبيانات (Data Deletion Rights)</h2>
<p>وفقاً لمتطلبات متجر Google Play ومتجر Apple App Store، يحق لك في أي وقت طلب المراجعة أو الحذف النهائي والشامل لحسابك ولأي بيانات مرتبطة به.</p>
<p><strong>قناة طلب الحذف:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>6. اتصل بنا</h2>
<p>إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- FRENCH ---
  if (lang === 'fr') {
    return `
<h1>Politique de Confidentialité pour ${appName}</h1>
<p><strong>Date d'entrée en vigueur :</strong> ${dateStr}</p>
<p>Cette politique de confidentialité s'applique à l'application <strong>${appName}</strong> développée par <strong>${devName}</strong> en tant que service <strong>${appTypeStr}</strong> pour <strong>${platformStr}</strong>.</p>
<hr/>
<h2>1. Collecte et utilisation des données</h2>
${piiList.length > 0 ? `
<p>Pour fournir et améliorer notre service, nous pouvons vous demander de fournir certaines informations d'identification personnelle :</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>L'application ne collecte pas intentionnellement d'informations d'identification personnelle sur nos serveurs.</p>`}
<h2>2. Données de diagnostic et journaux</h2>
<p>En cas d'erreur ou de panne dans l'application, des données de diagnostic technique (Log Data) telles que l'adresse IP et le modèle de l'appareil peuvent être collectées pour résoudre les bogues.</p>
${activeServices.length > 0 ? `
<h2>3. Fournisseurs de services tiers</h2>
<p>L'application fait appel aux bibliothèques de tiers répertoriées ci-dessous :</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Politique de confidentialité</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>4. Protection des enfants</h2>
<p>${s.targetChildren ? "Cette application respecte strictement la réglementation COPPA relative à la protection des mineurs." : "Ce service ne s'adresse pas aux enfants de moins de 13 ans. Nous ne recueillons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans."}</p>
<h2>5. Suppression du compte et des données</h2>
<p>Conformément aux exigences de Google Play et du RGPD, vous avez le droit de demander la suppression permanente de votre compte et de vos données :</p>
<p><strong>Demande de suppression :</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>6. Nous contacter</h2>
<p>Pour toute question concernant cette politique, écrivez-nous à : <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- SPANISH ---
  if (lang === 'es') {
    return `
<h1>Política de Privacidad para ${appName}</h1>
<p><strong>Fecha de vigencia:</strong> ${dateStr}</p>
<p>Esta política de privacidad se aplica a la aplicación <strong>${appName}</strong> desarrollada por <strong>${devName}</strong> como un servicio <strong>${appTypeStr}</strong> para <strong>${platformStr}</strong>.</p>
<hr/>
<h2>1. Recopilación y uso de información</h2>
${piiList.length > 0 ? `
<p>Para una mejor experiencia mientras utiliza nuestro servicio, podemos solicitarle que proporcione cierta información de identificación personal:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>La aplicación no recopila activamente información de identificación personal en nuestros servidores propios.</p>`}
<h2>2. Datos de registro y diagnósticos</h2>
<p>En caso de fallo o error en la aplicación, se pueden recopilar datos técnicos de registro (dirección IP, modelo del dispositivo, versión del sistema operativo) para solucionar problemas.</p>
${activeServices.length > 0 ? `
<h2>3. Proveedores de servicios de terceros</h2>
<p>La aplicación integra los siguientes servicios de terceros con sus respectivas políticas de privacidad:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Política de privacidad</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>4. Privacidad infantil (COPPA)</h2>
<p>${s.targetChildren ? 'Esta aplicación cumple estrictamente con la normativa COPPA de protección infantil.' : 'Este servicio no está dirigido a menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años.'}</p>
<h2>5. Eliminación de cuenta y datos</h2>
<p>De acuerdo con las políticas de Google Play, tiene derecho a solicitar la eliminación permanente de su cuenta y datos personales:</p>
<p><strong>Canal de eliminación:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>6. Contáctenos</h2>
<p>Si tiene preguntas sobre esta política de privacidad, contáctenos en: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- GERMAN ---
  if (lang === 'de') {
    return `
<h1>Datenschutzerklärung für ${appName}</h1>
<p><strong>Gültig ab:</strong> ${dateStr}</p>
<p>Diese Datenschutzerklärung gilt für die Anwendung <strong>${appName}</strong>, die von <strong>${devName}</strong> als <strong>${appTypeStr}</strong>-Dienst für <strong>${platformStr}</strong> bereitgestellt wird.</p>
<hr/>
<h2>1. Datenerfassung und -verwendung</h2>
${piiList.length > 0 ? `
<p>Für eine optimale Funktionsweise unserer Anwendung können folgende Daten und Geräteberechtigungen erfasst werden:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>Die Anwendung erfasst keine personenbezogenen Daten direkt auf unseren proprietären Servern.</p>`}
<h2>2. Protokolldaten und Fehlerdiagnose</h2>
<p>Im Falle eines Absturzes oder Fehlers erfassen wir Diagnosedaten (Log Data) wie IP-Adresse, Gerätename und Betriebssystemversion zur Fehlerbehebung.</p>
${activeServices.length > 0 ? `
<h2>3. Drittanbieter-Dienste und Bibliotheken</h2>
<p>Die Anwendung integriert folgende Drittanbieter-Dienste:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Datenschutzerklärung</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>4. Kontolöschung und Betroffenenrechte (DSGVO)</h2>
<p>Gemäß Google Play-Richtlinien und DSGVO können Sie jederzeit die vollständige Löschung Ihres Kontos und Ihrer Daten beantragen:</p>
<p><strong>Löschanfrage:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>5. Kontakt</h2>
<p>Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns bitte unter: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- TURKISH ---
  if (lang === 'tr') {
    return `
<h1>${appName} Gizlilik Politikası</h1>
<p><strong>Yürürlük Tarihi:</strong> ${dateStr}</p>
<p>Bu gizlilik politikası, <strong>${devName}</strong> tarafından <strong>${platformStr}</strong> cihazları için <strong>${appTypeStr}</strong> bir hizmet olarak sunulan <strong>${appName}</strong> uygulaması için geçerlidir.</p>
<hr/>
<h2>1. Bilgi Toplama ve Kullanım</h2>
${piiList.length > 0 ? `
<p>Uygulamayı kullanırken daha iyi bir deneyim sunmak için aşağıdaki kişisel verileri veya izinleri talep edebiliriz:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>Uygulamamız doğrudan sunucularımızda hassas kişisel verileri kasıtlı olarak toplamaz.</p>`}
${activeServices.length > 0 ? `
<h2>2. Üçüncü Taraf Hizmet Sağlayıcıları</h2>
<p>Uygulama, aşağıda listelenen üçüncü taraf hizmetlerini ve SDK'ları entegre eder:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Gizlilik Politikası</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>3. Hesap ve Veri Silme Talepleri</h2>
<p>Google Play politikaları uyarınca, hesabınızın ve toplanan kişisel verilerinizin kalıcı olarak silinmesini her zaman talep etme hakkına sahipsiniz:</p>
<p><strong>Silme Talebi:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>4. İletişim</h2>
<p>Sorularınız için bizimle iletişime geçebilirsiniz: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- PORTUGUESE ---
  if (lang === 'pt') {
    return `
<h1>Política de Privacidade para ${appName}</h1>
<p><strong>Data de Vigência:</strong> ${dateStr}</p>
<p>Esta Política de Privacidade aplica-se ao aplicativo <strong>${appName}</strong>, desenvolvido por <strong>${devName}</strong> como um serviço <strong>${appTypeStr}</strong> para <strong>${platformStr}</strong>.</p>
<hr/>
<h2>1. Coleta e Uso de Informações</h2>
${piiList.length > 0 ? `
<p>Para uma melhor experiência de uso, podemos solicitar o acesso às seguintes permissões e dados:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>O aplicativo não coleta deliberadamente dados pessoais identificáveis em nossos servidores.</p>`}
${activeServices.length > 0 ? `
<h2>2. Serviços e Bibliotecas de Terceiros</h2>
<p>O aplicativo utiliza os seguintes serviços de terceiros com suas respectivas políticas:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Política de Privacidade</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>3. Exclusão de Conta e Dados Pessoais</h2>
<p>De acordo com os requisitos do Google Play e da LGPD, você tem o direito de solicitar a exclusão permanente de seus dados:</p>
<p><strong>Canal de Exclusão:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>4. Contato</h2>
<p>Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- RUSSIAN ---
  if (lang === 'ru') {
    return `
<h1>Политика конфиденциальности для ${appName}</h1>
<p><strong>Дата вступления в силу:</strong> ${dateStr}</p>
<p>Настоящая Политика конфиденциальности применяется к приложению <strong>${appName}</strong> для <strong>${platformStr}</strong>, разработанному <strong>${devName}</strong> в качестве <strong>${appTypeStr}</strong> сервиса.</p>
<hr/>
<h2>1. Сбор и использование информации</h2>
${piiList.length > 0 ? `
<p>Для обеспечения функциональности сервиса мы можем запрашивать доступ к следующим данным и разрешениям устройства:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>Приложение не собирает и не хранит персональные данные напрямую на наших собственных серверах.</p>`}
<h2>2. Журналы сбоев и диагностика (Log Data)</h2>
<p>В случае возникновения ошибки или сбоя в работе приложения мы можем собирать техническую диагностическую информацию (IP-адрес, модель устройства, версия ОС) для устранения неполадок.</p>
${activeServices.length > 0 ? `
<h2>3. Сторонние сервисы и SDK</h2>
<p>В приложение интегрированы следующие сторонние сервисы, обработка данных которых регулируется их официальными политиками конфиденциальности:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Политика конфиденциальности</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>4. Удаление аккаунта и данных</h2>
<p>В соответствии с требованиями Google Play вы имеете право в любое время запросить полное удаление своей учетной записи и связанных данных:</p>
<p><strong>Запрос на удаление данных:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>5. Контакты</h2>
<p>По всем вопросам касательно настоящей политики свяжитесь с нами: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- CHINESE (SIMPLIFIED) ---
  if (lang === 'zh') {
    return `
<h1>${appName} 隐私政策</h1>
<p><strong>生效日期：</strong> ${dateStr}</p>
<p>本隐私政策适用于由 <strong>${devName}</strong> 为 <strong>${platformStr}</strong> 设备开发的 <strong>${appName}</strong> 应用（服务类型为 <strong>${appTypeStr}</strong>）。本政策旨在明确说明我们如何收集、使用和保护您的个人信息，以符合 Google Play 商店数据安全规范及相关法律法规。</p>
<hr/>
<h2>1. 信息收集与使用</h2>
${piiList.length > 0 ? `
<p>为了提供更稳定优质的服务，我们可能会请求以下设备权限或个人标识信息：</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>本应用程序不会主动在我们专有服务器上收集或存储您的敏感个人身份信息。</p>`}
${activeServices.length > 0 ? `
<h2>2. 第三方服务提供商与 SDK</h2>
<p>应用内集成了以下第三方服务，其数据处理行为适用其官方隐私政策：</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - 官方隐私政策</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>3. 账号与数据删除权利</h2>
<p>根据 Google Play 规定，您拥有随时申请永久删除您在应用内的账号及全部关联个人数据的权利：</p>
<p><strong>申请删除渠道：</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>4. 联系我们</h2>
<p>如果您对本隐私政策有任何疑问，请联系我们：<a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- JAPANESE ---
  if (lang === 'ja') {
    return `
<h1>${appName} プライバシーポリシー</h1>
<p><strong>発効日：</strong> ${dateStr}</p>
<p>本プライバシーポリシーは、<strong>${devName}</strong> が <strong>${platformStr}</strong> 向けに <strong>${appTypeStr}</strong> サービスとして提供するアプリケーション「<strong>${appName}</strong>」に適用されます。</p>
<hr/>
<h2>1. 収集する情報と利用目的</h2>
${piiList.length > 0 ? `
<p>本アプリのサービス提供および品質向上のため、以下のデータやデバイス権限へのアクセスを求める場合があります：</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>本アプリは、個人を特定できる機密情報を当社の独自サーバー上で直接収集・保存することはありません。</p>`}
${activeServices.length > 0 ? `
<h2>2. サードパーティ製サービス・SDK</h2>
<p>本アプリは以下の第三者サービスを利用しており、各社のプライバシーポリシーに基づいてデータが処理されます：</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - 公式プライバシーポリシー</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>3. アカウントおよびデータの削除リクエスト</h2>
<p>Google Play のデータセーフティ要件に基づき、ユーザーはいつでもアカウントおよび関連データの完全な削除をリクエストする権利を有します：</p>
<p><strong>削除リクエスト窓口：</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>4. お問い合わせ</h2>
<p>本ポリシーに関するご質問は、以下までご連絡ください：<a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- HINDI ---
  if (lang === 'hi') {
    return `
<h1>${appName} के लिए गोपनीयता नीति (Privacy Policy)</h1>
<p><strong>प्रभावी तिथि:</strong> ${dateStr}</p>
<p>यह गोपनीयता नीति <strong>${devName}</strong> द्वारा <strong>${platformStr}</strong> के लिए <strong>${appTypeStr}</strong> सेवा के रूप में निर्मित <strong>${appName}</strong> ऐप पर लागू होती है।</p>
<hr/>
<h2>1. जानकारी का संग्रह और उपयोग</h2>
${piiList.length > 0 ? `
<p>बेहतर अनुभव प्रदान करने के लिए, हमारा ऐप निम्नलिखित अनुमतियों और डेटा का उपयोग कर सकता है:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>यह ऐप हमारे सर्वर पर व्यक्तिगत रूप से पहचान योग्य संवेदनशील जानकारी एकत्र नहीं करता है।</p>`}
${activeServices.length > 0 ? `
<h2>2. तृतीय-पक्ष सेवाएं (Third-Party SDKs)</h2>
<p>यह ऐप निम्नलिखित तृतीय-पक्ष सेवाओं का उपयोग करता है जिनकी अपनी गोपनीयता नीतियां हैं:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - आधिकारिक गोपनीयता नीति</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>3. खाता और डेटा हटाने का अधिकार (Data Deletion)</h2>
<p>Google Play के नियमों के अनुसार, आप किसी भी समय अपने खाते और संबंधित डेटा को स्थायी रूप से हटाने का अनुरोध कर सकते हैं:</p>
<p><strong>डेटा हटाने का अनुरोध लिंक:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>4. संपर्क करें</h2>
<p>यदि आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- ITALIAN ---
  if (lang === 'it') {
    return `
<h1>Informativa sulla Privacy per ${appName}</h1>
<p><strong>Data di entrata in vigore:</strong> ${dateStr}</p>
<p>La presente Informativa sulla Privacy si applica all'applicazione <strong>${appName}</strong> per dispositivi <strong>${platformStr}</strong>, gestita da <strong>${devName}</strong> come servizio <strong>${appTypeStr}</strong>.</p>
<hr/>
<h2>1. Raccolta e utilizzo dei dati</h2>
${piiList.length > 0 ? `
<p>Per fornire e migliorare il nostro servizio, potremmo richiedere le seguenti autorizzazioni e categorie di dati:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
` : `<p>L'applicazione non raccoglie intenzionalmente dati personali sensibili sui nostri server proprietari.</p>`}
${activeServices.length > 0 ? `
<h2>2. Servizi di terze parti e SDK</h2>
<p>L'applicazione integra i seguenti fornitori di servizi di terze parti:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Informativa sulla Privacy</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>3. Eliminazione dell'account e dei dati (GDPR)</h2>
<p>In conformità con i requisiti di Google Play e del GDPR, hai il diritto di richiedere la cancellazione definitiva del tuo account e dei tuoi dati:</p>
<p><strong>Richiesta di cancellazione:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>4. Contattaci</h2>
<p>Per qualsiasi domanda sulla presente informativa, contattaci all'indirizzo: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  // --- DEFAULT: ENGLISH (STANDARD FOR GOOGLE PLAY & APP STORE) ---
  return `
<h1>Privacy Policy for ${appName}</h1>
<p><strong>Effective Date:</strong> ${dateStr}</p>
<p>This Privacy Policy applies to the <strong>${appName}</strong> mobile application (hereby referred to as "the Application" or "Service") for <strong>${platformStr}</strong> devices, operated by <strong>${devName}</strong> ("we", "us", or "our") as an <strong>${appTypeStr}</strong> service.</p>
<p>This document details our policies regarding the collection, use, and disclosure of personal data when you use our Application, in full compliance with the Google Play Store Data Safety policy and global data protection standards (GDPR, CCPA).</p>
<hr/>
<h2>1. Information Collection and Use</h2>
${piiList.length > 0 ? `
<p>For an improved user experience while utilizing our Service, we may require certain device permissions and personally identifiable information, including but not limited to:</p>
<ul>
  ${piiList.map(item => `<li><strong>${item}</strong></li>`).join('\n  ')}
</ul>
<p>The information requested will be retained and utilized exclusively as described in this privacy policy.</p>
` : `<p>The Application does not actively harvest, store, or transmit personally identifiable information (PII) to our proprietary servers.</p>`}
<h2>2. Log Data and Device Diagnostics</h2>
<p>In the event of an error or crash within the Application, we may collect technical diagnostics (Log Data) such as your device's IP address, device hardware model, OS version, and runtime diagnostics to identify bugs and enhance stability.</p>
${activeServices.length > 0 ? `
<h2>3. Third-Party Service Providers and SDKs</h2>
<p>The Application relies on certified third-party service providers and advertising networks whose data practices are governed by their respective privacy policies:</p>
<ul>
  ${activeServices.map(srv => `<li><a href="${srv.url}" target="_blank" rel="noopener noreferrer"><strong>${srv.name}</strong> - Official Privacy Policy</a></li>`).join('\n  ')}
</ul>
` : ''}
<h2>4. Children's Privacy (COPPA Compliance)</h2>
${s.targetChildren ? `
<p>This Application is designed to be accessible to all audiences, including children, in strict compliance with the Children's Online Privacy Protection Act (COPPA).</p>
` : `
<p>These Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. If a parent or guardian discovers their child has submitted personal info, please contact us immediately for prompt deletion.</p>
`}
<h2>5. Account and Data Deletion Rights</h2>
<p>In full adherence to Google Play Data Safety policies, users maintain the explicit right to request permanent deletion of their account and all associated personal data stored by our service.</p>
<p><strong>Data Deletion Request Portal:</strong> <a href="${delLink}" target="_blank" rel="noopener noreferrer">${delLabel}</a></p>
<h2>6. Contact Us</h2>
<p>If you have any questions or suggestions regarding our Privacy Policy, please reach out to us at: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
  `.trim();
}

// Generate Terms & Conditions in all 12 languages
function generateTermsAndConditionsText(s, lang = 'en') {
  const appName = s.appName || 'My App';
  const devName = s.devName || 'Developer Studio';
  const dateStr = s.effectiveDate || new Date().toISOString().split('T')[0];

  if (lang === 'ar') {
    return `
<h1>الشروط والأحكام لاستخدام تطبيق ${appName}</h1>
<p><strong>تاريخ السريان:</strong> ${dateStr}</p>
<p>بتنزيل أو تصفح أو استخدام تطبيق <strong>${appName}</strong>، فإنك توافق تلقائياً على الالتزام بالشروط والأحكام التالية الصادرة عن <strong>${devName}</strong>. يرجى قراءتها بعناية قبل استخدام الخدمة.</p>
<hr/>
<h2>1. الملكية الفكرية والترخيص</h2>
<p>كافة العلامات التجارية وحقوق النشر وكود المصدر وحقوق قواعد البيانات المتعلقة بالتطبيق تظل ملكاً حصرياً للمطور (<strong>${devName}</strong>). لا يجوز لك نسخ أو تعديل التطبيق أو محاولة استخراج كوده المصدري أو إجراء هندسة عكسية لأي جزء منه.</p>
<h2>2. الاتصال بالشبكة ورسوم البيانات</h2>
<p>تتطلب بعض وظائف التطبيق اتصالاً نشطاً بالإنترنت. لا يتحمل المطور أي مسؤولية عن عدم عمل التطبيق بكامل وظائفه في حال عدم توفر اتصال بالشبكة أو نفاد باقة البيانات الخاصة بك.</p>
<h2>3. التحديثات وإنهاء الخدمة</h2>
<p>نحتفظ بالحق في تحديث التطبيق أو تعديل مزاياه في أي وقت لضمان توافقه مع أحدث أنظمة التشغيل ومتطلبات المتاجر الرقمية.</p>
<h2>4. حدود المسؤولية</h2>
<p>يتم توفير التطبيق "كما هو" وبحالته الراهنة دون أي ضمانات صريحة أو ضمنية.</p>
<h2>5. اتصل بنا</h2>
<p>لأي استفسار بخصوص الشروط والأحكام: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'fr') {
    return `
<h1>Conditions Générales d'Utilisation pour ${appName}</h1>
<p><strong>Date d'entrée en vigueur :</strong> ${dateStr}</p>
<p>En téléchargeant ou en utilisant l'application <strong>${appName}</strong> fournie par <strong>${devName}</strong>, vous acceptez pleinement les présentes conditions d'utilisation.</p>
<hr/>
<h2>1. Propriété intellectuelle</h2>
<p>L'application, ainsi que l'ensemble des droits d'auteur, marques et codes sources associés, demeurent la propriété exclusive de <strong>${devName}</strong>.</p>
<h2>2. Connectivité et frais de réseau</h2>
<p>Certaines fonctionnalités nécessitent une connexion Internet active. Nous ne sommes pas responsables des frais de données mobiles éventuels facturés par votre opérateur.</p>
<h2>3. Limitation de responsabilité</h2>
<p>Le service est fourni « en l'état » sans garantie expresse ou implicite.</p>
<h2>4. Contact</h2>
<p>Pour toute question concernant ces conditions : <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'es') {
    return `
<h1>Términos y Condiciones para ${appName}</h1>
<p><strong>Fecha de vigencia:</strong> ${dateStr}</p>
<p>Al descargar o utilizar la aplicación <strong>${appName}</strong> desarrollada por <strong>${devName}</strong>, usted acepta automáticamente estos términos y condiciones.</p>
<hr/>
<h2>1. Propiedad intelectual</h2>
<p>La aplicación, su código fuente, diseño y marcas comerciales son propiedad exclusiva de <strong>${devName}</strong>. No está permitido copiar, modificar ni descompilar la aplicación.</p>
<h2>2. Conexión a Internet y cargos de datos</h2>
<p>Algunas funciones requieren una conexión activa a Internet. El desarrollador no se responsabiliza por interrupciones de red o cargos de su operador móvil.</p>
<h2>3. Limitación de responsabilidad</h2>
<p>La aplicación se proporciona "tal cual" y según disponibilidad, sin garantías expresas o implícitas.</p>
<h2>4. Contacto</h2>
<p>Para consultas sobre estos términos: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'de') {
    return `
<h1>Allgemeine Geschäftsbedingungen (AGB) für ${appName}</h1>
<p><strong>Gültig ab:</strong> ${dateStr}</p>
<p>Durch das Herunterladen oder die Nutzung der App <strong>${appName}</strong> von <strong>${devName}</strong> erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.</p>
<hr/>
<h2>1. Geistiges Eigentum</h2>
<p>Alle Urheberrechte, Marken und Quellcodes der Anwendung bleiben das ausschließliche Eigentum von <strong>${devName}</strong>.</p>
<h2>2. Haftungsbeschränkung</h2>
<p>Die Anwendung wird „wie besehen“ ohne ausdrückliche oder stillschweigende Garantien bereitgestellt.</p>
<h2>3. Kontakt</h2>
<p>Bei Fragen zu diesen Bedingungen erreichen Sie uns unter: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'tr') {
    return `
<h1>${appName} Kullanım Koşulları</h1>
<p><strong>Yürürlük Tarihi:</strong> ${dateStr}</p>
<p><strong>${devName}</strong> tarafından sunulan <strong>${appName}</strong> uygulamasını indirerek veya kullanarak bu kullanım koşullarını kabul etmiş sayılırsınız.</p>
<hr/>
<h2>1. Fikri Mülkiyet Hakları</h2>
<p>Uygulamanın kaynak kodu, tasarımı ve ticari markaları <strong>${devName}</strong> mülkiyetindedir. İzinsiz kopyalanamaz veya değiştirilemez.</p>
<h2>2. Sorumluluk السعي / Sınırlandırması</h2>
<p>Uygulama "olduğu gibi" sunulmaktadır ve kesintisiz çalışacağına dair açık veya zımni garanti verilmemektedir.</p>
<h2>3. İletişim</h2>
<p>Kullanım koşullarıyla ilgili sorularınız için: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'pt') {
    return `
<h1>Termos e Condições para ${appName}</h1>
<p><strong>Data de Vigência:</strong> ${dateStr}</p>
<p>Ao baixar ou usar o aplicativo <strong>${appName}</strong> fornecido por <strong>${devName}</strong>, estes termos se aplicam automaticamente a você.</p>
<hr/>
<h2>1. Propriedade Intelectual</h2>
<p>O aplicativo, incluindo código-fonte, design e marcas registradas, permanece propriedade exclusiva de <strong>${devName}</strong>.</p>
<h2>2. Limitação de Responsabilidade</h2>
<p>O aplicativo é fornecido "como está", sem garantias expressas ou implícitas.</p>
<h2>3. Contato</h2>
<p>Dúvidas sobre estes Termos: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'ru') {
    return `
<h1>Условия использования ${appName}</h1>
<p><strong>Дата вступления в силу:</strong> ${dateStr}</p>
<p>Скачивая или используя приложение <strong>${appName}</strong> от <strong>${devName}</strong>, вы автоматически соглашаетесь с настоящими условиями.</p>
<hr/>
<h2>1. Интеллектуальная собственность</h2>
<p>Все права на исходный код, дизайн и товарные знаки приложения принадлежат <strong>${devName}</strong>.</p>
<h2>2. Ограничение ответственности</h2>
<p>Приложение предоставляется на условиях «как есть» (as is) без каких-либо прямых или косвенных гарантий.</p>
<h2>3. Контакты</h2>
<p>По вопросам условий использования пишите на: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'zh') {
    return `
<h1>${appName} 服务条款</h1>
<p><strong>生效日期：</strong> ${dateStr}</p>
<p>下载或使用由 <strong>${devName}</strong> 提供的 <strong>${appName}</strong> 应用程序，即表示您同意遵守以下服务条款。</p>
<hr/>
<h2>1. 知识产权声明</h2>
<p>本应用程序及其源代码、界面设计和商标权均归 <strong>${devName}</strong> 独家所有，未经许可不得复制、修改或逆向工程。</p>
<h2>2. 免责声明</h2>
<p>本应用按“现状”提供，不附带任何明示或暗示的担保。</p>
<h2>3. 联系方式</h2>
<p>如对本条款有任何疑问，请联系：<a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'ja') {
    return `
<h1>${appName} 利用規約</h1>
<p><strong>発効日：</strong> ${dateStr}</p>
<p><strong>${devName}</strong> が提供する「<strong>${appName}</strong>」をダウンロードまたは利用することにより、本規約に同意したものとみなされます。</p>
<hr/>
<h2>1. 知的財産権</h2>
<p>本アプリに関するすべての著作権、商標権、ソースコードの権利は <strong>${devName}</strong> に帰属します。</p>
<h2>2. 免責事項</h2>
<p>本アプリは「現状有姿」で提供され、明示または黙示を問わずいかなる保証も行いません。</p>
<h2>3. お問い合わせ</h2>
<p>本規約に関するお問い合わせ：<a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'hi') {
    return `
<h1>${appName} के लिए नियम और शर्तें</h1>
<p><strong>प्रभावी तिथि:</strong> ${dateStr}</p>
<p><strong>${devName}</strong> द्वारा निर्मित <strong>${appName}</strong> ऐप को डाउनलोड या उपयोग करके, आप इन शर्तों से सहमत होते हैं।</p>
<hr/>
<h2>1. बौद्धिक संपदा अधिकार</h2>
<p>ऐप का सोर्स कोड, डिज़ाइन और ट्रेडमार्क <strong>${devName}</strong> की अनन्य संपत्ति हैं।</p>
<h2>2. दायित्व की सीमा</h2>
<p>यह सेवा बिना किसी गारंटी के "जैसी है" (as is) के आधार पर प्रदान की जाती है।</p>
<h2>3. संपर्क करें</h2>
<p>किसी भी प्रश्न के लिए संपर्क करें: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  if (lang === 'it') {
    return `
<h1>Termini e Condizioni per ${appName}</h1>
<p><strong>Data di entrata in vigore:</strong> ${dateStr}</p>
<p>Scaricando o utilizzando l'applicazione <strong>${appName}</strong> fornita da <strong>${devName}</strong>, accetti automaticamente i presenti termini.</p>
<hr/>
<h2>1. Proprietà Intellettuale</h2>
<p>L'applicazione, inclusi codice sorgente, design e marchi, resta di proprietà esclusiva di <strong>${devName}</strong>.</p>
<h2>2. Limitazione di Responsabilità</h2>
<p>L'applicazione viene fornita "così com'è" senza garanzie espresse o implicite.</p>
<h2>3. Contatti</h2>
<p>Per domande sui presenti Termini: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
    `.trim();
  }

  return `
<h1>Terms & Conditions for ${appName}</h1>
<p><strong>Effective Date:</strong> ${dateStr}</p>
<p>By downloading, browsing, or using the <strong>${appName}</strong> mobile application, these terms automatically apply to you – please read them carefully before using the app.</p>
<hr/>
<h2>1. Intellectual Property and Licensing</h2>
<p>The Application, including its source code, design, trademarks, and database rights, remains the sole property of <strong>${devName}</strong>. You are not permitted to copy, decompile, or reverse-engineer any part of the service.</p>
<h2>2. Network Connectivity and Data Charges</h2>
<p>Certain functions of the Application require an active internet connection. We cannot take responsibility if the app fails to operate at full functionality in the absence of Wi-Fi or cellular network access.</p>
<h2>3. Limitation of Liability</h2>
<p>The Application is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.</p>
<h2>4. Contact Us</h2>
<p>If you have any questions regarding these Terms & Conditions, please contact us at: <a href="mailto:${s.contactEmail}">${s.contactEmail}</a></p>
  `.trim();
}

function htmlToMarkdown(html) {
  let md = html;
  md = md.replace(/<h1>(.*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2>(.*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<a\s+[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  md = md.replace(/<ul>([\s\S]*?)<\/ul>/gi, (match, p1) => p1.replace(/<li>([\s\S]*?)<\/li>/gi, '- $1\n').trim() + '\n\n');
  md = md.replace(/<p>([\s\S]*?)<\/p>/gi, '$1\n\n');
  md = md.replace(/<hr\s*\/?>/gi, '---\n\n');
  return md.replace(/\n{3,}/g, '\n\n').trim();
}

function createStandaloneHtml(title, bodyContent, lang) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --primary: #4f46e5;
      --border: #e2e8f0;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0b0f19;
        --card: #151c2e;
        --text: #f8fafc;
        --muted: #94a3b8;
        --primary: #818cf8;
        --border: #28344e;
      }
    }
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: var(--bg); color: var(--text); line-height: 1.75; padding: 32px 16px; margin: 0; }
    .wrap { max-width: 760px; margin: 0 auto; background: var(--card); padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid var(--border); }
    h1 { font-size: 26px; font-weight: 800; margin-bottom: 8px; }
    h2 { font-size: 19px; font-weight: 700; margin-top: 28px; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 6px; }
    p { margin-bottom: 16px; font-size: 15px; }
    ul { margin-bottom: 20px; padding-inline-start: 24px; }
    li { margin-bottom: 6px; font-size: 15px; }
    a { color: var(--primary); text-decoration: underline; text-underline-offset: 3px; }
    hr { border: 0; border-top: 1px solid var(--border); margin: 24px 0; }
  </style>
</head>
<body>
  <div class="wrap">
    ${bodyContent}
  </div>
</body>
</html>`;
}

// Export object
const rootObj = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this);
rootObj.GeneratorApp = {
  SUPPORTED_LANGUAGES,
  THIRD_PARTY_SERVICES,
  PII_OPTIONS,
  PRESETS,
  state,
  I18N,
  generatePrivacyPolicyText,
  generateTermsAndConditionsText,
  htmlToMarkdown,
  createStandaloneHtml
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = rootObj.GeneratorApp;
}
