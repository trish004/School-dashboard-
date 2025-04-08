import React from 'react';
import { SearchBar } from './header/SearchBar';
import { NotificationBell } from './header/NotificationBell';
import { UserProfile } from './header/UserProfile';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center">
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4">
        <NotificationBell />
        <UserProfile />
      </div>
    </header>
  );
}