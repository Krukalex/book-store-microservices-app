import { Request, Response, NextFunction, response } from "express";

export const currentUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //find the userId of the current user based on the token stored in that users session
  //return the currently logged in user

  res.status(201).send({ response: "current user" });
};
