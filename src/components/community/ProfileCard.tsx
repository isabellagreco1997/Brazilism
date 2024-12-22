import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import type { UserProfile } from '../../types/user';
import { formatDate } from '../../utils/date';

type Props = {
  profile: UserProfile;
  onConnect?: () => void;
};

export function ProfileCard({ profile, onConnect }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/profile/${profile.id}`);
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      {/* Rest of the component remains the same */}
    </Card>
  );
}