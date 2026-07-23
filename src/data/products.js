// ============================================================================
// CATALOGUE CLUB MOBILE
// ============================================================================
// Pour ajouter, modifier ou retirer un produit : éditez simplement ce tableau.
// Aucune autre partie du code n'a besoin d'être touchée.
//
// Champ "image" : chemin vers une photo dans /public/photos. Pour remplacer
// une photo, déposez le nouveau fichier dans public/photos/ et mettez à jour
// le chemin ici.
// ============================================================================

export const CATEGORIES = [
  { key: "tous", label: "Tous" },
  { key: "telephones", label: "Téléphones" },
  { key: "electromenager", label: "Électroménager" },
  { key: "accessoires", label: "Accessoires" },
];

export const PRODUCTS = [
  // ----- Téléphones -----
  {
    id: 1,
    name: "Samsung Galaxy A15",
    category: "telephones",
    image: "/photos/iphone-trio-camera.jpg",
    price: 129000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 2,
    name: "Samsung Galaxy A05",
    category: "telephones",
    image: "/photos/samsung-galaxy-boxes.jpg",
    price: 79000,
    oldPrice: 89000,
    tag: "PROMO",
  },
  {
    id: 3,
    name: "iPhone 11 (reconditionné)",
    category: "telephones",
    image: "/photos/iphone-duo-blanc-orange.jpg",
    price: 165000,
    oldPrice: 185000,
    tag: "PROMO",
  },
  {
    id: 4,
    name: "Tecno Spark 20",
    category: "telephones",
    image: "/photos/iphone-boxes-couleurs.jpg",
    price: 99000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 5,
    name: "Infinix Hot 40",
    category: "telephones",
    image: "/photos/iphone-colorful-boxes.jpg",
    price: 95000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 6,
    name: "Redmi 13C",
    category: "telephones",
    image: "/photos/iphone-boxes-carton.jpg",
    price: 85000,
    oldPrice: 95000,
    tag: "PROMO",
  },
  {
    id: 7,
    name: "Samsung Galaxy A55",
    category: "telephones",
    image: "/photos/iphone-boxes-rosegold.jpg",
    price: 245000,
    oldPrice: null,
    tag: null,
  },

  // ----- Électroménager -----
  {
    id: 8,
    name: "Réfrigérateur 2 portes 300L",
    category: "electromenager",
    image: "/photos/refrigerateur-samsung.jpg",
    price: 285000,
    oldPrice: 320000,
    tag: "PROMO",
  },
  {
    id: 9,
    name: "Climatiseur Split 1.5CV",
    category: "electromenager",
    image: "/photos/climatiseur-royal.jpg",
    price: 195000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 10,
    name: "Machine à laver 7kg",
    category: "electromenager",
    image: "/photos/refrigerateurs-boutique.jpg",
    price: 175000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 11,
    name: "Congélateur horizontal 200L",
    category: "electromenager",
    image: "/photos/congelateur-freezer.jpg",
    price: 165000,
    oldPrice: 185000,
    tag: "PROMO",
  },
  {
    id: 12,
    name: "Mixeur / Blender 1.5L",
    category: "electromenager",
    image: "/photos/petit-electromenager-collage.jpg",
    price: 22000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 13,
    name: "Four électrique 45L",
    category: "electromenager",
    image: "/photos/climatiseur-blanc-kit.jpg",
    price: 65000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 14,
    name: "Ventilateur sur pied",
    category: "electromenager",
    image: "/photos/refrigerateurs-boutique.jpg",
    price: 28000,
    oldPrice: 35000,
    tag: "PROMO",
  },

  // ----- Accessoires -----
  {
    id: 15,
    name: "Chargeur rapide 33W",
    category: "accessoires",
    image: "/photos/chargeur-cables.jpg",
    price: 8000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 16,
    name: "Écouteurs Bluetooth",
    category: "accessoires",
    image: "/photos/ecouteurs-collection.jpg",
    price: 15000,
    oldPrice: 20000,
    tag: "PROMO",
  },
  {
    id: 17,
    name: "Coque de protection",
    category: "accessoires",
    image: "/photos/coque-protection.jpg",
    price: 3500,
    oldPrice: null,
    tag: null,
  },
  {
    id: 18,
    name: "Verre trempé (protection écran)",
    category: "accessoires",
    image: "/photos/verre-trempe-film.jpg",
    price: 2500,
    oldPrice: null,
    tag: null,
  },
  {
    id: 19,
    name: "Power bank 20 000mAh",
    category: "accessoires",
    image: "/photos/chargeur-cables.jpg",
    price: 18000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 20,
    name: "Enceinte Bluetooth portable",
    category: "accessoires",
    image: "/photos/enceinte-jbl.jpg",
    price: 25000,
    oldPrice: null,
    tag: "PROMO",
  },
];
