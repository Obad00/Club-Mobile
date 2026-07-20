# Club Mobile — Site vitrine

Site vitrine React (Vite + Tailwind CSS) pour **Club Mobile**, boutique de
téléphones, électroménager et accessoires à Ouakam, Dakar.

Aucun backend, aucune base de données : tout le catalogue vit dans un simple
fichier JavaScript (`src/data/products.js`). Commande via WhatsApp, appel
direct — rien d'autre à gérer côté serveur.

## Structure

```
club-mobile-site/
├── src/
│   ├── components/
│   │   ├── Header.jsx           (logo + bouton Appeler, sticky)
│   │   ├── Hero.jsx              (accroche + collage produits)
│   │   ├── TrustStrip.jsx        (livraison, paiement, garantie)
│   │   ├── CategoryFilter.jsx    (filtre Tous/Téléphones/Électroménager/Accessoires)
│   │   ├── ProductCard.jsx       (carte produit : photo, prix, WhatsApp, Appeler)
│   │   ├── ProductGrid.jsx
│   │   ├── FloatingWhatsApp.jsx  (bouton flottant, visible partout)
│   │   ├── Footer.jsx
│   │   └── Logo.jsx              (logo SVG "Club Mobile")
│   ├── data/
│   │   └── products.js           (⭐ LE CATALOGUE — à modifier ici)
│   ├── config.js                 (numéro WhatsApp / téléphone du magasin)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Gérer le catalogue (le fichier qui compte vraiment)

Tout se passe dans **`src/data/products.js`**. Chaque produit est un objet :

```js
{
  id: 21,
  name: "Nom du produit",
  category: "telephones", // ou "electromenager" / "accessoires"
  image: "https://...",   // URL de la photo (voir ci-dessous)
  price: 50000,
  oldPrice: 60000,        // ou null si pas de promo
  tag: "PROMO",           // "PROMO" | "NOUVEAU" | null
}
```

Pour ajouter un produit : copiez un objet existant, changez les valeurs.
Pour en retirer un : supprimez son bloc. Pour changer une photo : remplacez
la valeur de `image`.

### Remplacer les photos par les vraies photos du magasin

Les photos actuelles viennent de **Pexels** (banque d'images libres de
droits, usage commercial autorisé, aucune attribution requise) — elles
donnent un rendu propre et professionnel en attendant les vraies photos.

Pour les remplacer par de vraies photos du magasin :

1. Prenez une photo du produit (fond clair de préférence, bon éclairage)
2. Ajoutez le fichier dans le dossier `public/photos/` (à créer)
3. Dans `products.js`, remplacez la ligne `image: px(...)` par :
   ```js
   image: "/photos/nom-du-fichier.jpg",
   ```

Pas besoin de toucher à autre chose : le composant `ProductCard` affiche
n'importe quelle URL ou chemin local de la même façon.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview   # pour tester le build avant de déployer
```

## Déployer sur Vercel

Aucune configuration nécessaire — Vercel détecte automatiquement un projet
Vite.

1. Poussez ce dossier sur un dépôt GitHub
2. Sur https://vercel.com → **Add New Project** → importez le dépôt
3. Vercel détecte "Vite" automatiquement (build command `npm run build`,
   output directory `dist`) — cliquez juste sur **Deploy**
4. C'est en ligne en quelques secondes, avec une URL du type
   `https://club-mobile.vercel.app`

Chaque `git push` redéploie automatiquement le site.

## Modifier le numéro WhatsApp / téléphone

Tout est centralisé dans **`src/config.js`** :

```js
export const STORE_WHATSAPP_NUMBER = "221775151516"; // sans le +
export const STORE_PHONE_NUMBER = "+221775151516";
```

## Si vous avez besoin d'évoluer plus tard

Ce site est volontairement simple (pas de backend, pas de base de données)
car le catalogue ne change pas tous les jours. Si un jour vous avez besoin
d'un espace admin pour gérer les produits sans toucher au code, ou d'un vrai
suivi de stock, cette architecture peut évoluer vers une vraie API — mais ce
n'est pas nécessaire pour commencer.
