import { useState } from "react";
import type { FormEvent } from "react";
import api from "../api/client";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      alert("Login successful");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

        <button style={{ marginTop: 15 }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
