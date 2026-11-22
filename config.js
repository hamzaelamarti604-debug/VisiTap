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
