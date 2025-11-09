# Git & GitHub Bootcamp – SDLC Simulation

Welcome to the **Git & GitHub Bootcamp: SDLC Simulation** repository.  
This project is part of a hands-on exercise that simulates a real-world Software Development Life Cycle (SDLC) using Git and GitHub.  
Participants collaborate on feature branches, raise pull requests, and experience the end-to-end development flow.

---

## 🌐 Deployment Environments

Each branch in this repository is deployed automatically via **Netlify**.  
You can view the live preview for each branch using the URLs below:

| Branch | Live URL |
|--------|-----------|
| `main` | https://bootcamp.jenishtwayana.com.np |
| `dev` | https://dev-bootcamp.jenishtwayana.com.np |
| `team-a` | https://team-a-bootcamp.jenishtwayana.com.np |
| `team-b` | https://team-b-bootcamp.jenishtwayana.com.np |
| `team-c` | https://team-c-bootcamp.jenishtwayana.com.np |
| `team-d` | https://team-d-bootcamp.jenishtwayana.com.np |
| `team-e` | https://team-e-bootcamp.jenishtwayana.com.np |

> 📝 *Note:* The branch deployments may take a few minutes to update after a merge or commit.

---

## 🚀 Getting Started

### Prerequisites  
- Node.js version 14 or higher  
- npm (or yarn)  
- Basic understanding of Git and GitHub  

### Installation & Running Locally  
1. **Clone this repository**  
   ```bash
   git clone https://github.com/bc-bootcamp-org/git-bootcamp-sdlc-simulation.git
   cd git-bootcamp-sdlc-simulation
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   ```

4. **Open your browser at:**  
   ```
   http://localhost:5173
   ```

### Available Scripts  
- `npm run dev` – starts the dev server  
- `npm run build` – builds the app for production  
- `npm run preview` – previews the production build locally  
- `npm run lint` – runs ESLint for code quality  

---

## 🧑‍💻 Git & PR Workflow

This exercise simulates real-world Git collaboration and PR management within team branches.

### 🔹 Standard Flow

1. Clone the repo and run `npm install` to set up the project.  
2. Switch to your team branch (e.g., `team/X`) and create a new branch:  
   ```bash
   git checkout -b feat/teamX-name
   ```
3. Edit your file (`src/teamX/teammember{rollnumber}.jsx`) — add first name only at line 4.  
4. Add, commit, and push your branch.  
5. Open a PR (Head: your branch → Base: `team/X`), assign it to yourself, and request review from your TL.  
6. TL comments “Add the last name too.” — update your file, commit, and push again.  
7. TL approves and merges your PR.  
8. Student pull the team branch.

---

### ⚔️ Merge Conflict Simulation

1. TL commits directly to the team branch (`src/App.jsx`, line 68 onwards).  
2. Students create a new branch from `team/X` (without pulling):  
   ```bash
   git checkout team/X
   git checkout -b feat/teamX-newname
   ```
3. Make another change (e.g., team name), commit, and push, then open a PR.  
4. GitHub shows a merge conflict.  
5. Run the following to pull and resolve conflicts:  
   ```bash
   git pull origin team/X
   ```
6. Resolve the conflicts, commit, and push again.  
7. PR updates with no conflicts — TL closes it (do not merge).  

---

### 🚀 TL & Release Managers Only

1. Perform **team → dev → main** sync and verify changes in dev and prod environments.  
2. Do a **backsync**: `dev → team/X`.  

---

## 🧭 Goal

The goal of this exercise is to help learners understand:
- How teams collaborate using Git & GitHub  
- The branching, review, and merging workflow  
- How CI/CD connects to deployments per branch  
- The full SDLC from feature development to release  

---
