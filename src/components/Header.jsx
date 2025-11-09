import React from 'react';

const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(270deg, #2563eb, #9333ea, #ec4899, #10b981, #2563eb)',
    backgroundSize: '300% 300%',
    animation: 'gradientMove 25s ease infinite',
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem 1rem'
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <header style={headerStyle}>
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
    </>
  );
};

export default Header;
