import express from "express";
import cors from "cors";
import rootRouter from "./routes/index";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

// Mount routers
app.use("/", rootRouter);

export default app;
