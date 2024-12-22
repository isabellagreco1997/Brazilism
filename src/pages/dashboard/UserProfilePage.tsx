import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { InterestsList } from '../../components/profile/InterestsList';
import { TravelMap } from '../../components/profile/TravelMap';
import { fetchProfile } from '../../lib/profiles';
import type { UserProfile } from '../../types/user';

export function UserProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchProfile(userId)
        .then(setProfile)
        .finally(() => setLoading(false));
    }
  }, [userId]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!profile) {
    return <div className="p-6">Profile not found</div>;
  }

  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />
      <div className="grid md:grid-cols-2 gap-6">
        <InterestsList interests={profile.interests} />
        <TravelMap places={profile.visitedPlaces} />
      </div>
    </div>
  );
}