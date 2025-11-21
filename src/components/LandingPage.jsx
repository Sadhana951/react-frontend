import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const bgStyle = {
    height: '100vh',
    backgroundImage: 'url(/assets/background.jpg)', // Add your background image path
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  };

  return (
    <div style={bgStyle}>
      <h1>GreenThumb Plant Company</h1>
      <p>Your trusted source for beautiful houseplants that brighten your home.</p>
      <button onClick={() => navigate('/products')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
