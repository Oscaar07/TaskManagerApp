# **TaskManager**

# 🏗 Tech Stack
- Frontend: React.js or Angular
- Backend: Node.js with Express.js or Python Flask
- Database: MongoDB (NoSQL) or PostgreSQL/MySQL (SQL)
- Authentication: JWT (JSON Web Token)
- Hosting: Vercel (frontend), Render/Heroku (backend), MongoDB Atlas

# 📜 Features
- User Authentication (Signup, Login, Logout)
- Task Management
- Add, edit, delete tasks
- Mark tasks as completed
- User-specific tasks (Each user sees only their tasks)
- Responsive UI (Mobile-friendly)

# 🛠 How to Build It
- 1️⃣ Backend (API) – Node.js + Express.js
- Create a REST API with Express
- Use MongoDB/PostgreSQL for data storage
- Implement JWT for authentication
- Example API routes:
  - POST /register → Create a user
  - POST /login → Authenticate user
  - GET /tasks → Get tasks of the logged-in user
  - POST /tasks → Add new task
  - PUT /tasks/:id → Update task
  - DELETE /tasks/:id → Delete task
- 2️⃣ Frontend – React.js or Angular
- Create a login & signup page
- Fetch tasks from backend and display them
- Add forms for adding/updating tasks
- Handle authentication with JWT
- Example Components:
  - LoginForm.jsx
  - SignupForm.jsx
  - TaskList.jsx
  - TaskItem.jsx
- 3️⃣ Database – MongoDB/PostgreSQL
- Store users & tasks in a database
