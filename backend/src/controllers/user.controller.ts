import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import * as UserService from "../services/user.service.js";

export const list = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.list();
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

export const create = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const data: Prisma.UserCreateInput = req.body;
    const user = await UserService.create(data);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const update = async (req : Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const data: Prisma.UserCreateInput = req.body;
    const updated = await UserService.update(id, data);
    return res.status(201).json(updated);
  } catch (err) {
    next(err);
  }
};
