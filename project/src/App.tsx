import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CoursesView } from './components/courses/CoursesView';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const { currentView, setCurrentView } = useNavigation();

  const renderView = () => {
    switch (currentView) {
      case 'courses':
        return <CoursesView />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onNavigate={setCurrentView} currentView={currentView} />
      <div className="flex flex-1 flex-col">
        <Header />
        {renderView()}
      </div>
    </div>
  );
}

export default App;