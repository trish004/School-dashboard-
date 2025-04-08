import React from 'react';
import { Course } from '../../types';
import { Book } from 'lucide-react';
import { IconBadge } from '../common/IconBadge';
import { ProgressBar } from '../common/ProgressBar';
import { calculateAttendancePercentage, getAttendanceStatus } from '../../utils/attendance';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const attendancePercentage = calculateAttendancePercentage(
    course.attendance,
    course.totalClasses
  );
  const { color, textColor } = getAttendanceStatus(attendancePercentage);

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <IconBadge icon={Book} />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
            <p className="text-sm text-gray-500">{course.instructor}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Credits</p>
          <p className="text-lg font-semibold">{course.credits}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Attendance</p>
          <p className={`text-lg font-semibold ${textColor}`}>
            {attendancePercentage.toFixed(1)}%
          </p>
        </div>
      </div>
      <div className="mt-4">
        <ProgressBar value={attendancePercentage} color={color} />
      </div>
      <p className="mt-4 text-sm text-gray-600">{course.description}</p>
    </div>
  );
}