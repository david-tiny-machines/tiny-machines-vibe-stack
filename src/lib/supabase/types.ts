/**
 * Supabase Database Types
 * 
 * This file contains TypeScript types for your Supabase database schema.
 * 
 * To generate types from your actual database schema, run:
 * npx supabase gen types typescript --project-id YOUR_PROJECT_ID --schema public > src/lib/supabase/types.ts
 * 
 * For now, we'll use a basic schema that can be extended as needed.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

/**
 * Database schema definition
 * 
 * This represents the structure of your Supabase database.
 * Update this interface as you add tables and columns.
 */
export interface Database {
  public: {
    Tables: {
      // Example table - replace with your actual tables
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
        }
        Relationships: []
      }
      // Add more tables as needed
    }
    Views: {
      // Database views go here
      [_ in never]: never
    }
    Functions: {
      // Database functions go here
      [_ in never]: never
    }
    Enums: {
      // Database enums go here
      [_ in never]: never
    }
    CompositeTypes: {
      // Composite types go here
      [_ in never]: never
    }
  }
}

/**
 * Type aliases for common Supabase types
 */
export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']

export type TablesInsert<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']

export type TablesUpdate<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']

/**
 * User profile type (example)
 */
export type Profile = Tables<'profiles'>

/**
 * Auth user type from Supabase Auth
 */
export type User = {
  id: string
  email?: string
  user_metadata: {
    full_name?: string
    avatar_url?: string
    [key: string]: unknown
  }
  app_metadata: {
    provider?: string
    providers?: string[]
    [key: string]: unknown
  }
  aud: string
  created_at: string
  updated_at?: string
  email_confirmed_at?: string
  phone_confirmed_at?: string
  confirmation_sent_at?: string
  recovery_sent_at?: string
  email_change_sent_at?: string
  new_email?: string
  invited_at?: string
  action_link?: string
  role?: string
}