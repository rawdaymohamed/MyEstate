import { Router } from "express";
import { get, getAll, remove } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = Router();

router.get("/:id", verifyToken, get);
// router.put("/:id", verifyToken, uploadMiddleware, edit);
router.delete("/:id", verifyToken, remove);
router.get("/", verifyToken, getAll);
export default router;
