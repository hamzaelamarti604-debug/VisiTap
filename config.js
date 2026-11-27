/* =====================================================================
   VisiTap — config.js
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter ou mettre à jour
   un professionnel. Aucune modification de index.html n'est nécessaire.

   Ajouter un profil :
     1. Copiez le modèle ci-dessous dans la liste PROFILES
        (entre les crochets [ ... ], séparé des autres par une virgule).
     2. Donnez-lui un "slug" unique : minuscules, chiffres, tirets.
     3. Remplissez les champs utiles ; laissez "" pour les autres.
     4. Le profil est accessible sur : https://votre-domaine/<slug>

   Règles :
     - Un objet = un professionnel. Un slug = une URL. Ne changez plus
       un slug une fois la carte NFC / le QR code imprimés.
     - Un champ vide ("") n'affiche rien : ni icône, ni ligne, ni bouton.
     - Réseaux sociaux : lien complet OU simple identifiant
       (ex. "sarah.archi" ou "@sarah.archi").
     - Photo : placez-la dans le dossier photos/ et indiquez
       "/photos/nom-du-fichier.jpg" (carrée, ~800 px, JPEG).
     - Thèmes : "noir", "ivoire", "nuit", "emeraude", "bordeaux".
     - Attention aux guillemets : une apostrophe dans un texte est
       sans risque entre guillemets doubles "…" (ex. "d'espaces").

   Modèle à copier :
   {
     slug: "prenom-nom",
     firstName: "", lastName: "",
     profession: "", company: "",
     photo: "",
     description: "",

     phone: "", email: "", address: "", mapsUrl: "",

     whatsapp: "", whatsappMessage: "",
     website: "",
     appointmentUrl: "", appointmentLabel: "",
     googleReviewsUrl: "",

     instagram: "", facebook: "", tiktok: "", linkedin: "",
     youtube: "", x: "", snapchat: "", pinterest: "",
     otherSocials: [],   // ex. [{ label: "Portfolio", url: "https://..." }]

     theme: "noir"
   },

   Champs facultatifs supplémentaires (à ajouter seulement si besoin) :
     nameAr: "",          // nom en arabe, affiché sous le nom
     descriptionAr: "",   // description en arabe, sous la description
     hours: [             // horaires
       { days: "Lundi – Vendredi", time: "9h00 – 19h00" },
       { days: "Dimanche", time: "Fermé", note: "Sur rendez-vous" }
     ],
     team: {              // bouton qui ouvre la liste de l'équipe (WhatsApp)
       label: "Écrire à l'équipe", subtitle: "", message: "",
       members: [ { name: "Prénom", role: "Fonction", whatsapp: "06..." } ]
     },
   ===================================================================== */

const BRAND = {
  name: "VisiTap",
  tagline: "Your identity. One tap away.",

  // Domaine définitif SANS « / » final, ex. "https://visitap.vercel.app".
  // Utilisé pour le QR code, le partage et la fiche contact : c'est aussi
  // l'adresse à programmer dans les puces NFC. Vide = adresse actuelle du site.
  baseUrl: "https://visitap.carte-ma.workers.dev",

  // Indicatif ajouté aux numéros WhatsApp saisis au format local
  // (ex. "0600000000" devient "212600000000"). Vide = désactivé.
  defaultCountryCode: "212",

  defaultTheme: "noir",
  showQr: true,

  // Lien facultatif « Créer ma carte VisiTap » en bas de chaque carte.
  ctaUrl: "",
  ctaLabel: "Créer ma carte VisiTap",

  // Facultatif : slug d'un profil à afficher sur la page d'accueil "/".
  homeSlug: ""
};

