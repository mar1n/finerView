const { db, closeConnection } = require("./db/dbConnection");
const request = require("supertest");
const { app } = require("./server");

const insert = require("./db/insert");
const select = require("./db/select");

afterAll(() => app.close());

beforeEach(() => db("users").truncate());

describe("user end point", () => {
  test("adding user", async () => {
    const user = {
        firstName: "Szymon",
        sureName: "Dawidowicz",
        email: "cykcykacz@gmail.com",
        phoneNumber: "7784701540",
        gender: "M",
        dateOfBirth: "28-09-1985",
        comments: "asdzxcfhvbn"
    };
    const response = await request(app)
        .put("/users")
        .send(user)
        .expect(200)
        .expect("Content-Type", /json/);

    expect(response.body).toEqual({
        message: "Szymon created account"
    });
  });
});
