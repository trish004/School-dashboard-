import React from 'react';
import { semesters } from '../../data/courses';
import { SemesterSection } from './SemesterSection';

export function CoursesView() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">MCA Program Courses</h1>
        <p className="text-gray-500">
          Master of Computer Applications - 2 Year Program Structure
        </p>
      </div>
      {semesters.map((semester) => (
        <SemesterSection key={semester.id} semester={semester} />
      ))}
    </div>
  );
}