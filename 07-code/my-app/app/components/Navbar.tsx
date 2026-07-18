"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-5 md:px-16 py-6 max-w-[1200px] mx-auto">
        <div className="text-headline-sm font-headline-sm font-semibold tracking-tight text-primary">
          Stealth Writer AI
        </div>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <a 
            className="font-label-md text-label-md text-primary border-b border-primary pb-1 hover:text-primary transition-colors duration-200" 
            href="#features"
          >
            Features
          </a>
          <a 
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" 
            href="#why-free"
          >
            Why Free
          </a>
        </div>
        
        <button 
          className="bg-inverse-surface text-surface py-3 px-8 font-label-md text-label-md hover:opacity-80 transition-opacity uppercase tracking-widest"
          onClick={() => document.getElementById('humanize-input')?.focus()}
        >
          Start Humanizing
        </button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden ml-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 pb-4 bg-background border-t border-outline-variant">
          <a className="block py-2 font-label-md text-label-md text-primary" href="#features">Features</a>
          <a className="block py-2 font-label-md text-label-md text-on-surface-variant" href="#why-free">Why Free</a>
        </div>
      )}
    </nav>
  );
}
