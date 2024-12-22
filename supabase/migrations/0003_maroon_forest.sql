/*
  # Fix profile creation policies

  1. Changes
    - Add policy to allow profile creation during signup
    - Ensure authenticated users can create their own profiles

  2. Security
    - Maintain RLS protection while allowing necessary operations
    - Keep existing policies for viewing and updating
*/

-- Drop existing insert policy if it exists
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new insert policy that allows profile creation during signup
CREATE POLICY "Enable profile creation during signup"
  ON profiles
  FOR INSERT
  WITH CHECK (
    -- Allow insert if the user is creating their own profile
    auth.uid() = id
    -- Or if the user is not authenticated yet (during signup)
    OR auth.uid() IS NULL
  );