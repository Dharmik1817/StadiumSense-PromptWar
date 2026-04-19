import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import VenueMap from './pages/VenueMap';
import Analytics from './pages/Analytics';
import EventSetup from './components/EventSetup';

function App() {
  const [systemState, setSystemState] = useState(null);
  const [currentView, setCurrentView] = useState('setup');

  const handleInitialize = (data) => {
    setSystemState(data);
    setCurrentView('dashboard');
  };

  if (currentView === 'setup') {
    return <EventSetup onInitialize={handleInitialize} />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: 'var(--sidebar-width)' }}>
        <TopBar systemState={systemState} />
        <main style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          {currentView === 'dashboard' && <Dashboard systemState={systemState} />}
          {currentView === 'map' && <VenueMap systemState={systemState} />}
          {currentView === 'analytics' && <Analytics systemState={systemState} />}
        </main>
      </div>
    </div>
  );
}

export default App;
