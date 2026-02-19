import { Router } from "express";
import * as authController from "./auth.controller";
import { validate } from "../../middleware/validate.middleware";
import { loginSchema, registerSchema } from "./auth.schema";

const router = Router();

// Register
router.post("/register", validate(registerSchema), authController.register);

// Login
router.post("/login", validate(loginSchema), authController.login);

export default router;
