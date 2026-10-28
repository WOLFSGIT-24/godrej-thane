import React from "react";
import { Building2, Trees, Award, ShieldCheck, MapPin, Layers, FileText } from "lucide-react";

interface ProjectHighlightsProps {
  onOpenEnquiry?: () => void;
}

export default function ProjectHighlights({ onOpenEnquiry }: ProjectHighlightsProps) {
  const highlightCards = [
    {
      id: "township-scale",
      icon: Building2,
      title: "TOWNSHIP SCALE",
      description: "18-Acre integrated masterplan designed with wide tower spacing, expansive open vistas, and complete multi-tier community infrastructure.",
    },
    {
      id: "real-open-space",
      icon: Trees,
      title: "REAL OPEN SPACE",
      description: "Over 70% open landscaped greens, reflexology gardens, shaded pavilions, and vehicle-free surface recreation for your family.",
    },
    {
      id: "listed-developer",
      icon: Award,
      title: "A LISTED DEVELOPER",
      description: "Godrej Properties booked a record ₹34,171 crore booking value in FY25, standing as India's most trusted publicly listed residential developer.",
    },
    {
      id: "grand-podium",
      icon: Layers,
      title: "GRAND PODIUM CONCEPT",
      description: "Elevated podium recreation deck bringing swimming pool, sports courts, and wellness spaces well above street level.",
    },
    {
      id: "prime-location",
      icon: MapPin,
      title: "STRATEGIC CONNECTIVITY",
      description: "Positioned directly near the upcoming Thane–Borivali Twin Tunnel corridor, drastically shortening commutes across Mumbai.",
    },
    {
      id: "trusted-quality",
      icon: ShieldCheck,
      title: "SPACIOUS CONFIGURATIONS",
      description: "Thoughtfully crafted 2, 3 and 4 BHK luxury residences with grand viewing sundecks, cross-ventilation, and zero space wastage.",
    },
  ];

  return (
    <section 
      id="highlights" 
      className="py-16 sm:py-24 bg-[#672C57] text-white relative z-20 font-body overflow-hidden scroll-mt-20"
    >
      {/* Background Subtle Luxury Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4B28C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Section Heading matching Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
            GODREJ THANE — <span className="text-[#D4B28C]">HIGHLIGHTS</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            A landmark synthesis of township scale, pristine open air, and brand heritage in Thane West.
          </p>
        </div>

        {/* 3 Column Grid with Cards matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-[#541f46]/70 backdrop-blur-sm rounded-xl p-7 border border-[#D4B28C]/30 hover:border-[#D4B28C] transition-all duration-300 flex flex-col items-center text-center group hover:bg-[#541f46] shadow-lg"
              >
                {/* Outline Icon in #D4B28C */}
                <div className="w-14 h-14 rounded-full bg-[#672C57] border border-[#D4B28C]/40 flex items-center justify-center text-[#D4B28C] mb-5 group-hover:scale-110 group-hover:border-[#D4B28C] transition-all shadow-sm">
                  <Icon className="h-7 w-7 text-[#D4B28C]" strokeWidth={1.75} />
                </div>

                {/* White Uppercase Title matching Screenshot */}
                <h3 className="font-display text-base sm:text-lg font-bold tracking-wider uppercase text-white mb-3">
                  {card.title}
                </h3>

                {/* Description Text matching Screenshot */}
                <p className="font-body text-xs sm:text-[13px] text-white/80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center justify-center bg-[#D4B28C] hover:bg-[#C8A97E] text-[#1F141D] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
          >
            EXPLORE PROJECT DETAILS
          </button>
        </div>

      </div>
    </section>
  );
}
