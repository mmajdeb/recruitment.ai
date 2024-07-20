// auth.ts
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "./types";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.REDIRECT_URL as string,
    },
    (accessToken, refreshToken, profile, done) => {
      // Save the token in the session
      const user = {
        ...profile,
        accessToken,
        refreshToken,
      };
      return done(null, user);
    }
  )
);

// Serialize user into the sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the sessions
passport.deserializeUser((user, done) => {
  done(null, user as User);
});
