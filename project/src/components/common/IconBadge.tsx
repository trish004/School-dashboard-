import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  bgColor?: string;
  iconColor?: string;
}

export function IconBadge({ 
  icon: Icon, 
  bgColor = 'bg-blue-100', 
  iconColor = 'text-blue-600' 
}: IconBadgeProps) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bgColor}`}>
      <Icon className={`h-6 w-6 ${iconColor}`} />
    </div>
  );
}