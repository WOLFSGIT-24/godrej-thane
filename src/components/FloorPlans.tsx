import React, { useState } from "react";
import { Lock, ArrowRight, Check } from "lucide-react";
import { configurationsData } from "../data";
import { ConfigurationUnit } from "../types";

interface FloorPlansProps {
  onSelectUnit: (unitType: string) => void;
  isUnlocked: boolean;
  onUnlockRequest: () => void;
}

export default function FloorPlans({
  onSelectUnit,
  isUnlocked,
  onUnlockRequest,
}: FloorPlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<ConfigurationUnit | null>(null);

  const handleAction = (plan: ConfigurationUnit) => {
    if (!isUnlocked) {
      onSelectUnit(plan.bhk);
      onUnlockRequest();
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <section
      id="configurations"
      className="w-full py-16 md:py-24 bg-white scroll-mt-20 font-body relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-body text-xs font-bold text-gold-dark uppercase tracking-[0.25em] block">
            CONFIGURATIONS & PRICING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] text-navy-primary font-bold leading-tight">
            Find the Space That Fits Your Lifestyle
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto" />
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed">
            Choose from thoughtfully planned 2, 3 and 4 BHK residences with generous carpet areas and premium living spaces.
          </p>
        </div>

        {/* 2, 3 & 4 BHK Configuration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-12">
          {configurationsData.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-xl p-6 sm:p-7 border transition-all duration-300 relative bg-marble/40 hover:bg-white hover:shadow-xl ${
                plan.tag
                  ? "border-gold/60 shadow-md ring-1 ring-gold/20"
                  : "border-navy-primary/10 shadow-sm"
              }`}
            >
              {/* Tag Badge */}
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-dark text-gold font-body text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-md border border-gold/40 flex items-center whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              <div className="space-y-4">
                <div className="text-center pt-2 pb-2 border-b border-navy-primary/10">
                  <h3 className="font-display text-2xl font-bold text-navy-primary">
                    {plan.bhk} Residences
                  </h3>
                  <div className="font-body text-xs font-semibold text-gray-text mt-1">
                    Carpet Area: <strong className="text-navy-primary">{plan.carpetArea}</strong>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-gold-dark mt-2">
                    {plan.startingPrice}
                  </div>
                  <div className="text-[11px] font-body text-gray-text/80 mt-0.5">
                    Pre-Launch EOI: <strong>{plan.eoiAmount}</strong>
                  </div>
                </div>

                {/* Floor Plan Image Wrapper with Lock/Blur */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg border border-navy-primary/10 overflow-hidden group">
                  <img
                    src={plan.imageUrl}
                    alt={plan.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isUnlocked
                        ? "filter-none group-hover:scale-105"
                        : "filter blur-sm scale-100 select-none pointer-events-none"
                    }`}
                  />

                  {/* Lock Overlay Shield */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-navy-dark/15 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                      <div className="w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center text-navy-primary mb-2 animate-pulse">
                        <Lock className="h-4 w-4 text-gold-dark" />
                      </div>
                      <span className="text-[10px] font-bold text-navy-dark uppercase tracking-widest bg-white/95 px-3 py-1 rounded-sm shadow-xs border border-navy-primary/10">
                        Floor Plan Locked
                      </span>
                    </div>
                  )}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-navy-primary/10">
                <button
                  onClick={() => handleAction(plan)}
                  className="w-full bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 hover:bg-navy-primary transition-all rounded-sm cursor-pointer shadow-md border border-gold/30 flex items-center justify-center gap-2"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Launch EOI Highlight Banner */}
        <div className="max-w-4xl mx-auto bg-navy-dark text-white p-6 sm:p-8 rounded-xl border border-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
              Limited Period Opportunity
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-champagne">
              Pre-Launch Expression of Interest (EOI): Starting ₹2.70 Lakh
            </h4>
            <p className="font-body text-xs text-white/70">
              Prices are indicative and subject to change. Carpet areas and availability are subject to final confirmation.
            </p>
          </div>

          <button
            onClick={onUnlockRequest}
            className="shrink-0 bg-gold text-navy-dark font-body text-xs font-bold tracking-widest uppercase px-7 py-4 hover:bg-white transition-colors rounded-sm shadow-md cursor-pointer flex items-center gap-2"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Plan Zoom Detail Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-navy-dark/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-navy-primary/10 pb-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-primary">
                  {selectedPlan.title}
                </h3>
                <span className="text-xs text-gray-text font-semibold uppercase">
                  Carpet Area: {selectedPlan.carpetArea} | {selectedPlan.startingPrice}
                </span>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="text-gray-text hover:text-navy-primary font-body text-xs font-bold bg-navy-primary/5 hover:bg-navy-primary/10 px-3.5 py-2 rounded-sm focus:outline-none cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="h-[55vh] p-4 bg-marble rounded border border-navy-primary/10 flex items-center justify-center overflow-auto">
              <img
                src={selectedPlan.imageUrl}
                alt={selectedPlan.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body border-t border-navy-primary/10 pt-4">
              <span className="text-gray-text italic text-center sm:text-left">
                *Prices are indicative and subject to change. Carpet areas and availability are subject to final confirmation.
              </span>
              <button
                onClick={() => {
                  onSelectUnit(selectedPlan.bhk);
                  setSelectedPlan(null);
                  onUnlockRequest();
                }}
                className="flex items-center justify-center gap-2 bg-navy-primary text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-navy-dark transition-colors shadow-lg rounded-sm cursor-pointer"
              >
                Get Complete Cost Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
