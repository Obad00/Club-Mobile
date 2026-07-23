import React from "react";
import useInView from "../hooks/useInView";

// Fait apparaître son contenu (fade + léger décalage vers le haut) quand il
// entre dans le viewport. Une fois visible, reste visible (pas de rejeu).
export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const [ref, visible] = useInView(0.15);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
