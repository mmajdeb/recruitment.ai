import { Router } from "express";
import { getProfile } from "../controllers/userController";
import { authGuard } from "../middleware/authGuard";

const router = Router();

router.get("/profile", authGuard, getProfile);

export default router;
