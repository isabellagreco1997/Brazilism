import React from 'react';
import { Users, MessageCircle, BookOpen } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: '5,000+',
    label: 'Active Members',
    description: 'Join our growing community'
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    value: '100+',
    label: 'Discussion Groups',
    description: 'Connect and share'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    value: '50+',
    label: 'Resources',
    description: 'Learn and grow'
  }
];

export function CommunityHighlights() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                    <p className="text-sm text-gray-500 mt-0.5">{stat.description}</p>
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