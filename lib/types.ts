export interface Activity {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  price: number;
  location: string;
  safety_measures?: string;
  best_season?: string;
  min_age: number;
  max_group_size: number;
  image_url?: string;
  gallery_images?: string[];
  included_items?: string[];
  excluded_items?: string[];
  is_active: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Accommodation {
  id: string;
  name: string;
  slug: string;
  type: 'hotel' | 'hostel' | 'guesthouse' | 'resort';
  description: string;
  short_description: string;
  address: string;
  location: string;
  price_per_night: number;
  rating: number;
  amenities?: string[];
  room_types?: Array<{ type: string; price: number }>;
  contact_phone?: string;
  contact_email?: string;
  image_url?: string;
  gallery_images?: string[];
  is_active: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface TransportService {
  id: string;
  service_name: string;
  vehicle_type: 'sedan' | 'suv' | 'tempo_traveller' | 'bus';
  capacity: number;
  price_per_km: number;
  base_fare: number;
  description?: string;
  features?: string[];
  image_url?: string;
  contact_phone?: string;
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  booking_type: 'activity' | 'accommodation' | 'transport';
  reference_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  booking_date: string;
  number_of_people: number;
  special_requests?: string;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  customer_location?: string;
  rating: number;
  review_text: string;
  activity_type?: string;
  image_url?: string;
  is_approved: boolean;
  is_featured: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags?: string[];
  featured_image?: string;
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
