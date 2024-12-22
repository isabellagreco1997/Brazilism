import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Settings, Bell } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { Button } from '../ui/Button';
import { DashboardSidebar } from './DashboardSidebar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="h-16 flex items-center justify-between px-4">
          <div className="font-semibold text-xl text-gray-900">Brazilism</div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <img
                src={user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.user_metadata?.name || '')}`}
                alt={user?.user_metadata?.name || 'User'}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">{user?.user_metadata?.name}</span>
            </div>
            
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <main className="pt-16 pl-64">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}