const PROFILES = [

  /* ===================================================================
     PROFILS DE DÉMONSTRATION (personnes et coordonnées FICTIVES)
     -------------------------------------------------------------------
     sarah-benali, youssef-alaoui, salma-idrissi, lina-hair :
     exemples montrant toutes les possibilités du design. Ils ne sont liés
     à aucune carte imprimée : vous pouvez les supprimer avant la mise en
     production sans aucun risque pour les profils profil-01 à profil-50.
     ATTENTION : bijouterie-hafsa n'est pas une démo, c'est la vraie carte
     de Bijouterie Hafsa (ancien profil démo dr-yassine). Ne pas le supprimer.
     =================================================================== */
  {
    // Profil complet — identique à l'aperçu validé (preview.html)
    slug: "sarah-benali",
    firstName: "Sarah",
    lastName: "Benali",
    profession: "Architecte",
    company: "Atelier Benali",
    photo: "",
    description: "Profil de démonstration aux données fictives. Conception d'espaces contemporains, résidentiels et commerciaux, du premier croquis à la livraison.",

    phone: "+212 600 000 001",
    email: "sarah@example.com",
    address: "Av. Mohammed VI, Agdal, Rabat",
    mapsUrl: "",

    whatsapp: "+212 600 000 001",
    whatsappMessage: "Bonjour Sarah, je vous contacte depuis votre carte VisiTap.",
    website: "https://example.com",
    appointmentUrl: "https://example.com/rendez-vous",
    appointmentLabel: "",
    googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Atelier+Benali+Rabat",

    instagram: "atelier.benali.demo",
    facebook: "atelier.benali.demo",
    tiktok: "atelier.benali.demo",
    linkedin: "sarah-benali-demo",
    youtube: "atelier.benali.demo",
    x: "atelierbenali_demo",
    snapchat: "atelier.benali.demo",
    pinterest: "atelierbenalidemo",
    otherSocials: [],

    theme: "noir"
  },

  {
    // Bijouterie Hafsa (Meknès) — carte cadeau de la boutique
    slug: "bijouterie-hafsa",
    firstName: "Bijouterie",
    lastName: "Hafsa",
    nameAr: "مجوهرات حفصة",
    profession: "L'élégance au quotidien",
    company: "",
    photo: "/photos/bijouterie-hafsa.jpg",
    description: "Bijoux en or et parures de mariage, pour les grands jours comme pour chaque jour. Venez découvrir nos collections et laissez nos conseillères vous guider.",
    descriptionAr: "مجوهرات من الذهب وأطقم الأعراس، للمناسبات الكبرى كما لكل يوم. تفضّلوا لاكتشاف مجموعاتنا، ومستشاراتنا في خدمتكم لإرشادكم.",

    phone: "+212 6 61 69 95 83",
    email: "z.bettahi@bijouteriehafsa.ma",
    address: "183 Av. Mellah, Meknès",
    mapsUrl: "https://maps.app.goo.gl/vwpiqd9VnBin7n7F6",

    whatsapp: "0661699583",
    whatsappMessage: "Bonjour, je vous contacte depuis votre carte Bijouterie Hafsa.",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "https://search.google.com/local/writereview?placeid=ChIJqZLK9WdboA0RclBcSUqgtjA",

    instagram: "bijouterie_hafsa",
    facebook: "https://www.facebook.com/share/1NDsF7PaMN/",
    tiktok: "bijouterie_hafsa_",
    youtube: "https://www.youtube.com/@bijouteriehafsaofficiel7142",
    linkedin: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    hours: [
      { days: "Lundi – Jeudi", time: "9h30 – 20h30" },
      { days: "Vendredi", time: "Fermé", note: "Sur rendez-vous" },
      { days: "Samedi – Dimanche", time: "9h30 – 20h30" }
    ],

    team: {
      label: "Écrire à une conseillère",
      subtitle: "Choisissez la personne à contacter",
      message: "Bonjour, je vous contacte depuis la carte Bijouterie Hafsa.",
      members: [
        { name: "Zakaria", role: "Gérant", whatsapp: "0661699583" },
        { name: "Samia", role: "Conseillère bijoux", whatsapp: "0674358833" },
        { name: "Fatima-Zahra", role: "Conseillère bijoux", whatsapp: "0645453704" },
        { name: "Youssra", role: "Conseillère bijoux", whatsapp: "0770812243" },
        { name: "Israe", role: "Conseillère bijoux", whatsapp: "0664030509" },
        { name: "Salma", role: "Conseillère bijoux", whatsapp: "0614046242" },
        { name: "Kabira", role: "Conseillère bijoux", whatsapp: "0631187639" },
        { name: "Laila", role: "Conseillère bijoux", whatsapp: "0770834823" }
      ]
    },

    theme: "bordeaux"
  },

  {
    // KEYORA Conciergerie (Marrakech · Casablanca)
    slug: "keyora-conciergerie",
    firstName: "KEYORA",
    lastName: "Conciergerie",
    profession: "Conciergerie & Gestion Locative Premium",
    company: "",
    photo: "/photos/keyora-conciergerie.jpg",
    description: "Précision d'ingénieur. Hospitalité marocaine. Nous prenons en charge l'intégralité de la gestion de votre bien à Marrakech et Casablanca, pendant que vous profitez de vos revenus.",

    phone: "+212 6 60 58 82 72",
    email: "contact@keyora-conciergerie.com",
    address: "Marrakech · Casablanca",
    mapsUrl: "",

    whatsapp: "+212660588272",
    whatsappLabel: "Demander une étude gratuite",
    whatsappSubtitle: "Gratuit et sans engagement",
    whatsappMessage: "Bonjour KEYORA, je souhaite une étude gratuite pour mon bien.\nVille : \nType de bien : \nLien de l'annonce (si existante) : ",
    servicesTitle: "Contact",
    primaryAction: "whatsapp",
    saveSubtitle: "Gardez notre numéro",
    website: "https://keyora-conciergerie.com",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    stepsTitle: "En cinq étapes",
    steps: [
      { title: "Contact", text: "Vous nous contactez — nous prenons le temps d'écouter vos objectifs et de comprendre votre bien." },
      { title: "Visite", text: "Visite sur place, audit technique et projection de rendement personnalisée." },
      { title: "Mise en ligne", text: "Reportage photo éditorial, rédaction de l'annonce et lancement multi-canal." },
      { title: "Accueil voyageurs", text: "Accueil concierge, suivi des voyageurs et rotations aux standards hôteliers, 24/7." },
      { title: "Paiement", text: "Versement mensuel transparent, accompagné d'un relevé détaillé — sans aucune surprise." }
    ],

    badgesTitle: "Nos services",
    badges: [
      { label: "Gestion Airbnb & Booking", sub: "Calendriers synchronisés", icon: "globe" },
      { label: "Stratégie de prix (yield)", sub: "Tarifs ajustés chaque jour", icon: "chart" },
      { label: "Marketing digital", sub: "Airbnb, Booking & canal direct", icon: "megaphone" },
      { label: "Service voyageurs", sub: "Réponse en moins de 15 min", icon: "chat" },
      { label: "Check-in & check-out", sub: "Accueil & remise des clés", icon: "key" },
      { label: "Ménage & linge", sub: "Standards hôteliers", icon: "sparkle" },
      { label: "Maintenance & réparations", sub: "Artisans de confiance", icon: "tool" },
      { label: "Protection du bien", sub: "Assurances & dédommagements", icon: "shield" },
      { label: "Fiches de police & conformité", sub: "Location en règle", icon: "scale" },
      { label: "Reporting mensuel", sub: "Revenus & dépenses", icon: "doc" },
      { label: "Gestion e‑réputation", sub: "Réponse à chaque avis", icon: "star" },
      { label: "Photographie professionnelle", sub: "En option", icon: "camera" }
    ],

    badgeGroups: [
      { title: "En chiffres", badges: [
        { label: "+35 %", sub: "Hausse moyenne des revenus", icon: "chart" },
        { label: "4,92 ★", sub: "Note voyageurs", icon: "star" },
        { label: "24/7", sub: "Conciergerie disponible", icon: "clock" },
        { label: "Aucun frais caché", sub: "Relevé détaillé chaque mois", icon: "check" }
      ] }
    ],

    instagram: "keyora_conciergerie", facebook: "https://www.facebook.com/share/1HRVBgzJSX/", tiktok: "", linkedin: "https://www.linkedin.com/in/keyora-conciergerie-a77a8344b", youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    // GHALI BARIK-ALALLAH (Dakhla) — chauffeur professionnel & agent de sécurité privée — vraie carte client, ne pas supprimer — profil bilingue FR / AR
    slug: "ghali-barik-alallah",
    firstName: "Ghali",
    lastName: "Barik-Alallah",
    nameAr: "غالي بارك الله",
    profession: "Chauffeur professionnel · Agent de sécurité privée",
    company: "Basé à Dakhla",
    photo: "/photos/ghali-barik-alallah.jpg",
    description: "Chauffeur professionnel depuis 2015, titulaire des permis B et D, et agent de sécurité privée avec 7 ans d'expérience. Conduite sûre, ponctualité et accueil professionnel.",

    phone: "+212 6 55 27 17 30",
    phone2: "+212 6 72 42 14 20",
    email: "",
    address: "Dakhla, Maroc",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla%2C%20Maroc",

    whatsapp: "+212655271730",
    whatsappLabel: "WhatsApp",
    whatsappSubtitle: "Écrire un message",
    whatsappMessage: "Bonjour Ghali, ",
    servicesTitle: "Contact",
    actions: [
      { label: "Deuxième numéro", sub: "+212 6 72 42 14 20", url: "tel:+212672421420", icon: "phone" }
    ],
    website: "",

    badgesTitle: "En bref",
    badges: [
      { label: "Depuis 2015", sub: "chauffeur professionnel", icon: "wheel" },
      { label: "7 ans", sub: "agent de sécurité privée", icon: "shield" },
      { label: "Permis B · D", sub: "véhicules légers et transport de voyageurs", icon: "car" },
      { label: "Bac +2", sub: "niveau d'études", icon: "grad" }
    ],
    companiesTitle: "Expérience",
    companies: [
      { name: "Chauffeur professionnel", text: "Depuis 2015. Conduite de véhicules légers (permis B depuis 2015) et de minibus de transport de voyageurs et de personnel (permis D depuis 2026).",
        tags: ["Conduite sûre et maîtrisée", "Ponctualité", "Bonne connaissance des routes", "Contrôle quotidien du véhicule", "Accueil des passagers", "Respect du code de la route"] },
      { name: "Agent de sécurité privée", text: "7 ans d'expérience. Surveillance et sécurisation des sites, des biens et des personnes, avec un contrôle rigoureux des entrées et sorties.",
        tags: ["Rondes de surveillance", "Prévention des risques", "Intervention rapide en cas d'urgence", "Accueil et orientation des visiteurs", "Rapports et registre de garde"] }
    ],
    chipGroups: [
      { title: "Langues", items: ["Arabe · langue maternelle", "Français · intermédiaire", "Anglais · notions de base"] }
    ],

    instagram: "", facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", pinterest: "", snapchat: "",
    otherSocials: [],
    theme: "nuit",

    lang: "fr",
    i18n: {
      ar: {
        firstName: "غالي",
        lastName: "بارك الله",
        nameAr: "Ghali Barik-Alallah",
        profession: "سائق مهني · حارس أمن خاص",
        company: "مقيم بمدينة الداخلة",
        description: "سائق مهني منذ 2015، حاصل على رخصة السياقة صنف B وصنف D، وحارس أمن خاص بخبرة 7 سنوات. سياقة آمنة، التزام بالمواعيد وتعامل باحترافية.",
        address: "الداخلة، المغرب",
        whatsappSubtitle: "أرسل رسالة",
        whatsappMessage: "السلام عليكم غالي، ",
        servicesTitle: "تواصل معي",
        actions: [
          { label: "الرقم الثاني", sub: "+212 6 72 42 14 20", url: "tel:+212672421420", icon: "phone" }
        ],
        badgesTitle: "باختصار",
        badges: [
          { label: "منذ 2015", sub: "سائق مهني", icon: "wheel" },
          { label: "7 سنوات", sub: "حارس أمن خاص", icon: "shield" },
          { label: "رخصة B · D", sub: "سيارات خفيفة ونقل الركاب", icon: "car" },
          { label: "باك +2", sub: "المستوى الدراسي", icon: "grad" }
        ],
        companiesTitle: "الخبرة المهنية",
        companies: [
          { name: "سائق مهني", text: "منذ 2015. سياقة السيارات الخفيفة (صنف B منذ 2015) وحافلات نقل الركاب والمستخدمين (صنف D منذ 2026).",
            tags: ["سياقة آمنة ومنضبطة", "الالتزام التام بالمواعيد", "معرفة جيدة بالطرق والمسارات", "المراقبة اليومية للمركبة", "حسن استقبال الركاب", "احترام قانون السير"] },
          { name: "حارس أمن خاص", text: "خبرة 7 سنوات. حراسة وتأمين المنشآت والممتلكات والأشخاص، ومراقبة عمليات الدخول والخروج بدقة.",
            tags: ["جولات تفقدية منتظمة", "الوقاية من المخاطر", "التدخل السريع في الحالات الطارئة", "استقبال وتوجيه الزوار", "التقارير اليومية في سجل الحراسة"] }
        ],
        chipGroups: [
          { title: "اللغات", items: ["العربية · اللغة الأم", "الفرنسية · مستوى متوسط", "الإنجليزية · مستوى مبتدئ"] }
        ]
      }
    }
  },

  {
    // YASSINE SADIK (Settat) — aménagement & décoration d'intérieur — vraie carte client, ne pas supprimer
    slug: "yassine-sadik",
    firstName: "Yassine",
    lastName: "Sadik",
    profession: "Aménagement & décoration d'intérieur",
    company: "",
    photo: "/photos/yassine-sadik.jpg",
    description: "Aménagement et décoration d'intérieur à Settat et ses environs : salons, chambres, cuisines et espaces professionnels. Un accompagnement complet, de l'idée jusqu'aux finitions, pour des intérieurs modernes et soignés.",

    phone: "+212 6 90 10 99 45",
    email: "",
    address: "Settat",
    mapsUrl: "",

    whatsapp: "+212690109945",
    whatsappLabel: "Demander un devis",
    whatsappSubtitle: "Réponse rapide sur WhatsApp",
    whatsappMessage: "Bonjour Yassine, je souhaite un devis pour l'aménagement de mon intérieur.\nVille : \nType de travaux : \nSurface approximative : ",
    primaryAction: "whatsapp",
    servicesTitle: "Contact",
    saveSubtitle: "Enregistrer le numéro dans votre téléphone",
    website: "",
    googleReviewsUrl: "",

    galleryTitle: "Nos réalisations",
    gallery: [
      { src: "/photos/yassine/1.jpg", caption: "Salon & plafond lumineux" },
      { src: "/photos/yassine/2.jpg", caption: "Éclairage indirect" },
      { src: "/photos/yassine/3.jpg", caption: "Lignes lumineuses croisées" },
      { src: "/photos/yassine/4.jpg", caption: "Cuisine ouverte & lignes LED" },
      { src: "/photos/yassine/5.jpg", caption: "Caisson lumineux" },
      { src: "/photos/yassine/6.jpg", caption: "Couloir & corniches LED" },
      { src: "/photos/yassine/7.jpg", caption: "Caissons & spots" },
      { src: "/photos/yassine/8.jpg", caption: "Faux plafond modulaire" },
      { src: "/photos/yassine/9.jpg", caption: "Chantier en cours" }
    ],

    badgesTitle: "Nos services",
    badges: [
      { label: "Aménagement complet", sub: "De l'idée aux finitions", icon: "home" },
      { label: "Décoration intérieure", sub: "Matières, couleurs, ambiance", icon: "sparkle" },
      { label: "Faux plafonds & éclairage", sub: "Caissons, LED indirect", icon: "bolt" },
      { label: "Habillage mural", sub: "Moulures, meubles TV", icon: "tool" }
    ],

    instagram: "yassinesadik5", facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", pinterest: "", snapchat: "",
    otherSocials: [],
    theme: "noir"
  },

  {
    // DR.PHONES (Tanger) — Anass Benachir, réparation mobile — vraie carte client, ne pas supprimer
    slug: "dr-phones",
    firstName: "Dr.phones",
    lastName: "",
    profession: "Réparation iPhone & Android · Tanger",
    company: "Anass Benachir · Fondateur",
    photo: "/photos/dr-phones.jpg",
    description: "Votre téléphone, notre expertise. Réparation iPhone et Android, microsoudure et diagnostic professionnel à Tanger, pour les particuliers comme pour les magasins.",

    phone: "+212 6 61 97 65 89",
    email: "anass.drphones@gmail.com",
    address: "Tanger",
    mapsUrl: "https://maps.app.goo.gl/V9QfueAtMr63qpHU7",

    whatsapp: "+212661976589",
    whatsappLabel: "Demander une réparation",
    whatsappSubtitle: "Réponse rapide sur WhatsApp",
    whatsappMessage: "Bonjour Dr.phones, j'ai besoin d'une réparation.\nModèle du téléphone : \nProblème : ",
    primaryAction: "whatsapp",
    servicesTitle: "Contact",
    saveSubtitle: "Enregistrer Dr.phones dans votre téléphone",
    website: "",
    googleReviewsUrl: "https://search.google.com/local/writereview?placeid=ChIJ47uExK-HCw0RkkOqt05uJqM",

    badgesTitle: "Pour les particuliers",
    badges: [
      { label: "Écran & batterie", sub: "Remplacement soigné", icon: "phone" },
      { label: "Problème de charge", sub: "Connecteur, batterie", icon: "bolt" },
      { label: "Panne logicielle", sub: "Blocage, mise à jour", icon: "tool" },
      { label: "Tous les modèles", sub: "iPhone & Android", icon: "check" }
    ],
    badgeGroups: [
      { title: "Pour les magasins", badges: [
        { label: "Microsoudure", sub: "IC repair", icon: "wrench" },
        { label: "Cartes mères", sub: "Réparation électronique", icon: "tool" },
        { label: "Diagnostic avancé", sub: "Pannes complexes", icon: "chart" },
        { label: "Service B2B", sub: "Partenariat de confiance", icon: "briefcase" }
      ] },
      { title: "Pourquoi Dr.phones", badges: [
        { label: "Qualité garantie", sub: "Pièces et travail", icon: "shield" },
        { label: "Service rapide", sub: "Délais courts", icon: "clock" },
        { label: "Technicien expérimenté", sub: "Diagnostic précis", icon: "star" },
        { label: "Tanger", sub: "Atelier Dr.phones", icon: "pin" }
      ] }
    ],

    instagram: "anassbenachir", facebook: "https://www.facebook.com/share/19uRy9H4qJ/", tiktok: "dr_phones", linkedin: "", youtube: "", x: "", pinterest: "", snapchat: "",
    otherSocials: [],
    theme: "nuit"
  },

  {
    // YOUSSEF MANSOURI — vraie carte client, ne pas supprimer — Authentic Morocco by Mansouri (Casa Transfer + Casablanca Travel Experience) — profil bilingue FR / EN
    slug: "youssef-mansouri",
    firstName: "Youssef",
    lastName: "Mansouri",
    profession: "Tour Planner & Transport Services",
    company: "Fondateur · Authentic Morocco by Mansouri",
    photo: "/photos/youssef-mansouri.jpg",
    description: "Transferts privés, chauffeur VIP et circuits sur mesure à Casablanca et dans tout le Maroc. Plus de 11 ans d'expérience au service des voyageurs du monde entier.",

    phone: "+212 660 604 600",
    email: "mansouriyoussef305@gmail.com",
    address: "Aéroport Mohammed V · Casablanca",
    mapsUrl: "https://maps.app.goo.gl/s2nxMjSiPzUyQBrL6",

    whatsapp: "+212660604600",
    whatsappLabel: "Planifier mon voyage",
    whatsappSubtitle: "Réponse rapide sur WhatsApp",
    whatsappMessage: "Bonjour Youssef, je souhaite organiser un voyage.\nDate : \nNombre de personnes : \nLieu de prise en charge : \nService (transfert, circuit, expérience) : ",
    primaryAction: "whatsapp",
    waRow: true,
    waRowSubtitle: "+212 660 604 600",
    servicesTitle: "Contact",
    saveSubtitle: "Enregistrer le numéro dans votre téléphone",
    actions: [
      { label: "Telegram", sub: "+212 631 27 12 26", url: "https://t.me/+212631271226", icon: "telegram" }
    ],
    website: "",
    googleReviewsUrl: "https://g.page/r/CUBEyAenpuWIEBE/review",

    companiesTitle: "Nos entreprises",
    companies: [
      { name: "Casa Transfer", logo: "/photos/casa-transfer-logo.png", url: "https://casatransfer.com",
        text: "Transferts privés et chauffeur VIP depuis l'aéroport Mohammed V (CMN), à Casablanca et dans tout le Maroc.",
        tags: ["Accueil à l'aéroport", "Chauffeur privé", "Excursions", "24h/24 · 7j/7"] },
      { name: "Casablanca Travel Experience", logo: "/photos/casablanca-travel-experience-logo.png", url: "https://casablancatravelexperience.com",
        text: "Visites privées de Casablanca, circuits d'escale et expériences culinaires avec un guide local.",
        tags: ["Visite d'escale", "Cours de cuisine", "Hammam", "Visite gastronomique"] }
    ],

    badgesTitle: "En chiffres",
    badges: [
      { label: "11+ ans", sub: "d'expérience", icon: "trophy" },
      { label: "5.0 ★", sub: "plus de 450 avis", icon: "star" },
      { label: "24h/24", sub: "7 jours sur 7", icon: "clock" },
      { label: "100 % privé", sub: "aucun frais caché", icon: "shield" }
    ],
    fleetTitle: "Notre flotte",
    fleet: [
      { img: "/photos/ym-skoda.jpg", label: "Berline d'affaires", sub: "Skoda Superb · 1 à 3 pers." },
      { img: "/photos/ym-classe-e.jpg", label: "Berline VIP", sub: "Mercedes Classe E" },
      { img: "/photos/ym-vito.jpg", label: "Van VIP", sub: "Mercedes Vito · 7 places" },
      { img: "/photos/ym-sprinter.jpg", label: "Minibus VIP", sub: "Sprinter · 17 places" }
    ],
    chipGroups: [
      { title: "Destinations", items: ["Casablanca", "Rabat", "Fès", "Chefchaouen", "Marrakech", "Essaouira", "Atlas", "Merzouga & Sahara", "Tanger"] },
      { title: "Paiement", items: ["Espèces", "Carte bancaire / TPE", "PayPal", "Virement", "Lien de paiement"] }
    ],
    stepsTitle: "Comment réserver",
    steps: [
      { title: "Choisissez votre service", text: "Transfert aéroport, chauffeur privé, visite de la ville, circuit au Maroc ou expérience culinaire." },
      { title: "Envoyez vos détails", text: "Date, horaires de vol, nombre de personnes, lieu de prise en charge et demandes particulières." },
      { title: "Recevez la confirmation", text: "Itinéraire et prix clair par WhatsApp ou e-mail. Réservez maintenant, payez à votre arrivée." }
    ],

    instagram: "authentic_morocco_by_mansouri", facebook: "https://www.facebook.com/share/1JUciKMKK5/", tiktok: "casatransfertaxi", linkedin: "", youtube: "", x: "", pinterest: "", snapchat: "",
    otherSocials: [],
    theme: "ivoire",

    lang: "fr",
    i18n: {
      en: {
        profession: "Tour Planner & Transport Services",
        company: "Founder · Authentic Morocco by Mansouri",
        description: "Private transfers, VIP chauffeur and tailor-made tours in Casablanca and across Morocco. Over 11 years of experience welcoming travellers from all over the world.",
        address: "Mohammed V Airport · Casablanca",
        whatsappLabel: "Plan my trip",
        whatsappSubtitle: "Quick reply on WhatsApp",
        whatsappMessage: "Hello Youssef, I would like to plan a trip.\nDate: \nNumber of travellers: \nPick-up location: \nService (transfer, tour, experience): ",
        servicesTitle: "Contact",
        saveSubtitle: "Save the number to your phone",
        companiesTitle: "Our companies",
        companies: [
          { name: "Casa Transfer", logo: "/photos/casa-transfer-logo.png", url: "https://casatransfer.com",
            text: "Private transfers and VIP chauffeur service from Mohammed V Airport (CMN), in Casablanca and across Morocco.",
            tags: ["Airport meet & greet", "Private driver", "Day trips", "24/7"] },
          { name: "Casablanca Travel Experience", logo: "/photos/casablanca-travel-experience-logo.png", url: "https://casablancatravelexperience.com",
            text: "Private Casablanca tours, layover tours and food experiences with a local guide.",
            tags: ["Layover tour", "Cooking class", "Hammam", "Food tour"] }
        ],
        badgesTitle: "Key figures",
        badges: [
          { label: "11+ years", sub: "of experience", icon: "trophy" },
          { label: "5.0 ★", sub: "450+ reviews", icon: "star" },
          { label: "24/7", sub: "every day", icon: "clock" },
          { label: "100% private", sub: "no hidden fees", icon: "shield" }
        ],
        fleetTitle: "Our fleet",
        fleet: [
          { img: "/photos/ym-skoda.jpg", label: "Business sedan", sub: "Skoda Superb · 1 to 3 pax" },
          { img: "/photos/ym-classe-e.jpg", label: "VIP sedan", sub: "Mercedes E-Class" },
          { img: "/photos/ym-vito.jpg", label: "VIP van", sub: "Mercedes Vito · 7 seats" },
          { img: "/photos/ym-sprinter.jpg", label: "VIP minibus", sub: "Sprinter · 17 seats" }
        ],
        chipGroups: [
          { title: "Destinations", items: ["Casablanca", "Rabat", "Fes", "Chefchaouen", "Marrakech", "Essaouira", "Atlas Mountains", "Merzouga & Sahara", "Tangier"] },
          { title: "Payment", items: ["Cash", "Credit / debit card", "PayPal", "Bank transfer", "Payment link"] }
        ],
        stepsTitle: "How to book",
        steps: [
          { title: "Choose your service", text: "Airport transfer, private driver, city tour, Morocco tour or food experience." },
          { title: "Send your details", text: "Date, flight times, number of travellers, pick-up location and any special requests." },
          { title: "Get your confirmation", text: "Clear itinerary and price by WhatsApp or email. Book now, pay on arrival." }
        ]
      }
    }
  },

  {
    // MEHDI DELIVERY (Casablanca) — livreur / coursier — vraie carte client, ne pas supprimer
    slug: "mehdi-delivery",
    firstName: "Mehdi",
    lastName: "Delivery",
    profession: "Livreur · Coursier",
    company: "",
    photo: "/photos/mehdi-delivery.jpg",
    description: "Courses express, livraison de colis et de documents à Casablanca, pour les particuliers comme pour les professionnels. Un service rapide, fiable et soigné.",

    phone: "+212 6 00 76 39 56",
    email: "maatani43@gmail.com",
    address: "Casablanca",
    mapsUrl: "",

    whatsapp: "+212600763956",
    whatsappLabel: "Commander une course",
    whatsappSubtitle: "Réponse rapide sur WhatsApp",
    whatsappMessage: "Bonjour Mehdi, je souhaite une livraison.\nRécupération : \nLivraison : \nÀ livrer : \nPour quand : ",
    servicesTitle: "Contact",
    primaryAction: "whatsapp",
    saveSubtitle: "Pour vos prochaines courses",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    stepsTitle: "Comment commander",
    steps: [
      "Envoyez votre demande sur WhatsApp : adresse de récupération et de livraison",
      "Mehdi vous confirme le tarif et l'heure de passage",
      "Votre commande est récupérée et livrée rapidement"
    ],

    badgesTitle: "Nos services",
    badges: [
      { label: "Courses express", sub: "Achats du quotidien ou imprévus", icon: "bolt" },
      { label: "Particuliers", sub: "Courses et colis à domicile", icon: "home" },
      { label: "Professionnels", sub: "Documents, courriers, marchandise", icon: "briefcase" },
      { label: "Livraison de colis", sub: "Dans tout Casablanca", icon: "box" }
    ],

    hours: [
      { days: "Lundi – Vendredi", time: "8h00 – 19h00" },
      { days: "Samedi", time: "8h00 – 17h00" },
      { days: "Dimanche", time: "Fermé" }
    ],

    instagram: "mehdi_delivry", facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", pinterest: "", snapchat: "",
    otherSocials: [],
    theme: "nuit"
  },

  {
    // Taxi Parisien Van (Paris) — chauffeur privé — vraie carte client, ne pas supprimer
    slug: "taxi-parisien-van",
    firstName: "Taxi Parisien",
    lastName: "Van",
    profession: "Chauffeur privé · Paris",
    company: "",
    photo: "/photos/taxi-parisien-van.jpg",
    description: "Votre chauffeur privé en van 8 places, 24h/24 et 7j/7 : courses dans Paris, transferts vers les aéroports, les gares et Disneyland, et longs trajets partout en France et vers les pays frontaliers.",

    phone: "+33 7 58 02 49 84",
    email: "ettaliifati87@gmail.com",
    address: "Paris",
    mapsUrl: "",

    whatsapp: "+33758024984",
    whatsappLabel: "Réserver mon trajet",
    whatsappSubtitle: "Réponse rapide sur WhatsApp",
    whatsappMessage: "Bonjour, je souhaite réserver un trajet.\nDépart : \nArrivée : \nDate et heure : \nNombre de passagers : ",
    servicesTitle: "Contact",
    primaryAction: "whatsapp",
    saveSubtitle: "Pour vos prochains trajets",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    stepsTitle: "Comment réserver",
    steps: [
      "Envoyez votre trajet sur WhatsApp : départ, arrivée, date et heure",
      "Nous vous confirmons le tarif et la prise en charge",
      "Votre chauffeur vous attend à l'heure convenue"
    ],

    badgesTitle: "Nos trajets",
    badges: [
      { label: "Courses en ville", sub: "Dans tout Paris", icon: "city" },
      { label: "Aéroports", sub: "Roissy-CDG · Orly · Beauvais", icon: "plane" },
      { label: "Gares", sub: "Toutes les gares de Paris", icon: "train" },
      { label: "Disneyland Paris", sub: "Depuis Paris", icon: "castle" },
      { label: "Toute la France", sub: "Longue distance", icon: "route" },
      { label: "Pays frontaliers", sub: "Belgique, Suisse, Allemagne…", icon: "globe" }
    ],

    badgeGroups: [
      { title: "Votre confort", badges: [
        { label: "Van 8 places", sub: "Idéal familles & groupes", icon: "van" },
        { label: "Siège bébé", sub: "Inclus sur demande", icon: "baby" },
        { label: "24h/24 · 7j/7", sub: "Jour, nuit et week-end", icon: "clock" },
        { label: "Paris", sub: "Prise en charge dans tout Paris", icon: "pin" }
      ] },
      { title: "Paiement", badges: [
        { label: "Carte bancaire", sub: "CB acceptée", icon: "card" },
        { label: "Espèces", icon: "cash" },
        { label: "Paiement en ligne", icon: "link" }
      ] }
    ],

    instagram: "ettaliifati",
    snapchat: "fati_ettalii",
    facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    // ULTRA PROJETS (Agadir) — même gérant que RIBATE PRO — vraie carte client, ne pas supprimer
    slug: "ultra-projets",
    firstName: "Maati",
    lastName: "RIBATE",
    profession: "Gérant",
    company: "ULTRA PROJETS",
    photo: "/photos/ultra-projets-logo.jpg",
    description: "ULTRA PROJETS réalise vos travaux de génie civil, de forage et d'irrigation, ainsi que vos installations de pompage solaire, partout au Maroc.",

    phone: "+212 6 61 38 50 41",
    email: "ribate@hotmail.com",
    address: "Quartier El Houda, Agadir",
    mapsUrl: "https://maps.app.goo.gl/QztC6SjqSH8JC7Cg6",

    whatsapp: "0661385041",
    whatsappLabel: "Demander un devis",
    whatsappSubtitle: "Réponse sur WhatsApp",
    whatsappMessage: "Bonjour, je souhaite un devis pour des travaux.",
    servicesTitle: "Devis gratuit",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    badgesTitle: "Nos activités",
    badges: [
      { label: "Travaux génie civil", icon: "helmet" },
      { label: "Forage & irrigation", icon: "drop" },
      { label: "Pompage solaire", icon: "solar" },
      { label: "Basé à Agadir", icon: "pin" }
    ],

    instagram: "", facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },  {
    // RIBATE PRO (Agadir) — génie civil — vraie carte client, ne pas supprimer
    slug: "ribate-pro",
    firstName: "Maati",
    lastName: "RIBATE",
    profession: "Gérant",
    company: "RIBATE PRO",
    photo: "/photos/ribate-pro-logo.jpg",
    description: "RIBATE PRO réalise vos travaux de génie civil, de forage et d'irrigation, ainsi que vos installations de pompage solaire, partout au Maroc.",

    phone: "+212 6 61 38 50 41",
    email: "ribate@hotmail.com",
    address: "Quartier El Houda, Agadir",
    mapsUrl: "https://maps.app.goo.gl/QztC6SjqSH8JC7Cg6",

    whatsapp: "0661385041",
    whatsappLabel: "Demander un devis",
    whatsappSubtitle: "Réponse sur WhatsApp",
    whatsappMessage: "Bonjour, je souhaite un devis pour des travaux.",
    servicesTitle: "Devis gratuit",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    badgesTitle: "Nos activités",
    badges: [
      { label: "Travaux génie civil", icon: "helmet" },
      { label: "Forage & irrigation", icon: "drop" },
      { label: "Pompage solaire", icon: "solar" },
      { label: "Basé à Agadir", icon: "pin" }
    ],

    instagram: "", facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    // Mohamed Soufiane El Ouahabi — commerce — vraie carte client, ne pas supprimer
    slug: "soufiane-el-ouahabi",
    firstName: "Mohamed Soufiane",
    lastName: "El Ouahabi",
    profession: "Commerce",
    company: "",
    photo: "/photos/soufiane-el-ouahabi.jpg",
    description: "N'hésitez pas à me contacter : je vous réponds rapidement sur WhatsApp, Telegram et Botim.",

    phone: "+212 7 09 32 55 87",
    email: "elouahabimohamedsofian@gmail.com",
    address: "",
    mapsUrl: "",

    whatsapp: "0719142580",
    whatsappLabel: "Écrire sur WhatsApp",
    whatsappSubtitle: "07 19 14 25 80",
    whatsappMessage: "Bonjour, je vous contacte depuis votre carte VisiTap.",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    servicesTitle: "Me contacter",
    actions: [
      { label: "Écrire sur Telegram", sub: "07 19 14 25 80", url: "https://t.me/+212719142580", icon: "telegram" },
      { label: "Botim : 07 19 14 25 80", sub: "Touchez pour copier le numéro", copy: "0719142580", toast: "Numéro copié, collez-le dans Botim", icon: "chat" }
    ],

    instagram: "mohamed_sofian_el_ouahabi",
    facebook: "https://www.facebook.com/share/1A5evZ1Cvd/",
    tiktok: "", linkedin: "", youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "nuit"
  },

  {
    // Zaman Horlogerie (Rabat) — vraie carte client, ne pas supprimer
    slug: "zaman-horlogerie",
    firstName: "Zaman",
    lastName: "Horlogerie",
    profession: "Montres vintage originales",
    company: "",
    photo: "/photos/zaman-logo.jpg",
    description: "Des montres vintage authentiques, sélectionnées une à une : Seiko, Orient, Citizen, Junghans… Basés à Rabat, livraison gratuite.",

    phone: "+212 6 64 21 24 57",
    email: "",
    address: "",
    mapsUrl: "",

    whatsapp: "0664212457",
    whatsappLabel: "Commander sur WhatsApp",
    whatsappSubtitle: "Réponse rapide",
    whatsappMessage: "Bonjour, je suis intéressé(e) par une de vos montres.",
    website: "",
    appointmentUrl: "",
    appointmentLabel: "",
    googleReviewsUrl: "",

    actions: [
      { label: "Commander en DM Instagram", sub: "Écrivez-nous en message privé", url: "https://ig.me/m/zaman_1953_ma", icon: "chat" },
      { label: "Voir toutes nos montres", sub: "@zaman_1953_ma sur Instagram", url: "https://www.instagram.com/zaman_1953_ma", icon: "instagram" }
    ],

    galleryTitle: "Quelques pièces",
    gallery: [
      { src: "/photos/zaman/1.jpg", caption: "Carl Edmond" },
      { src: "/photos/zaman/2.jpg", caption: "Seiko 5 · Automatique" },
      { src: "/photos/zaman/3.jpg", caption: "Junghans" },
      { src: "/photos/zaman/4.jpg", caption: "Seiko Quartz" },
      { src: "/photos/zaman/5.jpg", caption: "Seiko Quartz" },
      { src: "/photos/zaman/6.jpg", caption: "Seiko 5 · Automatique" }
    ],

    stepsTitle: "Comment commander",
    steps: [
      "Choisissez votre montre sur notre Instagram",
      "Écrivez-nous en DM ou sur WhatsApp",
      "Réservez-la avec un acompte",
      "Recevez-la chez vous, livraison gratuite"
    ],

    badgesTitle: "Nos garanties",
    badges: [
      { label: "100 % original", icon: "check" },
      { label: "Livraison gratuite", icon: "truck" },
      { label: "Basé à Rabat", icon: "pin" },
      { label: "Réparation & entretien", sub: "@dr.watch.ma", url: "https://www.instagram.com/dr.watch.ma", icon: "wrench" }
    ],

    instagram: "zaman_1953_ma",
    facebook: "", tiktok: "", linkedin: "", youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "ivoire"
  },

  {
    slug: "youssef-alaoui",
    firstName: "Youssef",
    lastName: "Alaoui",
    profession: "Avocat au barreau",
    company: "Cabinet Alaoui & Associés",
    photo: "",
    description: "Profil de démonstration aux données fictives. Conseil et contentieux en droit des affaires et droit immobilier.",

    phone: "+212 600 000 002",
    email: "contact@example.com",
    address: "Boulevard d'Anfa, Casablanca",
    mapsUrl: "",

    whatsapp: "0600000002",
    whatsappMessage: "",
    website: "www.example.com",
    appointmentUrl: "",
    googleReviewsUrl: "",

    linkedin: "https://www.linkedin.com/in/youssef-alaoui-demo",
    x: "@youssefalaoui_demo",
    otherSocials: [
      { label: "Publications juridiques", url: "https://example.com/publications" }
    ],

    theme: "nuit"
  },

  {
    slug: "salma-idrissi",
    firstName: "Salma",
    lastName: "Idrissi",
    profession: "Dermatologue",
    company: "",
    photo: "",
    description: "Profil de démonstration aux données fictives. Dermatologie médicale et esthétique.",

    phone: "",
    email: "salma@example.com",
    address: "Hay Riad, Rabat",

    appointmentUrl: "https://example.com/rdv",
    instagram: "@dr.salma.demo",

    theme: "emeraude"
  },
   
  {
    slug: "salma-amarti",
    firstName: "Salma",
    lastName: "el amarti",
    profession: "Dermatologue",
    company: "",
    photo: "",
    description: "Profil de démonstration aux données fictives. Dermatologie médicale et esthétique.",

    phone: "",
    email: "salma@example.com",
    address: "Hay Riad, Rabat",

    appointmentUrl: "https://example.com/rdv",
    instagram: "@dr.salma.demo",

    theme: "emeraude"
  },
   
  {
    // Profil minimal : seuls les éléments renseignés s'affichent
    slug: "lina-hair",
    firstName: "Lina",
    lastName: "",
    profession: "Coiffeuse & coloriste",
    company: "Lina Hair Studio",
    photo: "",
    description: "Profil de démonstration aux données fictives.",

    phone: "+212 600 000 004",
    instagram: "@linahair.demo",
    tiktok: "linahair.demo",

    theme: "bordeaux"
  },

  /* ===================================================================
     CARTES PRÉPARÉES : profil-01 à profil-50
     -------------------------------------------------------------------
     Chaque carte physique pointe vers https://<votre-domaine>/profil-XX.
     Lors de la vente d'une carte : remplacez UNIQUEMENT les informations
     (nom, métier, photo, coordonnées, réseaux, thème…) du profil
     correspondant. Ne modifiez JAMAIS la ligne « slug » et ne supprimez
     pas le profil : l'adresse et le QR code imprimés en dépendent.
     =================================================================== */
  {
    slug: "profil-01",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "hamza",
    lastName: "elamarti",
    profession: "medecin cardiologue",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "0656916627", email: "hamzaelamarti604@gmail.com", address: "", mapsUrl: "",

    whatsapp: "0656916627", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-02",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "02",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-03",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "03",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-04",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "04",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-05",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "05",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-06",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "06",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-07",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "07",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-08",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "08",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-09",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "09",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-10",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "10",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-11",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "11",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-12",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "12",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-13",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "13",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-14",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "14",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-15",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "15",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-16",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "16",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-17",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "17",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-18",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "18",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-19",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "19",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-20",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "20",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-21",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "21",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-22",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "22",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-23",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "23",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-24",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "24",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-25",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "25",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-26",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "26",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-27",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "27",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-28",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "28",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-29",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "29",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-30",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "30",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-31",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "31",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-32",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "32",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-33",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "33",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-34",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "34",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-35",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "35",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-36",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "36",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-37",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "37",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-38",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "38",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-39",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "39",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-40",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "40",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-41",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "41",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-42",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "42",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-43",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "43",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-44",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "44",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-45",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "45",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-46",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "46",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-47",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "47",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-48",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "48",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-49",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "49",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  },

  {
    slug: "profil-50",                  // NE PAS MODIFIER : adresse et QR code imprimés
    firstName: "Profil",
    lastName: "50",
    profession: "Carte VisiTap disponible",
    company: "",
    photo: "",
    description: "Profil fictif en attente d'attribution. Informations à remplacer par celles du client.",

    phone: "", email: "", address: "", mapsUrl: "",

    whatsapp: "", whatsappMessage: "",
    website: "",
    appointmentUrl: "", appointmentLabel: "",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
    otherSocials: [],

    theme: "noir"
  }
];
