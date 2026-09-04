/**
 * Aroma Works Candles - Interactive Showcase Engine
 * Features:
 * - Dynamic Bilingual Engine (Arabic RTL / French LTR)
 * - Complete 58 Algerian Wilayas mapping
 * - Catalog filtering & responsive cards
 * - WhatsApp direct click-to-order generator
 * - Product detail lightbox / modal
 */

// ==========================================================================
// 1. 58 Algerian Wilayas Data (Arabic & French)
// ==========================================================================
const WILAYAS_LIST = [
  { code: '01', ar: '01 - أدرار', fr: '01 - Adrar' },
  { code: '02', ar: '02 - الشلف', fr: '02 - Chlef' },
  { code: '03', ar: '03 - الأغواط', fr: '03 - Laghouat' },
  { code: '04', ar: '04 - أم البواقي', fr: '04 - Oum El Bouaghi' },
  { code: '05', ar: '05 - باتنة', fr: '05 - Batna' },
  { code: '06', ar: '06 - بجاية', fr: '06 - Béjaïa' },
  { code: '07', ar: '07 - بسكرة', fr: '07 - Biskra' },
  { code: '08', ar: '08 - بشار', fr: '08 - Béchar' },
  { code: '09', ar: '09 - البليدة', fr: '09 - Blida' },
  { code: '10', ar: '10 - البويرة', fr: '10 - Bouira' },
  { code: '11', ar: '11 - تمنراست', fr: '11 - Tamanrasset' },
  { code: '12', ar: '12 - تبسة', fr: '12 - Tébessa' },
  { code: '13', ar: '13 - تلمسان', fr: '13 - Tlemcen' },
  { code: '14', ar: '14 - تيارت', fr: '14 - Tiaret' },
  { code: '15', ar: '15 - تيزي وزو', fr: '15 - Tizi Ouzou' },
  { code: '16', ar: '16 - الجزائر (العاصمة)', fr: '16 - Alger' },
  { code: '17', ar: '17 - الجلفة', fr: '17 - Djelfa' },
  { code: '18', ar: '18 - جيجل', fr: '18 - Jijel' },
  { code: '19', ar: '19 - سطيف', fr: '19 - Sétif' },
  { code: '20', ar: '20 - سعيدة', fr: '20 - Saïda' },
  { code: '21', ar: '21 - سكيكدة', fr: '21 - Skikda' },
  { code: '22', ar: '22 - سيدي بلعباس', fr: '22 - Sidi Bel Abbès' },
  { code: '23', ar: '23 - عنابة', fr: '23 - Annaba' },
  { code: '24', ar: '24 - قالمة', fr: '24 - Guelma' },
  { code: '25', ar: '25 - قسنطينة', fr: '25 - Constantine' },
  { code: '26', ar: '26 - المدية', fr: '26 - Médéa' },
  { code: '27', ar: '27 - مستغانم', fr: '27 - Mostaganem' },
  { code: '28', ar: '28 - المسيلة', fr: '28 - M\'Sila' },
  { code: '29', ar: '29 - معسكر', fr: '29 - Mascara' },
  { code: '30', ar: '30 - ورقلة', fr: '30 - Ouargla' },
  { code: '31', ar: '31 - وهران', fr: '31 - Oran' },
  { code: '32', ar: '32 - البيض', fr: '32 - El Bayadh' },
  { code: '33', ar: '33 - إليزي', fr: '33 - Illizi' },
  { code: '34', ar: '34 - برج بوعريريج', fr: '34 - Bordj Bou Arréridj' },
  { code: '35', ar: '35 - بومرداس', fr: '35 - Boumerdès' },
  { code: '36', ar: '36 - الطارف', fr: '36 - El Tarf' },
  { code: '37', ar: '37 - تندوف', fr: '37 - Tindouf' },
  { code: '38', ar: '38 - تسمسيلت', fr: '38 - Tissemsilt' },
  { code: '39', ar: '39 - الوادي', fr: '39 - El Oued' },
  { code: '40', ar: '40 - خنشلة', fr: '40 - Khenchela' },
  { code: '41', ar: '41 - سوق أهراس', fr: '41 - Souk Ahras' },
  { code: '42', ar: '42 - تيبازة', fr: '42 - Tipaza' },
  { code: '43', ar: '43 - ميلة', fr: '43 - Mila' },
  { code: '44', ar: '44 - عين الدفلى', fr: '44 - Aïn Defla' },
  { code: '45', ar: '45 - النعامة', fr: '45 - Naâma' },
  { code: '46', ar: '46 - عين تموشنت', fr: '46 - Aïn Témouchent' },
  { code: '47', ar: '47 - غرداية', fr: '47 - Ghardaïa' },
  { code: '48', ar: '48 - غليزان', fr: '48 - Relizane' },
  { code: '49', ar: '49 - تيميمون', fr: '49 - Timimoun' },
  { code: '50', ar: '50 - برج باجي مختار', fr: '50 - Bordj Badji Mokhtar' },
  { code: '51', ar: '51 - أولاد جلال', fr: '51 - Ouled Djellal' },
  { code: '52', ar: '52 - بني عباس', fr: '52 - Béni Abbès' },
  { code: '53', ar: '53 - عين صالح', fr: '53 - In Salah' },
  { code: '54', ar: '54 - عين قزام', fr: '54 - In Guezzam' },
  { code: '55', ar: '55 - تقرت', fr: '55 - Touggourt' },
  { code: '56', ar: '56 - جانت', fr: '56 - Djanet' },
  { code: '57', ar: '57 - المغير', fr: '57 - El M\'Ghair' },
  { code: '58', ar: '58 - المنيعة', fr: '58 - El Meniaa' }
];

