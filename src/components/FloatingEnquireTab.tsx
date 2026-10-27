import React from "react";

interface FloatingEnquireTabProps {
  onOpenEnquiry: () => void;
}

export default function FloatingEnquireTab({ onOpenEnquiry }: FloatingEnquireTabProps) {
  return (
    <button
      onClick={onOpenEnquiry}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex items-center justify-center bg-[#672C57] hover:bg-[#4A1A3D] text-white font-body text-[11px] font-extrabold uppercase tracking-[0.25em] py-5 px-2.5 rounded-l-md shadow-2xl transition-all cursor-pointer border-y border-l border-[#F2B707]/60 hover:border-[#F2B707] hover:pl-3 group [writing-mode:vertical-rl] rotate-180"
      aria-label="Enquire Now"
    >
      <span className="flex items-center gap-2 group-hover:text-[#F2B707] transition-colors">
        ENQUIRE NOW
      </span>
    </button>
  );
}
