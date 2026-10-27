import React, { useEffect } from "react";
import { X } from "lucide-react";
import { footerDisclaimer } from "../data";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy-dark/90 backdrop-blur-sm animate-fade-in font-body">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-gold/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-navy-primary/10 bg-marble shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-primary font-bold">Terms & Conditions</h2>
            <p className="font-body text-xs text-gold-dark mt-1 uppercase tracking-widest font-semibold">Godrej Thane Luxury Launch</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-navy-primary/5 text-navy-primary/60 hover:text-navy-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-charcoal/80 leading-relaxed space-y-8 custom-scrollbar">
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">General Disclaimer</h3>
            <p className="p-4 bg-marble rounded-lg border border-navy-primary/10 italic text-xs leading-relaxed text-gray-text">
              {footerDisclaimer}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">1. Nature of Information</h3>
            <p>
              This website is intended for general project information and enquiry purposes only. It does not constitute a legal offer, contract, or warranty. All illustrations, layouts, specifications, floor plans, and amenities are artistic impressions and subject to change without prior notice.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">2. Pricing & EOI Terms</h3>
            <p>
              Prices mentioned are indicative starting prices and may exclude applicable taxes, stamp duty, registration charges, and other statutory fees. Pre-launch Expression of Interest (EOI) amounts, inventory allocation, and carpet areas are subject to confirmation by the developer.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">3. Infrastructure Timelines</h3>
            <p>
              The proposed Thane–Borivali Tunnel is an upcoming infrastructure project undertaken by governmental authorities; its execution and completion timeline are subject to the relevant authorities and beyond developer control.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">4. RERA Compliance</h3>
            <p>
              Prospective buyers are advised to independently verify all project details, developer credentials, approvals, and MahaRERA registration information prior to making any financial commitments.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:px-8 sm:py-5 border-t border-navy-primary/10 bg-marble shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-navy-dark text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-navy-primary transition-colors shadow-sm cursor-pointer border border-gold/40"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
}
