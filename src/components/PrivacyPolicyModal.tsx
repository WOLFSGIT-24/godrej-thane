import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
            <h2 className="font-display text-2xl sm:text-3xl text-navy-primary font-bold">Privacy Policy</h2>
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
            <p>
              This website is intended for general project information and enquiry purposes for Godrej Thane West, an upcoming 18-acre luxury residential development. We are committed to protecting the privacy of every visitor to this website and handling your personal information with care, transparency, and respect.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">1. Information We Collect</h3>
            <p>When you submit an enquiry form on this website, we collect the following personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>Preferred Configuration (2 BHK / 3 BHK / 4 BHK)</li>
              <li>Budget and Intent of Inquiry</li>
            </ul>
            <p>We may also automatically collect non-personal technical data such as browser type, IP address, device type, and pages visited, solely for analytics and performance optimisation purposes.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">2. How We Use Your Information</h3>
            <p>Your personal information is used solely for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your enquiry regarding Godrej Thane launch details</li>
              <li>Sharing official pre-launch e-brochures, cost sheets, and floor plans</li>
              <li>Connecting you with the authorised Godrej Properties relationship team</li>
              <li>Sending relevant updates about the project, pre-launch pricing, EOI milestones, and site visits</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">3. Data Sharing</h3>
            <p>We may share your inquiry information with Godrej Properties and their authorised sales representatives solely for the purpose of fulfilling your enquiry and providing launch updates. We do not sell, rent, or trade your personal data to any unrelated third parties.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">4. Cookies & Analytics</h3>
            <p>This website uses cookies and analytics to evaluate traffic patterns, improve website performance, and optimize our communications.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">5. Contact Information</h3>
            <p>For any privacy-related queries, please reach out to our project desk:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Project:</strong> Godrej Thane (Upcoming 18-Acre Development)</li>
              <li><strong>Location:</strong> Thane West, Mumbai Metropolitan Region</li>
              <li><strong>Developer:</strong> Godrej Properties</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:px-8 sm:py-5 border-t border-navy-primary/10 bg-marble shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-navy-dark text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-navy-primary transition-colors shadow-sm cursor-pointer border border-gold/40"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
