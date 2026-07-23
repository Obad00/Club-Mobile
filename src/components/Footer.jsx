import React from "react";
import Logo from "./Logo";
import { STORE_PHONE_NUMBER, STORE_ADDRESS } from "../config";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <Logo size={44} textColorClass="text-white" />
          <p className="text-white/50 text-sm mt-3 max-w-xs">
            Votre boutique de téléphones, électroménager et accessoires à
            Dakar.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-white/50 mb-2">
            Adresse & horaires
          </h4>
          <p className="text-white/80 text-sm">{STORE_ADDRESS}</p>
          <p className="text-white/50 text-sm mt-1">Lun – Sam : 9h00 – 20h00</p>
          <p className="text-white/50 text-sm">Dimanche : 10h00 – 18h00</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-white/50 mb-2">
            Contact
          </h4>
          <p className="text-white/80 text-sm">{STORE_PHONE_NUMBER}</p>
          <p className="text-white/50 text-sm mt-1">Facebook · Instagram · WhatsApp</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-white/35 text-xs py-4">
        © {new Date().getFullYear()} Club Mobile — Tous droits réservés
      </div>
    </footer>
  );
}