// ==========================================================================
// 2. Product Catalog Models
// ==========================================================================
const CANDLE_PRODUCTS = [
  {
    id: 'bourbon-vanilla-luxury',
    category: 'luxury-cube',
    image: 'photo_3_2026-09-04_14-48-35.jpg',
    colorHex: '#9E2A2B',
    burnTime: '35-40 Hours',
    title: {
      ar: 'Bourbon Vanilla (فانيليا بوربون)',
      fr: 'Bourbon Vanilla'
    },
    colorName: {
      ar: 'أحمر ياقوتي دافئ مع شريط ساتان نبيذي وغطاء مقلم ذهبي',
      fr: 'Rouge Rubis Chaud avec ruban bordeaux satiné et couvercle rayé'
    },
    scentNotes: {
      ar: 'فانيليا بوربون الفاخرة، كراميل دافئ، لمسات خشبية مدخنة وعنبر ذهبي غني.',
      fr: 'Vanille Bourbon de Madagascar, caramel chaud, notes boisées fumées et ambre doré.'
    },
    features: {
      ar: ['علبة مكعبة زجاجية فاخرة', 'شريط هدايا ساتان', 'ملصق ذهبي فاخر'],
      fr: ['Cube en verre de luxe', 'Ruban cadeau satiné', 'Étiquette dorée gaufrée']
    },
    typeTag: {
      ar: 'علبة هدايا فاخرة',
      fr: 'Coffret Cadeau Luxe'
    }
  },
  {
    id: 'rosy-musk-luxury',
    category: 'luxury-cube',
    image: 'photo_9_2026-09-04_14-48-35.jpg',
    colorHex: '#F2D7D9',
    burnTime: '35-40 Hours',
    title: {
      ar: 'Rosy Musk (المسك الوردي)',
      fr: 'Rosy Musk'
    },
    colorName: {
      ar: 'أبيض عاجي كريمي ناعم مع شريط ساتان وردي دراقي وغطاء مقلم',
      fr: 'Ivoire Crème Poudré avec ruban rose poudré délicat et couvercle rayé'
    },
    scentNotes: {
      ar: 'بتلات الورد الجوري الناعمة، مسك أبيض مخملي، بودرة زهرية ولمسات كشمير رقيقة.',
      fr: 'Pétales de rose délicats, musc blanc soyeux, accords poudrés et bois de cachemire.'
    },
    features: {
      ar: ['عطر مهدئ ومريح', 'زجاج ثقيل ومقاوم للحرارة', 'مثالية لغرف النوم'],
      fr: ['Senteur apaisante', 'Verre thermique haute qualité', 'Idéale pour chambre & détente']
    },
    typeTag: {
      ar: 'علبة هدايا فاخرة',
      fr: 'Coffret Cadeau Luxe'
    }
  },
  {
    id: 'noble-forest-luxury',
    category: 'luxury-cube',
    image: 'photo_5_2026-09-04_14-48-35.jpg',
    colorHex: '#748B75',
    burnTime: '35-40 Hours',
    title: {
      ar: 'Noble Forest (الغابة النبيلة)',
      fr: 'Noble Forest'
    },
    colorName: {
      ar: 'أخضر غابي فاتح (سيلادون) مع شريط ساتان زمردي ملكي',
      fr: 'Vert Sauge Forestier avec ruban vert émeraude impérial'
    },
    scentNotes: {
      ar: 'إبر الصنوبر الطبيعية، أخشاب الأرز العريقة، أوكالبتوس منعش وتراب الغابة بعد المطر.',
      fr: 'Aiguilles de pin frais, bois de cèdre noble, eucalyptus revigorant et mousse végétale.'
    },
    features: {
      ar: ['نفحات نقية ومنعشة', 'شمع صويا نقي', 'تصميم راقٍ للمجالس والمكاتب'],
      fr: ['Notes fraîches & boisées', '100% cire végétale', 'Design raffiné pour salon & bureau']
    },
    typeTag: {
      ar: 'علبة هدايا فاخرة',
      fr: 'Coffret Cadeau Luxe'
    }
  },
  {
    id: 'luxury-trio-box',
    category: 'luxury-cube',
    image: 'photo_8_2026-09-04_14-48-35.jpg',
    colorHex: '#C58940',
    burnTime: '120 Hours (مجموع)',
    title: {
      ar: 'Trio Prestige (المجموعة الملكية الثلاثية)',
      fr: 'Trio Prestige (Collection Coffrets)'
    },
    colorName: {
      ar: 'تشكيلة متكاملة من 3 ألوان وروائح: (الوردي العاجي، الأخضر الزمردي، والأحمر البورجوندي)',
      fr: 'Assortiment complet de 3 teintes : Rosy Musk, Noble Forest & Bourbon Vanilla'
    },
    scentNotes: {
      ar: 'تجمع بين الدفء الغني، الانتعاش العشبي، والرقة الوردية. الهدية المثالية للمناسبات الخاصة.',
      fr: 'Combinaison parfaite entre gourmandise, fraîcheur sylvestre et douceur florale.'
    },
    features: {
      ar: ['3 شموع كاملة بالحجم الكبير', 'أشرطة هدايا فاخرة', 'أفضل خيار للإهداء الفاخر'],
      fr: ['3 bougies grand format', 'Rubans satinés signature', 'Le cadeau prestigieux par excellence']
    },
    typeTag: {
      ar: 'طقم هدايا ملكي',
      fr: 'Set Prestige 3 Pièces'
    }
  },
  {
    id: 'apothecary-duo-cork',
    category: 'cork-jar',
    image: 'photo_4_2026-09-04_14-48-35.jpg',
    colorHex: '#84A59D',
    burnTime: '45-50 Hours',
    title: {
      ar: 'Vanilla Cotton & Sage Teakwood (برطمان الفلين الكلاسيكي)',
      fr: 'Vanilla Cotton & Sage Teakwood'
    },
    colorName: {
      ar: 'أبيض نقي (Vanilla & Cotton) + أزرق مخضر مائي (Sage & Teakwood) بغطاء فلين طبيعي',
      fr: 'Blanc Pur (Vanilla Cotton) & Vert d\'Eau Doux (Sage Teakwood) avec bouchon en liège'
    },
    scentNotes: {
      ar: 'الموديل الأول: قطن ناعم وفانيليا منعشة. الموديل الثاني: ميرمية عطرية وخشب الساج الأنيق.',
      fr: 'Version 1 : Coton doux & vanille fraîche. Version 2 : Sauge apaisante & bois de teck précieux.'
    },
    features: {
      ar: ['زجاج صيدلاني كلاسيكي عتيق', 'سدادة فلين محكمة لحفظ العطر', 'قابلة لإعادة الاستخدام'],
      fr: ['Bocal apothicaire vintage', 'Bouchon liège protecteur d\'arôme', 'Contenant réutilisable']
    },
    typeTag: {
      ar: 'برطمان فلين كلاسيكي',
      fr: 'Bocal Liège Vintage'
    }
  },
  {
    id: 'matte-tin-travel-collection',
    category: 'matte-tin',
    image: 'photo_7_2026-09-04_14-48-35.jpg',
    colorHex: '#4A6B82',
    burnTime: '25-30 Hours',
    title: {
      ar: 'Matte Tin Collection (تشكيلة العلب المعدنية الملونة)',
      fr: 'Matte Tin Collection (Boîtes Métal)'
    },
    colorName: {
      ar: '5 ألوان مات أنيقة: أزرق سماوي، أسود فحمي، وردي ترابي، كراميل دافئ، وأخضر زيتوني',
      fr: '5 teintes mates : Bleu Ciel, Noir Ébène, Rose Poudré, Caramel Épicé & Vert Olive'
    },
    scentNotes: {
      ar: 'متوفرة بالروائح: Fresh Blossom, Myrrh & Sandalwood, Midnight Summer, Spicy Bread, Green Meadow.',
      fr: 'Disponibles en : Fresh Blossom, Myrrh & Sandalwood, Midnight Summer, Spicy Bread & Green Meadow.'
    },
    features: {
      ar: ['مقاومة للصدمات وسهلة الحمل', 'ألوان عصرية مات فخمة', 'غطاء محكم يحافظ على الزيت العطري'],
      fr: ['Idéale pour le voyage', 'Finition mate ultra moderne', 'Couvercle étanche hermétique']
    },
    typeTag: {
      ar: 'علب معدنية ملونة',
      fr: 'Boîte Métallique Voyage'
    }
  },
  {
    id: 'citronella-lantern',
    category: 'lantern',
    image: 'photo_6_2026-09-04_14-48-35.jpg',
    colorHex: '#D47334',
    burnTime: '10 Hours',
    title: {
      ar: 'Bougie Citronnelle (فانوس العنبر - سيترونيلا)',
      fr: 'Bougie Citronnelle (Lanterne Ambrée)'
    },
    colorName: {
      ar: 'زجاج عنبري دافئ مضلع (لون اليقطين الدافئ) مع مقبض معدني للتعليق',
      fr: 'Verre ambré citrouille strié avec anse métallique pour suspension'
    },
    scentNotes: {
      ar: 'خلاصة زيت السيترونيلا النقي الطبيعي 100% برائحة ليمونية منعشة تطرد البعوض والحشرات بفعالية.',
      fr: 'Huile essentielle de citronnelle pure, parfum frais d\'agrumes répulsif naturel anti-moustiques.'
    },
    features: {
      ar: ['طارد طبيعي فعال للبعوض', 'مقبض معدني عملي للتعليق', 'مثالية للشرفات والحدائق والسهرات'],
      fr: ['Anti-moustiques naturel', 'Anse métal pratique à suspendre', 'Parfaite pour terrasse & jardin']
    },
    typeTag: {
      ar: 'فانوس سيترونيلا',
      fr: 'Lanterne Citronnelle'
    }
  },
  {
    id: 'fresh-blossom-tin',
    category: 'matte-tin',
    image: 'photo_2_2026-09-04_14-48-35.jpg',
    colorHex: '#3D617D',
    burnTime: '25-30 Hours',
    title: {
      ar: 'Fresh Blossom Tin (زهر الربيع الأزرق)',
      fr: 'Fresh Blossom Tin'
    },
    colorName: {
      ar: 'علبة معدنية زرقاء بحرية غير لامعة (Bleu Denim Mat)',
      fr: 'Boîte métallique bleu jean mat élégant'
    },
    scentNotes: {
      ar: 'باقة من أزهار البرتقال، الياسمين الأبيض، ورذاذ الصباح المنعش الذي يبعث على الطاقة والتفاؤل.',
      fr: 'Bouquet de fleurs d\'oranger, jasmin blanc et brise printanière vivifiante.'
    },
    features: {
      ar: ['حجم مدمج وأنيق', 'انتشار فوري للرائحة', 'غطاء محكم للأمان'],
      fr: ['Format compact nomade', 'Diffusion aromatique rapide', 'Fermeture sécurisée']
    },
    typeTag: {
      ar: 'علبة معدنية ملونة',
      fr: 'Boîte Métallique Voyage'
    }
  },
  {
    id: 'spicy-bread-tin',
    category: 'matte-tin',
    image: 'photo_7_2026-09-04_14-48-35.jpg',
    colorHex: '#9E643C',
    burnTime: '25-30 Hours',
    title: {
      ar: 'Spicy Bread (خبز التوابل الدافئ)',
      fr: 'Spicy Bread Tin'
    },
    colorName: {
      ar: 'علبة معدنية بنية كراميل مطفية (Terracotta Ochre)',
      fr: 'Boîte métallique caramel épicé mat chaleureux'
    },
    scentNotes: {
      ar: 'قرفة دافئة، زنجبيل مطحون، جوزة الطيب ولمسات عسل المخابز التي تمنحك إحساساً عميقاً بالألفة.',
      fr: 'Cannelle chaleureuse, pain d\'épices, muscade et miel fondant des jours d\'hiver.'
    },
    features: {
      ar: ['أجواء شتوية دافئة جداً', 'عطر غني ومريح للنفس', 'فتيل قطني هادئ'],
      fr: ['Ambiance ultra cocooning', 'Parfum réconfortant', 'Mèche coton silencieuse']
    },
    typeTag: {
      ar: 'علبة معدنية ملونة',
      fr: 'Boîte Métallique Voyage'
    }
  }
];

