import React from 'react';

interface ProgressBarProps {
  value: number;
  color: string;
}

export function ProgressBar({ value, color }: ProgressBarProps) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-200">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}