export type Message = {
  id: string;
  content: string;
  userId: string;
  userName: string;
  userAvatar: string;
  timestamp: string;
};

export type OnlineUser = {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'away' | 'busy';
};