// ==========================================================================
// 3. Translations Dictionary (Arabic & French)
// ==========================================================================
const TRANSLATIONS = {
  ar: {
    page_title: 'Aroma Works Candles | تشكيلة الشموع المعطرة الفاخرة',
    announcement_badge: 'خدمة التوصيل السريع',
    announcement_text: '🚚 التوصيل متوفر وسريع لجميع الولايات الـ 58 (لباب المنزل أو نقطة الاستلام)!',
    brand_subtitle: 'شموع معطرة فاخرة مصنوعة يدوياً',
    nav_about: 'عن الشموع',
    nav_catalog: 'التشكيلة المتوفرة',
    nav_quality: 'معايير الجودة',
    nav_order: 'طلب سريع',
    lang_button_label: 'Français',
    cta_whatsapp_header: 'واتساب',
    
    // Hero
    hero_badge: 'أجواء راقية وروائح تأسر الحواس',
    hero_title_prefix: 'تشكيلة شموع',
    hero_title_suffix: 'سحر الضوء وعبق الطبيعة',
    hero_description: 'نبتكر شموعاً معطرة تسكب يدوياً بكل عناية وشغف. نعتمد على شمع الصويا الطبيعي 100% والزيوت العطرية النقية لنمنح منزلك ومكتبك لحظات من الدفء والهدوء والسكينة التي تدوم طويلاً.',
    delivery_card_title: 'التوصيل متوفر لجميع الولايات الـ 58',
    delivery_card_desc: 'طلبك يصلك بأمان وتغليف محكم إلى باب منزلك في أي ولاية في الجزائر.',
    contact_phone_label: 'الهاتف للطلب المباشر',
    contact_wa_label: 'واتساب شات',
    contact_ig_label: 'حساب الإنستغرام',
    btn_explore_catalog: 'تصفح الموديلات المتوفرة',
    btn_direct_order: 'طلب سريع الآن',
    banner_badge_text: '100% شمع طبيعي معطر',

    // Quality
    quality_tag: 'لماذا تختار Aroma Works؟',
    quality_title: 'جودة تصنع الفارق في كل تفصيلة',
    q1_title: 'شمع طبيعي نقي 100%',
    q1_desc: 'مستخلص من مصادر نباتية صديقة للبيئة، يحترق بنظافة تامة بدون دخان أسود أو مواد سامة ليحافظ على نقاء هواء منزلك.',
    q2_title: 'زيوت عطرية فاخرة ومركزة',
    q2_desc: 'نختار أرقى الزيوت العطرية المركبة بعناية لتقديم انتشار واسع ورائحة متجانسة تدوم وتملأ المكان بالسكينة والبهجة.',
    q3_title: 'فتائل قطنية طبيعية',
    q3_desc: 'فتائل قطنية خالية من الرصاص تضمن احتراقاً منتظماً وهادئاً ولهباً دافئاً متوازناً يمنحك أطول فترة اشتعال ممكنة.',
    q4_title: 'صناعة يدوية بشغف',
    q4_desc: 'كل شمعة تسكب وتزين يدوياً بلمسات فنية متقنة، مما يجعلها تحفة ديكورية مثالية لمنزلك أو كهدية فاخرة لمن تحب.',
    wilayas_banner_title: 'شحن وتوصيل متاح لكل ولايات الجزائر الـ 58',
    wilayas_banner_desc: 'سواء كنت في العاصمة، وهران، قسنطينة، سطيف، باتنة، غرداية، أو أقصى الجنوب.. طلبك يصلك أينما كنت بتغليف مضاد للصدمات.',
    wilayas_banner_btn: 'اختر ولايتك واطلب الآن',

    // Catalog
    catalog_tag: 'التشكيلة المتوفرة حالياً',
    catalog_title: 'موديلات الشموع والروائح الفاخرة',
    catalog_subtitle: 'تصفح الموديلات المتوفرة حالياً بألوانها وأحجامها مع إمكانية الطلب الفوري بضغطة واحدة.',
    filter_all: 'جميع الموديلات (9)',
    filter_luxury: 'علب الهدايا الفاخرة',
    filter_tin: 'العلب المعدنية الملونة',
    filter_cork: 'برطمانات الفلين الكلاسيكية',
    filter_lantern: 'فانوس السيترونيلا',
    badge_in_stock: 'متوفر حالياً',
    btn_order_whatsapp: 'اطلب عبر الواتساب',
    btn_view_quick: 'معاينة التفاصيل',
    card_color_label: 'اللون والتصميم:',
    card_scent_label: 'النوتات العطرية:',
    card_burn_label: 'مدة الاشتعال:',

    // Order Section
    order_tag: 'طلب مباشر وسريع',
    order_title: 'جاهز لإضفاء الدفء على منزلك؟',
    order_desc: 'اختر الشمعة المفضلة لديك وولايتك، وسيتم تحضير رسالة الواتساب فوراً، أو يمكنك الاتصال بنا مباشرة على الهاتف.',
    order_phone_title: 'الاتصال الهاتفي المباشر:',
    order_wa_title: 'المحادثة السريعة عبر الواتساب:',
    order_ig_title: 'صفحتنا على إنستغرام:',
    order_guarantee_text: 'تغليف آمن ومحمي ضد الكسر والصدمات مع ضمان وصول الشمعة بحالتها المثالية.',
    form_title: 'نموذج الطلب السريع',
    form_name_label: 'الاسم الكامل',
    form_name_placeholder: 'مثال: أمينة / محمد',
    form_phone_label: 'رقم الهاتف للتواصل',
    form_phone_placeholder: '06... / 05... / 07...',
    form_wilaya_label: 'الولاية (58 ولاية متوفرة)',
    form_wilaya_placeholder: 'اختر ولايتك...',
    form_candle_label: 'الموديل المطلوب',
    form_candle_placeholder: 'اختر الشمعة المطلوبة...',
    form_qty_label: 'الكمية',
    form_notes_label: 'ملاحظات إضافية (تغليف هدية / تفاصيل العنوان)',
    form_notes_placeholder: 'اكتب أي رغبة خاصة هنا...',
    form_submit_wa: 'إرسال الطلب عبر الواتساب',
    form_submit_call: 'أو اتصل بنا الآن',

    // Footer
    footer_about: 'علامة تجارية متخصصة في صناعة الشموع المعطرة الفاخرة بأعلى معايير الجودة والأناقة، مع خدمة التوصيل إلى جميع الولايات.',
    footer_links_title: 'روابط سريعة',
    footer_contact_title: 'تواصل معنا',
    footer_delivery_note: 'توصيل متوفر لجميع الولايات (58 ولاية)',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_craft: 'صُنعت بحب وشغف لإسعاد حواسك 🕯️',
    float_wa: 'اطلب واتساب'
  },
  fr: {
    page_title: 'Aroma Works Candles | Collection de Bougies Parfumées de Luxe',
    announcement_badge: 'Livraison Rapide',
    announcement_text: '🚚 Livraison disponible et rapide vers les 58 wilayas d\'Algérie (à domicile ou point relais) !',
    brand_subtitle: 'Bougies parfumées d\'exception faites à la main',
    nav_about: 'À propos',
    nav_catalog: 'Nos Modèles',
    nav_quality: 'Qualité & Savoir-faire',
    nav_order: 'Commander',
    lang_button_label: 'العربية',
    cta_whatsapp_header: 'WhatsApp',

    // Hero
    hero_badge: 'Ambiance chaleureuse & arômes envoûtants',
    hero_title_prefix: 'Collection Bougies',
    hero_title_suffix: 'L\'élégance de la lumière naturelle',
    hero_description: 'Nous créons avec passion des bougies parfumées coulées à la main. Formulées avec de la cire de soja 100% naturelle et des essences raffinées pour insuffler paix, chaleur et sérénité dans votre intérieur.',
    delivery_card_title: 'Livraison disponible vers les 58 wilayas',
    delivery_card_desc: 'Colis soigneusement sécurisé et expédié rapidement directement chez vous partout en Algérie.',
    contact_phone_label: 'Appel Direct Commande',
    contact_wa_label: 'Chat WhatsApp',
    contact_ig_label: 'Compte Instagram',
    btn_explore_catalog: 'Découvrir nos modèles',
    btn_direct_order: 'Commander maintenant',
    banner_badge_text: '100% Cire naturelle parfumée',

    // Quality
    quality_tag: 'Pourquoi choisir Aroma Works ?',
    quality_title: 'Une qualité d\'excellence dans chaque détail',
    q1_title: '100% Cire Naturelle Pure',
    q1_desc: 'Issues de ressources végétales renouvelables. Combustion saine et propre, garantie sans suie noire ni substances toxiques.',
    q2_title: 'Huiles Parfumées Haut de Gamme',
    q2_desc: 'Des fragrances minutieusement élaborées pour une diffusion intense, équilibrée et durable qui sublime votre espace de vie.',
    q3_title: 'Mèches en Pur Coton Naturel',
    q3_desc: 'Mèches tressées en pur coton sans plomb assurant une flamme douce, régulière et une durée de combustion prolongée.',
    q4_title: 'Artisanat Fait Main avec Passion',
    q4_desc: 'Chaque pièce est coulée et habillée manuellement avec un soin minutieux, parfaite comme objet déco ou cadeau prestigieux.',
    wilayas_banner_title: 'Expédition et livraison partout dans les 58 wilayas',
    wilayas_banner_desc: 'D\'Alger à Oran, Constantine, Sétif, Batna, Ghardaïa ou le grand Sud, recevez vos bougies avec un emballage ultra protecteur.',
    wilayas_banner_btn: 'Sélectionnez votre wilaya',

    // Catalog
    catalog_tag: 'Collection Disponible',
    catalog_title: 'Modèles & Senteurs Raffinées',
    catalog_subtitle: 'Découvrez nos créations actuelles, leurs nuances de couleurs et leurs arômes avec commande instantanée.',
    filter_all: 'Tous les Modèles (9)',
    filter_luxury: 'Coffrets Cadeaux Luxe',
    filter_tin: 'Boîtes Métal Déco',
    filter_cork: 'Bocaux en Liège Vintage',
    filter_lantern: 'Lanterne Citronnelle',
    badge_in_stock: 'En Stock',
    btn_order_whatsapp: 'Commander via WhatsApp',
    btn_view_quick: 'Voir Détails',
    card_color_label: 'Couleur & Design :',
    card_scent_label: 'Notes Olfactives :',
    card_burn_label: 'Temps de combustion :',

    // Order Section
    order_tag: 'Commande Directe & Simple',
    order_title: 'Prêt à illuminer votre intérieur ?',
    order_desc: 'Choisissez votre modèle préféré et votre wilaya. Le message WhatsApp sera pré-rempli automatiquement en un clic !',
    order_phone_title: 'Contact Téléphonique Direct :',
    order_wa_title: 'Assistance Rapide WhatsApp :',
    order_ig_title: 'Page Officielle Instagram :',
    order_guarantee_text: 'Emballage soigné antichoc garantissant l\'arrivée intacte de votre bougie chez vous.',
    form_title: 'Formulaire de Commande Express',
    form_name_label: 'Nom & Prénom',
    form_name_placeholder: 'Ex : Amina / Mohamed',
    form_phone_label: 'Numéro de téléphone',
    form_phone_placeholder: '06... / 05... / 07...',
    form_wilaya_label: 'Wilaya de livraison (58 Wilayas)',
    form_wilaya_placeholder: 'Choisissez votre wilaya...',
    form_candle_label: 'Modèle de bougie souhaité',
    form_candle_placeholder: 'Sélectionnez votre bougie...',
    form_qty_label: 'Quantité',
    form_notes_label: 'Remarques (Emballage cadeau / Adresse détaillée)',
    form_notes_placeholder: 'Vos précisions éventuelles ici...',
    form_submit_wa: 'Envoyer ma commande sur WhatsApp',
    form_submit_call: 'Ou Appelez-nous Directement',

    // Footer
    footer_about: 'Maison artisanale spécialisée dans la confection de bougies parfumées de prestige, avec livraison dans les 58 wilayas.',
    footer_links_title: 'Navigation',
    footer_contact_title: 'Contactez-nous',
    footer_delivery_note: 'Livraison vers les 58 wilayas d\'Algérie',
    footer_rights: 'Tous droits réservés.',
    footer_craft: 'Façonné avec amour pour éveiller vos sens 🕯️',
    float_wa: 'WhatsApp'
  }
};

