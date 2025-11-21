import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller.js";

const router = Router();

router.get("/", TicketController.list);
router.post("/", TicketController.create);
router.put("/:id", TicketController.update);
router.delete("/:id", TicketController.delete);

export default router;
