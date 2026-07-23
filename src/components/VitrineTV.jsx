import React, { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products";
import { STORE_PHONE_NUMBER, STORE_WHATSAPP_NUMBER, STORE_ADDRESS } from "../config";

// Doit rester synchronisé avec la durée de l'animation .tv-progress (index.css).
const SLIDE_DURATION_MS = 3800;
const GROUP_SIZE = 4;

const CATEGORY_LABELS = {
  telephones: "Téléphones",
  electromenager: "Électroménager",
  accessoires: "Accessoires",
};

function formatPrice(value) {
  return value.toLocaleString("fr-FR") + " FCFA";
}

function buildSlides(products) {
  const slides = [];
  products.forEach((product, i) => {
    slides.push({ type: "product", product });
    if ((i + 1) % GROUP_SIZE === 0) {
      slides.push({ type: "brand" });
    }
  });
  if (slides[slides.length - 1]?.type !== "brand") {
    slides.push({ type: "brand" });
  }
  return slides;
}

export default function VitrineTV() {
  const slides = useMemo(() => buildSlides(PRODUCTS), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = "Club Mobile — Vitrine boutique";
    return () => {
      document.title =
        "Club Mobile — Téléphones, Électroménager & Accessoires à Dakar";
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div className="fixed inset-0 bg-brand-ink text-white flex flex-col overflow-hidden">
      <a
        href="/"
        className="absolute top-4 left-4 z-20 text-white/25 hover:text-white/70 text-xs tracking-wide transition"
      >
        Quitter le mode vitrine
      </a>

      <div
        key={index}
        className="tv-slide flex-1 flex items-center justify-center px-10 sm:px-16"
      >
        {slide.type === "brand" ? (
          <BrandSlide />
        ) : (
          <ProductSlide product={slide.product} />
        )}
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/30 px-6 sm:px-14 py-5 sm:py-7 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/icons/logo.jpg"
            alt="Club Mobile"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-display font-semibold text-lg sm:text-2xl leading-tight">
              Club Mobile
            </p>
            <p className="text-white/50 text-xs sm:text-sm">{STORE_ADDRESS}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-xs sm:text-sm uppercase tracking-wide">
            Appelez-nous
          </p>
          <p className="font-display font-semibold text-2xl sm:text-4xl text-brand-red leading-tight">
            {STORE_PHONE_NUMBER}
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-white/50 text-sm uppercase tracking-wide">
            WhatsApp
          </p>
          <p className="font-display font-semibold text-4xl text-[#25D366] leading-tight">
            +{STORE_WHATSAPP_NUMBER}
          </p>
        </div>
      </div>

      <div className="h-1.5 bg-white/10">
        <div key={index} className="h-full bg-brand-red tv-progress" />
      </div>
    </div>
  );
}

function ProductSlide({ product }) {
  return (
    <div className="w-full max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-14 items-center">
      <div className="tv-image relative mx-auto w-full max-w-xl aspect-square rounded-[2rem] overflow-hidden shadow-[0_40px_70px_-20px_rgba(200,16,46,0.45)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.tag && (
          <span
            className={`absolute top-4 left-4 text-sm sm:text-base font-bold px-4 py-1.5 rounded-full ${
              product.tag === "PROMO"
                ? "bg-brand-red text-white"
                : "bg-white text-brand-ink"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div>
        <p className="text-white/50 uppercase tracking-[0.2em] text-sm sm:text-base font-semibold mb-3">
          {CATEGORY_LABELS[product.category]}
        </p>
        <h2 className="font-display font-semibold text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.1] mb-6">
          {product.name}
        </h2>
        <div className="flex items-baseline flex-wrap gap-3">
          <span className="font-display font-semibold text-[clamp(2rem,3.6vw,3.5rem)] text-brand-red whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xl sm:text-2xl text-white/35 line-through whitespace-nowrap">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function BrandSlide() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <img
        src="/icons/logo.jpg"
        alt="Club Mobile"
        className="w-[clamp(160px,22vw,320px)] h-[clamp(160px,22vw,320px)] rounded-full object-cover shadow-2xl"
      />
      <p className="font-display font-semibold text-[clamp(1.5rem,3vw,2.75rem)] max-w-2xl text-white/85">
        Téléphones, électroménager & accessoires au meilleur prix de Dakar
      </p>
    </div>
  );
}
