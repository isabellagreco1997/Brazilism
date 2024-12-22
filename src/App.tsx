import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './lib/auth';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardOverview } from './pages/dashboard/DashboardOverview';
import { DashboardDiscussions } from './pages/dashboard/DashboardDiscussions';
import { DashboardLearn } from './pages/dashboard/DashboardLearn';
import { DashboardCommunity } from './pages/dashboard/DashboardCommunity';
import { UserProfilePage } from './pages/dashboard/UserProfilePage';
import { ChatRoom } from './pages/dashboard/ChatRoom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function DashboardRoute({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardRoute><DashboardOverview /></DashboardRoute>} />
        <Route path="/dashboard/discussions" element={<DashboardRoute><DashboardDiscussions /></DashboardRoute>} />
        <Route path="/dashboard/discussions/:roomId" element={<DashboardRoute><ChatRoom /></DashboardRoute>} />
        <Route path="/dashboard/learn" element={<DashboardRoute><DashboardLearn /></DashboardRoute>} />
        <Route path="/dashboard/community" element={<DashboardRoute><DashboardCommunity /></DashboardRoute>} />
        <Route path="/dashboard/profile/:userId" element={<DashboardRoute><UserProfilePage /></DashboardRoute>} />
      </Routes>
    </BrowserRouter>
  );
}