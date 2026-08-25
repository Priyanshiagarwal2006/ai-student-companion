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

AI Student Companion provides an intelligent learning assistant designed specifically around student needs. It helps users understand concepts, solve problems, prepare for exams and interviews, and get guidance across a wide range of technical and academic subjects.

It can assist with:

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

The platform provides a complete conversational experience where students can interact with the AI and maintain their learning discussions over time. Conversations are stored securely, allowing users to return to previous discussions whenever needed.

Users can create new chats, continue existing conversations, view chat history, and delete unwanted chat sessions.

### 🧠 Context-Aware Learning

The AI uses previous messages from the current conversation as context while generating responses. This allows students to ask follow-up questions naturally and continue a discussion without repeatedly explaining the same topic.

This makes the interaction feel more like a continuous learning conversation rather than separate questions and answers.

### 🌐 Multi-Language Support

The AI companion supports **English, Hindi, and Hinglish**, making the platform more accessible and comfortable for different students.

The assistant follows the language used by the student so that explanations remain natural and easy to understand.

### ✅ Task Management

The built-in task management system helps students organize their daily activities and keep track of their work from within the same platform.

Students can create tasks, view their tasks, mark completed activities, and keep track of pending work.

### 📊 Productivity Tracking

The dashboard provides a simple overview of the student's productivity by displaying total, completed, and pending tasks along with an overall productivity percentage.

This gives students a quick understanding of their progress and helps them stay organized.

### 👤 Secure Authentication

The application includes a complete authentication system to securely manage user accounts and protect personalized data.

It supports user registration, login, JWT-based authentication, protected routes, profile management, and password recovery and reset functionality.

### 🔐 Protected User Data

User-specific information is protected through authentication and backend authorization.

Authenticated users can securely access their own profile, tasks, chat sessions, and chat messages, ensuring that personal application data remains associated with the correct account.

### ⚡ Reliable AI Integration

The application integrates Google Gemini for AI-powered conversations and includes retry handling for temporary API failures.

When temporary `429`, `500`, or `503` errors occur, the backend uses exponential backoff to retry requests, improving the reliability and stability of the AI experience.

### 📱 Responsive User Experience

The platform is designed with a clean and responsive interface that works across different screen sizes.

Reusable components, simple navigation, consistent layouts, and a student-focused design provide a smooth and intuitive experience throughout the application.

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
