import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      marginTop: '3rem',
      padding: '1.5rem 1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#d1d5db',
          marginBottom: '0.5rem'
        }}>
          © 2025 Git and Github Bootcamp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
