import React from 'react';

const Header = () => {
  return (
    <header style={{
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      color: 'white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem 1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>
          Git and Github Bootcamp
        </h1>
        <p style={{
          color: '#dbeafe',
          fontSize: '1rem'
        }}>
          Meet our amazing team members
        </p>
      </div>
    </header>
  );
};

export default Header;
