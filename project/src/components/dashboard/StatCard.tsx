import React from 'react';
import { LucideIcon } from 'lucide-react';
import { IconBadge } from '../common/IconBadge';

interface StatCardProps {
  name: string;
  value: string;
  icon: LucideIcon;
}

export function StatCard({ name, value, icon }: StatCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center">
        <IconBadge icon={icon} />
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{name}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}