import prisma from "../../lib/prisma";
import { CreateExpenseInput } from "./expense.schema";

export const createExpense = async (
  userId: string,
  data: CreateExpenseInput,
) => {
  return prisma.expense.create({
    data: {
      amount: data.amount,
      title: data.title,
      userId: userId,
    },
  });
};

export const getUserExpenses = async (userId: string) => {
  return prisma.expense.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};
