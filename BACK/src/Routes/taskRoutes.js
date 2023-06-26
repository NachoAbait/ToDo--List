import { Router } from "express";
const router = Router();

import { task } from "../Controllers/taskController.js";
import { authRequired } from "../middlewares/validateToken.js";

router.get("/task", authRequired, task);

export default router;
