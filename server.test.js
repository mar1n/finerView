const { db, closeConnection } = require("./db/dbConnection");
const request = require("supertest");
const { app } = require("./server");

const insert = require("./db/insert");
const select = require("./db/select");

const { user1 } = require("./utils/user");

afterAll(() => app.close());

beforeEach(() => db("users").truncate());

describe("user end point", () => {
  test("adding user", async () => {
    const response = await request(app)
        .put("/users")
        .send(user1)
        .expect(200)
        .expect("Content-Type", /json/);

    expect(response.body).toEqual({
        message: "Szymon created account"
    });

    const userFromDb = await select.firstName(user1.firstName);

    expect(userFromDb[0].firstName).toEqual(user1.firstName);
  });
  test('duplicate email', () => {
    const response = await request(app)
        .put("/users")
        .send(user2)
        .expect(409)
        .expect("Content-Type", /json/);

    expect(response.body).toEqual({
        message: "This email is in use"
    });
  });
});
