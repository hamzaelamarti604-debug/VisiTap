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
   ===================================================================== */

const BRAND = {
  name: "VisiTap",
  tagline: "Your identity. One tap away.",

  // Domaine définitif SANS « / » final, ex. "https://visitap.vercel.app".
  // Utilisé pour le QR code, le partage et la fiche contact : c'est aussi
  // l'adresse à programmer dans les puces NFC. Vide = adresse actuelle du site.
  baseUrl: "",

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
     sarah-benali, dr-yassine, youssef-alaoui, salma-idrissi, lina-hair :
     exemples montrant toutes les possibilités du design. Ils ne sont liés
     à aucune carte imprimée : vous pouvez les supprimer avant la mise en
     production sans aucun risque pour les profils profil-01 à profil-50.
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
    slug: "dr-yassine",
    firstName: "Yassine",
    lastName: "Amrani",
    profession: "Médecin généraliste",
    company: "Cabinet médical Amrani",
    photo: "",
    description: "Profil de démonstration aux données fictives. Consultations de médecine générale, suivi des maladies chroniques et prévention.",

    phone: "+212 600 000 005",
    email: "cabinet@example.com",
    address: "Rue Oued Fès, Agdal, Rabat",
    mapsUrl: "",

    whatsapp: "",
    website: "",
    appointmentUrl: "https://example.com/agenda",
    appointmentLabel: "Prendre rendez-vous",
    googleReviewsUrl: "",

    instagram: "", facebook: "", tiktok: "", linkedin: "",
    youtube: "", x: "", snapchat: "", pinterest: "",
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
    firstName: "Profil",
    lastName: "01",
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
