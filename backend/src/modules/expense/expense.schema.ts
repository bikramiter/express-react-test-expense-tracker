import { z } from "zod";

export const createExpenseSchema = z.object({
  amount: z.number().positive("Amount must be greater than 0"),
  title: z.string().min(1, "Title is required"),
});

export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;
