import React, { useEffect } from "react";
import { CheckCircle2, Phone, ArrowLeft, ShieldCheck, Clock, FileText, Calendar, Sparkles } from "lucide-react";
import { LeadSubmission } from "../types";

interface ThankYouProps {
  lead?: LeadSubmission | null;
  onBackToHome: () => void;
}

export default function ThankYou({ lead, onBackToHome }: ThankYouProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You | Godrej Thane West";

    // Track Google Analytics conversion if available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "G-P2DH3QJFJD",
        event_category: "Lead",
        event_label: lead?.preferredConfig || "Godrej Thane Pre-Launch",
        value: 1.0,
      });
      (window as any).gtag("event", "page_view", {
        page_path: "/thank-you",
        page_title: "Thank You | Godrej Thane West",
      });
    }
  }, [lead]);

  const referenceCode = lead?.id || "GT-" + Math.floor(100000 + Math.random() * 900000);
  const leadName = lead?.fullName?.trim() || "";
  const leadConfig = lead?.preferredConfig || "2, 3 & 4 BHK Luxury Residences";

  return (
    <div className="min-h-screen bg-marble text-charcoal font-body flex flex-col justify-between selection:bg-gold/20">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#672C57]/10 py-4 px-6 md:px-12 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            onClick={onBackToHome}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-[#672C57] group-hover:text-[#4A1A3D] transition-colors uppercase leading-none">
                GODREJ
              </span>
              <span className="font-body text-[9px] font-extrabold tracking-[0.3em] text-[#D4B28C] uppercase mt-0.5">
                PROPERTIES
              </span>
            </div>
            <div className="h-6 w-[1px] bg-[#672C57]/20 mx-1 hidden sm:block" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:inline">
              Thane West Pre-Launch
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#672C57] hover:text-[#4A1A3D] bg-marble hover:bg-[#FAF2E6] px-4 py-2.5 rounded-full border border-[#D4B28C]/40 transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[#D4B28C]" />
            Back to Website
          </button>
        </div>
      </header>

      {/* Main Thank You Presentation */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-5 sm:px-8 py-10 sm:py-16 flex flex-col items-center text-center">
        {/* Animated Confirmation Badge */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#D4B28C]/20 rounded-full blur-xl scale-125 animate-pulse" />
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-[#FAF2E6] via-white to-[#F7F0E8] border-2 border-[#D4B28C] flex items-center justify-center shadow-xl">
            <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-[#672C57] animate-fade-in" />
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 bg-[#672C57]/5 border border-[#D4B28C]/50 px-4 py-1.5 rounded-full mb-4">
          <Sparkles className="h-3.5 w-3.5 text-[#D4B28C]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#672C57]">
            Pre-Launch Priority Registration Confirmed
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#672C57] tracking-tight leading-[1.15] mb-4">
          Thank You{leadName ? `, ${leadName}` : ""}!
        </h1>

        <p className="font-body text-base sm:text-lg text-gray-text max-w-2xl leading-relaxed mb-8">
          We have successfully received your enquiry for{" "}
          <strong className="text-[#672C57] font-semibold">Godrej Thane West</strong>, the upcoming 18-acre luxury landmark.
        </p>

        {/* Priority Allocation Card */}
        <div className="w-full max-w-xl bg-white rounded-2xl border border-[#672C57]/15 shadow-xl p-6 sm:p-7 mb-10 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#672C57] via-[#D4B28C] to-[#672C57]" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block font-body">
                Priority Booking Reference
              </span>
              <span className="font-display text-2xl font-bold text-[#672C57] tracking-wide">
                {referenceCode}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 self-start sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              Allocation Queued
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
            <div>
              <span className="text-gray-400 uppercase font-semibold tracking-wider text-[10px] block">
                Development
              </span>
              <span className="font-semibold text-charcoal text-sm mt-0.5 block">
                Godrej Thane (18-Acre Parcel)
              </span>
            </div>
            <div>
              <span className="text-gray-400 uppercase font-semibold tracking-wider text-[10px] block">
                Preferred Configuration
              </span>
              <span className="font-semibold text-charcoal text-sm mt-0.5 block">
                {leadConfig}
              </span>
            </div>
          </div>
        </div>

        {/* What to Expect Next (3-Step Roadmap) */}
        <div className="w-full max-w-3xl mb-12">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#672C57] mb-6">
            What Happens Next?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-white/80 backdrop-blur-xs p-5 rounded-xl border border-[#672C57]/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-lg bg-[#FAF2E6] text-[#672C57] border border-[#D4B28C]/40 flex items-center justify-center font-display font-bold text-sm mb-3">
                  01
                </div>
                <h3 className="font-bold text-sm text-[#672C57] mb-1.5">
                  Advisor Connection
                </h3>
                <p className="text-xs text-gray-text leading-relaxed">
                  Our Senior Relationship Desk will reach out within 15–30 minutes to understand your preferences.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
                <Clock className="h-3.5 w-3.5 text-[#D4B28C]" />
                <span>Response Time: &lt;30 Mins</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-5 rounded-xl border border-[#672C57]/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-lg bg-[#FAF2E6] text-[#672C57] border border-[#D4B28C]/40 flex items-center justify-center font-display font-bold text-sm mb-3">
                  02
                </div>
                <h3 className="font-bold text-sm text-[#672C57] mb-1.5">
                  Complete Project Kit
                </h3>
                <p className="text-xs text-gray-text leading-relaxed">
                  You will receive the comprehensive pre-launch brochure, unit layouts, and cost sheets via WhatsApp and Email.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
                <FileText className="h-3.5 w-3.5 text-[#D4B28C]" />
                <span>PDF &amp; Pricing Sheets</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-5 rounded-xl border border-[#672C57]/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-lg bg-[#FAF2E6] text-[#672C57] border border-[#D4B28C]/40 flex items-center justify-center font-display font-bold text-sm mb-3">
                  03
                </div>
                <h3 className="font-bold text-sm text-[#672C57] mb-1.5">
                  Priority Site Preview
                </h3>
                <p className="text-xs text-gray-text leading-relaxed">
                  Lock in your early-bird EOI allocation and schedule an exclusive private walkthrough before public launch.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
                <Calendar className="h-3.5 w-3.5 text-[#D4B28C]" />
                <span>Exclusive Pre-Launch Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Assistance & Direct Action Buttons */}
        <div className="w-full max-w-xl bg-gradient-to-br from-[#672C57] to-[#4A1A3D] text-white rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-10 text-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4B28C]/15 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
            Need Immediate Assistance?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto mb-6">
            Speak directly with our official Godrej Thane project advisory team or chat instantly on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="tel:+919035679657"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4B28C] text-[#1F141D] hover:bg-[#C8A97E] font-body text-xs font-extrabold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              Call +91 90356 79657
            </a>

            <a
              href="https://wa.me/919035679657?text=Hi%2C%20I%20have%20submitted%20my%20enquiry%20for%20Godrej%20Thane%20and%20would%20like%20instant%20details%20on%20brochure%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba59] font-body text-xs font-extrabold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#672C57] hover:text-[#4A1A3D] bg-white hover:bg-[#FAF2E6] px-8 py-4 rounded-full border border-[#D4B28C]/60 transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 text-[#D4B28C]" />
            Return to Homepage &amp; Explore Project
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A1A3D] text-white/70 py-8 px-6 text-center text-xs border-t border-[#D4B28C]/20 font-body">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-white">
            <ShieldCheck className="h-4 w-4 text-[#D4B28C]" />
            <span className="font-bold tracking-wider uppercase text-[11px]">
              Godrej Thane West • Authorized Pre-Launch Advisory
            </span>
          </div>
          <p className="text-[11px] text-white/60 leading-relaxed max-w-2xl mx-auto">
            Disclaimer: The information provided is for general inquiry and guidance on the upcoming Godrej Thane development. Project specifications, elevations, and images are artist impressions for conceptual understanding.
          </p>
          <p className="text-[10px] text-white/40 pt-2 border-t border-white/10">
            © {new Date().getFullYear()} Godrej Thane West. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

