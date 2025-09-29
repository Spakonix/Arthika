import React, { useState, useMemo } from 'react';
import { ChevronLeft, Lightbulb } from 'lucide-react';

const COLORS = {
  primary: '#F48FB1',       // Pink
  secondary: '#FBC02D',     // Yellow
  background: '#FFF9F1',    // Off-white
  cardBackground: '#FFFFFF',
  textDark: '#333333',      // Dark gray
  textGray: '#555555',      // Softer gray
  success: '#FBC02D',       // Yellow for returns
  warning: '#FBC02D',       // Yellow
  lightBorder: '#E0E0E0',   // Neutral border
  softGradient: 'linear-gradient(90deg, #F48FB1 0%, #FBC02D 100%)'
};

// SIP calculation
const calculateSIP = (p, r, t) => {
  if (p <= 0 || t <= 0 || r < 0) return { totalInvestment: 0, totalReturns: 0, maturityValue: 0 };
  const n = t * 12;
  const i = r / 12 / 100;
  const maturityValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const totalInvestment = p * n;
  const totalReturns = maturityValue - totalInvestment;
  return {
    totalInvestment: Math.round(totalInvestment),
    totalReturns: Math.round(totalReturns),
    maturityValue: Math.round(maturityValue)
  };
};

const formatRupee = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const InvestPage = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [periodYears, setPeriodYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(12);

  const { totalInvestment, totalReturns, maturityValue } = useMemo(
    () => calculateSIP(monthlyAmount, annualRate, periodYears),
    [monthlyAmount, annualRate, periodYears]
  );

  const plans = [
    { key: 'conservative', title: 'Conservative Plan', desc: 'Perfect for beginners with low risk tolerance', risk: 'Low Risk', minAmount: 1000, color: COLORS.secondary },
    { key: 'balanced', title: 'Balanced Plan', desc: 'Good mix of growth and stability', risk: 'Medium Risk', minAmount: 2500, color: COLORS.textDark },
    { key: 'growth', title: 'Growth Plan', desc: 'For long-term wealth creation', risk: 'High Risk', minAmount: 5000, color: COLORS.primary },
  ];

  const handleStartSIP = (planKey) => {
    alert(`SIP started for ${planKey} with ₹${monthlyAmount}/month`);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', background: COLORS.background, minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ borderRadius: '12px', padding: '20px', background: COLORS.softGradient, color: 'white', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <ChevronLeft size={20} /> <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>Investment Tools</span>
        </div>
        <p style={{ opacity: 0.9, fontSize: '0.9em' }}>Start your investment journey</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
          <button style={{ background: 'white', color: COLORS.primary, borderRadius: '8px', padding: '8px 12px', fontWeight: 'bold' }}>
            SIP Calculator
          </button>
          <button style={{ background: 'transparent', color: 'white', fontWeight: 'bold' }}>Goal Planner</button>
          <button style={{ background: 'transparent', color: 'white', fontWeight: 'bold' }}>Investment Tracker</button>
        </div>
      </div>

      {/* SIP Calculator */}
      <div style={{ background: COLORS.cardBackground, borderRadius: '12px', padding: '20px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: COLORS.textDark, marginBottom: '15px' }}>SIP Calculator</h2>

        <label>Monthly Investment Amount</label>
        <input type="number" value={monthlyAmount} onChange={(e) => setMonthlyAmount(Number(e.target.value))} style={{ width: '100%', padding: '8px', margin: '5px 0 15px', borderRadius: '6px', border: `1px solid ${COLORS.lightBorder}` }} />

        <label>Investment Period: {periodYears} years</label>
        <input type="range" min="1" max="30" value={periodYears} onChange={(e) => setPeriodYears(Number(e.target.value))} style={{ width: '100%', marginBottom: '15px' }} />

        <label>Expected Annual Return: {annualRate}%</label>
        <input type="range" min="1" max="20" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value))} style={{ width: '100%', marginBottom: '15px' }} />

        <div style={{ background: COLORS.background, borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
            <div>
              <p style={{ fontSize: '0.8em', color: COLORS.textGray }}>Total Investment</p>
              <p style={{ fontWeight: 'bold', color: COLORS.textDark }}>{formatRupee(totalInvestment)}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.8em', color: COLORS.textGray }}>Total Returns</p>
              <p style={{ fontWeight: 'bold', color: COLORS.secondary }}>{formatRupee(totalReturns)}</p>
            </div>
          </div>
          <p style={{ fontSize: '0.9em', color: COLORS.textGray }}>Maturity Value</p>
          <p style={{ fontWeight: 'bold', color: COLORS.primary, fontSize: '1.5em' }}>{formatRupee(maturityValue)}</p>
        </div>
      </div>

      {/* Investment Plans */}
      <div>
        <h2 style={{ color: COLORS.textDark, marginBottom: '10px' }}>Choose Your Investment Plan</h2>
        {plans.map((plan) => (
          <div key={plan.key} style={{ border: `1px solid ${plan.color}`, borderRadius: '10px', padding: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: 'bold', color: COLORS.textDark }}>{plan.title} <span style={{ fontSize: '0.8em', color: COLORS.textGray }}>({plan.risk})</span></p>
              <p style={{ fontSize: '0.85em', color: COLORS.textGray }}>{plan.desc}</p>
              <p style={{ fontSize: '0.85em', color: COLORS.textGray }}>₹{plan.minAmount}/mo</p>
            </div>
            <button style={{ background: plan.color, color: 'white', padding: '8px 12px', borderRadius: '6px', fontWeight: 'bold' }} onClick={() => handleStartSIP(plan.key)}>
              Start SIP
            </button>
          </div>
        ))}
      </div>

      {/* Learn First */}
      <div style={{ background: COLORS.primary, color: 'white', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <Lightbulb size={24} /> 
        <div style={{ marginLeft: '10px', flex: 1 }}>
          <p style={{ fontWeight: 'bold' }}>New to investing?</p>
          <p style={{ fontSize: '0.85em' }}>Learn the basics before you start</p>
        </div>
        <button style={{ background: 'white', color: COLORS.primary, padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold' }}>Learn First</button>
      </div>
    </div>
  );
};

export default InvestPage;
