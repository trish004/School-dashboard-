import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex h-16 items-center justify-center border-b border-gray-800">
      <GraduationCap className="h-8 w-8" />
      <span className="ml-2 text-xl font-bold">EduDash</span>
    </div>
  );
}