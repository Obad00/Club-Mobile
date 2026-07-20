import React from "react";
import { buildWhatsappLink } from "../config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-whatsapp text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center active:scale-95 transition"
      aria-label="Commander via WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.35 2 11.72c0 1.98.6 3.82 1.63 5.36L2 22l5.1-1.58A10.4 10.4 0 0012 21.44c5.52 0 10-4.35 10-9.72S17.52 2 12 2Zm0 17.6c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-2.98.92.94-2.85-.2-.32a7.87 7.87 0 01-1.3-4.24c0-4.36 3.7-7.9 8.23-7.9s8.23 3.54 8.23 7.9-3.7 7.88-8.23 7.88Z"
          fill="white"
        />
      </svg>
    </a>
  );
}
