import { Prisma } from "@prisma/client";
import { prisma } from "../config/db";

export const list = async () => {
  return prisma.ticket.findMany();
};

export const create = async (data: Prisma.TicketCreateInput) => {
  return prisma.ticket.create({ data });
};

export const update = async (id: number, data: Prisma.TicketUpdateInput) => {
  return prisma.ticket.update({
    where: { id },
    data,
  })
};

export const remove = async (id: number) => {
  return prisma.ticket.delete({ where: { id } })
};
