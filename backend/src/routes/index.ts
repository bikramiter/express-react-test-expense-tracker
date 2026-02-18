import { Router } from "express";
import authRouter from "../modules/auth/auth.routes";

const router = Router();

// Health / root route
router.get("/", (_req, res) => {
  res.status(200).send("API is running");
});

router.use("/api/auth", authRouter);

export default router;
