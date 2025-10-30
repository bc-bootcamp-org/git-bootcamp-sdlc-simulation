import React from 'react';

const John = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      transition: 'box-shadow 0.3s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          width: '5rem',
          height: '5rem',
          background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          A
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          John Doe
        </h3>
        <p style={{
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
          Team Member
        </p>
      </div>
    </div>
  );
};

export default John;
