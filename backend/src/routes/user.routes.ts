import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";

const router = Router();

router.get("/", UserController.list);
router.post("/", UserController.create);
router.put("/:id", UserController.update);

export default router;
