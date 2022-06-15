const { db, closeConnection } = require("./db/dbConnection");
const request = require("supertest");
const { app } = require("./server");

afterAll(() => app.close());

beforeEach(() => db("users").truncate());

describe("user end point", () => {
  test("adding user", async () => {
    const response = await request(app)
        .post("/users")
        .send({ user: "Data"})
        .expect(200)
        .expect("Content-Type", /json/);
  });
});
