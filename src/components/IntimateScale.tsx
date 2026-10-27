import React, { useState, useEffect } from "react";
import { projectOverviewData } from "../data";

export default function IntimateScale() {
  const images = ["/building.png", "/balcony.png", "/building2.jpg", "/building3.jpg", "/building4.jpg"];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const renderSlider = () => (
    <div className="relative overflow-hidden rounded-xl shadow-2xl w-full max-w-2xl aspect-[3/2] border border-navy-primary/10">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Godrej Thane Landmark View ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
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

            {/* Mobile Only Responsive Image Slider */}
            <div className="lg:hidden w-full my-6">
              {renderSlider()}
            </div>

            <div className="space-y-4 pt-2">
              {projectOverviewData.paragraphs.map((p, idx) => (
                <p key={idx} className="font-body text-sm md:text-base text-gray-text leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Graphical Right Panel with Slider (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-6 relative flex justify-center">
            {/* Elegant Background Framing */}
            <div className="absolute inset-0 bg-champagne/40 rounded-2xl transform rotate-2 translate-x-3 translate-y-3 scale-98 border border-gold/20" />
            
            {renderSlider()}
          </div>

        </div>
      </div>
    </section>
  );
}
