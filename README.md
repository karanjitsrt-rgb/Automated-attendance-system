# 🎓 Automated Attendance System

A modern, voice-enabled attendance tracking system built for educational institutions. This web-based solution streamlines the attendance process with real-time Firebase integration, intuitive UI, and secure authentication.

## 🌐 Live Demo
**Frontend**: [https://automation-attendance-system.netlify.app/](https://automation-attendance-system.netlify.app/)  
**Backend API**: [https://automated-attendance-system-backend.onrender.com](https://automated-attendance-system-backend.onrender.com)

## ✨ Features

### Core Functionality
- 📝 **Real-time Attendance Tracking** - Mark students present/absent with instant updates
- 🔐 **Secure Teacher Authentication** - Password-protected access to attendance portal
- 📊 **Live Statistics** - View present/absent counts in real-time
- 🔄 **Session Management** - Reset daily attendance with one click
- 💾 **Persistent Storage** - All data stored securely in Firebase Firestore
- 🎨 **Modern UI** - Clean, professional interface with smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

### Technical Highlights
- **Voice Integration Ready** - Designed for Alexa voice command integration
- **Cloud-Based** - No local database required, accessible from anywhere
- **RESTful API** - Clean backend architecture for easy integration
- **Real-time Sync** - Automatic data synchronization across all sessions

## 🛠️ Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Responsive design with modern UI/UX principles
- Deployed on **Netlify**

### Backend
- **Node.js** with Express.js
- **Firebase Admin SDK** for authentication & Firestore database
- RESTful API architecture
- CORS enabled for cross-origin requests
- Deployed on **Render.com**

### Database
- **Firebase Firestore** - NoSQL cloud database
- Real-time data synchronization
- Secure, scalable, and reliable

## 📋 How It Works

1. **Teacher Login** - Secure authentication with credentials
2. **View Student Roster** - See list of all enrolled students
3. **Mark Attendance** - Click P (Present) or A (Absent) for each student
4. **Real-time Updates** - Statistics update instantly as you mark attendance
5. **Submit Report** - Generate final attendance report for the day
6. **Reset Option** - Clear all data for a fresh start

## 🚀 API Endpoints

```
POST   /login              - Teacher authentication
POST   /attendance         - Mark student attendance
GET    /get-attendance     - Retrieve today's attendance records
DELETE /reset-attendance   - Clear all attendance data
```

## 🎯 Use Cases

- **Educational Institutions** - Schools, colleges, universities
- **Training Centers** - Workshops, coaching classes
- **Corporate Events** - Seminars, meetings, conferences
- **Remote Learning** - Online classes attendance tracking

## 🔒 Security Features

- Password-protected teacher portal
- Firebase credentials stored securely (not in repository)
- Environment variable configuration for sensitive data
- HTTPS encryption on all deployed services

## 💡 Future Enhancements

- Voice command integration with Alexa/Google Assistant
- Student self-check-in with QR codes
- Email/SMS notifications to parents
- Monthly attendance reports and analytics
- Multi-class support for different courses
- Attendance history and trends visualization

## 👥 Student Roster

Current implementation supports tracking for:
Partik, Salman, Aditya, Aryan, Sharukesh, Karanjit, Garav, Abhishek, Raj, Satyarth, Yash, Shivam

## 📄 License

MIT License - Free to use and modify

## 🤝 Contributing

This project was created for a competition. Feel free to fork and enhance!

---

**Built with ❤️ for modern education**
