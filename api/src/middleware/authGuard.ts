import { Request, Response, NextFunction } from "express";

export function authGuard(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated() && req.user && (req.user as any).accessToken) {
    return next();
  } else {
    res.status(401).send("Unauthorized: Access is denied");
  }
}
