import { Prisma } from "@prisma/client";
import { prisma } from "../config/db";

export const list = async () => {
  return prisma.user.findMany();
}

export const create = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const update = async (id: number, data: Prisma.UserUpdateInput) => {
  return prisma.user.update({
    where: { id },
    data,
  })
};
