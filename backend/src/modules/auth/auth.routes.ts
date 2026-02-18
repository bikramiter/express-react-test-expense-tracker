import { Router } from "express";
import * as authController from "./auth.controller";

const router = Router();

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

export default router;
