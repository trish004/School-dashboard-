import React from 'react';
import { BarChart3, BookOpen, Clock, Users } from 'lucide-react';
import { StatCard } from './dashboard/StatCard';
import { DeadlinesList } from './dashboard/DeadlinesList';
import { GradesList } from './dashboard/GradesList';

const stats = [
  { name: 'Active Courses', value: '6', icon: BookOpen },
  { name: 'Attendance Rate', value: '92%', icon: Clock },
  { name: 'Current GPA', value: '3.8', icon: BarChart3 },
  { name: 'Study Groups', value: '4', icon: Users },
];

export function Dashboard() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
        <p className="text-gray-500">Here's what's happening with your academics today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.name} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DeadlinesList />
        <GradesList />
      </div>
    </div>
  );
}