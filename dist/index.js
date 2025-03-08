"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// by doing npx prisma generate -> the User and Todo classes are generated on which we can run User.findOne() like that, so basically they are clients
const client_1 = require("@prisma/client");
console.log(process.env.DATABASE_URL);
const prisma = new client_1.PrismaClient();
function updateUser(email, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield prisma.user.update({
                where: { email: email },
                data: {
                    firstName: params.firstName,
                    lastName: params.lastName,
                },
            });
            console.log(result);
        }
        catch (e) {
            console.log(e);
        }
    });
}
updateUser("Aditya11@gmai2.com", {
    firstName: "firstNameChanged",
    lastName: "lastNameChanged",
});
