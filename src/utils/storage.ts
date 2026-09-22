import { ReviewCard, ReviewDataJson, SaveReviewInput, StoredReview } from '../types';
import { supabase, isSupabaseConfigured } from './supabase';

const STORAGE_KEY = 'scc_review_cards';
const REVIEWS_STORAGE_KEY = 'scc_generated_reviews';

// Helper function to validate UUID format
const isValidUuid = (id: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

// Transform database row to ReviewCard type
const transformDbRowToCard = (row: any): ReviewCard => ({
  id: row.id,
  businessName: row.business_name,
  category: row.category,
  type: row.type,
  description: row.description || '',
  location: row.location || '',
  services: row.services || [],
  slug: row.slug,
  logoUrl: row.logo_url || '',
  googleMapsUrl: row.google_maps_url,
  tagline: row.tagline || '',
  createdAt: row.created_at,
  updatedAt: row.updated_at,
  viewCount: row.view_count ?? 0
});

// Transform ReviewCard to database insert format
const transformCardToDbInsert = (card: ReviewCard) => {
  const baseData = {
    business_name: card.businessName,
    category: card.category,
    type: card.type,
    description: card.description || null,
    location: card.location || null,
    services: card.services || null,
    slug: card.slug,
    logo_url: card.logoUrl || null,
    google_maps_url: card.googleMapsUrl,
    tagline: card.tagline || null,
    created_at: card.createdAt || new Date().toISOString(),
    updated_at: card.updatedAt || new Date().toISOString(),
    view_count: card.viewCount ?? 0
  };

  // Only include id if it's a valid UUID, otherwise let Supabase generate one
  if (isValidUuid(card.id)) {
    return { id: card.id, ...baseData };
  }
  
  return baseData;
};

// Transform ReviewCard to database update format
const transformCardToDbUpdate = (card: ReviewCard) => ({
  business_name: card.businessName,
  category: card.category,
  type: card.type,
  description: card.description || null,
  location: card.location || null,
  services: card.services || null,
  slug: card.slug,
  logo_url: card.logoUrl || null,
  google_maps_url: card.googleMapsUrl,
  tagline: card.tagline || null,
  updated_at: new Date().toISOString(),
  view_count: card.viewCount ?? 0
});

export const storage = {
  // Local storage helper methods
  _getLocalCards(): ReviewCard[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  _saveLocalCards(cards: ReviewCard[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  _addLocalCard(card: ReviewCard): void {
    const cards = this._getLocalCards();
    const newCard = { ...card, viewCount: card.viewCount ?? 0 };
    cards.unshift(newCard);
    this._saveLocalCards(cards);
  },

  _updateLocalCard(updatedCard: ReviewCard): void {
    const cards = this._getLocalCards();
    const index = cards.findIndex(card => card.id === updatedCard.id);
    if (index !== -1) {
      cards[index] = { ...updatedCard, viewCount: updatedCard.viewCount ?? cards[index].viewCount ?? 0 };
      this._saveLocalCards(cards);
    }
  },

  _deleteLocalCard(cardId: string): void {
    const cards = this._getLocalCards();
    const filteredCards = cards.filter(card => card.id !== cardId);
    this._saveLocalCards(filteredCards);
  },

  _getLocalCardBySlug(slug: string): ReviewCard | null {
    const cards = this._getLocalCards();
    return cards.find(card => card.slug === slug) || null;
  },

  async getCards(): Promise<ReviewCard[]> {
    try {
      // Always try Supabase first if configured
      if (isSupabaseConfigured() && supabase) {
        try {
          console.log('Attempting to fetch cards from Supabase...');
          const { data, error } = await supabase
            .from('review_cards')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) {
            console.error('Supabase error, falling back to localStorage:', error);
            return this._getLocalCards();
          }

          console.log(`Successfully fetched ${data?.length || 0} cards from Supabase`);
          const supabaseCards = (data || []).map(transformDbRowToCard);
          
          // Also sync with localStorage for offline access
          this._saveLocalCards(supabaseCards);
          
          return supabaseCards;
        } catch (supabaseError) {
          console.error('Supabase connection failed, using localStorage:', supabaseError);
          return this._getLocalCards();
        }
      } else {
        console.log('Supabase not configured, using localStorage');
        return this._getLocalCards();
      }
    } catch (error) {
      console.error('Error loading cards:', error);
      return this._getLocalCards();
    }
  },

  async addCard(card: ReviewCard): Promise<boolean> {
    try {
      console.log('Adding card:', card.businessName);
      
      // Always save to localStorage first for immediate feedback
      this._addLocalCard(card);
      console.log('Card saved to localStorage');

      // Then try to sync with Supabase if configured
      if (isSupabaseConfigured() && supabase) {
        try {
          console.log('Attempting to save card to Supabase...');
          const insertData = transformCardToDbInsert(card);
          console.log('Insert data:', insertData);
          
          const { data, error } = await supabase
            .from('review_cards')
            .upsert([insertData], { onConflict: 'id' })
            .select();

          if (error) {
            console.error('Error adding card to Supabase (keeping in localStorage):', error);
            // Card is already in localStorage, so return true
            return true;
          }
          
          console.log('Card successfully added to Supabase:', data);
          return true;
        } catch (supabaseError) {
          console.error('Supabase connection failed (keeping in localStorage):', supabaseError);
          // Card is already in localStorage, so return true
          return true;
        }
      } else {
        console.log('Supabase not configured, card saved to localStorage only');
        return true;
      }
    } catch (error) {
      console.error('Error adding card:', error);
      return false;
    }
  },

  async updateCard(updatedCard: ReviewCard): Promise<boolean> {
    try {
      console.log('Updating card:', updatedCard.businessName);
      
      // Always update localStorage first
      this._updateLocalCard(updatedCard);
      console.log('Card updated in localStorage');

      // Then try to sync with Supabase if configured
      if (isSupabaseConfigured() && supabase) {
        try {
          console.log('Attempting to update card in Supabase...');
          const updateData = transformCardToDbUpdate(updatedCard);
          console.log('Update data:', updateData);
          
          const { data, error } = await supabase
            .from('review_cards')
            .update(updateData)
            .eq('id', updatedCard.id)
            .select();

          if (error) {
            console.error('Error updating card in Supabase (keeping localStorage changes):', error);
            // Card is already updated in localStorage
            return true;
          }
          
          console.log('Card successfully updated in Supabase:', data);
          return true;
        } catch (supabaseError) {
          console.error('Supabase connection failed (keeping localStorage changes):', supabaseError);
          // Card is already updated in localStorage
          return true;
        }
      } else {
        console.log('Supabase not configured, card updated in localStorage only');
        return true;
      }
    } catch (error) {
      console.error('Error updating card:', error);
      return false;
    }
  },

  async deleteCard(cardId: string): Promise<boolean> {
    try {
      console.log('Deleting card:', cardId);
      
      // Always delete from localStorage first
      this._deleteLocalCard(cardId);
      console.log('Card deleted from localStorage');

      // Then try to sync with Supabase if configured
      if (isSupabaseConfigured() && supabase) {
        try {
          console.log('Attempting to delete card from Supabase...');
          const { error } = await supabase
            .from('review_cards')
            .delete()
            .eq('id', cardId);

          if (error) {
            console.error('Error deleting card from Supabase (keeping localStorage changes):', error);
            // Card is already deleted from localStorage
            return true;
          }
          
          console.log('Card successfully deleted from Supabase');
          return true;
        } catch (supabaseError) {
          console.error('Supabase connection failed (keeping localStorage changes):', supabaseError);
          // Card is already deleted from localStorage
          return true;
        }
      } else {
        console.log('Supabase not configured, card deleted from localStorage only');
        return true;
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      return false;
    }
  },

  async getCardBySlug(slug: string): Promise<ReviewCard | null> {
    try {
      console.log('Looking for card with slug:', slug);
      
      // Try Supabase first if configured
      if (isSupabaseConfigured() && supabase) {
        try {
          console.log('Searching Supabase for card...');
          const { data, error } = await supabase
            .from('review_cards')
            .select('*')
            .eq('slug', slug)
            .maybeSingle();

          if (error) {
            console.error('Supabase error, falling back to localStorage:', error);
            return this._getLocalCardBySlug(slug);
          }

          if (data) {
            console.log('Card found in Supabase:', data.business_name);
            return transformDbRowToCard(data);
          }
          
          console.log('Card not found in Supabase, checking localStorage...');
          // If not found in Supabase, check localStorage
          return this._getLocalCardBySlug(slug);
        } catch (supabaseError) {
          console.error('Supabase connection failed, using localStorage:', supabaseError);
          return this._getLocalCardBySlug(slug);
        }
      } else {
        console.log('Supabase not configured, using localStorage');
        return this._getLocalCardBySlug(slug);
      }
    } catch (error) {
      console.error('Error loading card by slug:', error);
      return this._getLocalCardBySlug(slug);
    }
  },

  // Migration helper: Move data from localStorage to Supabase
  async migrateFromLocalStorage(): Promise<void> {
    if (!isSupabaseConfigured() || !supabase) {
      console.log('Supabase not configured, skipping migration');
      return;
    }

    try {
      // Test connection first before attempting migration
      console.log('Testing Supabase connection...');
      const { data: testData, error: testError } = await supabase
        .from('review_cards')
        .select('count')
        .limit(1);
      
      if (testError) {
        console.error('Supabase connection test failed, skipping migration:', testError);
        return;
      }

      const localCards = this._getLocalCards();
      if (localCards.length === 0) {
        console.log('No local cards to migrate');
        return;
      }

      console.log(`Starting migration of ${localCards.length} cards from localStorage to Supabase...`);

      let successCount = 0;
      let failCount = 0;

      for (const card of localCards) {
        try {
          // Check if card already exists in Supabase
          const { data: existingCard, error: checkError } = await supabase
            .from('review_cards')
            .select('id')
            .eq('slug', card.slug)
            .maybeSingle();

          if (checkError) {
            console.error(`Failed to check existing card: ${card.businessName}`, checkError);
            failCount++;
            continue;
          }

          if (existingCard) {
            console.log(`Card already exists in Supabase: ${card.businessName}`);
            successCount++;
            continue;
          }

          // Insert the card
          const { error } = await supabase
            .from('review_cards')
            .upsert([transformCardToDbInsert(card)], { onConflict: 'id' });

          if (error) {
            console.error(`Failed to migrate card: ${card.businessName}`, error);
            failCount++;
          } else {
            console.log(`Successfully migrated card: ${card.businessName}`);
            successCount++;
          }
        } catch (cardError) {
          console.error(`Error migrating card: ${card.businessName}`, cardError);
          failCount++;
        }
      }

      console.log(`Migration completed: ${successCount} successful, ${failCount} failed`);

      // Only clear localStorage if all cards were successfully migrated
      if (failCount === 0) {
        localStorage.removeItem(STORAGE_KEY);
        console.log('Migration successful - localStorage cleared');
      } else {
        console.log('Some cards failed to migrate - keeping localStorage as backup');
      }
    } catch (error) {
      console.error('Error during migration:', error);
      console.log('Migration failed - keeping data in localStorage');
    }
  },

  // Sync method to ensure data consistency
  async syncData(): Promise<void> {
    try {
      if (!isSupabaseConfigured() || !supabase) {
        console.log('Supabase not configured, sync skipped');
        return;
      }

      console.log('Starting data sync...');
      const { data: supabaseCards, error } = await supabase
        .from('review_cards')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error syncing data:', error);
        return;
      }

      const transformedSupabaseCards = (supabaseCards || []).map(transformDbRowToCard);
      
      // Update localStorage with latest Supabase data
      this._saveLocalCards(transformedSupabaseCards);
      
      console.log(`Data sync completed successfully - ${transformedSupabaseCards.length} cards synced`);
    } catch (error) {
      console.error('Error during data sync:', error);
    }
  },

  async incrementViewCount(cardId: string): Promise<number | null> {
    const cards = this._getLocalCards();
    const index = cards.findIndex(c => c.id === cardId);
    if (index === -1) return null;

    // Increment locally first
    let newCount = (cards[index].viewCount ?? 0) + 1;
    cards[index] = {
      ...cards[index],
      viewCount: newCount,
      updatedAt: new Date().toISOString()
    };
    this._saveLocalCards(cards);

    // Cloud sync
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('review_cards')
          .update({ view_count: newCount, updated_at: new Date().toISOString() })
          .eq('id', cardId)
          .select('view_count')
          .single();

        if (!error && data?.view_count !== undefined) {
          newCount = data.view_count;
          cards[index].viewCount = newCount;
          this._saveLocalCards(cards);
        } else if (error) {
          console.warn('Supabase view count update failed, keeping local value:', error.message);
        }
      } catch (e) {
        console.warn('Supabase view count update exception, keeping local value:', e);
      }
    }

    return newCount;
  },

  // Utility (optional) to total views
  getTotalViews(): number {
    return this._getLocalCards().reduce((sum, c) => sum + (c.viewCount ?? 0), 0);
  },

  // --- Generated reviews (per business) ---

  _normalizeLocalReview(raw: Record<string, unknown>): StoredReview {
    if (raw.reviewData && typeof raw.reviewData === 'object') {
      return this._toStoredReview(
        raw.id as string,
        raw.reviewCardId as string,
        raw.contentHash as string,
        raw.reviewData as ReviewDataJson,
        raw.createdAt as string,
      );
    }

    return this._toStoredReview(
      raw.id as string,
      raw.reviewCardId as string,
      raw.contentHash as string,
      {
        text: raw.reviewText as string,
        starRating: raw.starRating as number,
        language: raw.language as string,
        tone: raw.tone as string | undefined,
        selectedServices: (raw.selectedServices as string[]) || [],
        source: raw.source as 'ai' | 'fallback',
        wasCopied: Boolean(raw.wasCopied),
      },
      raw.createdAt as string,
    );
  },

  _getLocalReviews(): StoredReview[] {
    try {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored) as Record<string, unknown>[];
      return parsed.map((row) => this._normalizeLocalReview(row));
    } catch (error) {
      console.error('Error reading reviews from localStorage:', error);
      return [];
    }
  },

  _saveLocalReviews(reviews: StoredReview[]): void {
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    } catch (error) {
      console.error('Error saving reviews to localStorage:', error);
    }
  },

  _buildReviewData(input: SaveReviewInput, wasCopied = false): ReviewDataJson {
    return {
      text: input.reviewText,
      starRating: input.starRating,
      language: input.language,
      tone: input.tone,
      selectedServices: input.selectedServices || [],
      source: input.source,
      wasCopied,
    };
  },

  _toStoredReview(
    id: string,
    reviewCardId: string,
    contentHash: string,
    reviewData: ReviewDataJson,
    createdAt: string,
  ): StoredReview {
    return {
      id,
      reviewCardId,
      contentHash,
      reviewData,
      createdAt,
      reviewText: reviewData.text,
      starRating: reviewData.starRating,
      language: reviewData.language,
      tone: reviewData.tone,
      selectedServices: reviewData.selectedServices,
      source: reviewData.source,
      wasCopied: reviewData.wasCopied,
    };
  },

  _parseReviewData(row: Record<string, unknown>): ReviewDataJson {
    // New JSON format
    if (row.review_data && typeof row.review_data === 'object') {
      const data = row.review_data as ReviewDataJson;
      return {
        text: data.text,
        starRating: data.starRating,
        language: data.language,
        tone: data.tone,
        selectedServices: data.selectedServices || [],
        source: data.source,
        wasCopied: Boolean(data.wasCopied),
      };
    }

    // Legacy column format (backward compatibility)
    return {
      text: row.review_text as string,
      starRating: row.star_rating as number,
      language: row.language as string,
      tone: (row.tone as string) || undefined,
      selectedServices: (row.selected_services as string[]) || [],
      source: row.source as 'ai' | 'fallback',
      wasCopied: Boolean(row.was_copied),
    };
  },

  _transformDbRowToReview(row: Record<string, unknown>): StoredReview {
    const reviewData = this._parseReviewData(row);
    return this._toStoredReview(
      row.id as string,
      row.review_card_id as string,
      row.content_hash as string,
      reviewData,
      row.created_at as string,
    );
  },

  _transformReviewToDbInsert(review: SaveReviewInput) {
    return {
      review_card_id: review.reviewCardId,
      content_hash: review.contentHash,
      review_data: this._buildReviewData(review),
    };
  },

  async saveGeneratedReview(input: SaveReviewInput): Promise<StoredReview | null> {
    const localReviews = this._getLocalReviews();
    const existingLocal = localReviews.find(
      (r) => r.reviewCardId === input.reviewCardId && r.contentHash === input.contentHash,
    );
    if (existingLocal) {
      return existingLocal;
    }

    const localRecord = this._toStoredReview(
      crypto.randomUUID(),
      input.reviewCardId,
      input.contentHash,
      this._buildReviewData(input),
      new Date().toISOString(),
    );

    localReviews.unshift(localRecord);
    this._saveLocalReviews(localReviews);

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('generated_reviews')
          .upsert([this._transformReviewToDbInsert(input)], {
            onConflict: 'review_card_id,content_hash',
            ignoreDuplicates: true,
          })
          .select('*')
          .maybeSingle();

        if (error) {
          console.error('Error saving review to Supabase (kept in localStorage):', error);
          return localRecord;
        }

        if (data) {
          const saved = this._transformDbRowToReview(data);
          const updatedLocal = localReviews.map((r) =>
            r.id === localRecord.id ? saved : r,
          );
          this._saveLocalReviews(updatedLocal);
          return saved;
        }
      } catch (error) {
        console.error('Supabase review save failed (kept in localStorage):', error);
      }
    }

    return localRecord;
  },

  async getReviewsByCardId(reviewCardId: string): Promise<StoredReview[]> {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('generated_reviews')
          .select('*')
          .eq('review_card_id', reviewCardId)
          .order('created_at', { ascending: false });

        if (!error && data) {
          const reviews = data.map((row) => this._transformDbRowToReview(row));
          const otherReviews = this._getLocalReviews().filter(
            (r) => r.reviewCardId !== reviewCardId,
          );
          this._saveLocalReviews([...reviews, ...otherReviews]);
          return reviews;
        }

        if (error) {
          console.error('Error fetching reviews from Supabase:', error);
        }
      } catch (error) {
        console.error('Supabase review fetch failed:', error);
      }
    }

    return this._getLocalReviews().filter((r) => r.reviewCardId === reviewCardId);
  },

  async getReviewHashesByCardId(reviewCardId: string): Promise<Set<string>> {
    const reviews = await this.getReviewsByCardId(reviewCardId);
    return new Set(reviews.map((r) => r.contentHash));
  },

  async markReviewCopied(reviewId: string): Promise<void> {
    const localReviews = this._getLocalReviews();
    const index = localReviews.findIndex((r) => r.id === reviewId);
    if (index !== -1) {
      const updatedData = { ...localReviews[index].reviewData, wasCopied: true };
      localReviews[index] = this._toStoredReview(
        localReviews[index].id,
        localReviews[index].reviewCardId,
        localReviews[index].contentHash,
        updatedData,
        localReviews[index].createdAt,
      );
      this._saveLocalReviews(localReviews);
    }

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data: row, error: fetchError } = await supabase
          .from('generated_reviews')
          .select('review_data')
          .eq('id', reviewId)
          .maybeSingle();

        if (fetchError || !row?.review_data) {
          console.error('Failed to fetch review for copy update:', fetchError);
          return;
        }

        const updatedData = {
          ...(row.review_data as ReviewDataJson),
          wasCopied: true,
        };

        await supabase
          .from('generated_reviews')
          .update({ review_data: updatedData })
          .eq('id', reviewId);
      } catch (error) {
        console.error('Failed to mark review as copied in Supabase:', error);
      }
    }
  },
};