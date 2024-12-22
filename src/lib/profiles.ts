import { supabase } from './supabase';
import type { UserProfile } from '../types/user';

export async function fetchProfile(userId: string): Promise<UserProfile | null> {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error || !profile) return null;

  return {
    id: profile.id,
    name: profile.name,
    avatar: profile.avatar_url,
    location: profile.location || 'Unknown location',
    interests: profile.interests || [],
    joinedDate: profile.created_at,
    bio: profile.bio || '',
    connectionCount: 0,
    visitedPlaces: []
  };
}

export async function fetchProfiles(): Promise<UserProfile[]> {
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !profiles) return [];

  return profiles.map(profile => ({
    id: profile.id,
    name: profile.name,
    avatar: profile.avatar_url,
    location: profile.location || 'Unknown location',
    interests: profile.interests || [],
    joinedDate: profile.created_at,
    bio: profile.bio || '',
    connectionCount: 0,
    visitedPlaces: []
  }));
}