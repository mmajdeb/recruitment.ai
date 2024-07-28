import { Router } from "express";
import {
  googleAuth,
  googleAuthCallback,
  logout,
} from "../controllers/authController";

const router = Router();

router.get("/login", googleAuth);
router.get("/login/callback", googleAuthCallback);
router.get("/logout", logout);

export default router;
