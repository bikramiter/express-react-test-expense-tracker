import express from "express";
import rootRouter from "./routes/index";

const app = express();

// Basic middleware (safe to include now)
app.use(express.json());

// Mount routers
app.use("/", rootRouter);

export default app;
