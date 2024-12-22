export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          avatar_url: string | null
          location: string | null
          bio: string | null
          interests: string[]
          created_at: string
        }
        Insert: {
          id: string
          name: string
          avatar_url?: string | null
          location?: string | null
          bio?: string | null
          interests?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          avatar_url?: string | null
          location?: string | null
          bio?: string | null
          interests?: string[]
          created_at?: string
        }
      }
      visited_places: {
        Row: {
          id: string
          profile_id: string
          city: string
          state: string
          latitude: number
          longitude: number
          visit_date: string
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          city: string
          state: string
          latitude: number
          longitude: number
          visit_date: string
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          city?: string
          state?: string
          latitude?: number
          longitude?: number
          visit_date?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}