# Automated Attendance System

Voice-enabled attendance tracking system with Alexa integration, Firebase backend, and web interface.

## 🚀 Deployment

### Backend (Render.com)
1. Go to [Render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repo: `karanjitsrt-rgb/Automated-attendance-system`
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variable:
   - Go to "Environment" tab
   - Add your Firebase credentials as JSON in environment variable
6. Click "Create Web Service"
7. Copy your backend URL (e.g., `https://your-app.onrender.com`)

### Frontend (Netlify)
1. Update `index.html` line 73: Replace `const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';` 
   
   With: `const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://your-render-backend-url.onrender.com';`

2. Push to GitHub
3. Netlify will auto-deploy

## 🔐 Security Note
- Firebase keys are in `.gitignore` and won't be pushed to GitHub
- Upload Firebase key manually to Render as environment variable

## 📝 Login Credentials
- Username: `Roop Raj Kumar Shrivastava`
- Password: `12515864`

## Local Development
```bash
npm install
npm start
```
Open http://localhost:3000/index.html
