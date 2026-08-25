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
                         👤 User
                           │
                           ▼
                 🎨 Next.js Frontend
                           │
                     REST API Requests
                           │
                           ▼
                 ⚙️ Express.js Backend
                    │       │       │
          ┌─────────┘       │       └─────────┐
          ▼                 ▼                 ▼
   🔐 Authentication    🤖 Gemini AI      ✅ Task APIs
       JWT                 │
          │                │
          └────────┬───────┘
                   ▼
              🗄️ MySQL


---

# 📷 Project Gallery

<table>
<tr>
<td align="center">

### 🏠 Home Dashboard

<img src="https://github.com/Priyanshiagarwal2006/ai-student-companion/blob/main/home.jpeg" width="400"/>

Home dashboard with tasks, productivity, AI assistance, and recent activities.

</td>

<td align="center">

### 🤖 AI Student Companion

<img src="https://github.com/Priyanshiagarwal2006/ai-student-companion/blob/main/ai.jpeg" width="400"/>

AI-powered assistant for learning, coding, and academic assistance.

</td>
</tr>

<tr>
<td align="center">

### ✅ Task Management

<img src="https://github.com/Priyanshiagarwal2006/ai-student-companion/blob/main/task.jpeg" width="400"/>

Manage daily tasks and track completed and pending activities.

</td>

<td align="center">

### 👤 User Profile

<img src="https://github.com/Priyanshiagarwal2006/ai-student-companion/blob/main/profile.jpeg" width="400"/>

View and manage user account information.

</td>
</tr>

<tr>
<td align="center">

### 🔐 Login

<img src="https://github.com/Priyanshiagarwal2006/ai-student-companion/blob/main/login.jpeg" width="400"/>

Secure user login using JWT authentication.

</td>

<td align="center">

### 📝 Registration

<img src="https://github.com/Priyanshiagarwal2006/ai-student-companion/blob/main/register.jpeg" width="400"/>

Create a new account with secure user registration.

</td>
</tr>
</table>
---

## Prerequisites

Before running the project locally, make sure you have:

- Node.js
- npm
- MySQL
- Gemini API Key
- Git

---

## 🔮 Future Improvements

- 📚 Personalized Study Plans
- 🎯 Learning Goals & Milestones
- 📈 Advanced Productivity Analytics
- 🔔 Study Reminders
- 📅 Study Schedule Management
- 🧠 Personalized AI Recommendations
- 📊 Learning Progress Analytics
- 🌙 Dark Mode
- 📱 Further Mobile Optimization
---

# ⭐ Thank You for Visiting This Repository!

AI Student Companion combines **Artificial Intelligence, learning, and productivity** to create a focused digital companion for students.

*Building smarter learning experiences, improving productivity, and using AI to make student life simpler.*
