import express from "express";
import cors from "cors";
import authRoutes from "./auth/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Add prefix "/api/auth" to all auth routes
app.use("/api/auth", authRoutes);

export default app;
