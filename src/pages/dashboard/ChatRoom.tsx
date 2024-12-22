import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatMessage } from '../../components/chat/ChatMessage';
import { OnlineUsersList } from '../../components/chat/OnlineUsersList';
import { ChatInput } from '../../components/chat/ChatInput';
import type { Message, OnlineUser } from '../../types/chat';

// Mock data - replace with real data from your backend
const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hey everyone! Welcome to the chat room!',
    userId: '1',
    userName: 'Maria Silva',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '2',
    content: 'Thanks! Excited to discuss Brazilian music!',
    userId: '2',
    userName: 'João Santos',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80',
    timestamp: new Date(Date.now() - 1800000).toISOString(),
  },
];

const mockOnlineUsers: OnlineUser[] = [
  {
    id: '1',
    name: 'Maria Silva',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    status: 'online',
  },
  {
    id: '2',
    name: 'João Santos',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80',
    status: 'online',
  },
];

export function ChatRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const currentUserId = '1'; // Replace with actual user ID from auth

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      content,
      userId: currentUserId,
      userName: 'Maria Silva', // Replace with actual user name
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80', // Replace with actual avatar
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">
            Room #{roomId}
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              isOwnMessage={message.userId === currentUserId}
            />
          ))}
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      <OnlineUsersList users={mockOnlineUsers} />
    </div>
  );
}