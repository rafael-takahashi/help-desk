import { Router } from "express";
import * as TicketController from "../controllers/ticket.controller.js";

const router = Router();

router.get("/", TicketController.list);
router.post("/", TicketController.create);
router.put("/:id", TicketController.update);
router.delete("/:id", TicketController.remove);

export default router;
