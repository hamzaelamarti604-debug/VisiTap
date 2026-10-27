# VisiTap — Cartes de visite numériques

*Your identity. One tap away.*

Un seul site, un seul projet Vercel, autant de cartes que nécessaire.
Chaque professionnel a son adresse : `https://votre-domaine/<slug>`
(ex. `https://votre-domaine/profil-07`).

---

## 1. Contenu du projet

| Fichier / dossier | Rôle | À envoyer sur GitHub |
|---|---|---|
| `index.html` | Le site : design, animations, affichage des profils, fiche contact, partage, QR code | **Oui, obligatoire** |
| `config.js` | La marque (`BRAND`) et la liste des profils (`PROFILES`), dont les 50 cartes préparées | **Oui, obligatoire** |
| `vercel.json` | Fait fonctionner les adresses `/slug` sur Vercel | **Oui, obligatoire** |
| `photos/` | Photos des professionnels (vide au départ) | **Oui** |
| `README.md` | Ce guide | Recommandé |
| `qr-codes.html` | Outil interne : génère les QR codes de toutes les cartes | Facultatif (voir § 5) |
| `preview.html` | Aperçu de référence du design validé (données fictives) | Facultatif (visible à `/preview.html` s'il est publié) |

Aucune dépendance, aucune étape de construction (build), aucune clé secrète.
Les QR codes sont générés directement dans le navigateur. Seules les polices viennent
de Google Fonts ; sans connexion, des polices système prennent le relais.

---

## 2. Ouvrir le site sur votre ordinateur

1. Décompressez l'archive. Gardez tous les fichiers **dans le même dossier**.
2. Ouvrez `index.html` dans Chrome, Safari ou Edge en ajoutant `?p=` et un slug,
   par exemple : `index.html?p=profil-01` ou `index.html?p=sarah-benali`.
   (Le paramètre `?p=` remplace le routage de Vercel en local.)

Sans `?p=`, la page d'accueil VisiTap s'affiche.

---

## 3. Mettre le site en ligne (GitHub puis Vercel)

### a) GitHub
1. Sur github.com : **New repository** → nommez-le (ex. `visitap`) → **Create repository**.
2. Cliquez **uploading an existing file**.
3. Glissez le **contenu** du dossier `visitap` (pas le dossier lui-même) :
   `index.html` doit être à la racine du dépôt.
4. **Commit changes**.

### b) Vercel
1. Sur vercel.com : **Add New… → Project** → importez le dépôt `visitap`.
2. **Framework Preset : Other**. Laissez *Build Command* et *Output Directory* vides.
3. **Deploy**. Vercel vous donne une adresse de production, ex. `https://visitap.vercel.app`.

### c) Fixer le domaine définitif — indispensable avant d'imprimer
1. Si vous voulez un nom de domaine personnalisé (ex. `visitap.ma`), branchez-le
   **maintenant** dans Vercel (*Settings → Domains*). Changer de domaine après
   l'impression rendrait toutes les cartes imprimées inutilisables.
2. Dans `config.js`, renseignez ce domaine, **sans « / » final** :
   `baseUrl: "https://visitap.vercel.app",`
3. Publiez la modification sur GitHub (Vercel redéploie seul en ~30 s).

Le QR code affiché sur chaque carte, le partage et la fiche contact utilisent ce domaine.
C'est aussi l'adresse à programmer dans les puces NFC.

---

## 4. Les 50 cartes préparées (`profil-01` à `profil-50`)

`config.js` contient 50 profils prêts à l'emploi. Chacun a une adresse fixe :

```
https://votre-domaine/profil-01
https://votre-domaine/profil-02
…
https://votre-domaine/profil-50
```

Tant qu'une carte n'est pas vendue, sa page affiche « Profil 01 — Carte VisiTap
disponible », sans aucune coordonnée.

### Le QR code ne dépend que du slug
Le QR et la puce NFC contiennent uniquement `domaine/profil-XX`. Ils ne contiennent
**ni le nom, ni le téléphone, ni aucune autre information**. Vous pouvez donc changer
toutes les informations d'un profil sans réimprimer la carte.

### Vendre une carte
1. Ouvrez `config.js` (sur github.com : fichier → icône crayon).
2. Trouvez le bloc du profil vendu, ex. `slug: "profil-07"`.
3. Remplacez les informations : `firstName`, `lastName`, `profession`, `company`,
   `photo`, `description`, `phone`, `email`, `address`, réseaux, `theme`…
4. **Ne modifiez jamais la ligne `slug`** et ne supprimez jamais le profil.
5. **Commit changes**. Une minute plus tard, la carte du client affiche ses informations.

---

## 5. Générer les QR codes : `qr-codes.html`

1. Vérifiez que `baseUrl` est renseigné dans `config.js` (§ 3 c).
2. Ouvrez `qr-codes.html` dans le navigateur, **avec `config.js` dans le même dossier**
   (ou en ligne, à `https://votre-domaine/qr-codes.html` si vous l'avez publié).
3. Le domaine se remplit automatiquement depuis `baseUrl`. Le message doit indiquer
   **« Domaine conforme… Les QR peuvent être imprimés »**.
   L'outil refuse de générer sans domaine, et vous avertit si l'adresse est locale,
   provisoire (prévisualisation Vercel) ou différente de `baseUrl`.
4. Au choix :
   - **Télécharger tous les QR (ZIP de PNG)** : 50 images `qr-profil-01.png` … `qr-profil-50.png`
     (≈ 1 200 px, noir sur blanc) + `liste-des-adresses.csv` (slug ; adresse), utile pour
     l'imprimeur et pour programmer les puces NFC ;
   - **PNG** ou **SVG** sous chaque QR : téléchargement individuel (le SVG est vectoriel,
     idéal pour l'impression) ;
   - **Imprimer la planche** : planche de tous les QR avec leur slug et leur adresse.
5. Le menu « Tous les profils » affiche aussi les QR des profils de démonstration.

Conseils d'impression : au moins 2 cm de côté, noir sur fond clair, sans couper la marge
blanche autour du QR. Scannez quelques cartes d'essai avant l'impression complète.

---

## 6. Ajouter d'autres professionnels

Copiez le **modèle** placé en haut de `config.js` dans `PROFILES = [ ... ]`
(chaque profil séparé du suivant par une virgule), choisissez un `slug` unique
(minuscules, chiffres, tirets) et remplissez les champs utiles.
**Un champ laissé vide (`""`) n'affiche rien.** Pour de nouvelles cartes préparées,
continuez simplement la série : `profil-51`, `profil-52`…

### Champs disponibles

| Champ | Exemple | Où il apparaît |
|---|---|---|
| `slug` | `"profil-07"` | Adresse de la carte (obligatoire, unique, **définitif**) |
| `firstName`, `lastName` | `"Karim"`, `"Tazi"` | Nom |
| `profession` | `"Notaire"` | Sous le nom, entre deux filets dorés |
| `company` | `"Étude Tazi"` | Sous la profession, en italique |
| `photo` | `"/photos/karim-tazi.jpg"` | Portrait (sinon, initiales élégantes) |
| `description` | 2 à 3 lignes | Présentation |
| `phone` | `"+212 6 12 34 56 78"` | Icône téléphone → affiche le numéro → appel |
| `email` | `"contact@exemple.ma"` | Icône enveloppe → affiche l'adresse → nouveau message |
| `address` | `"Agdal, Rabat"` | Icône localisation → affiche l'adresse → Google Maps |
| `mapsUrl` | lien Google Maps précis | Facultatif : remplace la recherche automatique |
| `whatsapp`, `whatsappMessage` | `"0612345678"`, `"Bonjour…"` | Ligne WhatsApp (numéro local converti avec `defaultCountryCode`) |
| `website` | `"www.exemple.ma"` | Ligne Site web |
| `appointmentUrl`, `appointmentLabel` | lien de réservation | Ligne dorée « Prendre rendez-vous » |
| `googleReviewsUrl` | lien exact de la fiche Google | Ligne « Avis Google » |
| `instagram`, `facebook`, `tiktok`, `linkedin`, `youtube`, `x`, `snapchat`, `pinterest` | `"@karim"` ou lien complet | Grille « Réseaux » |
| `otherSocials` | `[{ label: "Portfolio", url: "https://…" }]` | Section « Liens » |
| `theme` | `"noir"` | `noir`, `ivoire`, `nuit`, `emeraude`, `bordeaux` |

Photos : déposez-les dans `photos/` (carrées, ~800 px, JPEG) et indiquez
`photo: "/photos/nom-du-fichier.jpg"`.

### Réglages de la marque (`BRAND`)
`baseUrl` (domaine définitif), `defaultCountryCode` (`"212"`), `ctaUrl` / `ctaLabel`
(lien « Créer ma carte VisiTap »), `homeSlug` (profil affiché sur `/`), `showQr`.

### Profils de démonstration
`sarah-benali`, `dr-yassine`, `youssef-alaoui`, `salma-idrissi`, `lina-hair` sont des
exemples **fictifs**, signalés comme tels sur leur page. Ils ne sont liés à aucune carte :
vous pouvez les supprimer de `config.js` avant la mise en production.

---

## 7. Vérifier après le déploiement

1. Ouvrez `https://votre-domaine/profil-01` puis `/profil-50` : chaque page affiche son profil.
2. Ouvrez `https://votre-domaine/profil-99` : « Profil introuvable » doit s'afficher.
3. Sur une page, touchez les icônes, « Ajouter aux contacts », « Partager » et « QR code ».
4. Scannez plusieurs QR **imprimés** avec un iPhone et un Android.
5. Programmez une puce NFC avec l'adresse de la liste CSV et testez-la.

---

## 8. En cas de problème

| Message / symptôme | Cause probable | Solution |
|---|---|---|
| « Carte momentanément indisponible » | `config.js` absent, mal placé, ou faute de frappe (virgule, guillemet) | Vérifiez que `config.js` est à côté de `index.html` ; annulez la dernière modification sur GitHub |
| « Profil introuvable » | Le slug n'existe pas dans `PROFILES` | Vérifiez l'orthographe du `slug` |
| `qr-codes.html` refuse de générer | Domaine vide ou invalide | Renseignez `baseUrl` dans `config.js` |
| Un bouton manque | Le champ correspondant est vide | Renseignez le champ |
| L'aperçu d'un éditeur affiche l'erreur de configuration | Il montre `index.html` seul, sans `config.js` | Normal : ouvrez le dossier complet ou l'adresse Vercel |

Dans certains navigateurs intégrés (Instagram, Facebook), le téléchargement de la fiche
contact peut être bloqué : ouvrir la carte dans Safari ou Chrome règle le problème.
