import { Request, Response, NextFunction } from "express";

export const signupController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  //create a new user in the DB using email and password provided

  res.status(201).send({ email: email, password: password });
};
