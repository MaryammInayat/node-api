const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            { name: "Alice", email: "alice@example.com" },
            { name: "Bob", email: "bob@example.com" },
            { name: "Charlie", email: "charlie@example.com" },
        ],
        skipDuplicates: true, // avoids inserting twice if already seeded
    });
    console.log("Seeded users!");
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
