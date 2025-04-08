import React from 'react';
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  Library,
  MessageSquare,
  Settings,
  Users,
  Wallet,
} from 'lucide-react';
import { NavigationItem } from './navigation/NavigationItem';
import { Logo } from './navigation/Logo';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const navigation = [
  { name: 'Dashboard', icon: Home, href: 'dashboard' },
  { name: 'Courses', icon: BookOpen, href: 'courses' },
  { name: 'Calendar', icon: Calendar, href: 'calendar' },
  { name: 'Grades', icon: GraduationCap, href: 'grades' },
  { name: 'Messages', icon: MessageSquare, href: 'messages' },
  { name: 'Library', icon: Library, href: 'library' },
  { name: 'Community', icon: Users, href: 'community' },
  { name: 'Finance', icon: Wallet, href: 'finance' },
  { name: 'Settings', icon: Settings, href: 'settings' },
];

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      <Logo />
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <NavigationItem
            key={item.name}
            {...item}
            isActive={currentView === item.href}
            onClick={() => onNavigate(item.href)}
          />
        ))}
      </nav>
    </div>
  );
}