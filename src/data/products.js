// ============================================================================
// CATALOGUE CLUB MOBILE
// ============================================================================
// Pour ajouter, modifier ou retirer un produit : éditez simplement ce tableau.
// Aucune autre partie du code n'a besoin d'être touchée.
//
// Champ "image" : URL d'une photo. Pour remplacer par une vraie photo du
// magasin, il suffit de coller la nouvelle URL ici (ou un chemin local,
// ex: "/photos/mon-produit.jpg" si vous ajoutez vos images dans /public/photos).
//
// Les photos actuelles viennent de Pexels (libres de droits, usage commercial
// autorisé, aucune attribution requise) — à remplacer par les vraies photos
// des produits du magasin dès que possible pour un rendu 100% authentique.
// ============================================================================

export const CATEGORIES = [
  { key: "tous", label: "Tous" },
  { key: "telephones", label: "Téléphones" },
  { key: "electromenager", label: "Électroménager" },
  { key: "accessoires", label: "Accessoires" },
];

// Helper : construit une URL Pexels optimisée (compressée, largeur fixe)
function px(id, w = 800) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const PRODUCTS = [
  // ----- Téléphones -----
  {
    id: 1,
    name: "Samsung Galaxy A15",
    category: "telephones",
    image: px(21854468),
    price: 129000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 2,
    name: "Samsung Galaxy A05",
    category: "telephones",
    image: px(215581),
    price: 79000,
    oldPrice: 89000,
    tag: "PROMO",
  },
  {
    id: 3,
    name: "iPhone 11 (reconditionné)",
    category: "telephones",
    image: px(47261),
    price: 165000,
    oldPrice: 185000,
    tag: "PROMO",
  },
  {
    id: 4,
    name: "Tecno Spark 20",
    category: "telephones",
    image: px(24181865),
    price: 99000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 5,
    name: "Infinix Hot 40",
    category: "telephones",
    image: px(3945672),
    price: 95000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 6,
    name: "Redmi 13C",
    category: "telephones",
    image: px(1028674),
    price: 85000,
    oldPrice: 95000,
    tag: "PROMO",
  },
  {
    id: 7,
    name: "Samsung Galaxy A55",
    category: "telephones",
    image: px(5961044),
    price: 245000,
    oldPrice: null,
    tag: null,
  },

  // ----- Électroménager -----
  {
    id: 8,
    name: "Réfrigérateur 2 portes 300L",
    category: "electromenager",
    image: px(9551373),
    price: 285000,
    oldPrice: 320000,
    tag: "PROMO",
  },
  {
    id: 9,
    name: "Climatiseur Split 1.5CV",
    category: "electromenager",
    image: px(6264408),
    price: 195000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 10,
    name: "Machine à laver 7kg",
    category: "electromenager",
    image: px(4700400),
    price: 175000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 11,
    name: "Congélateur horizontal 200L",
    category: "electromenager",
    image: px(11213239),
    price: 165000,
    oldPrice: 185000,
    tag: "PROMO",
  },
  {
    id: 12,
    name: "Mixeur / Blender 1.5L",
    category: "electromenager",
    image: px(6987718),
    price: 22000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 13,
    name: "Four électrique 45L",
    category: "electromenager",
    image: px(9031968),
    price: 65000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 14,
    name: "Ventilateur sur pied",
    category: "electromenager",
    image: px(6508357),
    price: 28000,
    oldPrice: 35000,
    tag: "PROMO",
  },

  // ----- Accessoires -----
  {
    id: 15,
    name: "Chargeur rapide 33W",
    category: "accessoires",
    image: px(4072683),
    price: 8000,
    oldPrice: null,
    tag: null,
  },
  {
    id: 16,
    name: "Écouteurs Bluetooth",
    category: "accessoires",
    image: px(33298188),
    price: 15000,
    oldPrice: 20000,
    tag: "PROMO",
  },
  {
    id: 17,
    name: "Coque de protection",
    category: "accessoires",
    image: px(5083490),
    price: 3500,
    oldPrice: null,
    tag: null,
  },
  {
    id: 18,
    name: "Verre trempé (protection écran)",
    category: "accessoires",
    image: px(5083491),
    price: 2500,
    oldPrice: null,
    tag: null,
  },
  {
    id: 19,
    name: "Power bank 20 000mAh",
    category: "accessoires",
    image: px(5208777),
    price: 18000,
    oldPrice: null,
    tag: "NOUVEAU",
  },
  {
    id: 20,
    name: "Enceinte Bluetooth portable",
    category: "accessoires",
    image: px(8380433),
    price: 25000,
    oldPrice: 30000,
    tag: "PROMO",
  },
];
