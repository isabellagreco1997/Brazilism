import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  GraduationCap,
  Map,
  Users,
  Calendar
} from 'lucide-react';

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard' },
  { icon: <MessageSquare size={20} />, label: 'Discussions', path: '/dashboard/discussions' },
  { icon: <GraduationCap size={20} />, label: 'Learn', path: '/dashboard/learn' },
  { icon: <Map size={20} />, label: 'Explore', path: '/dashboard/explore' },
  { icon: <Users size={20} />, label: 'Community', path: '/dashboard/community' },
  { icon: <Calendar size={20} />, label: 'Events', path: '/dashboard/events' },
];

export function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-16">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium
              ${isActive 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            <span className="text-current">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}