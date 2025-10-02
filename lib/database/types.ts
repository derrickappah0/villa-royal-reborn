export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          email: string
          phone: string
          preferred_date: string
          preferred_time: string
          message?: string
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          property_interest?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          email: string
          phone: string
          preferred_date: string
          preferred_time: string
          message?: string
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          property_interest?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          email?: string
          phone?: string
          preferred_date?: string
          preferred_time?: string
          message?: string
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          property_interest?: string
        }
      }
      build_requests: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          email: string
          phone: string
          budget: number
          location: string
          property_type: string
          bedrooms: number
          bathrooms: number
          special_requirements?: string
          timeline: string
          status: 'pending' | 'in_review' | 'approved' | 'rejected'
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          email: string
          phone: string
          budget: number
          location: string
          property_type: string
          bedrooms: number
          bathrooms: number
          special_requirements?: string
          timeline: string
          status?: 'pending' | 'in_review' | 'approved' | 'rejected'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          email?: string
          phone?: string
          budget?: number
          location?: string
          property_type?: string
          bedrooms?: number
          bathrooms?: number
          special_requirements?: string
          timeline?: string
          status?: 'pending' | 'in_review' | 'approved' | 'rejected'
        }
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          subject: string
          message: string
          status: 'unread' | 'read' | 'replied'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          subject: string
          message: string
          status?: 'unread' | 'read' | 'replied'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          subject?: string
          message?: string
          status?: 'unread' | 'read' | 'replied'
        }
      }
      payment_plans: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string
          starting_price: number
          deposit_percentage: number
          interest_rate: number
          duration_months: number
          payment_frequency: 'monthly' | 'quarterly' | 'yearly'
          features: string[]
          is_active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description: string
          starting_price: number
          deposit_percentage: number
          interest_rate: number
          duration_months: number
          payment_frequency: 'monthly' | 'quarterly' | 'yearly'
          features: string[]
          is_active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string
          starting_price?: number
          deposit_percentage?: number
          interest_rate?: number
          duration_months?: number
          payment_frequency?: 'monthly' | 'quarterly' | 'yearly'
          features?: string[]
          is_active?: boolean
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
