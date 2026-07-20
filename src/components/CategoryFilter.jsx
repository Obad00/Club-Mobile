import React from "react";
import { CATEGORIES } from "../data/products";

export default function CategoryFilter({ active, onSelect }) {
  return (
    <nav className="sticky top-[61px] z-30 bg-white border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            aria-pressed={active === cat.key}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition ${
              active === cat.key
                ? "bg-brand-red border-brand-red text-white"
                : "bg-white border-black/10 text-brand-ink/70 hover:border-brand-red/60 hover:text-brand-ink"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
