import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Team A
import TeamMember1A from './team-a/teamMember1';
import TeamMember2A from './team-a/teamMember2';
import TeamMember3A from './team-a/teamMember3';
import TeamMember4A from './team-a/teamMember4';
import TeamMember5A from './team-a/teamMember5';
import TeamMember6A from './team-a/teamMember6';
import TeamMember7A from './team-a/teamMember7';
import TeamMember8A from './team-a/teamMember8';
import TeamMember9A from './team-a/teamMember9';
import TeamMember10A from './team-a/teamMember10';

// Team B
import TeamMember1B from './team-b/teamMember1';
import TeamMember2B from './team-b/teamMember2';
import TeamMember3B from './team-b/teamMember3';
import TeamMember4B from './team-b/teamMember4';
import TeamMember5B from './team-b/teamMember5';
import TeamMember6B from './team-b/teamMember6';
import TeamMember7B from './team-b/teamMember7';
import TeamMember8B from './team-b/teamMember8';
import TeamMember9B from './team-b/teamMember9';
import TeamMember10B from './team-b/teamMember10';

// Team C
import TeamMember1C from './team-c/teamMember1';
import TeamMember2C from './team-c/teamMember2';
import TeamMember3C from './team-c/teamMember3';
import TeamMember4C from './team-c/teamMember4';
import TeamMember5C from './team-c/teamMember5';
import TeamMember6C from './team-c/teamMember6';
import TeamMember7C from './team-c/teamMember7';
import TeamMember8C from './team-c/teamMember8';
import TeamMember9C from './team-c/teamMember9';
import TeamMember10C from './team-c/teamMember10';

// Team D
import TeamMember1D from './team-d/teamMember1';
import TeamMember2D from './team-d/teamMember2';
import TeamMember3D from './team-d/teamMember3';
import TeamMember4D from './team-d/teamMember4';
import TeamMember5D from './team-d/teamMember5';
import TeamMember6D from './team-d/teamMember6';
import TeamMember7D from './team-d/teamMember7';
import TeamMember8D from './team-d/teamMember8';
import TeamMember9D from './team-d/teamMember9';
import TeamMember10D from './team-d/teamMember10';

// Team E
import TeamMember1E from './team-e/teamMember1';
import TeamMember2E from './team-e/teamMember2';
import TeamMember3E from './team-e/teamMember3';
import TeamMember4E from './team-e/teamMember4';
import TeamMember5E from './team-e/teamMember5';
import TeamMember6E from './team-e/teamMember6';
import TeamMember7E from './team-e/teamMember7';
import TeamMember8E from './team-e/teamMember8';
import TeamMember9E from './team-e/teamMember9';
import TeamMember10E from './team-e/teamMember10';

function App() {
  const teams = [
    { 
      name: 'Team A+', 
      members: [
        <TeamMember1A key="teamMember1A" />,
        <TeamMember2A key="teamMember2A" />,
        <TeamMember3A key="teamMember3A" />,
        <TeamMember4A key="teamMember4A" />,
        <TeamMember5A key="teamMember5A" />,
        <TeamMember6A key="teamMember6A" />,
        <TeamMember7A key="teamMember7A" />,
        <TeamMember8A key="teamMember8A" />,
        <TeamMember9A key="teamMember9A" />,
        <TeamMember10A key="teamMember10A" />
      ]
    },
    { 
      name: 'Team B', 
      members: [
        <TeamMember1B key="teamMember1B" />,
        <TeamMember2B key="teamMember2B" />,
        <TeamMember3B key="teamMember3B" />,
        <TeamMember4B key="teamMember4B" />,
        <TeamMember5B key="teamMember5B" />,
        <TeamMember6B key="teamMember6B" />,
        <TeamMember7B key="teamMember7B" />,
        <TeamMember8B key="teamMember8B" />,
        <TeamMember9B key="teamMember9B" />,
        <TeamMember10B key="teamMember10B" />
      ]
    },
    { 
      name: 'Team C', 
      members: [
        <TeamMember1C key="teamMember1C" />,
        <TeamMember2C key="teamMember2C" />,
        <TeamMember3C key="teamMember3C" />,
        <TeamMember4C key="teamMember4C" />,
        <TeamMember5C key="teamMember5C" />,
        <TeamMember6C key="teamMember6C" />,
        <TeamMember7C key="teamMember7C" />,
        <TeamMember8C key="teamMember8C" />,
        <TeamMember9C key="teamMember9C" />,
        <TeamMember10C key="teamMember10C" />
      ]
    },
    { 
      name: 'Team D', 
      members: [
        <TeamMember1D key="teamMember1D" />,
        <TeamMember2D key="teamMember2D" />,
        <TeamMember3D key="teamMember3D" />,
        <TeamMember4D key="teamMember4D" />,
        <TeamMember5D key="teamMember5D" />,
        <TeamMember6D key="teamMember6D" />,
        <TeamMember7D key="teamMember7D" />,
        <TeamMember8D key="teamMember8D" />,
        <TeamMember9D key="teamMember9D" />,
        <TeamMember10D key="teamMember10D" />
      ]
    },
    { 
      name: 'Team E', 
      members: [
        <TeamMember1E key="teamMember1E" />,
        <TeamMember2E key="teamMember2E" />,
        <TeamMember3E key="teamMember3E" />,
        <TeamMember4E key="teamMember4E" />,
        <TeamMember5E key="teamMember5E" />,
        <TeamMember6E key="teamMember6E" />,
        <TeamMember7E key="teamMember7E" />,
        <TeamMember8E key="teamMember8E" />,
        <TeamMember9E key="teamMember9E" />,
        <TeamMember10E key="teamMember10E" />
      ]
    },
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
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {(() => {
          // Pre-filter teams that have visible members
          const visibleTeams = teams.filter(team => {
            const renderedMembers = team.members.map(member => {
              if (!member || !member.type) return null;
              const Component = member.type;
              const instance = Component();
              return instance !== null;
            });
            return renderedMembers.some(rendered => rendered === true);
          });

          if (visibleTeams.length === 0) {
            // Show fallback message when no teams have visible members
            return (
              <div style={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#4b5563',
                    marginBottom: '1rem'
                  }}>
                    No Team Members Yet
                  </h2>
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}>
                    Add team members by updating the name field in any teamMember component file.
                  </p>
                </div>
              </div>
            );
          }

          // Render teams with visible members
          return visibleTeams.map(team => (
            <section key={team.name} style={{ marginBottom: '3rem' }}>
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
                {team.members}
              </div>
            </section>
          ));
        })()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
