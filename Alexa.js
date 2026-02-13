const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Support both environment variable (for Render) and local file
let serviceAccount;
if (process.env.FIREBASE_CONFIG) {
    serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
} else {
    serviceAccount = require(path.join(__dirname, 'firebase-key.json'));
}

if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

// 1. Attendance Post Logic
app.post("/attendance", async (req, res) => {
    try {
        const { name, status } = req.body;
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const attendanceRef = db.collection("attendance");
        const snapshot = await attendanceRef.where("name", "==", name).get();

        const batch = db.batch();
        snapshot.docs.forEach((doc) => {
            const data = doc.data();
            if (data.timestamp && data.timestamp.toDate() >= startOfDay) {
                batch.delete(doc.ref);
            }
        });
        await batch.commit();

        await attendanceRef.add({
            name,
            status,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        });
        res.send({ success: true });
    } catch (err) { res.status(500).send({ error: err.message }); }
});

// 2. Simple Login Route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    
    // Aapke naam ke hisaab se credentials update kar diye hain
    if(username === "Roop Raj Kumar Shrivastava" && password === "12515864") {
        res.send({ 
            success: true, 
            teacher: "Roop Raj Kumar Shrivastava", 
            class: "BCA Data Science (LPU)" 
        });
    } else {
        res.status(401).send({ success: false, message: "Username ya Password galat hai bhai!" });
    }
});

// 3. Reset Route
app.delete("/reset-attendance", async (req, res) => {
    try {
        const snapshot = await db.collection("attendance").get();
        const batch = db.batch();
        snapshot.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        res.send({ success: true });
    } catch (err) { res.status(500).send(err.message); }
});

app.get("/get-attendance", async (req, res) => {
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const snapshot = await db.collection("attendance").where("timestamp", ">=", startOfDay).get();
        const records = snapshot.docs.map(doc => doc.data());
        res.send(records);
    } catch (err) { res.status(500).send(err.message); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));