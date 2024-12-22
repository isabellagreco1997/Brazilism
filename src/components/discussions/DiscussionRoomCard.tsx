import React from 'react';
import { Users, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import type { DiscussionRoom } from '../../types/discussion';
import { formatDate } from '../../utils/date';

type Props = {
  room: DiscussionRoom;
  onClick: () => void;
};

export function DiscussionRoomCard({ room, onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick(e as any)}
      className="cursor-pointer"
    >
      <Card className="hover:shadow-md transition-shadow duration-200">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{room.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{room.description}</p>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-sm bg-blue-50 text-blue-700 font-medium">
                {room.category}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1.5" />
                {room.participantsCount}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                {formatDate(room.lastActivity)}
              </span>
            </div>
            <span className="text-gray-400">Created by {room.createdBy}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}