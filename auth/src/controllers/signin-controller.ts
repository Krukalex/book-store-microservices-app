import { Request, Response, NextFunction } from "express";

export const signinController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  //validate that email exists in db
  //validate that password matches one stored in db
  //if both check pass, create an auth token and store it as a cookie in the users session

  res.status(201).send({ email: email, password: password });
};
