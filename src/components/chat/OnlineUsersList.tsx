import React from 'react';
import { Circle } from 'lucide-react';
import type { OnlineUser } from '../../types/chat';

type Props = {
  users: OnlineUser[];
};

const statusColors = {
  online: 'text-green-500',
  away: 'text-yellow-500',
  busy: 'text-red-500'
};

export function OnlineUsersList({ users }: Props) {
  return (
    <div className="w-64 bg-gray-50 border-l border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Online Users ({users.length})
      </h3>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <Circle
                className={`w-3 h-3 absolute -bottom-0.5 -right-0.5 ${statusColors[user.status]}`}
                fill="currentColor"
              />
            </div>
            <span className="text-sm text-gray-700">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}