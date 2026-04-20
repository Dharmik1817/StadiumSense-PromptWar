import React, { useState } from 'react';

const EventSetup = ({ onInitialize }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    stadiumName: '',
    tickets: '',
    vips: '',
    trafficLevel: 'Moderate'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
      <div className="glass-panel" style={{ padding: '48px', width: '100%', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px', color: 'var(--text-primary)' }}>Initialize System</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Configure the current event parameters for AI analysis.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
             <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>Sporting Event Name</label>
             <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} placeholder="e.g. IPL Final 2026" style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px' }} />
          </div>
          <div>
             <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>Stadium Name</label>
             <input type="text" name="stadiumName" value={formData.stadiumName} onChange={handleChange} placeholder="e.g. Wankhede Stadium" style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px' }} />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1 }}>
               <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>Expected Crowd Size</label>
               <input type="number" name="tickets" value={formData.tickets} onChange={handleChange} placeholder="e.g. 85000" style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px' }} />
            </div>
            <div style={{ flex: 1 }}>
               <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>VIPs Present</label>
               <input type="number" name="vips" value={formData.vips} onChange={handleChange} placeholder="e.g. 1200" style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px' }} />
            </div>
          </div>
          <div>
             <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--text-secondary)' }}>Current Surrounding Traffic Severity</label>
             <select name="trafficLevel" value={formData.trafficLevel} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px' }}>
               <option value="Light">Light Flow</option>
               <option value="Moderate">Moderate Congestion</option>
               <option value="Heavy">Heavy GRIDLOCK</option>
             </select>
          </div>
          <button 
             onClick={() => onInitialize(formData)}
             disabled={!formData.eventName || !formData.stadiumName || !formData.tickets}
             style={{ 
               width: '100%', padding: '16px', background: 'var(--accent-blue)', color: '#fff', 
               border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, 
               cursor: (!formData.eventName || !formData.stadiumName || !formData.tickets) ? 'not-allowed' : 'pointer',
               marginTop: '16px', opacity: (!formData.eventName || !formData.stadiumName || !formData.tickets) ? 0.5 : 1
             }}
          >
            Launch Command Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSetup;
