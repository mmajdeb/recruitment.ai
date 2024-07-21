import express from "express";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import "./auth";
import User from "./types";
import { authGuard } from "./middleware/authGuard";
import cors from "cors";
import posts from "./data/posts";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Vite's default port
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 365 * 24 * 60 * 60 * 1000, // 365 day
      secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
      httpOnly: true, // Prevent JavaScript from accessing the cookie
      sameSite: "lax", // Prevent CSRF attacks
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/profile"); // Redirect to the React app
  }
);

app.get("/profile", authGuard, (req, res) => {
  res.json(req.user);
});

// Logout route
app.get("/logout", (req, res, next) => {
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
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
