import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/songs.route.js";
import albumRoutes from "./routes/albums.route.js";
import statRoutes from "./routes/stats.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
  connectDB();
});
