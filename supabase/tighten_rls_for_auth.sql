/*
  Run this AFTER deploying Supabase Auth login in the app.
  Run in Supabase SQL Editor.

  What it does:
  - review_cards: public can READ only; logged-in admin can write
  - generated_reviews: public can INSERT + UPDATE (copy flag); admin can read all
*/

-- review_cards: remove public write access
DROP POLICY IF EXISTS "Public can insert review cards" ON review_cards;
DROP POLICY IF EXISTS "Public can update review cards" ON review_cards;
DROP POLICY IF EXISTS "Public can delete review cards" ON review_cards;

-- review_cards: admin (authenticated) write access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Authenticated can insert review cards'
  ) THEN
    CREATE POLICY "Authenticated can insert review cards"
      ON review_cards FOR INSERT TO authenticated WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Authenticated can update review cards'
  ) THEN
    CREATE POLICY "Authenticated can update review cards"
      ON review_cards FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'review_cards' AND policyname = 'Authenticated can delete review cards'
  ) THEN
    CREATE POLICY "Authenticated can delete review cards"
      ON review_cards FOR DELETE TO authenticated USING (true);
  END IF;
END $$;

-- generated_reviews: remove public delete; keep insert + update for customers
DROP POLICY IF EXISTS "Public can delete generated reviews" ON generated_reviews;
