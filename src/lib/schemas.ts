import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Description is required"),
  price: z.string().refine((val) => /^\d+$/.test(val), {
    message: "Price must be a number",
  }),
});

//sign-in
export const SignInSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid work email address")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email cannot exceed 100 characters"),
  
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password cannot exceed 50 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
});
