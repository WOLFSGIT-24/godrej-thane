import React, { useState, useEffect } from "react";
import { Navigation, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { locationsData } from "../data";
import { LocationHighlight } from "../types";

interface LocationProps {
  onOpenEnquiry: () => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderMap = () => {
    if (!loadMap) {
      return (
        <div className="w-full h-full bg-champagne/30 animate-pulse flex items-center justify-center">
          <span className="text-xs text-navy-primary/60 font-body uppercase tracking-wider font-semibold">
            Loading Thane West Map Context...
          </span>
        </div>
      );
    }
    return (
      <iframe
        src="https://maps.google.com/maps?q=Thane%20West%2C%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Godrej Thane West Google Map"
        className="w-full h-full"
      ></iframe>
    );
  };

  return (
    <section id="location" className="w-full py-16 md:py-24 bg-marble text-charcoal font-body scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-body text-xs font-bold text-gold-dark uppercase tracking-[0.25em] block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-navy-primary font-bold leading-tight">
            A Prime Thane Address. A Better-Connected Future.
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto" />
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed">
            Located in Thane West, the upcoming development offers proximity to established urban conveniences and one of the region's major upcoming infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Informational Connectivity details (Left Column) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Mobile Only Google Map */}
            <div className="lg:hidden w-full h-[320px] rounded-xl overflow-hidden shadow-xl border border-navy-primary/10 my-4">
              {renderMap()}
            </div>

            {/* Destination List with Advantages */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-primary uppercase tracking-wider mb-2">
                <Navigation className="h-4 w-4 text-gold animate-pulse" />
                <span>Key Location Advantages</span>
              </div>

              {locationsData.map((dest: LocationHighlight) => (
                <div
                  key={dest.id}
                  className="p-3 sm:p-3.5 bg-white rounded-lg shadow-xs border border-navy-primary/10 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-md bg-navy-primary/5 flex items-center justify-center text-navy-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px] text-navy-primary">
                        {dest.icon}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display text-sm sm:text-base font-bold text-navy-primary">
                          {dest.title}
                        </h4>
                        {dest.badge && (
                          <span className="text-[9px] font-bold text-gold-dark bg-champagne/60 px-2 py-0.5 rounded-full border border-gold/20 uppercase tracking-wider shrink-0">
                            {dest.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-gray-text leading-snug mt-0.5">
                        {dest.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="text-xs italic text-gray-text/70 pt-2">
              *Travel times and exact distances depend on the final confirmed project entrance and route.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg rounded-sm cursor-pointer border border-gold/30"
              >
                Get Exact Location & Site Details
                <ArrowRight className="h-4 w-4 text-gold" />
              </button>
            </div>

          </div>

          {/* Desktop Only Google Map (Sticky Right Column) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28 space-y-4">
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-navy-primary/10 w-full h-[580px]">
              {renderMap()}
            </div>
            <div className="bg-white p-4 rounded-xl border border-navy-primary/10 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-primary">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Thane West, Mumbai Metropolitan Region</span>
              </div>
              <span className="text-[11px] font-semibold text-gray-text">Near Thane–Borivali Tunnel</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
