import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Team A
import Alex from './team-a/alex';
import Becca from './team-a/becca';

// Team B
import Beth from './team-b/beth';

// Team C
import Charlie from './team-c/charlie';

// Team D
import Diana from './team-d/diana';

// Team E
import Eric from './team-e/eric';

function App() {
  const teams = [
    { name: 'Team A', members: [<Alex key="alex" />, <Becca key="becca" />] },
    { name: 'Team B', members: [<Beth key="beth" />] },
    { name: 'Team C', members: [<Charlie key="charlie" />] },
    { name: 'Team D', members: [<Diana key="diana" />] },
    { name: 'Team E', members: [<Eric key="eric" />] },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9fafb'
    }}>
      <Header />
      
      <main style={{
        flexGrow: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        {teams.map((team, index) => (
          <section key={index} style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem',
              borderBottom: '4px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              {team.name}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {team.members.map((member) => member)}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
