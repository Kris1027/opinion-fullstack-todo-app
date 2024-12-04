# Opinion FullStack Todo App

A comprehensive Todo application built with a fullstack architecture using React, TypeScript, and Express. The application enables task management through basic CRUD operations, offering a user-friendly interface and stable API.

## 🌐 Features

-   Create, read, update, and delete tasks
-   Mark tasks as complete/incomplete
-   Responsive design for all devices
-   User interface built with shadcn/ui
-   Backend API built with Express.js
-   Full TypeScript support

## 🛠️ Technologies

### Frontend

-   React
-   TypeScript
-   Vite
-   Tailwind CSS
-   shadcn/ui
-   ESLint

### Backend

-   Node.js
-   Express.js
-   UUID
-   CORS
-   ESLint

## 🏃‍♂️ Getting Started

1. Clone the repository:

```bash
git clone git@github.com:Kris1027/opinion-fullstack-todo-app.git
```

2. Install dependencies for frontend and backend:

```bash
npm install
```

3. Run the development server:

```bash
# Backend (in backend directory)
npm run dev

# Frontend (in frontend directory)
npm run dev

# Both (in root directory)
npm run dev
```

## 🔧 Available Scripts

### Frontend

-   `npm run dev` - Starts development server
-   `npm run build` - Builds the app for production
-   `npm run lint` - Runs ESLint
-   `npm run preview` - Preview production build locally

### Backend

-   `npm run dev` - Runs development server with nodemon
-   `npm run lint` - Runs ESLint

### Root

-   `npm run backend` - Runs development server with nodemon
-   `npm run frontend` - Starts development server
-   `npm run dev` - Starts both Backend and Frontend

## 🌍 API Endpoints

-   `POST /api/tasks/create` - Creates a new task
-   `GET /api/tasks/all` - Retrieves all tasks
-   `DELETE /api/tasks/:id/delete` - Deletes a task
-   `PATCH /api/tasks/:id/update` - Updates a task text
-   `PATCH /api/tasks/:id/complete` - Toggles task completion status

## 🔒 Environment

Backend runs on port 3000 by default, and frontend on port 3001. Make sure these ports are available on your system.
