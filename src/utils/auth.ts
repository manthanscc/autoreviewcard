import { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from './supabase';

export const auth = {
  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured() || !supabase) {
      return { success: false, error: 'Supabase is not configured' };
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  },

  async logout(): Promise<void> {
    if (supabase) {
      await supabase.auth.signOut();
    }
  },

  async getSession(): Promise<Session | null> {
    if (!supabase) return null;
    const { data } = await supabase.auth.getSession();
    return data.session;
  },

  async isAuthenticated(): Promise<boolean> {
    const session = await this.getSession();
    return !!session;
  },

  onAuthStateChange(callback: (authenticated: boolean) => void) {
    if (!supabase) {
      return { unsubscribe: () => undefined };
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        callback(!!session);
      },
    );

    return subscription;
  },
};
