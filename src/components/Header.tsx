import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
  onToggleAdmin: () => void;
  isAdminActive: boolean;
}

export default function Header({ onOpenBooking, onToggleAdmin, isAdminActive }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["overview", "project-overview", "configurations", "highlights", "amenities", "location", "developer", "snapshots"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "OVERVIEW", id: "overview" },
    { label: "PRICING", id: "configurations" },
    { label: "HIGHLIGHTS", id: "highlights" },
    { label: "AMENITIES", id: "amenities" },
    { label: "LOCATION", id: "location" },
    { label: "GODREJ", id: "developer" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#672C57]/10 shadow-[0_4px_30px_rgba(103,44,87,0.08)]"
            : "bg-[#FAF7F9]/80 backdrop-blur-sm border-b border-[#672C57]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand with Plum and Gold colors */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="flex flex-col text-left">
              <span className="font-accent text-lg sm:text-xl font-bold tracking-[0.2em] text-[#672C57] uppercase group-hover:text-[#F2B707] transition-colors">
                GODREJ
              </span>
              <span className="font-body text-[9px] font-extrabold tracking-[0.3em] text-[#F2B707] uppercase -mt-0.5">
                THANE WEST • 18 ACRES
              </span>
            </div>
          </a>

          {/* Navigation Links - Desktop with Plum text and Gold active bar */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`font-body text-xs font-bold tracking-wider transition-all duration-300 relative py-2 ${
                  activeSection === link.id
                    ? "text-[#672C57]"
                    : "text-[#672C57]/60 hover:text-[#672C57]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#F2B707] transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Call to Action with Plum background & Gold hover/border */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="hidden md:flex items-center justify-center bg-[#672C57] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-[#4A1A3D] hover:shadow-[#F2B707]/20 transition-all shadow-md rounded-sm cursor-pointer border border-[#F2B707]/30"
            >
              REGISTER INTEREST
            </button>

            {/* Mobile Call Button */}
            <a
              href="tel:+919035679657"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#672C57]/20 text-[#672C57] focus:outline-none hover:bg-[#672C57]/5 transition-colors"
              aria-label="Call Godrej Thane Desk"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Hamburger Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#672C57]/20 text-[#672C57] focus:outline-none hover:bg-[#672C57]/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#4A1A3D]/98 backdrop-blur-xl z-30 lg:hidden flex flex-col p-8 space-y-6 animate-fade-in border-t border-[#F2B707]/20">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="font-display text-xl font-medium text-white/90 hover:text-[#F2B707] tracking-wide py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center bg-[#F2B707] text-[#1F141D] font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-white transition-colors shadow-lg rounded-sm mt-8 cursor-pointer"
          >
            REGISTER YOUR INTEREST
          </button>
        </div>
      )}
    </>
  );
}
