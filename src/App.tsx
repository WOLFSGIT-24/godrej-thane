import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntimateScale from "./components/IntimateScale";
import FloorPlans from "./components/FloorPlans";
import ProjectHighlights from "./components/ProjectHighlights";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import AboutGodrej from "./components/AboutGodrej";
import BrochureForm from "./components/BrochureForm";
import BookingModal from "./components/BookingModal";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TermsModal from "./components/TermsModal";
import OfferModal from "./components/OfferModal";
import FloatingEnquireTab from "./components/FloatingEnquireTab";
import { LeadSubmission } from "./types";

const LOCAL_STORAGE_KEY = "godrej_thane_leads";

export default function App() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [preselectedUnit, setPreselectedUnit] = useState<string | null>(null);
  const [floorPlansUnlocked, setFloorPlansUnlocked] = useState(() => {
    try {
      return localStorage.getItem("floor_plans_unlocked") === "true";
    } catch {
      return false;
    }
  });
  const [deferredReady, setDeferredReady] = useState(false);

  // Delay render of below-the-fold sections to optimize FCP and LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeferredReady(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Read initial cache
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        const initialSeeds = generateMockLeads();
        setLeads(initialSeeds);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialSeeds));
      }
    } catch (e) {
      console.error("Error reading localized storage cache", e);
    }
  }, []);

  const saveLeadsToCache = (newLeads: LeadSubmission[]) => {
    setLeads(newLeads);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLeads));
    } catch (e) {
      console.error("Error saving lead entries to localized storage", e);
    }
  };

  const handleAddLead = (rawLead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => {
    const isoTimestamp = new Date().toISOString();
    const localTimestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    
    const newLead: LeadSubmission = {
      ...rawLead,
      id: "GT-" + Math.floor(1000 + Math.random() * 9000),
      submittedAt: isoTimestamp,
      status: "Pending",
    };

    // Post to Make.com Webhook
    fetch("https://hook.us1.make.com/2bmmq21zo8ocu9itedtq5oyhu5sg5zad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: newLead.id,
        project: "Godrej Thane West 18-Acre Launch",
        fullName: newLead.fullName,
        email: newLead.email,
        phone: newLead.phone,
        preferredConfig: newLead.preferredConfig || "",
        budget: newLead.budget || "",
        interestedIn: newLead.interestedIn || "",
        source: newLead.source,
        notes: newLead.notes || "",
        submittedAt: isoTimestamp,
        localTimestamp: localTimestamp,
        status: newLead.status,
      }),
    }).catch((err) => {
      console.error("Webhook submission failed:", err);
    });

    const updated = [newLead, ...leads];
    saveLeadsToCache(updated);
    try {
      localStorage.setItem("floor_plans_unlocked", "true");
    } catch (e) {
      console.error(e);
    }
    setFloorPlansUnlocked(true);
  };

  const handleUpdateStatus = (id: string, status: LeadSubmission["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    saveLeadsToCache(updated);
  };

  const handleClearLeads = () => {
    saveLeadsToCache([]);
  };

  const handleAddMockLeads = () => {
    const extraSeeds = generateMockLeads();
    saveLeadsToCache([...extraSeeds, ...leads]);
  };

  const handleSelectUnitType = (unitType: string) => {
    setPreselectedUnit(unitType);
    setOfferOpen(true);
  };

  const handleHeroEnquiry = () => {
    setOfferOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-marble text-charcoal pb-20 md:pb-0 overflow-x-hidden w-full font-body">
      {/* Upper Navigation Header */}
      <Header
        onOpenBooking={() => {
          setPreselectedUnit(null);
          setOfferOpen(true);
        }}
        onToggleAdmin={() => setAdminOpen(!adminOpen)}
        isAdminActive={adminOpen}
      />

      {/* SECTION 1: Hero Entrance Banner */}
      <Hero 
        onOpenEnquiry={handleHeroEnquiry} 
      />

      {/* SECTION 2: Project Overview */}
      <IntimateScale />

      {/* Right Fixed Edge Floating Enquire Tab matching Screenshot */}
      <FloatingEnquireTab onOpenEnquiry={handleHeroEnquiry} />

      {deferredReady && (
        <>
          {/* SECTION 3: Configurations & Pricing */}
          <FloorPlans 
            onSelectUnit={handleSelectUnitType} 
            isUnlocked={floorPlansUnlocked}
            onUnlockRequest={() => setOfferOpen(true)}
          />

          {/* SECTION 4: Project Highlights matching Screenshot */}
          <ProjectHighlights 
            onOpenEnquiry={handleHeroEnquiry} 
          />

          {/* SECTION 5: Lifestyle & Amenities */}
          <Amenities onOpenEnquiry={handleHeroEnquiry} />

          {/* Curated Gallery Showcase */}
          <Gallery />

          {/* SECTION 6: Location Advantages */}
          <Location onOpenEnquiry={handleHeroEnquiry} />

          {/* SECTION 7: About Godrej Properties */}
          <AboutGodrej onOpenEnquiry={handleHeroEnquiry} />

          {/* SECTION 8: EOI Call to Action & Lead Generation Form */}
          <BrochureForm 
            onAddLead={handleAddLead} 
            preselectedUnit={preselectedUnit} 
          />
        </>
      )}

      {/* Booking Site Walkthrough Modal Dialog */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setPreselectedUnit(null);
        }}
        onAddLead={handleAddLead}
        initialUnitType={preselectedUnit}
      />

      {/* Lead CRM Dashboard Overlay */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        leads={leads}
        onUpdateStatus={handleUpdateStatus}
        onClearLeads={handleClearLeads}
        onAddMockLeads={handleAddMockLeads}
      />

      {/* Fixed Mobile Bottom CTA Bar with Plum and Gold Brand Colors */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-10px_30px_rgba(103,44,87,0.3)]">
        <a 
          href="tel:+919035679657" 
          className="flex-1 flex items-center justify-center gap-2 bg-[#672C57] text-white font-body text-[13px] font-extrabold uppercase tracking-[0.15em] py-4 transition-colors hover:bg-[#4A1A3D] border-r border-[#F2B707]/30"
        >
          <Phone className="h-4 w-4 text-[#F2B707] fill-[#F2B707]" />
          Call Now
        </a>
        <button 
          onClick={() => {
            setPreselectedUnit(null);
            setOfferOpen(true);
          }}
          className="flex-1 flex items-center justify-center bg-[#F2B707] text-[#1F141D] font-body text-[13px] font-extrabold uppercase tracking-[0.15em] py-4 transition-colors hover:bg-[#d9a304]"
        >
          Enquire Now
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919035679657?text=Hi%2C%20I%20am%20interested%20in%20Godrej%20Thane%20Pre-Launch"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[84px] md:bottom-8 right-4 md:right-8 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all z-40 flex items-center justify-center animate-fade-in"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer Credentials & Exact Disclaimer */}
      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)} 
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Legal & Lead Modals */}
      <PrivacyPolicyModal 
        isOpen={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
      />
      <TermsModal 
        isOpen={termsOpen} 
        onClose={() => setTermsOpen(false)} 
      />
      <OfferModal
        isOpen={offerOpen}
        onClose={() => setOfferOpen(false)}
        onAddLead={handleAddLead}
      />
    </div>
  );
}

