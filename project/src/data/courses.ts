import { Course, Semester } from '../types';

export const semesters: Semester[] = [
  {
    id: 1,
    name: 'Semester 1',
    courses: [
      {
        id: 'MCA101',
        name: 'Programming Fundamentals with C++',
        instructor: 'Dr. Sarah Johnson',
        semester: 1,
        credits: 4,
        attendance: 15,
        totalClasses: 18,
        description: 'Introduction to programming concepts using C++'
      },
      {
        id: 'MCA102',
        name: 'Database Management Systems',
        instructor: 'Prof. Michael Chen',
        semester: 1,
        credits: 4,
        attendance: 16,
        totalClasses: 18,
        description: 'Fundamentals of database design and SQL'
      },
      {
        id: 'MCA103',
        name: 'Discrete Mathematics',
        instructor: 'Dr. Emily White',
        semester: 1,
        credits: 3,
        attendance: 14,
        totalClasses: 15,
        description: 'Mathematical foundations for computer science'
      }
    ]
  },
  {
    id: 2,
    name: 'Semester 2',
    courses: [
      {
        id: 'MCA201',
        name: 'Data Structures and Algorithms',
        instructor: 'Prof. James Wilson',
        semester: 2,
        credits: 4,
        attendance: 17,
        totalClasses: 18,
        description: 'Advanced data structures and algorithm analysis'
      },
      {
        id: 'MCA202',
        name: 'Web Technologies',
        instructor: 'Dr. Lisa Anderson',
        semester: 2,
        credits: 4,
        attendance: 16,
        totalClasses: 18,
        description: 'Modern web development technologies and frameworks'
      }
    ]
  },
  {
    id: 3,
    name: 'Semester 3',
    courses: [
      {
        id: 'MCA301',
        name: 'Cloud Computing',
        instructor: 'Prof. Robert Brown',
        semester: 3,
        credits: 4,
        attendance: 15,
        totalClasses: 18,
        description: 'Cloud services, architecture, and deployment'
      },
      {
        id: 'MCA302',
        name: 'Machine Learning',
        instructor: 'Dr. David Lee',
        semester: 3,
        credits: 4,
        attendance: 14,
        totalClasses: 15,
        description: 'Introduction to machine learning algorithms'
      }
    ]
  },
  {
    id: 4,
    name: 'Semester 4',
    courses: [
      {
        id: 'MCA401',
        name: 'Project Work',
        instructor: 'Prof. Jennifer Taylor',
        semester: 4,
        credits: 8,
        attendance: 18,
        totalClasses: 20,
        description: 'Capstone project and industry internship'
      },
      {
        id: 'MCA402',
        name: 'Cyber Security',
        instructor: 'Dr. Mark Thompson',
        semester: 4,
        credits: 4,
        attendance: 16,
        totalClasses: 18,
        description: 'Information security and system protection'
      }
    ]
  }
];