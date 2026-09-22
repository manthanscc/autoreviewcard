/*
  ============================================================
  Auto Review Card — Full Supabase Database Setup
  ============================================================

  Run this entire file in the Supabase SQL Editor:
  Dashboard → SQL → New query → Paste → Run

  Safe to re-run: additive only — no DROP, no DELETE, no data loss.

  Creates:
    1. review_cards          — one row per business
    2. generated_reviews     — AI reviews stored per business
    3. Indexes, RLS policies, updated_at trigger
  ============================================================
*/

-- ----------------------------------------------------------
-- 1. review_cards (businesses)
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS review_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  category text NOT NULL,
  type text NOT NULL,
  description text,
  location text,
  services text[] DEFAULT '{}',
  slug text UNIQUE NOT NULL,
  logo_url text,
  google_maps_url text NOT NULL,
  tagline varchar(255),
  view_count integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add columns that may be missing on older databases
ALTER TABLE review_cards ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE review_cards ADD COLUMN IF NOT EXISTS location text;
ALTER TABLE review_cards ADD COLUMN IF NOT EXISTS services text[] DEFAULT '{}';
ALTER TABLE review_cards ADD COLUMN IF NOT EXISTS logo_url text;
ALTER TABLE review_cards ADD COLUMN IF NOT EXISTS tagline varchar(255);
ALTER TABLE review_cards ADD COLUMN IF NOT EXISTS view_count integer NOT NULL DEFAULT 0;

-- ----------------------------------------------------------
-- 2. generated_reviews (reviews per business — stored as JSON)
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS generated_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  review_card_id uuid NOT NULL REFERENCES review_cards(id) ON DELETE CASCADE,
  content_hash text NOT NULL,
  review_data jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (review_card_id, content_hash)
);

-- review_data JSON shape:
-- {
--   "text": "Great experience at...",
--   "starRating": 5,
--   "language": "English",
--   "tone": "Friendly",
--   "selectedServices": ["staff", "food quality"],
--   "source": "ai",
--   "wasCopied": false
-- }

-- ----------------------------------------------------------
-- 3. Indexes
-- ----------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_review_cards_slug ON review_cards(slug);
CREATE INDEX IF NOT EXISTS idx_review_cards_category ON review_cards(category);
CREATE INDEX IF NOT EXISTS idx_review_cards_created_at ON review_cards(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_generated_reviews_card_id ON generated_reviews(review_card_id);
CREATE INDEX IF NOT EXISTS idx_generated_reviews_created_at ON generated_reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_generated_reviews_data ON generated_reviews USING gin (review_data);

-- ----------------------------------------------------------
-- 4. updated_at trigger for review_cards
-- ----------------------------------------------------------
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_review_cards_updated_at'
  ) THEN
    CREATE TRIGGER update_review_cards_updated_at
      BEFORE UPDATE ON review_cards
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- ----------------------------------------------------------
-- 5. Row Level Security (additive only — never drops existing)
-- ----------------------------------------------------------
ALTER TABLE review_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE generated_reviews ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Anyone can read review cards'
  ) THEN
    CREATE POLICY "Anyone can read review cards"
      ON review_cards FOR SELECT TO public USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Public can insert review cards'
  ) THEN
    CREATE POLICY "Public can insert review cards"
      ON review_cards FOR INSERT TO public WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Public can update review cards'
  ) THEN
    CREATE POLICY "Public can update review cards"
      ON review_cards FOR UPDATE TO public USING (true) WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Public can delete review cards'
  ) THEN
    CREATE POLICY "Public can delete review cards"
      ON review_cards FOR DELETE TO public USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'generated_reviews' AND policyname = 'Anyone can read generated reviews'
  ) THEN
    CREATE POLICY "Anyone can read generated reviews"
      ON generated_reviews FOR SELECT TO public USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'generated_reviews' AND policyname = 'Public can insert generated reviews'
  ) THEN
    CREATE POLICY "Public can insert generated reviews"
      ON generated_reviews FOR INSERT TO public WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'generated_reviews' AND policyname = 'Public can update generated reviews'
  ) THEN
    CREATE POLICY "Public can update generated reviews"
      ON generated_reviews FOR UPDATE TO public USING (true) WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'generated_reviews' AND policyname = 'Public can delete generated reviews'
  ) THEN
    CREATE POLICY "Public can delete generated reviews"
      ON generated_reviews FOR DELETE TO public USING (true);
  END IF;
END $$;

-- ----------------------------------------------------------
-- Done
-- ----------------------------------------------------------
-- Verify:
--   SELECT * FROM review_cards LIMIT 5;
--   SELECT * FROM generated_reviews LIMIT 5;
