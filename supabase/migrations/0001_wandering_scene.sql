/*
  # User Profiles and Places Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `name` (text)
      - `avatar_url` (text)
      - `location` (text)
      - `bio` (text)
      - `interests` (text array)
      - `created_at` (timestamp)
    
    - `visited_places`
      - `id` (uuid, primary key)
      - `profile_id` (uuid, references profiles)
      - `city` (text)
      - `state` (text)
      - `latitude` (double precision)
      - `longitude` (double precision)
      - `visit_date` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  name text NOT NULL,
  avatar_url text,
  location text,
  bio text,
  interests text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create visited places table
CREATE TABLE IF NOT EXISTS visited_places (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  visit_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE visited_places ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles
  FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Visited places policies
CREATE POLICY "Visited places are viewable by everyone"
  ON visited_places
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own visited places"
  ON visited_places
  FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update own visited places"
  ON visited_places
  FOR UPDATE
  USING (auth.uid() = profile_id);