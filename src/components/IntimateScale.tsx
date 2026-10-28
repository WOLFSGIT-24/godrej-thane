import React from "react";
import { projectOverviewData } from "../data";

export default function IntimateScale() {
  const renderImage = () => (
    <div className="relative overflow-hidden rounded-xl shadow-2xl w-full max-w-2xl aspect-[3/2] border border-navy-primary/10 group">
      <img
        src="/second.jpg"
        alt="Godrej Thane 18-Acre Masterplan Overview"
        loading="lazy"
        className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute bottom-4 right-4 z-20 bg-navy-dark/90 backdrop-blur-sm text-gold px-3 py-1 rounded-sm border border-gold/30 text-[10px] font-bold font-body uppercase tracking-widest">
        18-Acre Masterplan
      </div>
    </div>
  );

  return (
    <section id="project-overview" className="w-full py-16 md:py-24 bg-marble overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Informational left section */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.25em] block">
              PROJECT OVERVIEW
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-navy-primary font-bold leading-tight">
              {projectOverviewData.heading}
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto lg:mx-0" />

            {/* Mobile Only Responsive Image */}
            <div className="lg:hidden w-full my-6">
              {renderImage()}
            </div>

            <div className="space-y-4 pt-2">
              {projectOverviewData.paragraphs.map((p, idx) => (
                <p key={idx} className="font-body text-sm md:text-base text-gray-text leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Graphical Right Panel (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-6 relative flex justify-center">
            {/* Elegant Background Framing */}
            <div className="absolute inset-0 bg-champagne/40 rounded-2xl transform rotate-2 translate-x-3 translate-y-3 scale-98 border border-gold/20" />
            
            {renderImage()}
          </div>

        </div>
      </div>
    </section>
  );
}
