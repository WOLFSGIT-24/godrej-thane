import React, { useState } from "react";
import { X, Calendar, Clock, Check, Phone, Mail, User, Building } from "lucide-react";
import { LeadSubmission } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  initialUnitType?: string | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  onAddLead,
  initialUnitType,
}: BookingModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "11:00",
    unitType: initialUnitType || "Luxury 3 BHK",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        source: "floor_plan_enquiry",
        notes: "Unlocked Floor Plans",
      });
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-navy-primary/10">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-gold" />
        
        {/* Header bar */}
        <div className="bg-navy-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Calendar className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight">
                Unlock Floor Plans
              </h3>
              <p className="text-[10px] text-champagne uppercase tracking-widest font-bold">
                Enter your details to view layouts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all text-white/80 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content/Form Area */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="relative border-b border-gray-100 focus-within:border-navy-primary py-2">
                <div className="flex items-center gap-2.5">
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
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none placeholder:text-gray-400 py-1"
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.fullName}</p>}
              </div>

              {/* Mobile Number */}
              <div className="relative border-b border-gray-100 focus-within:border-navy-primary py-2">
                <div className="flex items-center gap-2.5">
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
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none placeholder:text-gray-400 py-1"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.phone}</p>}
              </div>

              {/* Email Address */}
              <div className="relative border-b border-gray-100 focus-within:border-navy-primary py-2">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                  <input
                    type="email"
                    id="email"
                    aria-label="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none placeholder:text-gray-400 py-1"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#672C57] text-[#F2B707] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4.5 hover:bg-[#F2B707] hover:text-[#1F141D] transition-all shadow-lg rounded-full disabled:opacity-50 cursor-pointer border border-[#F2B707]/30"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    SUBMITTING DETAILS...
                  </>
                ) : (
                  "VIEW FLOOR PLANS"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="h-12 w-12 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm">
                <Check className="h-6 w-6" />
              </div>
              
              <div>
                <h4 className="font-display text-xl font-bold text-navy-primary">
                  Floor Plans Unlocked
                </h4>
                <p className="font-body text-xs text-gray-text mt-1.5 max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. The floor plans are now fully unlocked for you to view.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg rounded-sm"
              >
                View Layouts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
