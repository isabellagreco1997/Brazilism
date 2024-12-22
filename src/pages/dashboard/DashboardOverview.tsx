import React from 'react';
import { Card } from '../../components/ui/Card';

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Welcome Back!</h3>
            <p className="mt-2 text-gray-600">
              Start exploring discussions, learning resources, and connect with other Brazil enthusiasts.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}