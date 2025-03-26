import { Request, Response, NextFunction } from "express";

export const signupController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  res.status(201).send({ email: email, password: password });
};
