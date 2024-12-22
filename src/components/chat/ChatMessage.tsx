import React from 'react';
import type { Message } from '../../types/chat';
import { formatDate } from '../../utils/date';

type Props = {
  message: Message;
  isOwnMessage: boolean;
};

export function ChatMessage({ message, isOwnMessage }: Props) {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isOwnMessage && (
        <img
          src={message.userAvatar}
          alt={message.userName}
          className="w-8 h-8 rounded-full mr-3"
        />
      )}
      <div className={`max-w-[70%] ${isOwnMessage ? 'order-1' : 'order-2'}`}>
        {!isOwnMessage && (
          <div className="text-sm text-gray-600 mb-1">{message.userName}</div>
        )}
        <div
          className={`rounded-lg px-4 py-2 ${
            isOwnMessage
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          {message.content}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {formatDate(message.timestamp)}
        </div>
      </div>
    </div>
  );
}