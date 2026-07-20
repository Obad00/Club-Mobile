import React from "react";
import { buildWhatsappLink, STORE_PHONE_NUMBER } from "../config";

function formatPrice(value) {
  return value.toLocaleString("fr-FR") + " FCFA";
}

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-black/[0.06] rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition">
      <div className="relative aspect-square overflow-hidden bg-brand-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-300"
        />
        {product.tag && (
          <span
            className={`absolute top-2.5 left-2.5 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full ${
              product.tag === "PROMO"
                ? "bg-brand-red text-white"
                : "bg-brand-ink text-white"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-[0.95rem] font-semibold leading-snug text-brand-ink mb-2">
          {product.name}
        </h3>

        <div className="mb-3 mt-auto">
          <span className="text-brand-red font-display font-semibold text-base sm:text-lg">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="ml-2 text-xs sm:text-sm text-brand-ink/40 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={buildWhatsappLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-whatsapp text-white text-xs sm:text-sm font-semibold py-2 rounded-lg active:scale-95 transition"
          >
            Commander
          </a>
          <a
            href={`tel:${STORE_PHONE_NUMBER}`}
            className="flex items-center justify-center gap-1.5 bg-brand-ink text-white text-xs sm:text-sm font-semibold py-2 rounded-lg active:scale-95 transition"
          >
            Appeler
          </a>
        </div>
      </div>
    </div>
  );
}
