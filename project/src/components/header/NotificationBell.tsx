import React from 'react';
import { Bell } from 'lucide-react';

export function NotificationBell() {
  return (
    <button className="relative">
      <Bell className="h-6 w-6 text-gray-500" />
      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
        3
      </span>
    </button>
  );
}