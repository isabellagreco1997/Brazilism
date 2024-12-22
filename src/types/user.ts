export type UserProfile = {
  id: string;
  name: string;
  avatar: string;
  location: string;
  interests: string[];
  joinedDate: string;
  bio: string;
  connectionCount: number;
  visitedPlaces: {
    city: string;
    state: string;
    coordinates: [number, number]; // [latitude, longitude]
    visitDate: string;
  }[];
};