import React from 'react';

interface Deadline {
  course: string;
  task: string;
  due: string;
}

const deadlines: Deadline[] = [
  { course: 'Advanced Mathematics', task: 'Assignment 3', due: '2024-03-20' },
  { course: 'Physics 101', task: 'Lab Report', due: '2024-03-22' },
  { course: 'Computer Science', task: 'Project Milestone', due: '2024-03-25' },
];

export function DeadlinesList() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h2>
      <div className="mt-4 space-y-4">
        {deadlines.map((deadline) => (
          <div key={deadline.task} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{deadline.task}</p>
              <p className="text-sm text-gray-500">{deadline.course}</p>
            </div>
            <span className="text-sm text-gray-500">{deadline.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}