# 🎓 AI Student Companion

### 🤖 AI-Powered Learning & Productivity Assistant

Helping students learn smarter through Artificial Intelligence, personalized learning assistance, task management, productivity tracking, and intelligent conversations.

[Live Demo](https://ai-student-companion-olive.vercel.app) • [Backend API](https://ai-student-companion.onrender.com) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Project Gallery](#-project-gallery)
---

# 📖 About The Project

AI Student Companion is a modern AI-powered full-stack platform designed to help students with learning, coding, academic questions, productivity, and daily task management.

The platform combines an intelligent AI Student Companion with task management, productivity tracking, secure authentication, and persistent chat history to provide students with a centralized digital environment for their academic and daily activities.

Users can interact with the AI assistant to understand difficult concepts, solve programming and DSA problems, learn technical subjects, prepare for interviews and exams, and get assistance with academic questions.

The platform also allows students to manage daily tasks, track productivity, continue previous AI conversations, and manage their profile through a simple and responsive interface.

---

# ✨ Features

### 🤖 AI Student Companion

Interact with an AI-powered assistant designed specifically for students.

- Programming & Coding
- Data Structures & Algorithms
- DBMS & SQL
- Web Development
- AI & Machine Learning
- Software Engineering
- Interview Preparation
- Exam Preparation
- Academic Questions
- Study Planning

### 💬 AI Chat & History

- Context-aware AI conversations
- Multiple chat sessions
- Persistent chat history
- Continue previous conversations
- Delete chat sessions
- Database-backed message storage

### 🧠 Context-Aware Learning

Previous messages from the current conversation are used as context, allowing students to ask follow-up questions naturally without repeating the entire discussion.

### 🌐 Multi-Language Support

The AI assistant supports:

- English
- Hindi
- Hinglish

The assistant responds according to the language used by the student.

### ✅ Task Management

- Create tasks
- View tasks
- Complete tasks
- Track pending tasks
- Track completed tasks

### 📊 Productivity Tracking

The dashboard provides an overview of:

- Total Tasks
- Completed Tasks
- Pending Tasks
- Productivity Percentage

### 👤 Secure Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Profile Management
- Forgot Password
- Reset Password

### 🔐 Protected User Data

Authenticated users can securely access their own:

- Profile
- Tasks
- Chat Sessions
- Chat Messages

### ⚡ Reliable AI Integration

Gemini API requests include automatic retry handling for temporary `429`, `500`, and `503` errors using exponential backoff.

### 📱 Responsive User Experience

The application provides a clean and responsive interface with simple navigation, reusable components, and student-friendly layouts.

---

# 🚀 Project Highlights

- 🤖 AI-Powered Student Assistant
- 💬 Context-Aware AI Conversations
- 📚 Student-Focused Learning Assistance
- 🌐 English, Hindi & Hinglish Support
- ✅ Task Management
- 📊 Productivity Tracking
- 🔐 JWT Authentication
- 👤 Profile Management
- 🔑 Password Recovery
- 💾 Persistent Chat History
- ⚡ Gemini API Retry Handling
- 📱 Responsive UI
- 🧩 Component-Based Architecture
- 🚀 Full-Stack Deployment

---

# 🏗 Project Architecture

```text
                         User
                           │
                           ▼
                  Next.js Frontend
                           │
                    REST API Requests
                           │
                           ▼
                  Express.js Backend
                    │            │
                    ▼            ▼
               Gemini API      MySQL
                              Aiven Cloud

🛠 Tech Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
Lucide React
Next.js App Router
Backend
Node.js
Express.js
REST APIs
JWT Authentication
Database
MySQL
Aiven Cloud
AI Integration
Google Gemini API
Gemini Flash Model
Context-Aware Conversations
Retry & Error Handling
Deployment
Vercel — Frontend
Render — Backend
Aiven Cloud — Database
📂 Project Structure
ai-student-companion/
│
├── app/
│   ├── chat/
│   ├── forgot-password/
│   ├── home/
│   ├── login/
│   ├── profile/
│   ├── register/
│   ├── reset-password/
│   └── tasks/
│
├── components/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   └── server.js
│
├── public/
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
📷 Project Gallery
🏠 Home Dashboard

🤖 AI Student Companion

💬 Chat History

✅ Task Management

👤 User Profile

🔐 Login & Registration

🔑 Forgot Password

🔒 Reset Password

🌐 Deployment
Frontend

Vercel

Live Website

Backend

Render

Backend API

Database

Aiven Cloud

MySQL database hosted on Aiven Cloud for persistent storage of users, tasks, chat sessions, and messages.

🚀 Getting Started
Prerequisites
Node.js
npm
MySQL
Gemini API Key
Git
Clone Repository
git clone https://github.com/Priyanshiagarwal2006/ai-student-companion-frontend.git
Install Dependencies
npm install
Run Frontend
npm run dev

The frontend runs on:

http://localhost:3000

For the backend, install dependencies inside the backend directory and configure the required environment variables.

🔐 Environment Variables

Create a .env file for the backend:

MYSQL_HOST=your_mysql_host
MYSQL_PORT=your_mysql_port
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=your_mysql_database

PORT=5000

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

Never commit API keys, passwords, JWT secrets, or .env files to GitHub.

🔮 Future Improvements
📚 Personalized Study Plans
🎯 Learning Goals & Milestones
📈 Advanced Productivity Analytics
🔔 Study Reminders
📅 Study Schedule Management
🧠 Personalized AI Recommendations
📊 Learning Progress Analytics
🌙 Dark Mode
📱 Further Mobile Optimization
⭐ Thank You for Visiting This Repository!

AI Student Companion combines Artificial Intelligence, learning, and productivity to create a focused digital companion for students.

Building smarter learning experiences, improving productivity, and using AI to make student life simpler.

About

An AI-powered full-stack student learning and productivity platform providing contextual AI conversations, academic assistance, task management, productivity tracking, secure authentication, persistent chat history, and personalized student workflows using modern web technologies.


**Bas isko poora ek saath copy-paste karna hai.** Screenshot wale `YOUR_..._SCREENSHOT_URL` baad mein apne GitHub screenshot 
