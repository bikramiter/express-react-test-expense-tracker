import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";
import { LoginInput, RegisterInput } from "./auth.schema";

export const registerUser = async (data: RegisterInput) => {
  const { email, password } = data;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already in use");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
  };
};

export const loginUser = async (data: LoginInput) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" },
  );

  return {
    token,
    user: { id: user.id, email: user.email, createdAt: user.createdAt },
  };
};
