export interface User {
  id: string;
  name: string;
  role: 'student' | 'faculty' | 'staff';
  email: string;
  avatar: string;
}

export interface Course {
  id: string;
  name: string;
  instructor: string;
  semester: number;
  credits: number;
  attendance: number;
  totalClasses: number;
  description: string;
}

export interface Grade {
  courseId: string;
  courseName: string;
  grade: string;
  status: 'completed' | 'in-progress';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  date: string;
}

export interface Semester {
  id: number;
  name: string;
  courses: Course[];
}