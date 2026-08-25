# 🎓 AI Student Companion

### 🤖 AI-Powered Learning & Productivity Assistant

Helping students learn smarter through Artificial Intelligence, personalized learning assistance, task management, productivity tracking, and intelligent conversations.

[Live Demo](https://ai-student-companion-olive.vercel.app) • [Backend API](https://ai-student-companion.onrender.com) • [Features](#-features)
---

# 📖 About The Project

AI Student Companion is a modern AI-powered full-stack platform built to support students throughout their learning and productivity journey. It provides an intelligent environment where students can ask questions, understand complex concepts, solve coding and DSA problems, prepare for interviews and exams, and receive personalized academic assistance.

The platform brings AI-powered learning assistance together with task management, productivity tracking, secure authentication, and persistent chat history, creating a centralized workspace for both academic and everyday student activities.

With context-aware AI conversations, students can continue discussions naturally and access their previous conversations whenever needed. The application also enables users to organize daily tasks, monitor their productivity, and manage their profiles through a clean, responsive, and user-friendly interface.

Built with modern full-stack technologies and integrated with Google Gemini, AI Student Companion focuses on delivering a practical, reliable, and personalized digital learning experience for students.

---

# ✨ Features

### 🤖 AI Student Companion

An intelligent AI assistant built specifically for students to support learning, problem-solving, and academic preparation.

- Programming & Coding
- Data Structures & Algorithms
- DBMS & SQL
- Web Development
- AI & Machine Learning
- Interview & Exam Preparation
- Academic Questions
- Study Planning

### 💬 AI Chat & History

A persistent chat system that lets students maintain and continue their learning conversations.

- Context-aware conversations
- Multiple chat sessions
- Persistent chat history
- Continue previous conversations
- Delete chat sessions
- Database-backed messages
  

### 🧠 Context-Aware Learning

Previous messages are used as conversation context, enabling natural follow-up questions and more relevant AI responses without repeatedly explaining the topic.


### 🌐 Multi-Language Support

The AI assistant supports **English, Hindi, and Hinglish**, responding naturally according to the language used by the student.


### ✅ Task Management

A simple productivity system for organizing and tracking daily student activities.

- Create and manage tasks
- Mark tasks as completed
- Track pending and completed tasks
  

### 📊 Productivity Tracking

The dashboard provides a quick overview of student productivity through:

- Total Tasks
- Completed Tasks
- Pending Tasks
- Productivity Percentage
  

### 👤 Secure Authentication

A secure authentication system for managing user accounts and protected application features.

- User Registration & Login
- JWT Authentication
- Protected Routes
- Profile Management
- Password Recovery & Reset
  

### 🔐 Protected User Data

Authenticated users can securely access and manage their own profiles, tasks, chat sessions, and messages.


### ⚡ Reliable AI Integration

Gemini API integration includes automatic retry handling with exponential backoff for temporary `429`, `500`, and `503` errors, improving the reliability of AI responses.


### 📱 Responsive User Experience

A clean, responsive interface with intuitive navigation, reusable components, and a student-focused design optimized for a smooth learning experience.

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
```


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
