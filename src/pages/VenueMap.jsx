import React from 'react';
import { MapPin, Navigation, Car, Users } from 'lucide-react';

const VenueMap = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '28px' }}>Smart Venue Map</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Live geographical overview and routing</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Car size={16} /> Traffic View
          </button>
          <button style={{ background: 'var(--accent-blue)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={16} /> Crowd Heatmap
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
        <div className="glass-panel" style={{ flex: 3, padding: '24px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
             <h3 style={{ fontSize: '18px' }}>Symphony Arena Top-Down</h3>
             <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 10, height: 10, background: 'var(--status-red)', borderRadius: '50%' }}></span> Heavy Congestion</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 10, height: 10, background: 'var(--status-yellow)', borderRadius: '50%' }}></span> Moderate</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 10, height: 10, background: 'var(--status-green)', borderRadius: '50%' }}></span> Clear</span>
             </div>
          </div>
          
          <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Highly stylized mock map using CSS shapes */}
            
            <div style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'var(--glass-bg)', border: '4px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
               <div style={{ width: '200px', height: '120px', background: 'var(--bg-primary)', borderRadius: '60px', border: '2px dashed var(--text-muted)' }}></div>
               
               {/* Gates */}
               <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', padding: '4px 12px', background: 'var(--status-yellow)', color: '#000', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>GATE 1 (North)</div>
               <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', padding: '4px 12px', background: 'var(--status-green)', color: '#000', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>GATE 2 (South)</div>
               <div style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', padding: '4px 12px', background: 'var(--status-red)', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', animation: 'pulse 2s infinite' }}>GATE 3 (West) - ALERT</div>
               <div style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', padding: '4px 12px', background: 'var(--status-green)', color: '#000', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>GATE 4 (East)</div>
            </div>

            {/* Traffic Lines */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
               <path d="M 0,100 Q 150,150 200,400" fill="none" stroke="var(--status-red)" strokeWidth="6" strokeDasharray="10 5" opacity="0.6"/>
               <path d="M 800,500 Q 600,400 400,200" fill="none" stroke="var(--status-green)" strokeWidth="6" strokeDasharray="10 5" opacity="0.6"/>
            </svg>
            
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
             <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Navigation size={18} color="var(--accent-blue)" /> Gate Status Matrix
             </h3>
             <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                 <span>Gate 1 (North)</span> <span style={{ color: 'var(--status-yellow)' }}>Wait time: 12m</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--status-red-bg)', border: '1px solid var(--status-red)', borderRadius: '8px' }}>
                 <span>Gate 3 (West)</span> <span style={{ color: 'var(--status-red)', fontWeight: 'bold' }}>Wait time: 45m</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                 <span>Gate 2 (South)</span> <span style={{ color: 'var(--status-green)' }}>Wait time: 2m</span>
               </li>
               <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                 <span>Gate 4 (East)</span> <span style={{ color: 'var(--status-green)' }}>Wait time: 5m</span>
               </li>
             </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <MapPin size={18} color="var(--accent-purple)" /> Active Dispatch Units
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>• 3 Traffic Police units routing west.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• 12 Security Stewards transferring to Gate 3.</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
};

export default VenueMap;
