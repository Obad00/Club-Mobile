import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import MarqueeBanner from "./components/MarqueeBanner";
import Reveal from "./components/Reveal";
import VitrineTV from "./components/VitrineTV";
import { PRODUCTS } from "./data/products";

// Mode vitrine TV : accessible via /vitrine ou ?mode=tv, pensé pour tourner
// en boucle sans interaction sur un écran de boutique.
function isTVMode() {
  const params = new URLSearchParams(window.location.search);
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return params.get("mode") === "tv" || path === "/vitrine";
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("tous");

  // Filtrage 100% côté client, aucun rechargement de page.
  const filteredProducts = useMemo(() => {
    if (activeCategory === "tous") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  if (isTVMode()) {
    return <VitrineTV />;
  }

  return (
    <div className="min-h-screen bg-white font-body text-brand-ink">
      <Header />
      <MarqueeBanner />
      <Hero />

      <Reveal>
        <TrustStrip />
      </Reveal>

      <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <Reveal>
          <ProductGrid products={filteredProducts} />
        </Reveal>
      </main>

      <FloatingWhatsApp />
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
