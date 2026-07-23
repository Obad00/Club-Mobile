import React from "react";
import Logo from "./Logo";
import { STORE_PHONE_NUMBER } from "../config";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Logo />
        <a
          href={`tel:${STORE_PHONE_NUMBER}`}
          aria-label="Appeler Club Mobile"
          className="flex items-center justify-center w-10 h-10 bg-brand-ink text-white rounded-full active:scale-95 transition"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
