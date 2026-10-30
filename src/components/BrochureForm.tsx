import React, { useState, useEffect } from "react";
import { CheckCircle, Phone, Mail, User, ShieldCheck, Building, DollarSign, Layers } from "lucide-react";
import { LeadSubmission } from "../types";

interface BrochureFormProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  preselectedUnit?: string | null;
}

export default function BrochureForm({ onAddLead, preselectedUnit }: BrochureFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredConfig: preselectedUnit || "3 BHK",
    budget: "₹1.89–3 Cr",
    interestedIn: "Pricing & Floor Plans",
    source: "Website Landing Page",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validatedCode, setValidatedCode] = useState("");

  // Sync pre-selected unit
  useEffect(() => {
    if (preselectedUnit) {
      setFormData((prev) => ({ ...prev, preferredConfig: preselectedUnit }));
      const el = document.getElementById("lead-capture-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preselectedUnit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    let sanitizedValue = value;
    if (id === "phone") {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (id === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
    }
    
    setFormData((prev) => ({ ...prev, [id]: sanitizedValue }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || !/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name must contain letters only";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Mobile number must be exactly 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    
    setLoading(true);

    setTimeout(() => {
      onAddLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredConfig: formData.preferredConfig,
        budget: formData.budget,
        interestedIn: formData.interestedIn,
        source: formData.source,
        notes: `Config: ${formData.preferredConfig} | Budget: ${formData.budget} | Interested In: ${formData.interestedIn}`,
      });

      setLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="snapshots" className="w-full py-16 md:py-24 relative text-white font-body scroll-mt-20 overflow-hidden">
      {/* Background Architectural Luxury Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta.jpg"
          alt="Godrej Thane Luxury Palatial Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Luxury Overlay - Decreased for clarity */}
        <div className="absolute inset-0 bg-black/35 bg-gradient-to-t from-black/55 via-black/20 to-black/35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div id="lead-capture-section" className="w-full flex justify-end">
          <div id="lead-capture-form" className="w-full max-w-md bg-white/98 backdrop-blur-md text-charcoal p-6 sm:p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden border border-[#D4B28C]/30">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-gold via-champagne to-gold" />

              {!formSubmitted ? (
                <>
                  <div className="mb-7">
                    <span className="text-[10px] font-bold text-gold-dark uppercase tracking-widest block mb-1">
                      Official Priority Desk
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-primary">
                      Get Exclusive Pre-Launch Details
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-gray-text mt-1.5 leading-relaxed">
                      Fill in your details to receive the latest prices, floor plans, EOI information and site visit assistance.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="relative border-b border-gray-200 focus-within:border-navy-primary transition-colors py-2">
                      <div className="flex items-center gap-3">
                        <User className="h-4 w-4 text-gray-400 shrink-0" />
                        <input
                          type="text"
                          id="fullName"
                          aria-label="Full Name"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          onKeyDown={(e) => {
                            if (!/^[a-zA-Z\s]$/.test(e.key) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          placeholder="Full Name*"
                          className="w-full bg-transparent border-none text-sm font-body outline-none placeholder:text-gray-400 py-1 text-charcoal"
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.fullName}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div className="relative border-b border-gray-200 focus-within:border-navy-primary transition-colors py-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                        <input
                          type="tel"
                          id="phone"
                          aria-label="Mobile Number"
                          inputMode="numeric"
                          maxLength={10}
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onKeyDown={(e) => {
                            if (!/^\d$/.test(e.key) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          placeholder="Mobile Number*"
                          className="w-full bg-transparent border-none text-sm font-body outline-none placeholder:text-gray-400 py-1 text-charcoal"
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.phone}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="relative border-b border-gray-200 focus-within:border-navy-primary transition-colors py-2">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                        <input
                          type="email"
                          id="email"
                          aria-label="Email Address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address*"
                          className="w-full bg-transparent border-none text-sm font-body outline-none placeholder:text-gray-400 py-1 text-charcoal"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.email}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 bg-[#672C57] text-[#D4B28C] hover:bg-[#D4B28C] hover:text-[#1F141D] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4.5 transition-all shadow-lg rounded-full disabled:opacity-50 mt-5 cursor-pointer border border-[#D4B28C]/40"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                          PROCESSING DETAILS...
                        </>
                      ) : (
                        "Get Project Details"
                      )}
                    </button>

                    <div className="flex gap-2 justify-center items-center text-[10px] text-gray-400 font-body pt-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                      <span>Official Pre-Launch Ledger. Your credentials are 100% confidential.</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy-primary">
                      Details Successfully Received
                    </h3>
                    <p className="font-body text-sm text-gray-text mt-2 max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. Your preference for <strong>{formData.preferredConfig}</strong> ({formData.budget}) has been registered for the Godrej Thane Launch.
                    </p>
                  </div>

                  <div className="p-4 bg-marble rounded-lg border border-navy-primary/10 max-w-sm mx-auto text-xs space-y-1">
                    <div className="font-bold text-navy-primary">Priority Code: {validatedCode}</div>
                    <div className="text-gray-text">Interest: {formData.interestedIn}</div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="flex items-center justify-center gap-2 bg-[#672C57] text-[#D4B28C] hover:bg-[#4A1A3D] font-body text-xs font-bold tracking-widest uppercase px-8 py-4 transition-colors shadow-lg rounded-full cursor-pointer border border-[#D4B28C]/30"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