// Current active language: default 'ar' (Arabic)
let currentLang = 'ar';
let activeCategoryFilter = 'all';

// ==========================================================================
// 4. Initialization & Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language from localStorage or default 'ar'
  const savedLang = localStorage.getItem('aromaworks_lang');
  if (savedLang && (savedLang === 'ar' || savedLang === 'fr')) {
    currentLang = savedLang;
  }

  // Setup Language Switcher
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  // Setup Catalog Filter Buttons
  setupFilterTabs();

  // Populate Wilayas Dropdown
  populateWilayasDropdown();

  // Populate Candle Choices Dropdown
  populateCandleDropdown();

  // Render Products
  renderProducts();

  // Apply Language Strings
  applyLanguage(currentLang);
});

// ==========================================================================
// 5. Language Switching Functionality
// ==========================================================================
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'fr' : 'ar';
  localStorage.setItem('aromaworks_lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const isRtl = lang === 'ar';
  const html = document.documentElement;

  // Set HTML attributes
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

  // Update button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = TRANSLATIONS[lang].lang_button_label;
  }

  // Update Page Title
  document.title = TRANSLATIONS[lang].page_title;

  // Translate all [data-i18n] text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Translate all [data-i18n-placeholder] inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
    }
  });

  // Refresh Dropdowns & Catalog
  populateWilayasDropdown();
  populateCandleDropdown();
  renderProducts();
}

