import { Router } from "express";

const router = Router();

// Health / root route
router.get("/", (_req, res) => {
  res.status(200).send("API is running");
});

export default router;
