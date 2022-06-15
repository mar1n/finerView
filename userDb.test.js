const { db } = require("./db/dbConnection");
const insert = require("./db/insert");
const select = require("./db/select");
const { user1, user2 } = require("./utils/user")

beforeEach(() => db("users").truncate());

describe('user registration', () => {
    test('insert user', async () => {
        await insert(user1);

        const retriveUser = await select.firstName("Szymon");

        expect(retriveUser[0].firstName).toEqual("Szymon");
    });

    test('duplicate email', async () => {
        try {
            await insert(user1);
            await select.duplicateEmail(user2.email);
        } catch(err) {
            expect(err).toEqual("This email exist!!!");
        }
    });
});