// ==========================================================================
// 6. Wilayas & Candle Dropdowns Populators
// ==========================================================================
function populateWilayasDropdown() {
  const select = document.getElementById('customerWilaya');
  if (!select) return;

  const currentVal = select.value;
  const placeholderText = TRANSLATIONS[currentLang].form_wilaya_placeholder;

  let optionsHtml = `<option value="" disabled ${!currentVal ? 'selected' : ''}>${placeholderText}</option>`;

  WILAYAS_LIST.forEach(wilaya => {
    const name = currentLang === 'ar' ? wilaya.ar : wilaya.fr;
    const isSelected = currentVal === name ? 'selected' : '';
    optionsHtml += `<option value="${name}" ${isSelected}>${name}</option>`;
  });

  select.innerHTML = optionsHtml;
}

function populateCandleDropdown() {
  const select = document.getElementById('candleChoice');
  if (!select) return;

  const currentVal = select.value;
  const placeholderText = TRANSLATIONS[currentLang].form_candle_placeholder;

  let optionsHtml = `<option value="" disabled ${!currentVal ? 'selected' : ''}>${placeholderText}</option>`;

  CANDLE_PRODUCTS.forEach(prod => {
    const title = prod.title[currentLang];
    const isSelected = currentVal === title ? 'selected' : '';
    optionsHtml += `<option value="${title}" ${isSelected}>${title}</option>`;
  });

  select.innerHTML = optionsHtml;
}

