import React from "react";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const highlights = [
    "18-Acre Premium Development",
    "Spacious Layouts & Grand Podium",
    "Near Upcoming Thane–Borivali Tunnel",
    "Developed by Godrej Properties"
  ];

  return (
    <section
      id="overview"
      className="relative w-full min-h-0 lg:min-h-screen pt-[88px] sm:pt-[96px] bg-marble flex items-center overflow-hidden"
    >
      {/* Background subtle luxury accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-14 py-8 lg:py-20 relative z-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20 px-2 sm:px-0 order-2 lg:order-1">

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#672C57] font-bold tracking-tight leading-[1.15] mb-4 animate-fade-in">
            GODREJ <span className="text-[#D4B28C]">THANE</span> – UPCOMING LUXURY LAUNCH
          </h1>

          <p className="font-body text-sm sm:text-base text-gray-text mb-6 animate-fade-in delay-100 leading-relaxed max-w-xl">
            An upcoming 18-acre landmark in Thane West featuring spacious luxury residences, a grand podium, and prime connectivity near the Thane–Borivali Tunnel.
          </p>

          {/* Project Highlights Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-[#672C57]/15 px-3 py-2.5 rounded-lg hover:border-[#D4B28C] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4B28C] shrink-0" />
                <span className="font-body text-xs font-semibold text-[#672C57]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Box (Desktop) */}
          <div className="hidden lg:flex items-center justify-between bg-[#4A1A3D] text-white py-4 px-6 relative transform hover:-translate-y-1 transition-transform duration-300 w-full max-w-lg shadow-xl animate-slide-up delay-300 mb-8 rounded-xl border border-[#D4B28C]/40">
            <div>
              <div className="text-[10px] text-[#D4B28C] uppercase tracking-widest font-extrabold mb-0.5">
                Pre-Launch Pricing
              </div>
              <div className="font-display text-2xl font-bold text-white leading-tight">
                Starting ₹1.89 Cr*
              </div>
              <div className="text-[11px] text-white/80 font-body">
                2, 3 & 4 BHK Luxury Residences
              </div>
            </div>

            <div className="h-10 w-[1px] bg-white/15 mx-4" />

            <div className="text-right">
              <div className="text-[10px] text-[#D4B28C] uppercase tracking-widest font-extrabold mb-0.5">
                Pre-Launch EOI
              </div>
              <div className="font-display text-xl font-bold text-[#D4B28C] leading-tight">
                ₹2.70 Lakh*
              </div>
              <div className="text-[10px] text-white/80 font-body">
                Priority Allocation
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400 w-full sm:w-auto relative z-30">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-2 bg-[#672C57] text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#4A1A3D] hover:shadow-lg transition-all shadow-md w-full sm:w-auto rounded-full cursor-pointer border border-[#D4B28C]/30"
            >
              Get Pre-Launch Details
              <ArrowRight className="h-4 w-4 text-[#D4B28C]" />
            </button>
          </div>
        </div>

        {/* Right Side: Primary Architectural Image */}
        <div className="w-full lg:w-1/2 relative mb-6 lg:mb-0 order-1 lg:order-2">
          <div className="relative shadow-2xl bg-white p-2.5 sm:p-3.5 z-10 rounded-sm border border-navy-primary/10">
            <img
              src="/hero.jpg"
              alt="Godrej Thane Landmark Luxury Address"
              fetchPriority="high"
              className="w-full h-[52vh] sm:h-auto sm:aspect-[4/5] object-cover object-center rounded-xs"
            />

            {/* Premium Badge Top Left */}
            <div className="absolute top-6 left-6 bg-navy-dark/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xs border border-gold/40 shadow-lg flex items-center">
              <span className="font-body text-[10px] font-bold tracking-[0.2em] text-champagne uppercase">
                UPCOMING LUXURY LAUNCH
              </span>
            </div>

            {/* Pricing Box (Mobile overlay) */}
            <div className="lg:hidden absolute bottom-0 translate-y-[60%] left-1/2 -translate-x-1/2 w-[90%] max-w-[310px] bg-navy-dark text-white py-3.5 px-4 shadow-2xl z-20 rounded-sm border border-gold/40 text-center">
              <div className="font-body text-[10px] font-bold tracking-widest text-gold uppercase">
                Pre-Launch EOI Starting
              </div>
              <div className="text-2xl text-champagne font-bold font-display leading-tight mt-0.5">
                ₹2.70 Lakh*
              </div>
              <div className="text-[10px] text-white/70 font-medium font-body mt-0.5">
                Residences Starting ₹1.89 Cr*
              </div>
            </div>
          </div>

          {/* Mobile Info Strip */}
          <div className="lg:hidden mt-16 mx-1 p-4 bg-white rounded-lg border border-navy-primary/10 shadow-lg flex items-center justify-between text-left">
            <div className="space-y-0.5 pr-2">
              <div className="text-[11px] font-bold text-gold-dark uppercase tracking-wider font-body">
                2, 3 & 4 BHK Luxury Homes
              </div>
              <div className="text-[17px] font-extrabold text-navy-primary font-display leading-none py-0.5">
                Starting ₹1.89 Cr*
              </div>
            </div>

            <div className="h-8 w-[1px] bg-navy-primary/15 mx-3" />

            <div className="flex items-center gap-1.5 font-body shrink-0">
              <MapPin className="h-4 w-4 text-gold-dark shrink-0" />
              <span className="text-[14px] font-bold text-navy-primary uppercase tracking-wider">
                Thane West
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
