import { useEffect, useState } from "react";
import api from "../api/client";

interface Expense {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
}

function DashboardPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await api.get("/api/expenses");
        setExpenses(response.data.expenses);
      } catch (err: any) {
        setError("Failed to load expenses");
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <h2>My Expenses</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DashboardPage;
