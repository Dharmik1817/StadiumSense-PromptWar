import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const mockGateData = [
  { name: 'Gate 1', entries: 4000, exits: 2400 },
  { name: 'Gate 2', entries: 3000, exits: 1398 },
  { name: 'Gate 3', entries: 9800, exits: 2000 },
  { name: 'Gate 4', entries: 3908, exits: 2800 },
];

const mockZoneData = [
  { name: 'North', capacity: 80, current: 40 },
  { name: 'South', capacity: 100, current: 85 },
  { name: 'East',  capacity: 60, current: 20 },
  { name: 'West',  capacity: 90, current: 88 },
];

const Analytics = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '28px' }}>Historical & Predictive Analytics</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Deep dive into crowd flow metrics</p>
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        
        <div className="glass-panel" style={{ flex: '1', minWidth: '400px', padding: '24px', height: '400px' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '16px' }}>Gate Flow Distribution (Entries vs Exits)</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={mockGateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'var(--glass-border)' }} contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
              <Legend />
              <Bar dataKey="entries" fill="var(--accent-blue)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="exits" fill="var(--accent-purple)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel" style={{ flex: '1', minWidth: '400px', padding: '24px', height: '400px' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '16px' }}>Zone Capacity vs Current Occupancy (%)</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={mockZoneData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border)" horizontal={false} />
              <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis dataKey="name" type="category" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'var(--glass-border)' }} contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
              <Legend />
              <Bar dataKey="capacity" fill="var(--text-muted)" radius={[0, 4, 4, 0]} />
              <Bar dataKey="current" fill="var(--status-yellow)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
