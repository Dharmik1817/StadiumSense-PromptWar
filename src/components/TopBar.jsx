import React from 'react';
import { Bell, User } from 'lucide-react';

const TopBar = ({ systemState }) => {
  return (
    <div style={{
      height: 'var(--topbar-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      borderBottom: '1px solid var(--glass-border)',
      background: 'rgba(15, 23, 42, 0.4)',
      backdropFilter: 'var(--glass-blur)'
    }}>
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 500 }}>{systemState?.stadiumName || 'Symphony Arena'}</h2>
        <p style={{ color: 'var(--status-green)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }}></span>
          {systemState?.eventName || 'Event Active'} • System Online
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          position: 'relative'
        }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '10px',
            height: '10px',
            background: 'var(--status-red)',
            borderRadius: '50%',
            border: '2px solid var(--bg-secondary)'
          }}></span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '14px', fontWeight: 600 }}>Admin User</p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Authority Node</p>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--accent-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={20} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
