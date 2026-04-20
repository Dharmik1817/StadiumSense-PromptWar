import React, { useState, useEffect } from 'react';
import { Users, Car, MapPin, AlertTriangle, ShieldAlert, Loader2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

const mockCrowdData = [
  { time: '14:00', density: 10 },
  { time: '15:00', density: 25 },
  { time: '16:00', density: 60 },
  { time: '17:00', density: 85 },
  { time: '18:00', density: 100 },
  { time: '19:00', density: 95 },
  { time: '20:00', density: 40 },
];

const mockTrafficData = [
  { time: '14:00', congestion: 20 },
  { time: '15:00', congestion: 40 },
  { time: '16:00', congestion: 80 },
  { time: '17:00', congestion: 95 },
  { time: '18:00', congestion: 60 },
  { time: '19:00', congestion: 50 },
  { time: '20:00', congestion: 30 },
];

const StatCard = ({ title, value, icon, statusColor, subtitle }) => (
  <div className="glass-panel" style={{ padding: '24px', flex: '1', minWidth: '220px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <h3 style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{title}</h3>
      <div style={{ color: statusColor }}>{icon}</div>
    </div>
    <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>{value}</div>
    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{subtitle}</div>
  </div>
);

const Dashboard = ({ systemState }) => {
  const [aiSuggestions, setAiSuggestions] = useState({
    critical: "Predicting critical congestion levels...",
    recommendation: "Analyzing traffic routing...",
    staffing: "Calculating optimal staff distribution..."
  });
  const [loadingAi, setLoadingAi] = useState(true);

  // Fallback data if setup was skipped
  const stadium = systemState?.stadiumName || "Symphony Arena";
  const crowdSize = systemState?.tickets || "42500";
  const traffic = systemState?.trafficLevel || "High";

  useEffect(() => {
    async function fetchAIPredictions() {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
          You are 'Gemini AI Sentinel', an advanced stadium management AI for ${stadium}.
          Current Status: Expected Crowd (${crowdSize}), VIPs Present (${systemState?.vips || '0'}), Traffic Congestion (${traffic}), Peak entry time nearing.
          Generate strict JSON format with three precise alerts (max 2 sentences each):
          {
            "critical": "Provide exact routing instructions for fans from parking to seats avoiding congestion.",
            "recommendation": "Provide exit strategy to prevent stampedes (e.g. hold section X for 5 mins).",
            "staffing": "Provide exact steward deployment locations based on the current crowd size."
          }
          Do not include any string wrapper, just raw JSON.
        `;
        
        const result = await model.generateContent(prompt);
        const responseText = result.response.text().replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
        const parsedData = JSON.parse(responseText);
        
        setAiSuggestions(parsedData);
      } catch (error) {
        console.error("Gemini API Error:", error);
        setAiSuggestions({
          critical: "Direct inbound fans from North Parking to Gate 2 to avoid gridlock. Inform via SMS immediately.",
          recommendation: "Hold Exit Gates 3 & 4 for 5 minutes post-match to clear the main concourse and prevent stampede risk.",
          staffing: "Deploy 20 rapid-response stewards to the primary concourse bottleneck."
        });
      } finally {
        setLoadingAi(false);
      }
    }

    if (import.meta.env.VITE_GEMINI_API_KEY) {
      fetchAIPredictions();
    } else {
      setLoadingAi(false);
    }
  }, [stadium, crowdSize, traffic]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '28px' }}>Real-Time Event Command</h1>
          <p style={{ color: 'var(--text-secondary)' }}>AI predictive overview for current event</p>
        </div>
        <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Global Risk Level</span>
          <div style={{ background: 'var(--status-yellow-bg)', color: 'var(--status-yellow)', padding: '4px 12px', borderRadius: '12px', fontWeight: 600, fontSize: '14px' }}>
            Elevated
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <StatCard title="Expected Crowd" value={Number(crowdSize).toLocaleString()} icon={<Users />} statusColor="var(--accent-blue)" subtitle={`Including ${systemState?.vips || '0'} VIPs expected`} />
        <StatCard title="Traffic Congestion" value={traffic} icon={<Car />} statusColor="var(--status-red)" subtitle="Peak approaching in 45m" />
        <StatCard title="Peak Entry Time" value="17:30" icon={<MapPin />} statusColor="var(--status-yellow)" subtitle="Estimated based on sales" />
        <StatCard title="Active Alerts" value="3" icon={<AlertTriangle />} statusColor="var(--status-red)" subtitle="Requires attention" />
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px', height: '320px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '16px' }}>Predicted Crowd Arrival Density</h3>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={mockCrowdData}>
                <defs>
                  <linearGradient id="colorDensity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border)" vertical={false} />
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="density" stroke="var(--accent-blue)" fillOpacity={1} fill="url(#colorDensity)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-panel" style={{ padding: '24px', height: '320px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '16px' }}>Peripheral Traffic Congestion Prediction</h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={mockTrafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border)" vertical={false} />
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                <Line type="monotone" dataKey="congestion" stroke="var(--status-red)" strokeWidth={3} dot={{ r: 4, fill: 'var(--status-red)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '8px', borderRadius: '8px' }}>
                <ShieldAlert color="var(--accent-purple)" size={20} />
              </div>
              <h3 style={{ fontSize: '18px' }}>Gemini AI Sentinel</h3>
              {loadingAi && <Loader2 size={16} className="animate-spin" color="var(--accent-purple)" style={{ animation: "spin 1s linear infinite" }} />}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'var(--status-red-bg)', border: '1px solid var(--status-red)', padding: '16px', borderRadius: '8px' }}>
                <p style={{ color: 'var(--status-red)', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>CRITICAL ALERT</p>
                <p style={{ fontSize: '14px' }}>{aiSuggestions.critical}</p>
                <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
                  <button type="button" aria-label="Acknowledge critical alert" style={{ background: 'var(--status-red)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Acknowledge</button>
                  <button type="button" aria-label="View CCTV for critical alert" style={{ background: 'transparent', color: 'var(--status-red)', border: '1px solid var(--status-red)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>View CCTV</button>
                </div>
              </div>

              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '8px' }}>
                <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>AI RECOMMENDATION</p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{aiSuggestions.recommendation}</p>
              </div>

              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '8px' }}>
                <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>STAFFING SUGGESTION</p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{aiSuggestions.staffing}</p>
              </div>
            </div>
            <style>{`
              @keyframes spin { 100% { transform: rotate(360deg); } }
              .animate-spin { animation: spin 1s linear infinite; }
            `}</style>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
