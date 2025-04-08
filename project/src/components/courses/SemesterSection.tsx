import React from 'react';
import { Semester } from '../../types';
import { CourseCard } from './CourseCard';

interface SemesterSectionProps {
  semester: Semester;
}

export function SemesterSection({ semester }: SemesterSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900">{semester.name}</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {semester.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}