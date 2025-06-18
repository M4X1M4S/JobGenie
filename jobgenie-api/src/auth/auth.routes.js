import express from "express";
import { signup, login } from "./auth.controller.js";

const router = express.Router();

router.post("/signup", signup); // /api/auth/signup
router.post("/login", login); // /api/auth/login

export default router;