function generateMockLeads(): LeadSubmission[] {
  return [
    {
      id: "GT-1042",
      fullName: "Vikram Singhania",
      email: "vikram.singhania@gmail.com",
      phone: "+91 98201 44589",
      submittedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
      source: "lead_generation_form",
      preferredConfig: "3 BHK",
      budget: "₹3–5 Cr",
      interestedIn: "Pricing & Floor Plans",
      status: "Scheduled",
      notes: "High floor preference, inquired about Thane-Borivali tunnel connectivity.",
    },
    {
      id: "GT-1043",
      fullName: "Ananya Mehta",
      email: "ananya.mehta@outlook.com",
      phone: "+91 97690 12345",
      submittedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
      source: "eoi_priority_desk",
      preferredConfig: "4 BHK",
      budget: "₹5 Cr+",
      interestedIn: "EOI Registration",
      status: "Contacted",
      notes: "Interested in the 2,100 sq.ft palatial 4 BHK with private sundeck.",
    },
    {
      id: "GT-1044",
      fullName: "Rajesh Kulkarni",
      email: "kulkarni.rajesh@tcs.com",
      phone: "+91 99302 78910",
      submittedAt: new Date(Date.now() - 14 * 3600000).toISOString(),
      source: "lead_generation_form",
      preferredConfig: "2 BHK",
      budget: "₹1.89–3 Cr",
      interestedIn: "Site Visit",
      status: "Pending",
      notes: "Seeking pre-launch EOI window and payment milestones.",
    },
  ];
}
