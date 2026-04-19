import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import VenueMap from './pages/VenueMap';
import Analytics from './pages/Analytics';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: 'var(--sidebar-width)' }}>
        <TopBar />
        <main style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'map' && <VenueMap />}
          {currentView === 'analytics' && <Analytics />}
        </main>
      </div>
    </div>
  );
}

export default App;
