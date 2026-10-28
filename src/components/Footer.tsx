import React from "react";
import { footerDisclaimer } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#2E0E26] text-white/80 border-t border-[#D4B28C]/30 py-16 md:py-20 relative overflow-hidden font-body">
      {/* Radial warm lighting backdrop overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,178,140,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-14">
          
          {/* Left Column: Logo & Address */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-white uppercase">
                  GODREJ
                </span>
                <span className="font-display text-2xl font-bold tracking-tight text-[#D4B28C] uppercase">
                  THANE
                </span>
              </div>
              <span className="font-body text-[9.5px] font-extrabold tracking-[0.25em] text-[#D4B28C] uppercase mt-1">
                PRE-LAUNCH ADVISORY • 18-ACRE LANDMARK
              </span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm pt-2">
              <p className="font-semibold text-white/90">Upcoming Luxury Residential Launch</p>
              <p>Thane West, Near Upcoming Thane–Borivali Tunnel, Mumbai Metropolitan Region</p>
              <p className="italic text-gold/80 pt-1">A signature 18-acre landmark address by Godrej Properties.</p>
            </div>
          </div>

          {/* Middle Column: Navigate */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
              {[
                { label: "Project Overview", id: "overview" },
                { label: "Configurations & Pricing", id: "configurations" },
                { label: "Project Highlights", id: "highlights" },
                { label: "Lifestyle & Amenities", id: "amenities" },
                { label: "Location Advantages", id: "location" },
                { label: "About Developer", id: "developer" },
                { label: "Pre-Launch EOI Desk", id: "snapshots" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-gold transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA & Early Access */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="font-display text-xl sm:text-2xl text-white font-medium leading-snug">
              Secure priority pre-launch <br />
              <span className="italic text-gold">expression of interest.</span>
            </h3>

            <div className="space-y-1">
              <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
                Official Enquiry
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                Pre-Launch EOI Starting ₹2.70 Lakh*
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleScrollTo("lead-capture-section")}
                className="border border-gold/60 text-gold font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-gold hover:text-navy-dark transition-all rounded-sm cursor-pointer"
              >
                Get Pre-Launch Details
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 w-full mb-10" />

        {/* Legal & Compliance bottom section */}
        <div className="space-y-6 text-xs text-white/50 leading-relaxed">
          
          {/* Exact Website Footer Disclaimer */}
          <div className="space-y-2.5">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
              Website Disclaimer
            </span>
            <p className="max-w-5xl text-[11px] leading-relaxed text-white/60">
              {footerDisclaimer}
            </p>
          </div>

          {/* Privacy & copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5 text-[11px]">
            <div>
              <p>© {new Date().getFullYear()} Godrej Properties Launch Portal. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
                className="hover:text-gold underline cursor-pointer focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={(e) => { e.preventDefault(); onOpenTerms?.(); }}
                className="hover:text-gold underline cursor-pointer focus:outline-none"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
