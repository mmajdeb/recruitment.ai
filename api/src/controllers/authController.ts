import { Request, Response, NextFunction } from "express";
import passport from "passport";
import User from "../types";

export const googleAuth = passport.authenticate("google", {
  scope: ["profile"],
});

export const googleAuthCallback = [
  passport.authenticate("google", { failureRedirect: "/" }),
  (req: Request, res: Response) => {
    if (req.user) {
      const user = JSON.stringify(req.user);
      const encodedUser = encodeURIComponent(user);
      res.redirect(`http://localhost:5173/auth/callback?user=${encodedUser}`);
    } else {
      res.redirect("/");
    }
  },
];

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid", { path: "/" });
      res.json({ success: true }); // Return a JSON response
    });
  });
};
