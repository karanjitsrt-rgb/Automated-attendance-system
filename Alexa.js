// Load environment variables
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Initialize Firebase Admin
let serviceAccount;

// Option 1: Use environment variables (recommended for production)
if (process.env.FIREBASE_PROJECT_ID) {
  serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
  };
} else {
  // Option 2: Use JSON key file (for development)
  try {
    serviceAccount = require(path.join(__dirname, 'firebase-key.json'));
  } catch (error) {
    console.error('❌ Firebase credentials not found!');
    console.error('Please create firebase-key.json or set environment variables.');
    console.error('See README.md for setup instructions.');
    process.exit(1);
  }
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

/* Attendance API */
app.post("/attendance", async (req, res) => {
  try {
    const record = req.body;

    await db.collection("attendance").add(record);

    /* SMS Trigger Logic */
    if (record.status === "Absent") {
      sendSMS(record);
    }

    res.send({ success: true });

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* Fake SMS Function */
function sendSMS(record) {
  console.log(
    `SMS → Parent of ${record.name}: छात्र आज अनुपस्थित था`
  );

  /* Real Integration Possible:
     Twilio / Fast2SMS / Textlocal */
}

app.listen(3000, () =>
  console.log("Server running on port 3000 🚀")
);
