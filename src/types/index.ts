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

/** JSON blob stored in Supabase review_data column */
export interface ReviewDataJson {
  text: string;
  starRating: number;
  language: string;
  tone?: string;
  selectedServices: string[];
  source: 'ai' | 'fallback';
  wasCopied: boolean;
}

export interface StoredReview {
  id: string;
  reviewCardId: string;
  contentHash: string;
  reviewData: ReviewDataJson;
  createdAt: string;
  /** Flat accessors (derived from reviewData) */
  reviewText: string;
  starRating: number;
  language: string;
  tone?: string;
  selectedServices?: string[];
  source: 'ai' | 'fallback';
  wasCopied: boolean;
}

export interface SaveReviewInput {
  reviewCardId: string;
  reviewText: string;
  contentHash: string;
  starRating: number;
  language: string;
  tone?: string;
  selectedServices?: string[];
  source: 'ai' | 'fallback';
}