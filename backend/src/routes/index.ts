import { Router } from "express";
import userRoutes from "./user.routes.js";
import ticketRoutes from "./ticket.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/tickets", ticketRoutes);

export default router;
