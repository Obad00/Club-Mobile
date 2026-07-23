import React from "react";
import { buildWhatsappLink, STORE_PHONE_NUMBER } from "../config";
import useInView from "../hooks/useInView";

function formatPrice(value) {
  return value.toLocaleString("fr-FR") + " FCFA";
}

export default function ProductCard({ product }) {
  const [imgRef, imgVisible] = useInView(0.2);

  return (
    <div className="group bg-white border border-black/[0.06] rounded-2xl flex flex-col transition duration-300 hover:shadow-xl hover:-translate-y-1 active:shadow-xl active:-translate-y-1">
      <div className="p-2 sm:p-2.5">
        <div
          ref={imgRef}
          className={`img-reveal ${
            imgVisible ? "img-reveal-visible" : ""
          } relative aspect-square overflow-hidden rounded-xl bg-brand-cream shadow-[0_14px_28px_-14px_rgba(200,16,46,0.35)] transition-shadow duration-300 group-hover:shadow-[0_18px_32px_-10px_rgba(200,16,46,0.5)]`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.06] group-active:scale-[1.06]"
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
      </div>

      <div className="px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col flex-1">
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

        <div className="flex gap-2">
          <a
            href={buildWhatsappLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Commander ${product.name} sur WhatsApp`}
            className="flex-1 flex items-center justify-center bg-whatsapp text-white py-2.5 rounded-lg active:scale-95 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.35 2 11.72c0 1.98.6 3.82 1.63 5.36L2 22l5.1-1.58A10.4 10.4 0 0012 21.44c5.52 0 10-4.35 10-9.72S17.52 2 12 2Zm0 17.6c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-2.98.92.94-2.85-.2-.32a7.87 7.87 0 01-1.3-4.24c0-4.36 3.7-7.9 8.23-7.9s8.23 3.54 8.23 7.9-3.7 7.88-8.23 7.88Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href={`tel:${STORE_PHONE_NUMBER}`}
            aria-label={`Appeler pour ${product.name}`}
            className="flex-1 flex items-center justify-center bg-brand-ink text-white py-2.5 rounded-lg active:scale-95 transition"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
