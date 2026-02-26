import { useEffect } from "react";
import api from "./api/client";

function App() {
  useEffect(() => {
    api.get("/api/auth/login").catch(() => {
      console.log("Backend reachable");
    });
  }, []);

  return <h1>Expense Tracker</h1>;
}

export default App;
