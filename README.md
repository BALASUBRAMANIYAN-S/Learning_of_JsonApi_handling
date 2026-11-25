# API Handling with RTK Query (JSONPlaceholder)

A React practice project that fetches users from the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and shows them in a table, with a details page for each user.

## Features

- Users table loaded with Redux Toolkit Query
- Details page for a single user (`/card/:id`)
- Data caching and loading handled by RTK Query

## Tech Stack

- React 19 + Vite
- Redux Toolkit (RTK Query)
- React Router 7
- Tailwind CSS 4
- PrimeReact, Axios

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
git clone https://github.com/BALASUBRAMANIYAN-S/Learning_of_JsonApi_handling.git
cd Learning_of_JsonApi_handling
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/store.js              # Redux store
├── services/userApi.js       # RTK Query endpoints (users, users/:id)
├── components/
│   ├── ApiCall.jsx           # Users table
│   └── UserCard.jsx          # User details
├── App.jsx                   # Routes
└── main.jsx
```

## API

Base URL: `https://jsonplaceholder.typicode.com/`

- `users` for the list
- `users/{id}` for one user

An internet connection is required.
