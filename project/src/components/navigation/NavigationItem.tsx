import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavigationItemProps {
  name: string;
  icon: LucideIcon;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavigationItem({ name, icon: Icon, isActive, onClick }: NavigationItemProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium ${
        isActive
          ? 'bg-gray-800 text-white'
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon className="mr-3 h-5 w-5" />
      {name}
    </button>
  );
}