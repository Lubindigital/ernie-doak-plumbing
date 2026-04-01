"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-accent rounded-sm flex items-center justify-center">
              <span className="text-accent font-bold text-sm">ED</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-sm sm:text-base tracking-wide">
                ERNIE DOAK
              </span>
              <span className="block text-[10px] text-green-200 tracking-[0.2em] uppercase">
                Plumbing Inc
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {["About", "Services", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-green-100 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:8086388620"
              className="bg-accent hover:bg-accent-light text-gray-900 px-4 py-2 rounded font-bold text-sm transition-colors"
            >
              (808) 638-8620
            </a>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:8086388620"
              className="bg-accent text-gray-900 px-3 py-1.5 rounded text-sm font-bold"
            >
              Call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-100 p-1"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-green-800 bg-primary-dark px-4 pb-3 pt-2 space-y-1">
          {["About", "Services", "Reviews", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-green-100 font-medium text-sm"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
