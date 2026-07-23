import React from "react";

const MESSAGES = [
  "Livraison rapide partout à Dakar",
  "Paiement à la livraison, Wave ou Orange Money accepté",
  "Garantie boutique sur tous les appareils neufs",
  "Nouveaux prix chaque semaine sur une sélection de produits",
];

export default function MarqueeBanner() {
  const items = [...MESSAGES, ...MESSAGES];

  return (
    <div
      className="bg-brand-red text-white overflow-hidden py-2"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {items.map((msg, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-wide pr-10 whitespace-nowrap"
          >
            {msg}
            <span className="opacity-60">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
