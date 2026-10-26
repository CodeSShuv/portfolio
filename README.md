# 💻 Terminal-Based Developer Portfolio

> A developer portfolio designed to feel like an interactive command-line terminal.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?logo=github)](https://codesshuv.github.io/portfolio)

---

## 🌐 Live Demo

**[https://codesshuv.github.io/portfolio](https://codesshuv.github.io/portfolio)**

---

## ✨ The Concept

Instead of clicking through conventional pages, visitors interact with a simulated terminal. Navigate directories, list components, and view content using familiar CLI commands.

```bash
root$ commands
Available commands:
  ls        List available components
  cd        Navigate between sections
  pages     List available pages
  commands  Show available commands
  clear     Clear the terminal

root$ cd about
root/about$ show
# profile.txt
Shuvam Gautam.
Self-taught Developer · Nepal

Hey! I'm Shuvam, a developer who enjoys turning ideas into working applications...
```

Each section behaves like a directory or file within a terminal environment.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/CodeSShuv/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview locally with:

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `predeploy` (build) then pushes `dist/` to the `gh-pages` branch.

---

## 🎮 Available Commands

| Command | Syntax | Description |
|---------|--------|-------------|
| **`ls`** | `ls` | Lists available components in the current directory |
| **`cd`** | `cd <directory>` | Navigate to a section (`about`, `skill`, `projects`, `contact`) or go up with `cd ../` |
| **`pages`** | `pages` | Lists all available pages/components |
| **`commands`** | `commands` | Shows all available commands with descriptions |
| **`show`** | `show` | Displays the content of the current directory (works in `about`, `skill`) |
| **`clear`** | `clear` | Clears terminal history |

### Command Reference

#### `ls` — List Components
```bash
root$ ls
Available components:
  • Home
  • About
  • Projects
  • Contact

root/about$ ls
No components available. Go back to root to choose component. Use 'cd ../'
```

#### `cd` — Change Directory
```bash
root$ cd about
root/about$ cd ../
root$ cd skill
root/skill$
```

#### `pages` — List All Pages
```bash
root$ pages
Available pages:
  • about
  • skill
  • projects
  • contact
```

#### `commands` — Show Help
```bash
root$ commands
Available commands:
  ls        list components
  cd        navigate to a component
  pages     list available pages
  commands  view all necessary commands
  clear     clear all
```

#### `show` — View Content
```bash
root/about$ show
# profile.txt
Shuvam Gautam.
Self-taught Developer · Nepal

Hey! I'm Shuvam, a developer who enjoys turning ideas into working applications...
```

#### `clear` — Clear Terminal
```bash
root$ clear
# Terminal history cleared
```

---

## 🗂️ Terminal Directory Structure

```
root/
├── about/          # Profile & bio (use 'show' to view)
├── skill/          # Technical skills as JSON (use 'show' to view)
├── projects/       # Project listings (navigate here, then explore)
└── contact/        # Contact links (GitHub, LinkedIn, Email)
```

> **Note:** This is the *user-facing* terminal structure, not the source code layout.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Interactive UI & component logic |
| **Vite 7** | Fast dev server & build tool |
| **TailwindCSS 4** | Utility-first styling |
| **React Router DOM 7** | Routing (available for future expansion) |
| **react-draggable / react-rnd** | Draggable/resizable window components |
| **ESLint** | Code quality & consistency |
| **GitHub Pages** | Static site hosting |

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # Profile display (profile.txt style)
│   │   ├── Contact.jsx     # Contact links
│   │   ├── Project.jsx     # Project showcase
│   │   ├── Skill.jsx       # Skills as JSON
│   │   ├── TerminalInput.jsx   # Command input line
│   │   ├── Window.jsx      # Draggable window wrapper
│   │   └── Card.jsx        # (placeholder)
│   ├── context/
│   │   ├── nameContext.jsx # Visitor name context
│   │   └── states/NameState.jsx  # Context provider
│   ├── pages/
│   │   ├── Terminal.jsx    # Main terminal interface & logic
│   │   └── NavigationPage.jsx    # Alternative window-based nav
│   ├── css/                # Page-specific styles
│   │   ├── landing.css     # Terminal styles
│   │   └── navigationpage.css
│   ├── components/css/     # Component styles
│   │   ├── about.css
│   │   ├── skill.css
│   │   ├── project.css
│   │   ├── window.css
│   │   └── namecapture.css
│   ├── assets/
│   │   └── img/            # Technology logos
│   ├── App.jsx             # Root component & routing
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles
│   └── tailwind.css        # Tailwind imports
├── index.html              # HTML template
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md               # This file
```

---

## 🎯 How It Works

### Terminal Logic (`src/pages/Terminal.jsx`)

The terminal maintains state for:
- **`commandDetail`** — Parsed command objects
- **`directory`** — Current path (`root`, `about`, `skill`, etc.)
- **`lines`** — History of executed commands + outputs
- **`msg`** — Additional messages

**Command Parsing:**
```javascript
// On Enter (TerminalInput → setCommand)
{
  id: crypto.randomUUID(),
  directory: "root" or "root/about",
  command: "cd",           // First word
  text: "about"            // Second word (argument)
}
```

**Navigation:**
- `cd about` → `directory = "about"`
- `cd skill` → `directory = "skill"`
- `cd ../`   → `directory = "root"`

**Output Rendering:**
- `ls` → Lists components (context-aware)
- `commands` → Shows help table
- `show` → Renders `<About />` or `<Skills />` component
- `clear` → Resets `lines` and `commandDetail`

### Input Component (`src/components/TerminalInput.jsx`)

- Controlled input with `onKeyUp` for **Enter** key
- Displays dynamic prompt: `root$` or `root/about$`
- Auto-focused on mount

### Components

| Component | Trigger | Display Style |
|-----------|---------|---------------|
| `About` | `cd about` → `show` | `profile.txt` code block |
| `Skills` | `cd skill` → `show` | `skills.json` syntax-highlighted |
| `Project` | `cd projects` → click | Window with project cards |
| `Contact` | `cd contact` → click | Window with links |

---

## 🧪 Development

### Linting
```bash
npm run lint
```

### Adding a New Section

1. Create component in `src/components/`
2. Add styles in `src/components/css/`
3. Update `DEFAULT_KEYWORDS` and navigation logic in `Terminal.jsx`
4. Add case in the render output (line 109) to display component on `show`

---

## 📌 Current Status

| Feature | Status |
|---------|--------|
| Terminal interface | ✅ Complete |
| Command parsing & history | ✅ Complete |
| Directory navigation (`cd`, `ls`) | ✅ Complete |
| `commands` help | ✅ Complete |
| `clear` command | ✅ Complete |
| About section (`show`) | ✅ Complete |
| Skills section (`show`) | ✅ Complete |
| Projects section | 🚧 Window-based (click nav) |
| Contact section | 🚧 Window-based (click nav) |
| Mobile responsiveness | 🚧 In progress |
| Visitor name capture | 🚧 Context exists, UI pending |

---

## 👨‍💻 Author

**Shuvam Gautam**

- GitHub: [@CodeSShuv](https://github.com/CodeSShuv)
- LinkedIn: [Shuvam Gautam](https://www.linkedin.com/in/shuvam-gautam-b88871263/)
- Email: [codesshuv@gmail.com](mailto:codesshuv@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with curiosity, code, and a terminal-inspired vision. 🖤