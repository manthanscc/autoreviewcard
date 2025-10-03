export interface ReviewCard {
  id: string;
  businessName: string;
  category: string;
  type: string;
  slug: string;
  logoUrl?: string;
  googleMapsUrl: string;
  tagline?: string;
  description?: string;
  location?: string;
  services?: string[];
  createdAt: string;
  updatedAt: string;
  viewCount?: number;
}

export interface ReviewTemplates {
  openings: string[];
  qualities: string[];
  achievements: string[];
  endings: string[];
}

export interface ReviewVariations {
  connectors: string[];
  intensifiers: string[];
  timeframes: string[];
}