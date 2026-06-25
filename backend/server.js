import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateContent } from "./routes/generate.js";

dotenv.config({ path: new URL(".env", import.meta.url) });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Business Website Builder API is running 🚀" });
});

app.post("/api/generate", generateContent);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
