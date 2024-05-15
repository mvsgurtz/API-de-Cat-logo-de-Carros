import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";

class HandleErrors {
  public static execute = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  };
}

export const handleErrors = HandleErrors.execute;