// Utility functions for attendance calculations
export function calculateAttendancePercentage(attendance: number, totalClasses: number): number {
  return (attendance / totalClasses) * 100;
}

export function getAttendanceStatus(percentage: number): {
  color: string;
  textColor: string;
  bgColor: string;
} {
  return percentage >= 75
    ? {
        color: 'bg-green-500',
        textColor: 'text-green-600',
        bgColor: 'bg-green-100',
      }
    : {
        color: 'bg-red-500',
        textColor: 'text-red-600',
        bgColor: 'bg-red-100',
      };
}