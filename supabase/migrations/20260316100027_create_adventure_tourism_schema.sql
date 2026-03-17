/*
  # Adventure Tourism Database Schema for Dharamshala

  ## Overview
  Complete database schema for adventure tourism website featuring activities, accommodations, transport services, bookings, testimonials, and blog posts.

  ## New Tables

  ### 1. `activities`
  Adventure activities offered in Dharamshala
  - `id` (uuid, primary key)
  - `title` (text) - Activity name
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Detailed description
  - `short_description` (text) - Brief overview
  - `difficulty_level` (text) - beginner, intermediate, advanced, expert
  - `duration` (text) - Duration of activity
  - `price` (decimal) - Starting price
  - `location` (text) - Specific location
  - `safety_measures` (text) - Safety information
  - `best_season` (text) - Recommended season
  - `min_age` (integer) - Minimum age requirement
  - `max_group_size` (integer) - Maximum participants
  - `image_url` (text) - Main image
  - `gallery_images` (jsonb) - Array of additional images
  - `included_items` (jsonb) - What's included
  - `excluded_items` (jsonb) - What's not included
  - `is_active` (boolean) - Availability status
  - `featured` (boolean) - Featured on homepage
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `accommodations`
  Hotels, hostels, and guesthouses
  - `id` (uuid, primary key)
  - `name` (text) - Accommodation name
  - `slug` (text, unique) - URL-friendly identifier
  - `type` (text) - hotel, hostel, guesthouse, resort
  - `description` (text) - Detailed description
  - `short_description` (text) - Brief overview
  - `address` (text) - Full address
  - `location` (text) - Area/locality
  - `price_per_night` (decimal) - Starting price
  - `rating` (decimal) - Star rating
  - `amenities` (jsonb) - Array of amenities
  - `room_types` (jsonb) - Available room types
  - `contact_phone` (text) - Phone number
  - `contact_email` (text) - Email address
  - `image_url` (text) - Main image
  - `gallery_images` (jsonb) - Array of additional images
  - `is_active` (boolean) - Availability status
  - `featured` (boolean) - Featured listing
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `transport_services`
  Taxi and transport options
  - `id` (uuid, primary key)
  - `service_name` (text) - Service name
  - `vehicle_type` (text) - sedan, suv, tempo_traveller, bus
  - `capacity` (integer) - Number of passengers
  - `price_per_km` (decimal) - Per km rate
  - `base_fare` (decimal) - Base fare
  - `description` (text) - Service description
  - `features` (jsonb) - Vehicle features
  - `image_url` (text) - Vehicle image
  - `contact_phone` (text) - Phone number
  - `is_available` (boolean) - Availability
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `bookings`
  Customer bookings for all services
  - `id` (uuid, primary key)
  - `booking_type` (text) - activity, accommodation, transport
  - `reference_id` (uuid) - ID of booked item
  - `customer_name` (text) - Customer name
  - `customer_email` (text) - Email address
  - `customer_phone` (text) - Phone number
  - `booking_date` (date) - Date of booking
  - `number_of_people` (integer) - Group size
  - `special_requests` (text) - Additional notes
  - `total_amount` (decimal) - Total cost
  - `status` (text) - pending, confirmed, cancelled, completed
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. `testimonials`
  Customer reviews and feedback
  - `id` (uuid, primary key)
  - `customer_name` (text) - Customer name
  - `customer_location` (text) - Customer location
  - `rating` (integer) - Rating 1-5
  - `review_text` (text) - Review content
  - `activity_type` (text) - Related activity/service
  - `image_url` (text) - Customer photo (optional)
  - `is_approved` (boolean) - Moderation status
  - `is_featured` (boolean) - Show on homepage
  - `created_at` (timestamptz)

  ### 6. `blog_posts`
  Blog articles and travel tips
  - `id` (uuid, primary key)
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short description
  - `content` (text) - Full content
  - `author` (text) - Author name
  - `category` (text) - Post category
  - `tags` (jsonb) - Array of tags
  - `featured_image` (text) - Main image
  - `is_published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 7. `contact_submissions`
  Contact form submissions
  - `id` (uuid, primary key)
  - `name` (text) - Sender name
  - `email` (text) - Email address
  - `phone` (text) - Phone number
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `is_read` (boolean) - Read status
  - `created_at` (timestamptz)

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Public read access for published content
  - Authenticated access required for modifications
*/

-- Create activities table
CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  difficulty_level text NOT NULL CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
  duration text NOT NULL,
  price decimal(10,2) NOT NULL,
  location text NOT NULL,
  safety_measures text,
  best_season text,
  min_age integer DEFAULT 12,
  max_group_size integer DEFAULT 20,
  image_url text,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  included_items jsonb DEFAULT '[]'::jsonb,
  excluded_items jsonb DEFAULT '[]'::jsonb,
  is_active boolean DEFAULT true,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create accommodations table
CREATE TABLE IF NOT EXISTS accommodations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  type text NOT NULL CHECK (type IN ('hotel', 'hostel', 'guesthouse', 'resort')),
  description text NOT NULL,
  short_description text NOT NULL,
  address text NOT NULL,
  location text NOT NULL,
  price_per_night decimal(10,2) NOT NULL,
  rating decimal(2,1) DEFAULT 0,
  amenities jsonb DEFAULT '[]'::jsonb,
  room_types jsonb DEFAULT '[]'::jsonb,
  contact_phone text,
  contact_email text,
  image_url text,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  is_active boolean DEFAULT true,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create transport_services table
CREATE TABLE IF NOT EXISTS transport_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text NOT NULL,
  vehicle_type text NOT NULL CHECK (vehicle_type IN ('sedan', 'suv', 'tempo_traveller', 'bus')),
  capacity integer NOT NULL,
  price_per_km decimal(10,2) NOT NULL,
  base_fare decimal(10,2) NOT NULL,
  description text,
  features jsonb DEFAULT '[]'::jsonb,
  image_url text,
  contact_phone text,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_type text NOT NULL CHECK (booking_type IN ('activity', 'accommodation', 'transport')),
  reference_id uuid NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  booking_date date NOT NULL,
  number_of_people integer NOT NULL DEFAULT 1,
  special_requests text,
  total_amount decimal(10,2) NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_location text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  activity_type text,
  image_url text,
  is_approved boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Admin',
  category text NOT NULL,
  tags jsonb DEFAULT '[]'::jsonb,
  featured_image text,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;
ALTER TABLE transport_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for activities (public read, authenticated write)
CREATE POLICY "Anyone can view active activities"
  ON activities FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert activities"
  ON activities FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update activities"
  ON activities FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for accommodations (public read, authenticated write)
CREATE POLICY "Anyone can view active accommodations"
  ON accommodations FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert accommodations"
  ON accommodations FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update accommodations"
  ON accommodations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for transport_services (public read, authenticated write)
CREATE POLICY "Anyone can view available transport"
  ON transport_services FOR SELECT
  USING (is_available = true);

CREATE POLICY "Authenticated users can insert transport"
  ON transport_services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update transport"
  ON transport_services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for bookings (users can create, authenticated can manage)
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for testimonials (public read approved, authenticated manage)
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for blog_posts (public read published, authenticated manage)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for contact_submissions (insert only, authenticated read)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_activities_slug ON activities(slug);
CREATE INDEX IF NOT EXISTS idx_activities_featured ON activities(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_accommodations_slug ON accommodations(slug);
CREATE INDEX IF NOT EXISTS idx_accommodations_type ON accommodations(type);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);