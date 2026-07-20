import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import { PRODUCTS } from "./data/products";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("tous");

  // Filtrage 100% côté client, aucun rechargement de page.
  const filteredProducts = useMemo(() => {
    if (activeCategory === "tous") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white font-body text-brand-ink">
      <Header />
      <Hero />
      <TrustStrip />

      <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <ProductGrid products={filteredProducts} />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
