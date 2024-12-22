import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { ProfileCard } from '../../components/community/ProfileCard';
import { fetchProfiles } from '../../lib/profiles';
import type { UserProfile } from '../../types/user';

export function DashboardCommunity() {
  const [searchTerm, setSearchTerm] = useState('');
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles()
      .then(setProfiles)
      .finally(() => setLoading(false));
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.interests.some(interest => 
      interest.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Community Members</h1>
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onConnect={() => alert(`Connect with ${profile.name}`)}
          />
        ))}
      </div>
    </div>
  );
}