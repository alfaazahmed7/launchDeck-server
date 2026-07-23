# 🚀 LaunchDeck Server

The LaunchDeck Server is the backend API that powers the LaunchDeck platform. It provides RESTful endpoints for managing projects, handling user-submitted content, and communicating with the MongoDB database. Built with Express.js and TypeScript, the server is designed with a clean, modular architecture for scalability and maintainability.

## 🌐 Live API

- **API Base URL:** https://launchdeck-web-api-server.onrender.com

---

## ✨ Features

- 🚀 RESTful API built with Express.js
- 📦 MongoDB integration using Mongoose
- 📂 Retrieve all projects with search, filtering, sorting, and pagination
- ⭐ Featured projects endpoint
- 📄 Fetch individual project details
- ➕ Submit new projects
- 🛠️ Retrieve projects created by a specific user
- 🗑️ Delete user projects
- 🔧 Modular architecture with separate routes, controllers, models, and configuration
- 🌍 CORS enabled for frontend integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- dotenv
- CORS

---

## 📁 Project Structure

```
src/
├── config/
│   └── db.ts
├── controllers/
├── models/
├── routes/
├── app.ts
└── server.ts
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get project details |
| GET | `/api/projects/featured` | Get featured projects |
| POST | `/api/add-project` | Submit a new project |
| GET | `/api/my-projects` | Get projects created by a user |
| DELETE | `/api/my-projects/:id` | Delete a user's project |

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone <https://github.com/alfaazahmed7/launchDeck-server>
cd launchdeck-server
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Run the development server

```bash
npm run dev
```

The server will be available at:

```
http://localhost:5000
```

---

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Compile TypeScript
npm run start    # Run production build
```

---

## 📌 Highlights

- TypeScript-based backend
- Clean MVC-inspired folder structure
- MongoDB with Mongoose ODM
- RESTful API design
- Modular and maintainable codebase
- Ready for deployment on platforms like Render

---

## 👨‍💻 Author

**Alfaaz Ahmed**

Feel free to contribute, open issues, or improve the project.