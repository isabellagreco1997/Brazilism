/*
  # Create profiles table and security policies

  1. New Tables
    - `profiles`
      - `id` (uuid, references auth.users)
      - `name` (text)
      - `avatar_url` (text, nullable)
      - `location` (text, nullable)
      - `bio` (text, nullable)
      - `interests` (text array)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `profiles` table
    - Add policies for:
      - Public read access to profiles
      - Users can update their own profile
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

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles
  FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);