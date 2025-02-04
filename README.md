# **TaskManager**

# 🏗 Tech Stack
- Frontend: React + Vite, Tailwind CSS (for styling)
- Backend: Node.js + Express.js
- Database: MongoDB (with Mongoose) or PostgreSQL (with Prisma)
- Authentication: Firebase Auth or JWT
- Deployment: Vercel (Frontend) + Render (Backend)

# 📜 Features
- User Authentication (Login/Register using Firebase or JWT)
- Task Management (CRUD operations: Create, Read, Update, Delete)
- Task Filtering (Filter by status, priority, and due date)
- Responsive UI (Styled with Tailwind CSS)
- Backend API (REST API with Express.js)
- Database Storage (MongoDB/PostgreSQL for persisting tasks)
- Deployment (Frontend: Vercel, Backend: Render)

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
