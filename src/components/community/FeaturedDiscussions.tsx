import React from 'react';
import { MessageSquare, Users2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const discussions = [
  {
    id: 1,
    title: 'Brazilian Music Through the Decades',
    category: 'Culture',
    participants: 28,
    likes: 45,
    replies: 12,
  },
  {
    id: 2,
    title: 'Regional Cuisine Favorites',
    category: 'Food',
    participants: 34,
    likes: 67,
    replies: 23,
  },
  {
    id: 3,
    title: 'Learning Portuguese Together',
    category: 'Language',
    participants: 56,
    likes: 89,
    replies: 34,
  }
];

export function FeaturedDiscussions() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  const handleDiscussionClick = (id: number) => {
    if (isAuthenticated) {
      navigate(`/dashboard/discussions/${id}`);
    } else {
      sessionStorage.setItem('redirectAfterLogin', `/dashboard/discussions/${id}`);
      navigate('/login');
    }
  };

  const handleViewAllClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard/discussions');
    } else {
      sessionStorage.setItem('redirectAfterLogin', '/dashboard/discussions');
      navigate('/login');
    }
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Popular Discussions</h2>
          <button 
            onClick={handleViewAllClick}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all →
          </button>
        </div>
        
        <div className="grid gap-4">
          {discussions.map((discussion) => (
            <Card 
              key={discussion.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleDiscussionClick(discussion.id)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {discussion.title}
                    </h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-sm bg-blue-50 text-blue-700 font-medium">
                      {discussion.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-6 text-gray-500">
                  <div className="flex items-center">
                    <Users2 className="w-4 h-4 mr-1.5" />
                    <span className="text-sm">{discussion.participants}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1.5" />
                    <span className="text-sm">{discussion.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    <span className="text-sm">{discussion.replies}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}