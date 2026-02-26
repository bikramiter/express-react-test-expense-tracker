import { Router } from "express";
import * as expenseController from "./expense.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate.middleware";
import { createExpenseSchema } from "./expense.schema";

const router = Router();

router.post(
  "/",
  authenticate,
  validate(createExpenseSchema),
  expenseController.create,
);

router.get("/", authenticate, expenseController.list);

export default router;
