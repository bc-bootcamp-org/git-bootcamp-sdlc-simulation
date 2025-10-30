# Team Directory - React App

A modern React application built with Vite featuring a team directory with organized team structure.

## Features

- 🎨 Beautiful gradient UI with responsive design
- 👥 5 team sections (Team A, B, C, D, E)
- 📁 Organized folder structure for easy team member management
- 🎭 Template-based component system for quick member addition
- ⚡ Fast development with Vite
- 💅 Styled with CSS-in-JS (inline styles)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Main header component
│   └── Footer.jsx      # Footer component
├── team-a/
│   ├── template.jsx    # Template for Team A members
│   └── alex.jsx        # Example member
├── team-b/
│   ├── template.jsx    # Template for Team B members
│   └── beth.jsx        # Example member
├── team-c/
│   ├── template.jsx    # Template for Team C members
│   └── charlie.jsx     # Example member
├── team-d/
│   ├── template.jsx    # Template for Team D members
│   └── diana.jsx       # Example member
├── team-e/
│   ├── template.jsx    # Template for Team E members
│   └── eric.jsx        # Example member
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/bc-bootcamp-org/git-bootcamp-sdlc-simulation.git
cd git-bootcamp-sdlc-simulation
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Adding New Team Members

To add a new team member, follow these steps:

1. Navigate to the appropriate team folder (e.g., `src/team-a/`)
2. Copy `template.jsx` and rename it (e.g., `john.jsx`)
3. Update the component name and display name
4. Import the new component in `src/App.jsx`
5. Add it to the appropriate team's members array

Example:
```jsx
// src/team-a/john.jsx
import React from 'react';

const John = () => {
  return (
    <div style={{...}}>
      {/* Component content */}
    </div>
  );
};

export default John;
```

Then in `App.jsx`:
```jsx
import John from './team-a/john';

// In the teams array:
{ name: 'Team A', members: [<Alex key="alex" />, <John key="john" />] }
```

## Built With

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Build tool
- CSS-in-JS - Styling approach

## License

This project is part of the BC Bootcamp SDLC simulation.

