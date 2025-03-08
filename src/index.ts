import { log } from "console";
// by doing npx prisma generate -> the User and Todo classes are generated on which we can run User.findOne() like that, so basically they are clients

import { PrismaClient } from "@prisma/client";

console.log(process.env.DATABASE_URL);

const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const response = await prisma.user.create({
//     data: {
//       email: username,
//       password: password,
//       firstName: firstName,
//       lastName: lastName,
//     },
//     select: {
//       id: true,
//       password: true,
//     },
//   });
//   console.log(response);
// }

// async function main() {
//   await insertUser("Aditya11@gmai2.com", "123456", "Aditya", "Singh");
//   await insertUser("Aditya22@gmai3.com", "123456", "Aditya", "Singh");
//   await insertUser("Aditya33@gmai4.com", "123456", "Aditya", "Singh");

//   await prisma.$disconnect();
// }
// main();

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(email: string, params: UpdateParams) {
  try {
    const result = await prisma.user.update({
      where: { email: email },
      data: {
        firstName: params.firstName,
        lastName: params.lastName,
      },
    });

    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
updateUser("Aditya11@gmai2.com", {
  firstName: "firstNameChanged",
  lastName: "lastNameChanged",
});
