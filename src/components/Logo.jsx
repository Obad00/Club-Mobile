import React from "react";

// Wordmark + icône maison, dessinés en SVG (pas d'emoji, pas d'image externe).
// L'icône combine un éclair (recharge/rapidité) et une forme de bulle de
// signal — clin d'œil à la fois au mobile et à l'électroménager.
export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="34" height="34" rx="9" fill="#C8102E" />
        <path
          d="M18.6 7L11 18.4H15.6L14.2 27L23 14.6H18L18.6 7Z"
          fill="white"
        />
      </svg>
      <span className="font-display font-semibold text-[1.35rem] leading-none tracking-tight text-brand-ink">
        Club<span className="text-brand-red">Mobile</span>
      </span>
    </div>
  );
}
