import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { DiscussionRoomCard } from '../../components/discussions/DiscussionRoomCard';
import { CreateRoomDialog } from '../../components/discussions/CreateRoomDialog';
import type { DiscussionRoom } from '../../types/discussion';

// Mock data - replace with actual data from your backend
const mockRooms: DiscussionRoom[] = [
  {
    id: '1',
    title: 'Brazilian Music Through the Decades',
    description: 'Let\'s explore the evolution of Brazilian music from Bossa Nova to modern MPB.',
    category: 'Music',
    createdBy: 'Maria Silva',
    createdAt: '2024-03-15T10:00:00Z',
    participantsCount: 28,
    lastActivity: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '2',
    title: 'Regional Cuisine Favorites',
    description: 'Share and discover traditional recipes from different regions of Brazil.',
    category: 'Food',
    createdBy: 'João Santos',
    createdAt: '2024-03-14T15:30:00Z',
    participantsCount: 45,
    lastActivity: new Date(Date.now() - 7200000).toISOString(),
  },
];

export function DashboardDiscussions() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<DiscussionRoom[]>(mockRooms);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleCreateRoom = (data: { title: string; description: string; category: string }) => {
    const newRoom: DiscussionRoom = {
      id: (rooms.length + 1).toString(),
      ...data,
      createdBy: 'Demo User', // Replace with actual user name
      createdAt: new Date().toISOString(),
      participantsCount: 1,
      lastActivity: new Date().toISOString(),
    };
    setRooms([newRoom, ...rooms]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Discussion Rooms</h1>
        <Button
          variant="primary"
          onClick={() => setIsCreateDialogOpen(true)}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create Room</span>
        </Button>
      </div>

      <div className="grid gap-6">
        {rooms.map((room) => (
          <DiscussionRoomCard
            key={room.id}
            room={room}
            onClick={() => navigate(`/dashboard/discussions/${room.id}`)}
          />
        ))}
      </div>

      <CreateRoomDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onSubmit={handleCreateRoom}
      />
    </div>
  );
}