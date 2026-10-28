import { AmenityItem, ConfigurationUnit, LocationHighlight } from "./types";

export const projectSnapshot = {
  brand: "Godrej Properties",
  title: "GODREJ THANE – UPCOMING LUXURY LAUNCH",
  subtitle: "An 18-Acre Landmark Address in Thane West",
  tagline: "Experience a new standard of luxury living at Godrej's upcoming 18-acre premium residential development in Thane West. Thoughtfully planned spacious residences, a grand podium and a prime location near the upcoming Thane–Borivali Tunnel make this an address worth considering.",
  pricingHeadline: "Premium 2, 3 & 4 BHK Residences Starting ₹1.89 Cr*",
  landArea: "18 Acres",
  configurations: "2, 3 & 4 BHK Luxury Residences",
  eoiStarting: "₹2.70 Lakh",
  startingPrice: "₹1.89 Cr*",
  locationName: "Thane West, Mumbai Metropolitan Region",
  keyInfrastructure: "Near Upcoming Thane–Borivali Tunnel",
  developer: "Godrej Properties",
  revenuePotential: "₹7,500 Cr+ Estimated Revenue Potential",
};

export const heroKeyHighlights = [
  { icon: "landscape", title: "18-Acre", subtitle: "Premium Development" },
  { icon: "apartment", title: "2, 3 & 4 BHK", subtitle: "Luxury Residences" },
  { icon: "deck", title: "Grand Podium", subtitle: "Spacious Layouts" },
  { icon: "tunnel", title: "Borivali Tunnel", subtitle: "Upcoming Connectivity" },
  { icon: "verified", title: "Godrej Properties", subtitle: "India's #1 Developer" },
  { icon: "payments", title: "₹2.70 Lakh*", subtitle: "Pre-Launch EOI" },
];

export const projectOverviewData = {
  heading: "A Bigger Vision for Luxury Living in Thane",
  paragraphs: [
    "Godrej Properties is bringing a premium residential development to Thane West, spread across approximately 18 acres.",
    "Designed for buyers who value space, location and a trusted developer, this upcoming address brings together spacious residences, large-format planning and a grand podium within one development.",
    "With residential spaces taking centre stage and future retail and commercial components planned, the project is set to introduce a new premium residential destination in Thane.",
    "Adding to its location advantage, the upcoming Thane–Borivali Tunnel is expected to reduce travel time between Thane and Borivali to approximately 15 minutes. The developing Metro Line 4 and 4A corridors will further strengthen connectivity across Thane and towards Mumbai, making everyday travel more convenient."
  ],
  keyHighlights: [
    "18 Acres of Premium Land",
    "Large-Format Residential Planning",
    "Premium Lifestyle Development",
    "Grand Podium Concept",
    "Limited 2 BHK Residences",
    "Exclusive Spacious 4 BHK Homes"
  ],
  ctaText: "Download Project Brochure"
};

export const configurationsData: ConfigurationUnit[] = [
  {
    id: "2bhk",
    bhk: "2 BHK",
    title: "2 BHK Luxury Residences",
    tag: "Limited Inventory",
    carpetArea: "750–850 Sq. Ft.",
    startingPrice: "₹1.89 Cr*",
    eoiAmount: "₹2.70 Lakh",
    imageUrl: "/2bhk.jpg",
    highlights: [
      "Optimized large-format living & dining space",
      "Expansive master bedroom with panoramic deck",
      "Gourmet kitchen with dedicated utility",
      "Cross-ventilation and natural daylight corridors"
    ]
  },
  {
    id: "3bhk",
    bhk: "3 BHK",
    title: "3 BHK Premium Residences",
    carpetArea: "1,150–1,450 Sq. Ft.",
    startingPrice: "₹2.99 Cr*",
    eoiAmount: "₹2.70 Lakh",
    imageUrl: "/3bhk.jpg",
    highlights: [
      "Grand living room with extended viewing sundeck",
      "Private foyer entrance ensuring complete privacy",
      "Lavish master suite with walk-in closet space",
      "Well-separated family and guest zones"
    ]
  },
  {
    id: "4bhk",
    bhk: "4 BHK",
    title: "4 BHK Palatial Residences",
    tag: "Exclusive Large-Format Residences",
    carpetArea: "1,775–2,100 Sq. Ft.",
    startingPrice: "₹4.79 Cr*",
    eoiAmount: "₹2.70 Lakh",
    imageUrl: "/4bhk.jpg",
    highlights: [
      "Expansive double-width living and dining area",
      "Two master suites with bespoke bath spaces",
      "Private staff quarters with independent entrance",
      "Unmatched panoramic skyline and green hill vistas"
    ]
  }
];

