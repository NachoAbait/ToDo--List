import { Router } from "express";
const router = Router();
import {
  login,
  signup,
  logout,
  profile,
} from "../Controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
