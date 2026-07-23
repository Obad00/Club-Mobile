import React from "react";

// Logo officiel (public/icons/logo.jpg) + wordmark texte pour la lisibilité
// aux petites tailles (le texte intégré à l'image devient illisible en dessous
// d'une cinquantaine de pixels).
export default function Logo({
  className = "",
  size = 40,
  showText = true,
  textColorClass = "text-brand-ink",
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/icons/logo.jpg"
        alt="Club Mobile"
        width={size}
        height={size}
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
      {showText && (
        <span
          className={`font-display font-semibold text-[1.35rem] leading-none tracking-tight ${textColorClass}`}
        >
          Club<span className="text-brand-red">Mobile</span>
        </span>
      )}
    </div>
  );
}
