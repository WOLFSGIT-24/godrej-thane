export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  submittedAt: string;
  source: string;
  preferredConfig?: "2 BHK" | "3 BHK" | "4 BHK" | string;
  budget?: "₹1.89–3 Cr" | "₹3–5 Cr" | "₹5 Cr+" | string;
  interestedIn?: "Pricing & Floor Plans" | "EOI Registration" | "Site Visit" | string;
  preferredDate?: string;
  preferredTime?: string;
  status: "Pending" | "Contacted" | "Scheduled" | "Completed";
  notes?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  images?: string[];
  bullets: string[];
}

export interface ConfigurationUnit {
  id: string;
  title: string;
  tag?: string;
  bhk: string;
  carpetArea: string;
  startingPrice: string;
  eoiAmount: string;
  highlights: string[];
  imageUrl: string;
}

export interface LocationHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  timeEstimate?: string;
}

