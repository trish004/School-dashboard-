import React from 'react';
import { Grade } from '../../types';

const grades: Grade[] = [
  { courseId: '1', courseName: 'Advanced Mathematics', grade: 'A', status: 'completed' },
  { courseId: '2', courseName: 'Physics 101', grade: 'B+', status: 'completed' },
  { courseId: '3', courseName: 'Computer Science', grade: 'A-', status: 'in-progress' },
];

export function GradesList() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Recent Grades</h2>
      <div className="mt-4 space-y-4">
        {grades.map((grade) => (
          <div key={grade.courseId} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{grade.courseName}</p>
              <p className="text-sm text-gray-500">{grade.status}</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              {grade.grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}