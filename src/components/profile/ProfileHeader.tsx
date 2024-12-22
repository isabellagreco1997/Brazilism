import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';
import type { UserProfile } from '../../types/user';
import { formatDate } from '../../utils/date';

export function ProfileHeader({ profile }: { profile: UserProfile }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start space-x-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {profile.location}
          </div>
          <p className="mt-3 text-gray-600">{profile.bio}</p>
          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {profile.connectionCount} connections
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Joined {formatDate(profile.joinedDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}