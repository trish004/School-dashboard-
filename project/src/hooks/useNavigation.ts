import { useState } from 'react';

export type View =
  | 'dashboard'
  | 'courses'
  | 'calendar'
  | 'grades'
  | 'messages'
  | 'library'
  | 'community'
  | 'finance'
  | 'settings';

export function useNavigation() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  return {
    currentView,
    setCurrentView,
  };
}