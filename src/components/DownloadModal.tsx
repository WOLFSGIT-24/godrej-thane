import React, { useState } from "react";
import { X, Check, Phone, Mail, User, Download } from "lucide-react";
import { LeadSubmission } from "../types";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
}

export default function DownloadModal({
  isOpen,
  onClose,
  onAddLead,
}: DownloadModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/Brochure.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        source: "brochure_download_modal",
        notes: "Requested brochure download via popup.",
      });
      setLoading(false);
      handleDownloadBrochure();
      onClose();
      setFormData({ fullName: "", email: "", phone: "" });
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative border border-navy-primary/10">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-gold" />
        
        {/* Header bar */}
        <div className="bg-navy-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Download className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight">
                Download Brochure
              </h3>
              <p className="text-[10px] text-champagne uppercase tracking-widest font-bold">
                Access Floor Plans & Pricing
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-text font-body">
                  To download this brochure, please fill out the form below. Your download will start automatically.
                </p>
              </div>
              
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

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#672C57] text-[#D4B28C] font-body text-xs font-extrabold tracking-widest uppercase px-8 py-4.5 hover:bg-[#D4B28C] hover:text-[#1F141D] transition-all shadow-lg rounded-full disabled:opacity-70 cursor-pointer border border-[#D4B28C]/30"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      Unlock Download
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm">
                <Check className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-primary">
                  Success!
                </h3>
                <p className="font-body text-sm text-gray-text mt-2 max-w-xs mx-auto">
                  Your download is starting automatically. Closing this window in a few seconds...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
