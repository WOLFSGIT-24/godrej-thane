import React from 'react';
import { Award, ShieldCheck, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { developerData } from '../data';

interface AboutGodrejProps {
  onOpenEnquiry?: () => void;
}

export default function AboutGodrej({ onOpenEnquiry }: AboutGodrejProps) {
  const icons = [TrendingUp, Building2, Award, ShieldCheck];

  return (
    <section id="developer" className="w-full py-16 md:py-24 bg-white text-charcoal font-body scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-body text-xs font-bold text-gold-dark uppercase tracking-[0.25em] block">
            ABOUT GODREJ PROPERTIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-navy-primary font-bold leading-tight">
            {developerData.heading}
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto" />
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed">
            {developerData.overview}
          </p>
        </div>

        {/* Developer Achievements Section Banner */}
        <div className="bg-navy-dark text-white rounded-2xl p-8 sm:p-12 border border-gold/40 shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full font-body text-[10px] font-bold tracking-[0.25em] uppercase border border-gold/30 inline-block mb-2">
                Legacy of Trust & Performance
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-champagne">
                {developerData.achievementsHeading}
              </h3>
            </div>

            {/* 4 Key Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerData.stats.map((stat, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="bg-navy-primary/60 border border-white/10 rounded-xl p-6 text-center hover:border-gold/60 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F2B707] mb-1">
                        {stat.value}
                      </div>
                      <div className="font-body text-xs font-bold text-white uppercase tracking-wider mb-2">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-[11px] text-white/60 font-medium border-t border-white/10 pt-2.5 mt-2">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-[11px] text-white/50 italic mt-8">
              {developerData.footerNote}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenEnquiry}
            className="flex items-center justify-center gap-2.5 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-9 py-4.5 hover:bg-navy-primary hover:shadow-gold/20 transition-all shadow-lg rounded-sm cursor-pointer border border-gold/30"
          >
            Know More About the Developer
            <ArrowRight className="h-4 w-4 text-gold" />
          </button>
        </div>

      </div>
    </section>
  );
}
