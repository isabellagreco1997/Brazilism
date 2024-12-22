import React from 'react';
import { Card } from '../../components/ui/Card';

export function DashboardLearn() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Learn About Brazil</h1>
      <div className="grid gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Learning modules coming soon!</h2>
            <p className="mt-2 text-gray-600">
              This is where you'll find interactive lessons about Brazilian history, culture, and more.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}