import express from "express";
import admin from "./firebaseAdmin.js";

const router = express.Router();

router.post("api/users/login", async (req, res) => {
  const { token } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    console.log("User verified:", decoded);

    res.json({ message: "User verified successfully" });

  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
