import React, { useState, useEffect } from "react";
import { X, Check, ShieldCheck } from "lucide-react";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: any) => void;
}

export default function OfferModal({ isOpen, onClose, onAddLead }: OfferModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredConfig: "3 BHK",
    budget: "₹1.89–3 Cr",
    interestedIn: "Pricing & Floor Plans",
    agree: true,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    let sanitizedValue = value;
    if (name === "phone") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    onAddLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      preferredConfig: formData.preferredConfig,
      budget: formData.budget,
      interestedIn: formData.interestedIn,
      source: "popup_prelaunch_form",
      status: "Pending",
      notes: `Config: ${formData.preferredConfig} | Budget: ${formData.budget} | Interested In: ${formData.interestedIn}`,
    });
    
    setLoading(false);
    setSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-navy-dark/85 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[460px] bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in border border-gold/40">
        {/* Top Gold Accent */}
        <div className="h-[4px] bg-gradient-to-r from-gold via-champagne to-gold w-full" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy-primary transition-colors z-10 w-8 h-8 rounded-full bg-marble flex items-center justify-center cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col h-full font-body">
            {/* Header Content */}
            <div className="p-6 sm:p-7 pb-4 bg-marble border-b border-navy-primary/10">
              <span className="text-[10px] font-bold text-gold-dark uppercase tracking-widest block mb-1">
                Godrej Thane • Pre-Launch EOI
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-primary">
                Get Exclusive Pre-Launch Details
              </h3>
              <p className="font-body text-xs text-gray-text mt-1.5 leading-relaxed">
                Fill in your details to receive the latest prices, floor plans, EOI information and site visit assistance.
              </p>
            </div>

            {/* Form Fields with ONLY Placeholders */}
            <div className="p-6 sm:p-7 pt-4 space-y-3.5">
              <div>
                <input
                  type="text"
                  id="modal_fullName"
                  name="fullName"
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
                  className="w-full bg-marble/60 border border-navy-primary/20 rounded-md px-3.5 py-3 text-sm outline-none focus:ring-1 focus:ring-gold focus:border-gold font-body text-charcoal placeholder:text-gray-400"
                />
                {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="tel"
                    id="modal_phone"
                    name="phone"
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
                    className="w-full bg-marble/60 border border-navy-primary/20 rounded-md px-3.5 py-3 text-sm outline-none focus:ring-1 focus:ring-gold focus:border-gold font-body text-charcoal placeholder:text-gray-400"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    id="modal_email"
                    name="email"
                    aria-label="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full bg-marble/60 border border-navy-primary/20 rounded-md px-3.5 py-3 text-sm outline-none focus:ring-1 focus:ring-gold focus:border-gold font-body text-charcoal placeholder:text-gray-400"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#672C57] text-[#F2B707] font-body text-xs font-extrabold tracking-[0.2em] uppercase py-3.5 mt-2 rounded-full hover:bg-[#F2B707] hover:text-[#1F141D] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#F2B707]/40 shadow-md disabled:opacity-50"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Get Project Details"
                )}
              </button>

              <div className="flex gap-2 justify-center items-center text-[10px] text-gray-400 font-body">
                <ShieldCheck className="h-3 w-3 text-green-600" />
                <span>SSL Encrypted. Direct developer priority allocation.</span>
              </div>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center h-[400px] flex flex-col justify-center items-center font-body">
            <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 mb-5 shadow-sm">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-primary mb-2">
              Registration Successful
            </h3>
            <p className="font-body text-xs sm:text-sm text-gray-text leading-relaxed max-w-xs mx-auto">
              Thank you! Our dedicated Godrej Thane advisory team has received your inquiry for <strong>{formData.preferredConfig}</strong> and will contact you promptly with the complete kit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
