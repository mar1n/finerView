const { db } = require("./db/dbConnection");
const insert = require("./db/insert");
const select = require("./db/select");

beforeEach(() => db("users").truncate());

describe('user registration', () => {
    test('insert user', async () => {
        const user = {
            firstName: "Szymon",
            sureName: "Dawidowicz",
            email: "cykcykacz@gmail.com",
            phoneNumber: "7784701540",
            gender: "M",
            dateOfBirth: "28-09-1985",
            comments: "asdzxcfhvbn"
        };

        await insert(user);

        const retriveUser = await select.firstName("Szymon");

        expect(retriveUser[0].firstName).toEqual("Szymon");
    });

    test('duplicate email', async () => {

        const user1 = {
            firstName: "Szymon",
            sureName: "Dawidowicz",
            email: "cykcykacz@gmail.com",
            phoneNumber: "7784701540",
            gender: "M",
            dateOfBirth: "28-09-1985",
            comments: "asdzxcfhvbn"
        };
        const user2 = {
            firstName: "Robert",
            sureName: "Lewandowski",
            email: "cykcykacz@gmail.com",
            phoneNumber: "7784701540",
            gender: "M",
            dateOfBirth: "28-09-1985",
            comments: "asdzxcfhvbn"
        };

        try {
            await insert(user1);
            await select.duplicateEmail(user2.email);
        } catch(err) {
            expect(err).toEqual("This email exist!!!");
        }
    });
});