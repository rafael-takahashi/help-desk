import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import * as TicketService from "../services/ticket.service";

export const list = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const tickets = await TicketService.list();
    return res.json(tickets);
  } catch (err) {
    next(err);
  }
};

export const create = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const data: Prisma.TicketCreateInput = req.body;
    const ticket = await TicketService.create(data);
    return res.status(201).json(ticket);
  } catch (err) {
    next(err);
  }
};

export const update = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const data: Prisma.TicketCreateInput = req.body;
    const updated = await TicketService.update(id, data);
    return res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    await TicketService.remove(id);
    return res.status(204).send;
  } catch (err) {
    next(err);
  }
}
