import express from "express";

const app = express();

// Basic middleware (safe to include now)
app.use(express.json());

// Temporary health route
app.get("/", (_req, res) => {
  res.status(200).send("API is running");
});

export default app;
