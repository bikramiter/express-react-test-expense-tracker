import { Request, Response } from "express";
import * as authService from "./auth.service";

export const register = async (_req: Request, res: Response) => {
  try {
    const user = await authService.registerUser(_req.body);

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message || "Registration failed",
    });
  }
  //res.status(200).json({ message: "Register endpoint - not implemented yet" });
};

export const login = async (_req: Request, res: Response) => {
  try {
    const user = await authService.loginUser(_req.body);

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error: any) {
    return res.status(401).json({
      message: error.message || "Login failed",
    });
  }
  //res.status(200).json({ message: "Login endpoint - not implemented yet" });
};
