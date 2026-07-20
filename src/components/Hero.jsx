import React from "react";
import { buildWhatsappLink } from "../config";

const HERO_PHONE = "https://images.pexels.com/photos/21854468/pexels-photo-21854468.jpeg?auto=compress&cs=tinysrgb&w=500";
const HERO_EARBUDS = "https://images.pexels.com/photos/33298188/pexels-photo-33298188.jpeg?auto=compress&cs=tinysrgb&w=380";
const HERO_FRIDGE = "https://images.pexels.com/photos/9551373/pexels-photo-9551373.jpeg?auto=compress&cs=tinysrgb&w=420";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-24 sm:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        {/* Colonne texte */}
        <div className="animate-rise">
          <span className="inline-flex items-center gap-1.5 bg-brand-ink text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Depuis Ouakam, Dakar
          </span>
          <h1 className="mt-5 font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-brand-ink">
            Le rayon de votre
            <br />
            quartier,{" "}
            <span className="text-brand-red">à portée de main.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-ink/70 max-w-md">
            Téléphones, électroménager et accessoires — au meilleur prix de
            Dakar. Commandez en un message, on s'occupe du reste.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-6 py-3.5 rounded-full shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] active:scale-95 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2C6.48 2 2 6.35 2 11.72c0 1.98.6 3.82 1.63 5.36L2 22l5.1-1.58A10.4 10.4 0 0012 21.44c5.52 0 10-4.35 10-9.72S17.52 2 12 2Zm0 17.6c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-2.98.92.94-2.85-.2-.32a7.87 7.87 0 01-1.3-4.24c0-4.36 3.7-7.9 8.23-7.9s8.23 3.54 8.23 7.9-3.7 7.88-8.23 7.88Z"
                  fill="white"
                />
              </svg>
              Commander sur WhatsApp
            </a>
            <span className="text-sm text-brand-ink/60">
              Réponse en quelques minutes
            </span>
          </div>
        </div>

        {/* Collage produits sur une "étagère" — élément signature */}
        <div className="relative h-[340px] sm:h-[400px] animate-rise" style={{ animationDelay: "120ms" }} aria-hidden="true">
          <img
            src={HERO_FRIDGE}
            alt=""
            className="absolute left-0 bottom-16 w-40 sm:w-48 rounded-2xl shadow-2xl object-cover h-52 sm:h-60 -rotate-3"
          />
          <img
            src={HERO_PHONE}
            alt=""
            className="absolute right-2 sm:right-6 top-0 w-44 sm:w-52 rounded-2xl shadow-2xl object-cover h-40 sm:h-48 rotate-2"
          />
          <img
            src={HERO_EARBUDS}
            alt=""
            className="absolute right-8 sm:right-14 bottom-14 w-32 sm:w-40 rounded-2xl shadow-2xl object-cover h-32 sm:h-40 rotate-6"
          />

          {/* Étiquette promo flottante */}
          <div className="absolute left-4 sm:left-8 top-2 bg-white rounded-xl shadow-xl px-3.5 py-2.5 -rotate-6">
            <p className="text-[10px] uppercase tracking-wide text-brand-ink/50 font-semibold">Promo</p>
            <p className="font-display font-semibold text-brand-red text-lg leading-none">-15%</p>
          </div>

          {/* L'étagère : barre pleine sous les produits */}
          <div className="absolute left-0 right-0 bottom-6 h-3 bg-brand-red rounded-full shadow-[0_18px_28px_-14px_rgba(200,16,46,0.55)]" />
        </div>
      </div>

      {/* Séparation en pointe douce vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-white [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
}
