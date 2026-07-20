// Coordonnées du magasin. Un seul endroit à modifier si le numéro change.
export const STORE_WHATSAPP_NUMBER = "221775151516"; // format international, sans +
export const STORE_PHONE_NUMBER = "+221775151516";
export const STORE_ADDRESS = "Ouakam, Dakar, Sénégal";

export function buildWhatsappLink(productName) {
  const message = productName
    ? `Bonjour, je suis intéressé(e) par : ${productName}. Est-il toujours disponible ?`
    : "Bonjour, je souhaite avoir plus d'informations sur vos produits Club Mobile.";
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
