import { Request, Response } from "express";

export const register = (_req: Request, res: Response) => {
  res.status(200).json({ message: "Register endpoint - not implemented yet" });
};

export const login = (_req: Request, res: Response) => {
  res.status(200).json({ message: "Login endpoint - not implemented yet" });
};
