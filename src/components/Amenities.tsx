import React, { useState, useEffect } from "react";
import { Info, CheckCircle2 } from "lucide-react";
import { amenitiesData } from "../data";

interface AmenitiesProps {
  onOpenEnquiry?: () => void;
}

export default function Amenities({ onOpenEnquiry }: AmenitiesProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeAmenity = amenitiesData[activeTab];
  const slideImages = activeAmenity.images || [activeAmenity.imageUrl];

  useEffect(() => {
    setCurrentSlideIdx(0);
  }, [activeTab]);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlideIdx((prev) => (prev + 1) % slideImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [activeTab, isHovered, slideImages.length]);


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

          {/* Bottom on Mobile, Left Column on Desktop: Visual Card with Content Overlay */}
          <div 
            className="order-2 lg:order-1 lg:col-span-8 relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 text-white group cursor-pointer border border-navy-primary/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
              {slideImages.map((src, sIdx) => (
                <img
                  key={src}
                  src={src}
                  alt={`${activeAmenity.title} view ${sIdx + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    sIdx === currentSlideIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
              {/* Permanent Gradient Overlay for Legibility */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy-dark/95 via-navy-dark/60 to-navy-dark/20" />
            </div>

            {/* Content overlay */}
            <div className="relative z-30 space-y-3.5">
              <span className="px-3.5 py-1 bg-gold/20 backdrop-blur-md text-gold rounded-full font-body text-[10px] font-bold tracking-widest uppercase inline-block border border-gold/30">
                {activeAmenity.category}
              </span>
              
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {activeAmenity.title}
              </h3>
              
              <p className="font-body text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
                {activeAmenity.description}
              </p>
              
              {/* Clean bullet pointers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-4 border-t border-white/15">
                {activeAmenity.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-champagne/95">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
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
