# 📘 Smart Attendance System

An automated attendance tracking system with offline capabilities and Firebase backend.

## 🔐 Security Setup

**IMPORTANT:** Never commit your Firebase credentials to git!

### Option 1: Using JSON Key File (Quick Setup)

1. Download your Firebase service account key from Firebase Console
2. Copy the example file:
   ```bash
   cp firebase-key.example.json firebase-key.json
   ```
3. Replace the placeholder values in `firebase-key.json` with your actual Firebase credentials
4. The `.gitignore` file will prevent this from being committed

### Option 2: Using Environment Variables (Recommended)

1. Install dotenv:
   ```bash
   npm install dotenv
   ```
2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
3. Fill in your Firebase credentials in the `.env` file
4. Update `Alexa.js` to use environment variables (see code comments)

## 🚀 Installation

```bash
npm install
```

## 📦 Dependencies

- express
- body-parser
- firebase-admin

## ▶️ Running the Application

```bash
node Alexa.js
```

The server will start on port 3000.

## 📝 Features

- Teacher login system
- Multi-class attendance tracking
- Offline data storage
- SMS notifications for absent students
- CSV export functionality

## ⚠️ Security Best Practices

1. ✅ Firebase keys are now excluded via `.gitignore`
2. ✅ Use environment variables for production
3. ✅ Never share your `.env` or `firebase-key.json` files
4. ✅ Rotate keys if they were accidentally exposed

## 🔄 Migration from Exposed Keys

If your keys were previously committed:

1. Go to Firebase Console → Project Settings → Service Accounts
2. Generate a new private key
3. Delete the old key from Firebase
4. Update your local `firebase-key.json` with the new key
5. Remove sensitive data from git history:
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch firebase-key.json" \
   --prune-empty --tag-name-filter cat -- --all
   ```
