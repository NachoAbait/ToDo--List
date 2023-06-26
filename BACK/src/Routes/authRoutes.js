import { Router } from "express";
import {login, signup, logout} from "../Controllers/index.js" 
const router = Router();

router.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

router.post("/signup", signup);

router.post("/login", login);

router.post("/login", login);

router.post("/logout", logout);


export default router;
