import React from "react";

const ITEMS = [
  {
    title: "Livraison rapide",
    desc: "Partout à Dakar, sous 24h",
    icon: (
      <path
        d="M3 7h11v8H3V7Zm11 3h4l3 3v2h-7v-5ZM6 18a2 2 0 1 0 .001-4.001A2 2 0 0 0 6 18Zm12 0a2 2 0 1 0 .001-4.001A2 2 0 0 0 18 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Paiement à la livraison",
    desc: "Ou via Wave / Orange Money",
    icon: (
      <path
        d="M3 6h18v12H3V6Zm0 4h18M7 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Garantie boutique",
    desc: "Sur tous les appareils neufs",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Zm-1.6 9.4 3.6-4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-cream flex items-center justify-center text-brand-red">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                {item.icon}
              </svg>
            </div>
            <div>
              <p className="font-semibold text-brand-ink text-sm">{item.title}</p>
              <p className="text-brand-ink/55 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
