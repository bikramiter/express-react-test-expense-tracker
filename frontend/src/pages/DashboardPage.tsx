import { useEffect, useState } from "react";
import api from "../api/client";

interface Expense {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
}

function DashboardPage() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
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

  const handleCreateExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/api/expenses", {
        title,
        amount: Number(amount),
      });

      setExpenses((current) => [response.data.expense, ...current]);
      setTitle("");
      setAmount("");
    } catch (err: any) {
      setError("Failed to create expense");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <form onSubmit={handleCreateExpense} style={{ marginBottom: 20 }}>
        <h3>Add Expense</h3>

        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          Add
        </button>
      </form>
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
