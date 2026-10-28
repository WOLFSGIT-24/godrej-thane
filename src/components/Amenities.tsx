import React, { useState, useEffect } from "react";
import { Info, CheckCircle2 } from "lucide-react";
import { amenitiesData } from "../data";

interface AmenitiesProps {
  onOpenEnquiry?: () => void;
}

export default function Amenities({ onOpenEnquiry }: AmenitiesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeAmenity = amenitiesData[activeTab];


  return (
    <section id="amenities" className="w-full py-16 md:py-24 bg-white text-charcoal font-body scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-body text-xs font-bold text-gold-dark uppercase tracking-[0.25em] block">
            LIFESTYLE & AMENITIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-navy-primary font-bold leading-tight">
            More Space for the Life You Want
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto" />
          <p className="font-display italic text-base sm:text-lg text-gold-dark">
            Luxury goes beyond the four walls of your apartment.
          </p>
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed">
            At this upcoming Godrej development, the focus is on creating a premium residential environment with spacious homes, a grand podium and thoughtfully planned shared spaces.
          </p>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Top on Mobile, Right Column on Desktop: Tab Selectors */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-wrap lg:flex-col justify-center gap-3 pb-3 lg:pb-0">
            {amenitiesData.map((tier, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-4 sm:p-5 rounded-lg border transition-all duration-300 cursor-pointer lg:w-full ${
                    isActive
                      ? "bg-navy-dark text-white border-gold shadow-lg"
                      : "bg-marble/50 text-navy-primary border-navy-primary/10 hover:border-gold/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isActive ? 'text-gold' : 'text-gray-text'}`}>
                      {tier.category}
                    </span>
                    <span className={`text-[10px] font-bold ${isActive ? 'text-white/60' : 'text-gray-text/60'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold leading-tight">
                    {tier.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Bottom on Mobile, Left Column on Desktop: Content Card (No Image) */}
          <div 
            className="order-2 lg:order-1 lg:col-span-8 relative rounded-2xl overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-10 text-white bg-gradient-to-br from-[#4A1A3D] via-[#35102A] to-[#200A1A] border border-[#D4B28C]/30"
          >
            {/* Subtle luxury glow accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4B28C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#672C57]/30 rounded-full blur-2xl pointer-events-none" />

            {/* Top Category Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 bg-[#D4B28C]/20 backdrop-blur-md text-[#D4B28C] rounded-full font-body text-[10px] font-bold tracking-widest uppercase inline-block border border-[#D4B28C]/30">
                {activeAmenity.category}
              </span>
              <span className="text-white/40 font-display text-sm font-bold">
                0{activeTab + 1} / 0{amenitiesData.length}
              </span>
            </div>
            
            {/* Content Details */}
            <div className="relative z-10 space-y-4 pt-6">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {activeAmenity.title}
              </h3>
              
              <p className="font-body text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
                {activeAmenity.description}
              </p>
              
              {/* Clean bullet pointers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-5 border-t border-white/15">
                {activeAmenity.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/95">
                    <div className="w-2 h-2 rounded-full bg-[#D4B28C] shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Clubhouse & Specifications Notice Box */}
        <div className="max-w-4xl mx-auto bg-marble rounded-xl p-5 sm:p-6 border border-navy-primary/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left mb-8 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark shrink-0">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-sm sm:text-base font-bold text-navy-primary">
                Official Launch Disclosure
              </div>
              <p className="font-body text-xs sm:text-sm text-gray-text mt-0.5">
                Detailed clubhouse facilities, recreational amenities and specifications will be announced with the official project launch.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="shrink-0 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-navy-primary transition-colors rounded-sm cursor-pointer border border-gold/30"
          >
            Request Complete Amenities Details
          </button>
        </div>

      </div>
    </section>
  );
}
