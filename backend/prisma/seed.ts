import { PrismaClient, TicketPriority } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ----- Users -----
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@example.com",
    },
  });

  const user = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      name: "John User",
      email: "user@example.com",
    },
  });

  // ----- Tickets -----
  await prisma.ticket.create({
    data: {
      title: "First ticket",
      description: "Test ticket",
      userId: admin.id,
      priority: TicketPriority.HIGH,
    },
  });

  await prisma.ticket.create({
    data: {
      title: "New ticket",
      description: "Automatically generated",
      userId: user.id,
      priority: TicketPriority.MEDIUM,
    },
  });

  console.log("Database seeded!");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
