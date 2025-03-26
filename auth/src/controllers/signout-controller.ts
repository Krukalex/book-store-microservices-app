import { Request, Response, NextFunction } from "express";

export const signoutController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //invalidate access token cookie in user session
  res.status(201).send({ response: "user signed out" });
};
