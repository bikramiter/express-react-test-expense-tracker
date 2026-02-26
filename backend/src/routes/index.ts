import { Router } from "express";
import authRouter from "../modules/auth/auth.routes";
import expenseRouter from "../modules/expense/expense.routes";

const router = Router();

// Health / root route
router.get("/", (_req, res) => {
  res.status(200).send("API is running");
});

router.use("/api/auth", authRouter);

router.use("/api/expenses", expenseRouter);

export default router;
