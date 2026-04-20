import React from 'react';
import { LayoutDashboard, Map, BarChart3, Settings } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'map', label: 'Venue Map', icon: <Map size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
  ];

  return (
    <aside aria-label="Main Navigation" role="complementary" style={{
      width: 'var(--sidebar-width)',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      borderRight: '1px solid var(--glass-border)',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header role="banner" style={{ marginBottom: '48px', padding: '0 12px' }}>
        <h1 style={{ fontSize: '24px', letterSpacing: '1px' }}>
          <span style={{ color: 'var(--accent-blue)' }}>Stadium</span>Sense
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '4px' }}>AI Predictive Management</p>
      </header>

      <nav style={{ flex: 1 }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              marginBottom: '8px',
              backgroundColor: currentView === item.id ? 'var(--accent-glow)' : 'transparent',
              color: currentView === item.id ? '#fff' : 'var(--text-secondary)',
              border: currentView === item.id ? '1px solid var(--accent-blue)' : '1px solid transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'left',
              gap: '12px',
              fontSize: '15px'
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: '0 12px' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer'
        }}>
          <Settings size={20} />
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