export const projectHighlightsData = [
  {
    id: "land-parcel",
    title: "18-Acre Premium Land Parcel",
    description: "A large-scale development offering the opportunity for thoughtfully planned residential spaces and an expansive lifestyle environment.",
    icon: "layers",
    badge: "Master Planned"
  },
  {
    id: "godrej-advantage",
    title: "The Godrej Properties Advantage",
    description: "A trusted name in Indian real estate, bringing its development experience to a new premium residential address in Thane.",
    icon: "verified_user",
    badge: "127+ Year Legacy"
  },
  {
    id: "spacious-residences",
    title: "Spacious Luxury Residences",
    description: "From 2 BHK apartments to expansive 4 BHK residences with carpet areas of up to 2,100 sq. ft.",
    icon: "straighten",
    badge: "Up to 2,100 Sq. Ft."
  },
  {
    id: "grand-podium",
    title: "Grand Podium Planning",
    description: "A large podium concept designed to support an elevated residential lifestyle.",
    icon: "balcony",
    badge: "Elevated Living"
  },
  {
    id: "prime-location",
    title: "Prime Thane West Location",
    description: "Positioned near the upcoming Thane–Borivali Tunnel, with access to Thane's established residential and social infrastructure.",
    icon: "explore",
    badge: "High Growth Corridor"
  },
  {
    id: "integrated-vision",
    title: "Integrated Development Vision",
    description: "A primarily residential development with retail and commercial components planned in future phases.",
    icon: "domain_add",
    badge: "Mixed-Use Horizon"
  }
];

export const amenitiesData: AmenityItem[] = [
  {
    id: "podium",
    title: "Grand Podium Concept",
    category: "Signature Architecture",
    description: "An elevated lifestyle realm detached from street-level vehicular circulation, delivering peaceful, open green vistas and curated experiences.",
    imageUrl: "/podium2.jpg",
    images: ["/podium2.jpg", "/podium3.jpg", "/podium4.jpg", "/podium5.jpg"],
    bullets: [
      "Grand elevated podium recreation deck",
      "Exclusive vehicle-free open pedestrian greens",
      "Reflective serene water bodies & manicured courts",
      "Dedicated senior citizen pavillions & shaded pergolas"
    ]
  },
  {
    id: "layouts",
    title: "Spacious Residential Layouts",
    category: "Spatial Excellence",
    description: "Thoughtfully configured homes designed with superior carpet-area efficiencies, high ceilings, expansive sundecks and abundant cross ventilation.",
    imageUrl: "/balcony.png",
    images: ["/balcony.png", "/building.png", "/kitchen.jpg"],
    bullets: [
      "Extra wide living and dining zones with floor-to-ceiling glass",
      "Double glazed windows for thermal and acoustic tranquility",
      "Utility areas seamlessly tucked away from view",
      "Maximized usable space with zero wasted circulation"
    ]
  },
  {
    id: "environment",
    title: "Premium Residential Environment",
    category: "Nature & Wellbeing",
    description: "An enclave that prioritizes high privacy, green canopies, clean air pockets and soothing open-air lounges for families.",
    imageUrl: "/ground2.jpg",
    images: ["/ground2.jpg", "/ground3.jpg", "/ground4.jpg", "/pet-park.jpg"],
    bullets: [
      "Lush landscaped forest groves and reflexology pathways",
      "Dedicated kids play areas and adventure zones",
      "Pet-friendly bark park and sensory garden",
      "Multi-tier 24x7 security, CCTV and smart RFID access"
    ]
  },
  {
    id: "convenience",
    title: "Future Retail & Integrated Convenience",
    category: "Master Planning",
    description: "Large-scale master planning envisioned to seamlessly host future convenience retail and boutique commercial spaces at your doorstep.",
    imageUrl: "/partyhall.jpg",
    images: ["/partyhall.jpg", "/indoor-games.jpg", "/roof5.jpg"],
    bullets: [
      "High-street everyday essentials and organic groceries",
      "Bespoke café and social gathering spaces",
      "Professional work-from-home pods and co-working lounges",
      "Multi-purpose banquet and celebration hall"
    ]
  }
];

