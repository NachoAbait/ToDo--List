import { Router } from "express";
import { getList } from "../Controllers/index.js";

const router = Router();

router.get("/", getList);

router.get("/signup", (req, res, next) => {
  res.json({ msg: "signup" });
});

router.post("/signup", (req, res, next) => {
  res.json({ msg: "signup" });
});

router.get("/login", (req, res, next) => {
  res.json({ msg: "login" });
});

export default router;
