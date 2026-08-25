# 🎓 AI Student Companion

### 🤖 AI-Powered Learning & Productivity Assistant

Helping students learn smarter through Artificial Intelligence, personalized learning assistance, task management, productivity tracking, and intelligent conversations.

[Live Demo](https://ai-student-companion-olive.vercel.app) • [Backend API](https://ai-student-companion.onrender.com) • [Features](#-features)
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

---

# 📷 Project Gallery

### 🏠 Home Dashboard

![Home Dashboard](./screenshots/home.png)

The Home Dashboard provides a quick overview of the student's tasks, productivity, AI assistance, and recent activities.

---

### 🤖 AI Student Companion

![AI Student Companion](./screenshots/ai-chat.png)

The AI Student Companion allows students to ask questions, understand concepts, solve coding problems, and get personalized academic assistance.

---

### 💬 Chat History

![Chat History](./screenshots/chat-history.png)

Users can access their previous conversations, continue existing discussions, create new chats, and delete chat sessions.

---

### ✅ Task Management

![Task Management](./screenshots/tasks.png)

The Task Management section helps students create, manage, complete, and track their daily tasks.

---

### 👤 User Profile

![User Profile](./screenshots/profile.png)

The Profile section allows users to view and manage their account information.

---

### 🔐 Login & Registration

![Login & Registration](./screenshots/login.png)

The authentication interface provides secure registration and login functionality using JWT-based authentication.

---

### 🔑 Forgot Password

![Forgot Password](./screenshots/forgot-password.png)

The Forgot Password feature allows users to start the password recovery process.

---

### 🔒 Reset Password

![Reset Password](./screenshots/reset-password.png)

The Reset Password page allows users to securely create a new password for their account.

---

# 🌐 Deployment

### Frontend

**Vercel**

🔗 **Live Website:**  
YOUR_VERCEL_URL

The Next.js frontend is deployed using Vercel for fast and scalable production hosting.

---

### Backend

**Render**

🔗 **Backend API:**  
https://ai-student-companion.onrender.com

The Express.js backend is deployed on Render and provides REST APIs for authentication, AI conversations, tasks, profile management, and chat history.

---

### Database

**Aiven Cloud**

The application uses a MySQL database hosted on Aiven Cloud for persistent storage of:

- Users
- Tasks
- Chat Sessions
- Chat Messages
- User-related application data

---

# 🚀 Getting Started

## Prerequisites

Before running the project locally, make sure you have:

- Node.js
- npm
- MySQL
- Gemini API Key
- Git

---

## Clone Repository

```bash
git clone https://github.com/Priyanshiagarwal2006/ai-student-companion-frontend.git


**Bas isko poora ek saath copy-paste karna hai.** Screenshot wale `YOUR_..._SCREENSHOT_URL` baad mein apne GitHub screenshot 
