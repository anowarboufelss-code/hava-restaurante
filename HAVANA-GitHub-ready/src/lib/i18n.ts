export type Lang = "fr" | "en" | "ar" | "es";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "es", label: "Español", short: "ES" },
];

export type MenuItem = { name: string; price: string; detail?: string };
export type MenuSection = { category: string; note?: string; items: MenuItem[] };

// Full printed menu (shared across languages — item names as printed on the card)
export const fullMenu: MenuSection[] = [
  {
    category: "Les petits déjeuners",
    items: [
      { name: "Larache", price: "40", detail: "Deux œufs plat, dinde fumée, la vache qui rit, fromage rouge + boisson chaude" },
      { name: "Tradition", price: "40", detail: "Rghif + omelette (m3acheb) + dinde fumée + cheese + yaourt + boisson chaude" },
      { name: "Marocaine", price: "45", detail: "Baghrir, rghayef, harcha, fromage blanc, miel nature, amlou, beurre et confiture + boisson chaude" },
      { name: "Fassi", price: "45", detail: "Deux œufs, khlie, la vache qui rit + boisson chaude" },
      { name: "Français", price: "35", detail: "4 mini viennoiseries au choix, confiture, miel et beurre + boisson chaude" },
      { name: "Koreon sandwich", price: "45", detail: "2 toast, dinde fumée, bayd, jben, yaourt + boisson chaude" },
      { name: "Croque", price: "50", detail: "Dinde fumée, cheese, omelette, toast + yaourt + boisson chaude" },
      { name: "Anglais", price: "50", detail: "Toast, saucisses, 2 œufs brouillés, tomates grillées et la vache qui rit + boisson chaude" },
      { name: "Healthy", price: "65", detail: "Granola maison aux grains et fruits secs + yaourt et fruit de saison, toasts nutella" },
    ],
  },
  {
    category: "Toasts",
    items: [
      { name: "Harcha", price: "20", detail: "Galette de semoule grillée, servie chaude avec miel ou fromage" },
      { name: "Rghiyfa", price: "20", detail: "Crêpe marocaine feuilletée, sucrée ou salée au choix" },
      { name: "Petit pain", price: "20", detail: "Petit pain frais servi avec beurre ou confiture" },
      { name: "Toast cheese", price: "20", detail: "Toast gratiné au fromage fondu" },
      { name: "Toast cheese & turkey", price: "23", detail: "Toast grillé au fromage et dinde fumée" },
      { name: "Jam / nutella / honey", price: "5", detail: "Extra side au choix : jam, amlou, honey, philadelphia naturel, nutella, cheese edam" },
    ],
  },
  {
    category: "Omelettes",
    items: [
      { name: "Omelette nature", price: "20", detail: "Omelette moelleuse aux œufs frais, servie avec pain" },
      { name: "Cheese omelette", price: "25", detail: "Omelette au fromage fondu" },
      { name: "Smoked turkey & cheese omelette", price: "30", detail: "Omelette garnie de dinde fumée et fromage" },
      { name: "Omelette végétarienne", price: "30", detail: "Omelette aux légumes de saison" },
    ],
  },
  {
    category: "Les salades",
    items: [
      { name: "Salade marocaine", price: "35", detail: "Tomates, concombre et oignons frais, huile d'olive" },
      { name: "Salade niçoise", price: "40", detail: "Thon, œuf, olives et légumes frais, vinaigrette maison" },
      { name: "Salade césar", price: "45", detail: "Poulet grillé, laitue, parmesan, croûtons et sauce césar" },
      { name: "Salade fruit de mer", price: "60", detail: "Fruits de mer, crudités fraîches et citron" },
      { name: "Salade Havana", price: "80", detail: "La grande salade signature : poulet, fromage, crudités et sauce maison" },
    ],
  },
  {
    category: "Plats marocains",
    items: [
      { name: "Harira", price: "30", detail: "Soupe traditionnelle à la tomate, lentilles et coriandre" },
      { name: "Soupe du poisson", price: "35", detail: "Soupe de poisson frais, servie avec citron" },
      { name: "Tajine poulet", price: "50", detail: "Poulet mijoté aux olives et citron confit" },
      { name: "Tajine viande hachée", price: "55", detail: "Kefta, œuf et sauce tomate épicée" },
      { name: "Tajine viande", price: "60", detail: "Viande mijotée aux légumes de saison" },
      { name: "Pil-Pil", price: "70", detail: "Crevettes à l'ail et piment, sauce pil-pil maison" },
    ],
  },
  {
    category: "Main dishes",
    items: [
      { name: "Minced chicken", price: "65", detail: "Poulet haché assaisonné, servi avec sa garniture" },
      { name: "Grilled chicken", price: "70", detail: "Poulet grillé mariné, frites et salade" },
      { name: "Cordon bleu", price: "75", detail: "Escalope de poulet panée, fromage fondu et frites" },
      { name: "Chicken steak", price: "80", detail: "Filet de poulet grillé, sauce au choix et frites" },
      { name: "Meat steak", price: "95", detail: "Filet de viande grillé à votre cuisson" },
      { name: "Meat skewer", price: "95", detail: "Brochettes de viande marinée, grillées au feu" },
      { name: "Meat grilled", price: "100", detail: "Viande grillée aux braises, servie avec légumes" },
      { name: "Mixed dish", price: "110", detail: "Assiette mixte : viande, poulet et garnitures" },
    ],
  },
  {
    category: "Chawarma",
    items: [
      { name: "Chawarma poulet", price: "45", detail: "Pain garni de poulet mariné, sauce et crudités" },
      { name: "Chawarma plat poulet", price: "50", detail: "Chawarma poulet servi en plat avec frites" },
      { name: "Chawarma meat", price: "75", detail: "Pain garni de viande marinée, sauce et crudités" },
      { name: "Plat meat", price: "80", detail: "Viande marinée en plat, frites et salade" },
    ],
  },
  {
    category: "Pasta",
    items: [
      { name: "Tuna pasta", price: "45", detail: "Pâtes au thon, sauce tomate et herbes fraîches" },
      { name: "Chicken pasta", price: "50", detail: "Pâtes au poulet et sauce crémeuse" },
      { name: "Arabia pasta", price: "60", detail: "Pâtes à la viande hachée épicée" },
      { name: "Cordonara pasta", price: "55", detail: "Pâtes à la carbonara, crème et fromage" },
      { name: "Alfredo pasta", price: "55", detail: "Pâtes à l'alfredo, crème et parmesan" },
      { name: "Bolognaise pasta", price: "65", detail: "Pâtes à la sauce bolognaise mijotée" },
      { name: "Seafood pasta", price: "75", detail: "Pâtes aux fruits de mer et sauce crémeuse" },
    ],
  },
  {
    category: "Jus",
    note: "Jus pressés minute",
    items: [
      { name: "Orange", price: "22", detail: "Orange pressée minute" },
      { name: "Limon", price: "22", detail: "Citron frais pressé" },
      { name: "Banan milk", price: "27", detail: "Lait frais mixé à la banane" },
      { name: "Apple milk", price: "27", detail: "Lait frais mixé à la pomme" },
      { name: "Strawberry milk", price: "27", detail: "Lait frais mixé à la fraise" },
      { name: "Avocat milk", price: "30", detail: "Avocat mixé au lait, onctueux et frais" },
      { name: "Banan orange", price: "30", detail: "Banane et orange pressés minute" },
      { name: "Strawberry orange", price: "30", detail: "Fraise et orange pressées minute" },
      { name: "Carrot orange", price: "30", detail: "Carotte et orange pressées minute" },
      { name: "Monge orange", price: "30", detail: "Mangue et orange pressées minute" },
      { name: "Ananas orange", price: "30", detail: "Ananas et orange pressés minute" },
      { name: "Kiwi", price: "35", detail: "Kiwi frais pressé" },
      { name: "Avocat orange", price: "35", detail: "Avocat, orange et lait frais" },
      { name: "Monge ananas", price: "35", detail: "Mangue et ananas pressés minute" },
      { name: "Monge passion", price: "35", detail: "Mangue et fruit de la passion frais" },
      { name: "Strawberry banana", price: "35", detail: "Fraise et banane fraîches mixées" },
      { name: "Tropical", price: "40", detail: "Cocktail de fruits tropicaux pressés minute" },
      { name: "Fruit rouge", price: "40", detail: "Mélange frais de fruits rouges" },
      { name: "Havana", price: "50", detail: "Le jus signature HAVANA, cocktail maison" },
    ],
  },
  {
    category: "Mojitos",
    items: [
      { name: "Classic", price: "30", detail: "Menthe fraîche, citron vert et glaçons" },
      { name: "Mint", price: "30", detail: "Le mojito menthe, classique et rafraîchissant" },
      { name: "Strawberry", price: "35", detail: "Mojito à la fraise fraîche" },
      { name: "Rosberry", price: "35", detail: "Mojito à la framboise" },
      { name: "Monge", price: "35", detail: "Mojito à la mangue" },
      { name: "Pineapple", price: "35", detail: "Mojito à l'ananas" },
      { name: "Energy", price: "40", detail: "Mojito avec boisson énergisante" },
      { name: "Red Bul", price: "50", detail: "Mojito au Red Bull" },
      { name: "Havana", price: "60", detail: "Le mojito signature HAVANA" },
    ],
  },
  {
    category: "Crêpes",
    items: [
      { name: "Crêpe nutella", price: "35", detail: "Crêpe chaude au nutella fondant" },
      { name: "Crêpe nutella banane", price: "40", detail: "Crêpe nutella et banane fraîche" },
      { name: "Crêpe brazilien", price: "40", detail: "Crêpe chocolat, fraise et crème chantilly" },
      { name: "Crêpe amlou & banane", price: "45", detail: "Crêpe à l'amlou et banane fraîche" },
      { name: "Crêpe Havana", price: "55", detail: "Crêpe signature : chocolat, fruits frais et amandes" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Flan", price: "17", detail: "Flan maison onctueux au caramel" },
      { name: "Cake orio", price: "25", detail: "Cake à l'oreo" },
      { name: "Cake white chocolate", price: "25", detail: "Cake au chocolat blanc" },
      { name: "Cake black chocolate", price: "25", detail: "Cake au chocolat noir fondant" },
      { name: "Cake Lotus", price: "25", detail: "Cake au biscuit Lotus et crème" },
      { name: "Bastele", price: "35", detail: "Pastilla sucrée aux amandes, feuilles croustillantes" },
      { name: "Fruit salade", price: "35", detail: "Salade de fruits frais de saison" },
      { name: "Havana salade", price: "45", detail: "La salade de fruits signature HAVANA, généreuse" },
    ],
  },
  {
    category: "Extra syrop",
    items: [
      { name: "Caramel", price: "5", detail: "Sirop caramel pour votre café ou crêpe" },
      { name: "Vanilla", price: "5", detail: "Sirop vanille" },
      { name: "Noisette", price: "5", detail: "Sirop noisette" },
      { name: "Pastichio", price: "5", detail: "Sirop pistache" },
      { name: "Fruit sec", price: "7", detail: "Fruits secs en garniture" },
    ],
  },
  {
    category: "Pasticcio",
    items: [
      { name: "Chicken pasticcio", price: "55" },
      { name: "Minced pasticcio", price: "60" },
      { name: "Lazzania", price: "60" },
      { name: "Mixed", price: "70" },
      { name: "See food", price: "75" },
    ],
  },
  {
    category: "Havana Sandwish",
    items: [
      { name: "Chiken", price: "50" },
      { name: "Crispy Chicken", price: "55" },
      { name: "Minced Meat", price: "60" },
      { name: "Cordon Blue", price: "70" },
      { name: "Mixed", price: "75" },
      { name: "See food", price: "80" },
    ],
  },
  {
    category: "Crêpe Salée",
    items: [
      { name: "Chicken Crep", price: "35" },
      { name: "Mince Meat", price: "45" },
      { name: "Havana Crepe", price: "55" },
      { name: "See food", price: "60" },
    ],
  },
  {
    category: "Bageto",
    items: [
      { name: "Chicken Bageto", price: "45" },
      { name: "Minced Meat Bageto", price: "55" },
      { name: "Mixed Bageto", price: "60" },
      { name: "Seefood Bageto", price: "70" },
    ],
  },
  {
    category: "Havana Tacos astilla",
    items: [
      { name: "Chicken Tacos", price: "60" },
      { name: "Crispy Tacos", price: "65" },
      { name: "Mince Meat Tacos", price: "70" },
      { name: "Mixed Tacos", price: "80" },
      { name: "Seefood Tacos", price: "85" },
    ],
  },
  {
    category: "Special Havana",
    items: [
      { name: "Double", price: "65" },
      { name: "Triple", price: "75" },
    ],
  },
  {
    category: "Panini",
    items: [
      { name: "Cheese Panini", price: "30" },
      { name: "Chichen Panini", price: "35" },
      { name: "Minced Meat Panini", price: "45" },
      { name: "See Food Panini", price: "55" },
      { name: "Mixed Panini", price: "60" },
    ],
  },
  {
    category: "Pizza",
    items: [
      { name: "Pizza végétarien", price: "45" },
      { name: "Pizza Tuna", price: "50" },
      { name: "Pizza Poulet", price: "55" },
      { name: "4 cheese", price: "60" },
      { name: "Chicken alfredo", price: "65" },
      { name: "MINCE meat", price: "70" },
      { name: "Seafood", price: "75" },
      { name: "Havana", price: "85" },
    ],
  },
  {
    category: "Burger",
    items: [
      { name: "Simple Burger", price: "40" },
      { name: "Burger Poulet", price: "45" },
      { name: "Cheese Burger", price: "50" },
      { name: "King Burger", price: "60" },
      { name: "Havana Burger", price: "65" },
    ],
  },
  {
    category: "Burrito",
    items: [
      { name: "Burrito Poulet", price: "45" },
      { name: "Burrito Viande Hachée", price: "50" },
      { name: "Burrito Mixte", price: "60" },
      { name: "Burrito Fruit de Mer", price: "65" },
      { name: "Burito havana", price: "75" },
    ],
  },
  {
    category: "Tacos",
    items: [
      { name: "Tacos Poulet", price: "45" },
      { name: "Tacos Nugget", price: "50" },
      { name: "tacos Viande", price: "50" },
      { name: "Tacos Mixte", price: "60" },
      { name: "Tacos Fruit de mer", price: "65" },
    ],
  },
];

export type Content = {
  dir: "ltr" | "rtl";
  tagline: string;
  openBadge: string;
  heroLine: string;
  nav: { universe: string; flavors: string; menu: string; infos: string };
  ariaHome: string;
  openMenu: string;
  closeMenu: string;
  ctaMenu: string;
  ctaRoute: string;
  explore: string;
  seo: { title: string; description: string };
  story: {
    label: string;
    badge: string;
    title: string;
    titleEm: string;
    text: string;
    link: string;
  };
  flavors: {
    label: string;
    title: string;
    titleEm: string;
    intro: string;
    items: { category: string; title: string; text: string; alt: string }[];
  };
  menuSection: {
    label: string;
    title: string;
    titleEm: string;
    intro: string;
    footnote: string;
    order: string;
    currency: string;
  };
  menu: MenuSection[];
  infos: {
    label: string;
    title: string;
    titleEm: string;
    hoursLabel: string;
    days: string[];
    time: string;
    maps: string;
  };
  footer: { subtitle: string; everyday: string; menu: string; infos: string; maps: string; rights: string; note: string };
  alts: { hero: string; interior: string; exterior: string; corner: string; counter: string };
};

const fr: Content = {
  dir: "ltr",
  tagline: "RESTAURANT & CAFÉ",
  openBadge: "Ouvert tous les jours · 7h – 1h",
  heroLine: "Un air d'ailleurs,\nle goût d'ici.",
  nav: { universe: "Notre univers", flavors: "Nos saveurs", menu: "La carte", infos: "Infos & contact" },
  ariaHome: "HAVANA, accueil",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  ctaMenu: "La carte",
  ctaRoute: "Itinéraire",
  explore: "Explorer",
  seo: {
    title: "HAVANA | Restaurant & Café",
    description:
      "HAVANA Restaurant & Café : carte complète, horaires 7h–1h tous les jours, téléphone 05 39 52 15 56 et itinéraire Google Maps.",
  },
  story: {
    label: "Notre univers",
    badge: "Bien plus qu'un café.",
    title: "La vie est plus belle",
    titleEm: "autour d'une table.",
    text: "Chez HAVANA, on vient pour un café et on reste pour l'ambiance. Une adresse vivante, des assiettes généreuses et ce petit air de vacances qui fait oublier l'heure.",
    link: "Infos & contact",
  },
  flavors: {
    label: "À savourer",
    title: "Bon appétit,",
    titleEm: "toujours.",
    intro: "Des envies salées aux pauses sucrées, il y a toujours une bonne raison de se retrouver.",
    items: [
      {
        category: "La cuisine",
        title: "Des saveurs qui rassemblent",
        text: "Du tajine généreux aux assiettes à partager, des classiques préparés pour prendre le temps de bien manger.",
        alt: "Tajine de poulet aux olives et citron",
      },
      {
        category: "La fraîcheur",
        title: "Le soleil dans un verre",
        text: "Jus frais et mojitos fruités pour prolonger l'après-midi, une gorgée à la fois.",
        alt: "Boissons fraîches à la menthe et aux fruits",
      },
    ],
  },
  menuSection: {
    label: "Notre carte complète",
    title: "Le",
    titleEm: "menu",
    intro: "Du premier café à la dernière bouchée. Prix en dirhams, service continu de 7h à 1h.",
    footnote: "Prix en dirhams marocains, taxes comprises.",
    order: "Commander",
    currency: "dh",
  },
  menu: [
    {
      category: "Petits déjeuners",
      items: [
        { name: "Marocaine", price: "45", detail: "Baghrir, rghayef, harcha, fromage blanc, miel, amlou & boisson chaude" },
        { name: "Fassi", price: "45", detail: "Deux œufs, khlia, fromage & boisson chaude" },
        { name: "Tradition", price: "40", detail: "Rghif, omelette, dinde fumée, fromage, yaourt & boisson chaude" },
        { name: "Healthy", price: "65", detail: "Granola maison, fruits secs, yaourt & fruits de saison" },
        { name: "Français", price: "35", detail: "Mini viennoiseries, confiture, miel, beurre & boisson chaude" },
      ],
    },
    {
      category: "À table",
      items: [
        { name: "Tajine poulet", price: "50", detail: "Olives, citron confit & pain maison" },
        { name: "Tajine viande hachée", price: "55", detail: "Kefta, œuf & sauce tomate épicée" },
        { name: "Tajine viande", price: "60", detail: "Viande mijotée aux légumes de saison" },
        { name: "Salade Havana", price: "80", detail: "Grande salade composée, poulet & vinaigrette maison" },
        { name: "Poulet grillé", price: "70", detail: "Poulet mariné, frites & salade" },
      ],
    },
    {
      category: "Douceurs",
      items: [
        { name: "Crêpe amlou & banane", price: "45" },
        { name: "Crêpe Havana", price: "55", detail: "Chocolat, fruits frais & amandes" },
        { name: "Cake Lotus", price: "25" },
        { name: "Flan", price: "17" },
        { name: "Salade de fruits Havana", price: "45" },
      ],
    },
    {
      category: "À boire",
      note: "Jus pressés minute",
      items: [
        { name: "Mojito classique", price: "30" },
        { name: "Mojito mangue", price: "35" },
        { name: "Jus d'orange", price: "22" },
        { name: "Jus tropical", price: "40" },
        { name: "Jus Havana", price: "50" },
      ],
    },
  ],
  infos: {
    label: "Infos & contact",
    title: "Nous",
    titleEm: "trouver.",
    hoursLabel: "Horaires d'ouverture",
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    time: "7h – 1h",
    maps: "Google Maps",
  },
  footer: {
    subtitle: "Restaurant & Café",
    everyday: "Tous les jours · 7h – 1h",
    menu: "La carte",
    infos: "Infos",
    maps: "Maps",
    rights: "HAVANA Restaurant & Café",
    note: "Fait avec chaleur, à partager sans modération.",
  },
  alts: {
    hero: "Tajine, boisson fraîche et dessert dans une ambiance chaleureuse",
    interior: "L'intérieur chaleureux du restaurant HAVANA",
    exterior: "La façade du restaurant HAVANA",
    corner: "Un coin chaleureux du café HAVANA",
    counter: "Le comptoir du café HAVANA",
  },
};

const en: Content = {
  dir: "ltr",
  tagline: "RESTAURANT & CAFÉ",
  openBadge: "Open every day · 7am – 1am",
  heroLine: "A taste of elsewhere,\nthe flavour of home.",
  nav: { universe: "Our world", flavors: "Our flavours", menu: "Menu", infos: "Info & contact" },
  ariaHome: "HAVANA, home",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  ctaMenu: "See the menu",
  ctaRoute: "Directions",
  explore: "Explore",
  seo: {
    title: "HAVANA | Restaurant & Café",
    description:
      "HAVANA Restaurant & Café: full menu, open every day 7am–1am, call 05 39 52 15 56 and find us on Google Maps.",
  },
  story: {
    label: "Our world",
    badge: "Far more than a café.",
    title: "Life tastes better",
    titleEm: "around a table.",
    text: "At HAVANA you come for a coffee and stay for the atmosphere. A lively address, generous plates and that holiday feeling that makes you forget the time.",
    link: "Info & contact",
  },
  flavors: {
    label: "To savour",
    title: "Enjoy your meal,",
    titleEm: "always.",
    intro: "From savoury cravings to sweet breaks, there is always a good reason to get together.",
    items: [
      {
        category: "The kitchen",
        title: "Flavours that bring people together",
        text: "From a generous tagine to plates made for sharing, classics prepared so you can take your time.",
        alt: "Chicken tagine with olives and lemon",
      },
      {
        category: "Freshness",
        title: "Sunshine in a glass",
        text: "Fresh juices and fruity mojitos to stretch out the afternoon, one sip at a time.",
        alt: "Fresh mint and fruit drinks",
      },
    ],
  },
  menuSection: {
    label: "Our full menu",
    title: "The",
    titleEm: "menu",
    intro: "From the first coffee to the last bite. Prices in dirhams, served all day from 7am to 1am.",
    footnote: "Prices in Moroccan dirhams, taxes included.",
    order: "Order",
    currency: "dh",
  },
  menu: [
    {
      category: "Breakfasts",
      items: [
        { name: "Moroccan", price: "45", detail: "Baghrir, rghayef, harcha, fresh cheese, honey, amlou & hot drink" },
        { name: "Fassi", price: "45", detail: "Two eggs, khlia, cheese & hot drink" },
        { name: "Traditional", price: "40", detail: "Rghif, omelette, smoked turkey, cheese, yoghurt & hot drink" },
        { name: "Healthy", price: "65", detail: "Homemade granola, dried fruit, yoghurt & seasonal fruit" },
        { name: "French", price: "35", detail: "Mini pastries, jam, honey, butter & hot drink" },
      ],
    },
    {
      category: "Mains",
      items: [
        { name: "Chicken tagine", price: "50", detail: "Olives, preserved lemon & homemade bread" },
        { name: "Minced meat tagine", price: "55", detail: "Kefta, egg & spicy tomato sauce" },
        { name: "Beef tagine", price: "60", detail: "Slow-cooked meat with seasonal vegetables" },
        { name: "Havana salad", price: "80", detail: "Large mixed salad, chicken & house dressing" },
        { name: "Grilled chicken", price: "70", detail: "Marinated chicken, fries & salad" },
      ],
    },
    {
      category: "Sweets",
      items: [
        { name: "Amlou & banana crêpe", price: "45" },
        { name: "Havana crêpe", price: "55", detail: "Chocolate, fresh fruit & almonds" },
        { name: "Lotus cake", price: "25" },
        { name: "Flan", price: "17" },
        { name: "Havana fruit salad", price: "45" },
      ],
    },
    {
      category: "Drinks",
      note: "Freshly pressed juices",
      items: [
        { name: "Classic mojito", price: "30" },
        { name: "Mango mojito", price: "35" },
        { name: "Orange juice", price: "22" },
        { name: "Tropical juice", price: "40" },
        { name: "Havana juice", price: "50" },
      ],
    },
  ],
  infos: {
    label: "Info & contact",
    title: "Find",
    titleEm: "us.",
    hoursLabel: "Opening hours",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    time: "7am – 1am",
    maps: "Google Maps",
  },
  footer: {
    subtitle: "Restaurant & Café",
    everyday: "Every day · 7am – 1am",
    menu: "Menu",
    infos: "Info",
    maps: "Maps",
    rights: "HAVANA Restaurant & Café",
    note: "Made with warmth, meant to be shared.",
  },
  alts: {
    hero: "Tagine, a cold drink and dessert in a warm setting",
    interior: "The warm interior of HAVANA restaurant",
    exterior: "The front of HAVANA restaurant",
    corner: "A cosy corner of HAVANA café",
    counter: "The counter at HAVANA café",
  },
};

const es: Content = {
  dir: "ltr",
  tagline: "RESTAURANTE & CAFÉ",
  openBadge: "Abierto todos los días · 7h – 1h",
  heroLine: "Un aire de otro lugar,\nel sabor de aquí.",
  nav: { universe: "Nuestro mundo", flavors: "Nuestros sabores", menu: "La carta", infos: "Info & contacto" },
  ariaHome: "HAVANA, inicio",
  openMenu: "Abrir el menú",
  closeMenu: "Cerrar el menú",
  ctaMenu: "Ver la carta",
  ctaRoute: "Cómo llegar",
  explore: "Explorar",
  seo: {
    title: "HAVANA | Restaurante & Café",
    description:
      "HAVANA Restaurante & Café: carta completa, abierto todos los días de 7h a 1h, teléfono 05 39 52 15 56 y ruta en Google Maps.",
  },
  story: {
    label: "Nuestro mundo",
    badge: "Mucho más que un café.",
    title: "La vida sabe mejor",
    titleEm: "alrededor de una mesa.",
    text: "En HAVANA vienes por un café y te quedas por el ambiente. Un lugar con vida, platos generosos y ese aire de vacaciones que hace olvidar la hora.",
    link: "Info & contacto",
  },
  flavors: {
    label: "Para saborear",
    title: "Buen provecho,",
    titleEm: "siempre.",
    intro: "De los antojos salados a las pausas dulces, siempre hay un buen motivo para reunirse.",
    items: [
      {
        category: "La cocina",
        title: "Sabores que reúnen",
        text: "Del tayín generoso a los platos para compartir, clásicos preparados para comer con calma.",
        alt: "Tayín de pollo con aceitunas y limón",
      },
      {
        category: "La frescura",
        title: "El sol en un vaso",
        text: "Zumos frescos y mojitos de frutas para alargar la tarde, sorbo a sorbo.",
        alt: "Bebidas frescas de menta y frutas",
      },
    ],
  },
  menuSection: {
    label: "Nuestra carta completa",
    title: "La",
    titleEm: "carta",
    intro: "Del primer café al último bocado. Precios en dirhams, servicio continuo de 7h a 1h.",
    footnote: "Precios en dirhams marroquíes, impuestos incluidos.",
    order: "Pedir",
    currency: "dh",
  },
  menu: [
    {
      category: "Desayunos",
      items: [
        { name: "Marroquí", price: "45", detail: "Baghrir, rghayef, harcha, queso fresco, miel, amlou y bebida caliente" },
        { name: "Fassi", price: "45", detail: "Dos huevos, khlia, queso y bebida caliente" },
        { name: "Tradición", price: "40", detail: "Rghif, tortilla, pavo ahumado, queso, yogur y bebida caliente" },
        { name: "Healthy", price: "65", detail: "Granola casera, frutos secos, yogur y fruta de temporada" },
        { name: "Francés", price: "35", detail: "Mini bollería, mermelada, miel, mantequilla y bebida caliente" },
      ],
    },
    {
      category: "Platos",
      items: [
        { name: "Tayín de pollo", price: "50", detail: "Aceitunas, limón confitado y pan casero" },
        { name: "Tayín de carne picada", price: "55", detail: "Kefta, huevo y salsa de tomate especiada" },
        { name: "Tayín de carne", price: "60", detail: "Carne guisada con verduras de temporada" },
        { name: "Ensalada Havana", price: "80", detail: "Gran ensalada mixta, pollo y vinagreta de la casa" },
        { name: "Pollo a la parrilla", price: "70", detail: "Pollo marinado, patatas fritas y ensalada" },
      ],
    },
    {
      category: "Dulces",
      items: [
        { name: "Crepe de amlou y plátano", price: "45" },
        { name: "Crepe Havana", price: "55", detail: "Chocolate, fruta fresca y almendras" },
        { name: "Tarta Lotus", price: "25" },
        { name: "Flan", price: "17" },
        { name: "Ensalada de frutas Havana", price: "45" },
      ],
    },
    {
      category: "Bebidas",
      note: "Zumos recién hechos",
      items: [
        { name: "Mojito clásico", price: "30" },
        { name: "Mojito de mango", price: "35" },
        { name: "Zumo de naranja", price: "22" },
        { name: "Zumo tropical", price: "40" },
        { name: "Zumo Havana", price: "50" },
      ],
    },
  ],
  infos: {
    label: "Info & contacto",
    title: "Cómo",
    titleEm: "encontrarnos.",
    hoursLabel: "Horario de apertura",
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    time: "7h – 1h",
    maps: "Google Maps",
  },
  footer: {
    subtitle: "Restaurante & Café",
    everyday: "Todos los días · 7h – 1h",
    menu: "La carta",
    infos: "Info",
    maps: "Maps",
    rights: "HAVANA Restaurante & Café",
    note: "Hecho con calor, para compartir sin medida.",
  },
  alts: {
    hero: "Tayín, bebida fresca y postre en un ambiente cálido",
    interior: "El interior acogedor del restaurante HAVANA",
    exterior: "La fachada del restaurante HAVANA",
    corner: "Un rincón acogedor del café HAVANA",
    counter: "La barra del café HAVANA",
  },
};

const ar: Content = {
  dir: "rtl",
  tagline: "مطعم ومقهى",
  openBadge: "مفتوح كل يوم · من 7 صباحًا إلى 1 ليلًا",
  heroLine: "نسمة من بعيد،\nوطعم من هنا.",
  nav: { universe: "عالمنا", flavors: "مذاقاتنا", menu: "القائمة", infos: "معلومات واتصال" },
  ariaHome: "هافانا، الصفحة الرئيسية",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
  ctaMenu: "تصفح القائمة",
  ctaRoute: "الاتجاهات",
  explore: "استكشف",
  seo: {
    title: "هافانا | مطعم ومقهى",
    description:
      "هافانا مطعم ومقهى: القائمة الكاملة، مفتوح كل يوم من 7 صباحًا إلى 1 ليلًا، الهاتف 05 39 52 15 56 والاتجاهات على خرائط جوجل.",
  },
  story: {
    label: "عالمنا",
    badge: "أكثر من مجرد مقهى.",
    title: "الحياة أجمل",
    titleEm: "حول طاولة واحدة.",
    text: "في هافانا تأتي من أجل فنجان قهوة وتبقى من أجل الجوّ. مكان نابض بالحياة، أطباق كريمة، ولمسة عطلة تجعلك تنسى الوقت.",
    link: "معلومات واتصال",
  },
  flavors: {
    label: "للتذوق",
    title: "شهية طيبة،",
    titleEm: "دائمًا.",
    intro: "من الأطباق المالحة إلى الاستراحات الحلوة، هناك دائمًا سبب جيد للاجتماع.",
    items: [
      {
        category: "المطبخ",
        title: "مذاقات تجمع الأحباب",
        text: "من الطاجين الكريم إلى أطباق المشاركة، أطباق كلاسيكية تُعدّ على راحتك.",
        alt: "طاجين الدجاج بالزيتون والليمون",
      },
      {
        category: "الانتعاش",
        title: "الشمس في كأس",
        text: "عصائر طازجة وموهيتو بالفواكه لتمديد العصر، رشفة بعد رشفة.",
        alt: "مشروبات منعشة بالنعناع والفواكه",
      },
    ],
  },
  menuSection: {
    label: "قائمتنا الكاملة",
    title: "",
    titleEm: "القائمة",
    intro: "من أول قهوة إلى آخر لقمة. الأسعار بالدرهم، خدمة متواصلة من 7 صباحًا إلى 1 ليلًا.",
    footnote: "الأسعار بالدرهم المغربي، الضرائب مشمولة.",
    order: "اطلب الآن",
    currency: "د.م",
  },
  menu: [
    {
      category: "الفطور",
      items: [
        { name: "مغربي", price: "45", detail: "بغرير، رغايف، حرشة، جبن طازج، عسل، أملو ومشروب ساخن" },
        { name: "فاسي", price: "45", detail: "بيضتان، خليع، جبن ومشروب ساخن" },
        { name: "تقليدي", price: "40", detail: "رغيف، أومليت، ديك رومي مدخن، جبن، زبادي ومشروب ساخن" },
        { name: "صحي", price: "65", detail: "غرانولا منزلية، فواكه جافة، زبادي وفواكه الموسم" },
        { name: "فرنسي", price: "35", detail: "معجنات صغيرة، مربى، عسل، زبدة ومشروب ساخن" },
      ],
    },
    {
      category: "الأطباق الرئيسية",
      items: [
        { name: "طاجين الدجاج", price: "50", detail: "زيتون، ليمون مصبّر وخبز منزلي" },
        { name: "طاجين الكفتة", price: "55", detail: "كفتة، بيض وصلصة طماطم حارة" },
        { name: "طاجين اللحم", price: "60", detail: "لحم مطهو على نار هادئة مع خضر الموسم" },
        { name: "سلطة هافانا", price: "80", detail: "سلطة كبيرة مشكّلة، دجاج وصلصة البيت" },
        { name: "دجاج مشوي", price: "70", detail: "دجاج متبّل، بطاطس مقلية وسلطة" },
      ],
    },
    {
      category: "الحلويات",
      items: [
        { name: "كريب أملو وموز", price: "45" },
        { name: "كريب هافانا", price: "55", detail: "شوكولاتة، فواكه طازجة ولوز" },
        { name: "كيك لوتس", price: "25" },
        { name: "فلان", price: "17" },
        { name: "سلطة فواكه هافانا", price: "45" },
      ],
    },
    {
      category: "المشروبات",
      note: "عصائر طازجة",
      items: [
        { name: "موهيتو كلاسيك", price: "30" },
        { name: "موهيتو المانجو", price: "35" },
        { name: "عصير البرتقال", price: "22" },
        { name: "عصير تروبيكال", price: "40" },
        { name: "عصير هافانا", price: "50" },
      ],
    },
  ],
  infos: {
    label: "معلومات واتصال",
    title: "كيف",
    titleEm: "تجدنا.",
    hoursLabel: "أوقات العمل",
    days: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    time: "7ص – 1ل",
    maps: "خرائط جوجل",
  },
  footer: {
    subtitle: "مطعم ومقهى",
    everyday: "كل يوم · 7ص – 1ل",
    menu: "القائمة",
    infos: "معلومات",
    maps: "الخرائط",
    rights: "هافانا مطعم ومقهى",
    note: "أُعدّ بحرارة، ليُشارك دون حساب.",
  },
  alts: {
    hero: "طاجين ومشروب منعش وحلوى في جوّ دافئ",
    interior: "الديكور الدافئ لمطعم هافانا",
    exterior: "واجهة مطعم هافانا",
    corner: "زاوية دافئة في مقهى هافانا",
    counter: "طاولة الخدمة في مقهى هافانا",
  },
};

export const content: Record<Lang, Content> = { fr, en, ar, es };
