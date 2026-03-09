# EasyTask

A task management application built with Angular 21. Users can select a person from a list, view their assigned tasks, add new tasks, and mark tasks as complete.

## Features

- **User selection** — pick a user to see their tasks, with avatar display and active state highlighting
- **Task management** — view, add, and complete tasks per user
- **Add task modal** — form with title, summary, and due date fields; validates that the date is today or later
- **Responsive design** — adapts to mobile (480px) and tablet (768px) breakpoints
- **Dark purple glassmorphic UI** — custom CSS with design tokens, backdrop filters, and gradient backgrounds

## Tech Stack

- **Angular 21** (standalone components, signals, new control flow syntax)
- **TypeScript 5.9**
- **Vitest** for unit testing
- **Google Fonts** — Poppins & Roboto

No external UI libraries — all styling is custom CSS.

## Project Structure

```
src/app/
├── header/          # App header with branding
├── user/            # User card component + model
├── tasks/
│   ├── task/        # Single task display + model
│   ├── modal/       # Add-task form modal
│   └── tasks.*      # Task list + service
├── ui/card/         # Reusable card wrapper (ng-content)
├── dummy-users.ts   # Sample user data
└── dummy-tasks.ts   # Sample task data
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v11+)

### Install & Run

```bash
npm install
npm start
```

The dev server starts at `http://localhost:4200/` with hot reload.

### Build

```bash
npm run build
```

Production output goes to the `dist/` directory.

### Test

```bash
npm test
```

Runs unit tests with Vitest.
