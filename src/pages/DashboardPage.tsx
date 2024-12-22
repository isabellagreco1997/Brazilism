import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/Card';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Welcome to Your Dashboard</h3>
            <p className="mt-2 text-gray-600">
              This is a mock dashboard. You're signed in as a demo user.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}