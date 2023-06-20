import { Router } from "express";
import { getList } from "../Controllers/index.js";

const router = Router();

router.get("/", getList);

export default router;
