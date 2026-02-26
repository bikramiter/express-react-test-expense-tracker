import { Request, Response } from "express";
import * as expenseService from "./expense.service";

export const create = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const expense = await expenseService.createExpense(userId, req.body);

    return res.status(201).json({
      message: "Expense created",
      expense,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Failed to create expense",
    });
  }
};

export const list = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const expenses = await expenseService.getUserExpenses(userId);

    return res.status(200).json({ expenses });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Failed to fetch expenses",
    });
  }
};