// ==========================================================================
// 7. Product Catalog Rendering & Filtering
// ==========================================================================
function setupFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });
}

function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const filtered = activeCategoryFilter === 'all'
    ? CANDLE_PRODUCTS
    : CANDLE_PRODUCTS.filter(p => p.category === activeCategoryFilter);

  const t = TRANSLATIONS[currentLang];

  container.innerHTML = filtered.map(prod => {
    const title = prod.title[currentLang];
    const colorDesc = prod.colorName[currentLang];
    const notes = prod.scentNotes[currentLang];
    const type = prod.typeTag[currentLang];
    const featuresList = prod.features[currentLang];

    // Pre-encoded WhatsApp link for this specific product
    const waText = currentLang === 'ar'
      ? `مرحباً Aroma Works، أريد طلب شمعة: ${title} (${colorDesc}). الرجاء تزويدي بمعلومات التوصيل لولايتي.`
      : `Bonjour Aroma Works, je souhaite commander la bougie : ${title} (${colorDesc}). Merci de m'indiquer les modalités de livraison.`;

    const waLink = `https://wa.me/213656102517?text=${encodeURIComponent(waText)}`;

    return `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-image-box" onclick="openProductModal('${prod.id}')">
          <img src="${prod.image}" alt="${title}" class="product-img" loading="lazy">
          <div class="product-badges">
            <span class="badge-stock">
              <span class="pulse-dot"></span>
              ${t.badge_in_stock}
            </span>
            <span class="badge-type">${type}</span>
          </div>
          <div class="view-details-overlay">
            <span class="btn-view-quick">${t.btn_view_quick}</span>
          </div>
        </div>

        <div class="product-details">
          <h3 class="product-title">${title}</h3>
          
          <div class="product-color-row">
            <span class="color-dot" style="background-color: ${prod.colorHex};"></span>
            <span><strong>${t.card_color_label}</strong> ${colorDesc}</span>
          </div>

          <div class="product-notes">
            <strong>${t.card_scent_label}</strong> ${notes}
          </div>

          <div class="product-features-tags">
            <span class="feature-tag">⏱️ ${prod.burnTime}</span>
            ${featuresList.map(f => `<span class="feature-tag">${f}</span>`).join('')}
          </div>

          <div class="product-actions">
            <a href="${waLink}" target="_blank" rel="noopener" class="btn-card-wa" title="${t.btn_order_whatsapp}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
              <span>${t.btn_order_whatsapp}</span>
            </a>
            <button type="button" class="btn-card-details" onclick="openProductModal('${prod.id}')" title="${t.btn_view_quick}">
              🔍
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 8. Product Modal / Lightbox
// ==========================================================================
function openProductModal(productId) {
  const prod = CANDLE_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  const t = TRANSLATIONS[currentLang];

  const title = prod.title[currentLang];
  const colorDesc = prod.colorName[currentLang];
  const notes = prod.scentNotes[currentLang];
  const type = prod.typeTag[currentLang];

  const waText = currentLang === 'ar'
    ? `مرحباً Aroma Works، أريد طلب شمعة: ${title} (${colorDesc}).`
    : `Bonjour Aroma Works, je souhaite commander la bougie : ${title} (${colorDesc}).`;

  const waLink = `https://wa.me/213656102517?text=${encodeURIComponent(waText)}`;

  modalContent.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-img-box">
        <img src="${prod.image}" alt="${title}" class="modal-img">
      </div>
      <div class="modal-info">
        <div class="modal-badge-row">
          <span class="badge-stock"><span class="pulse-dot"></span> ${t.badge_in_stock}</span>
          <span class="badge-type">${type}</span>
        </div>
        <h2 class="modal-title">${title}</h2>
        <p class="modal-color-spec">✨ ${colorDesc}</p>
        
        <div class="modal-scent-notes">
          <strong>${t.card_scent_label}</strong><br>
          ${notes}
        </div>

        <ul class="modal-specs-list">
          <li><strong>⏱️ ${t.card_burn_label}</strong> ${prod.burnTime}</li>
          <li><strong>🌱 الشمع:</strong> 100% شمع صويا طبيعي صديق للبيئة</li>
          <li><strong>🚚 التوصيل:</strong> متوفر وسريع لجميع الولايات الـ 58</li>
        </ul>

        <div style="display: flex; gap: 10px; flex-direction: column;">
          <a href="${waLink}" target="_blank" rel="noopener" class="modal-wa-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.399C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
            <span>${t.btn_order_whatsapp}</span>
          </a>
          <button type="button" class="btn-secondary" style="justify-content: center;" onclick="selectInOrderForm('${title}'); closeModal();">
            📝 ${currentLang === 'ar' ? 'ملء نموذج الطلب بهذه الشمعة' : 'Commander via formulaire'}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close modal on escape key or outside click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.addEventListener('click', (e) => {
  const modal = document.getElementById('productModal');
  if (e.target === modal) closeModal();
});

function selectInOrderForm(candleTitle) {
  const select = document.getElementById('candleChoice');
  if (select) {
    select.value = candleTitle;
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ==========================================================================
// 9. Quick Order Form & WhatsApp Link Generator
// ==========================================================================
function adjustQty(delta) {
  const qtyInput = document.getElementById('candleQty');
  if (!qtyInput) return;
  let val = parseInt(qtyInput.value) || 1;
  val = Math.max(1, Math.min(50, val + delta));
  qtyInput.value = val;
}

function submitOrder() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const wilaya = document.getElementById('customerWilaya').value;
  const candle = document.getElementById('candleChoice').value;
  const qty = document.getElementById('candleQty').value;
  const notes = document.getElementById('orderNotes').value.trim();

  if (!wilaya || !candle) {
    alert(currentLang === 'ar' ? 'يرجى اختيار الولاية والموديل المطلوب.' : 'Veuillez sélectionner votre wilaya et le modèle souhaité.');
    return;
  }

  let message = '';
  if (currentLang === 'ar') {
    message = `🕯️ *طلب جديد من متجر Aroma Works Candles*\n\n`
      + `👤 *اسم الزبون:* ${name}\n`
      + `📞 *رقم الهاتف:* ${phone}\n`
      + `📍 *الولاية:* ${wilaya}\n`
      + `✨ *الموديل المطلوب:* ${candle}\n`
      + `🔢 *الكمية:* ${qty}\n`;
    if (notes) {
      message += `📝 *ملاحظات:* ${notes}\n`;
    }
    message += `\nيرجى تأكيد الطلب وتزويدي بسعر الإجمالي مع التوصيل. شكراً!`;
  } else {
    message = `🕯️ *Nouvelle Commande - Aroma Works Candles*\n\n`
      + `👤 *Nom Client :* ${name}\n`
      + `📞 *Téléphone :* ${phone}\n`
      + `📍 *Wilaya :* ${wilaya}\n`
      + `✨ *Modèle :* ${candle}\n`
      + `🔢 *Quantité :* ${qty}\n`;
    if (notes) {
      message += `📝 *Remarques :* ${notes}\n`;
    }
    message += `\nMerci de confirmer la commande avec les frais de livraison.`;
  }

  const encodedUrl = `https://wa.me/213656102517?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// Global Window Bindings for mobile inline events
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.adjustQty = adjustQty;
window.submitOrder = submitOrder;
window.selectInOrderForm = selectInOrderForm;
window.toggleLanguage = toggleLanguage;
