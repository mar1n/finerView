const { db } = require("./db/dbConnection");

beforeEach(() => db("users").truncate());

describe('user registration', () => {
    test('insert user', async () => {
        await db("users").insert({
            firstName: "Szymon",
            sureName: "Dawidowicz",
            email: "cykcykacz@gmail.com",
            phoneNumber: "7784701540",
            gender: "M",
            dateOfBirth: "28-09-1985",
            comments: "asdzxcfhvbn"
        });

        const user = await db("users")
            .select()
            .where({ firstName: "Szymon"});
        
        expect(user[0].firstName).toEqual("Szymon");
    });

    test('duplicate email', async () => {
        await db("users").insert({
            firstName: "Szymon",
            sureName: "Dawidowicz",
            email: "cykcykacz@gmail.com",
            phoneNumber: "7784701540",
            gender: "M",
            dateOfBirth: "28-09-1985",
            comments: "asdzxcfhvbn"
        });
        await db("users").insert({
            firstName: "Robert",
            sureName: "Lewandowski",
            email: "cykcykacz@gmail.com",
            phoneNumber: "7784701540",
            gender: "M",
            dateOfBirth: "28-09-1985",
            comments: "asdzxcfhvbn"
        });

        const user = await db("users")
            .select();

        console.log('user', user);
    });
});