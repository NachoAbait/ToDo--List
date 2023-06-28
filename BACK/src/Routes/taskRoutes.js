import { Router } from "express";
const router = Router();
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../Controllers/taskController.js";
import { authRequired } from "../middlewares/validateToken.js";

router.get("/tasks", authRequired, getTasks);

router.post("/task", authRequired, createTask);

router.get("/task/:id", authRequired, getTask);

router.delete("/task/:id", authRequired, deleteTask);

router.put("/task/:id", authRequired, updateTask);

export default router;