export const locationsData: LocationHighlight[] = [
  {
    id: "tunnel",
    title: "Upcoming Thane–Borivali Tunnel",
    subtitle: "Direct Western Suburbs Link",
    description: "Direct link drastically reducing transit time to Western Suburbs.",
    icon: "directions_subway",
    badge: "Key Gamechanger",
    timeEstimate: "Western Suburbs Link"
  },
  {
    id: "ghodbunder",
    title: "Ghodbunder Road Corridor",
    subtitle: "Arterial Lifeline",
    description: "Arterial corridor linking Eastern & Western expressways.",
    icon: "alt_route",
    badge: "Direct Access",
    timeEstimate: "Immediate Connect"
  },
  {
    id: "eeh",
    title: "Eastern Express Highway",
    subtitle: "To BKC, Mulund & Mumbai",
    description: "Direct connectivity towards Mulund, Powai, BKC & Mumbai.",
    icon: "traffic",
    badge: "Fast Corridor",
    timeEstimate: "Direct Highway"
  },
  {
    id: "railway",
    title: "Thane Railway Station",
    subtitle: "Central Railway & Metro",
    description: "Suburban rail hub & expanding Metro Line 4 network.",
    icon: "train",
    badge: "Transit Node",
    timeEstimate: "Central Rail"
  },
  {
    id: "education-health",
    title: "Schools & Healthcare",
    subtitle: "Established Social Infra",
    description: "Singhania, Podar & Jupiter Hospital within minutes.",
    icon: "local_hospital",
    badge: "Social Infra",
    timeEstimate: "Minutes Away"
  },
  {
    id: "shopping",
    title: "Shopping & Entertainment",
    subtitle: "Malls & Retail",
    description: "Minutes to Viviana Mall & top lifestyle destinations.",
    icon: "shopping_bag",
    badge: "Retail District",
    timeEstimate: "Top Malls"
  },
  {
    id: "mmr-hubs",
    title: "Mumbai Metropolitan Region",
    subtitle: "Employment Centers",
    description: "Direct access to Mindspace, Wagle Estate & MMR hubs.",
    icon: "apartment",
    badge: "Job Corridors",
    timeEstimate: "MMR Connect"
  }
];

export const developerData = {
  heading: "A Name Behind Some of India's Most Recognised Developments",
  overview: "Godrej Properties combines the legacy of the Godrej Group with a strong presence across India's residential real estate market. With developments across major Indian cities, the company is known for its commitment to design, quality and thoughtfully planned communities.",
  achievementsHeading: "Developer Achievements – FY 2025–26",
  stats: [
    { value: "₹34,171 Cr", label: "Annual Booking Value", sub: "Historic High Performance" },
    { value: "17,513", label: "Homes Sold Across India", sub: "Trusted by Homebuyers" },
    { value: "India's No. 1", label: "Residential Developer by Booking Value", sub: "For Three Consecutive Years*" },
    { value: "₹7,500 Cr+", label: "Estimated Revenue Potential", sub: "For 18-Acre Thane Development" }
  ],
  footerNote: "*As reported by Godrej Properties for three consecutive financial years."
};

export const eoiSectionData = {
  heading: "Your Opportunity to Get Early Access",
  description: "A premium new address is coming to Thane West. With an 18-acre development, spacious luxury residences and a location near the upcoming Thane–Borivali Tunnel, this Godrej launch brings together some of the most important factors premium homebuyers look for.",
  priceHighlights: [
    { config: "2 BHK", area: "750–850 Sq. Ft.", price: "₹1.89 Cr* Onwards", eoi: "EOI ₹2.70 L" },
    { config: "3 BHK", area: "1,150–1,450 Sq. Ft.", price: "₹2.99 Cr* Onwards", eoi: "EOI ₹2.70 L" },
    { config: "4 BHK", area: "1,775–2,100 Sq. Ft.", price: "₹4.79 Cr* Onwards", eoi: "EOI ₹2.70 L" }
  ],
  eoiTagline: "Pre-Launch EOI Starting From ₹2.70 Lakh",
  note: "Register your interest to receive the complete project details, latest pricing, floor plans, EOI process and launch updates.",
  primaryCta: "Register for Early Access",
  secondaryCta: "Get Complete Project Details"
};

export const footerDisclaimer = "This website is intended for general project information and enquiry purposes. Images, illustrations, specifications, layouts and amenities are indicative and subject to change. Prices mentioned are indicative starting prices and may exclude applicable taxes, statutory charges and other costs. EOI amounts, inventory, carpet areas and launch details are subject to confirmation by the developer. The Thane–Borivali Tunnel is an upcoming infrastructure project, and its completion timeline is subject to the relevant authorities. Prospective buyers should verify all project details, approvals and MahaRERA registration information before making any payment or purchase decision.";
