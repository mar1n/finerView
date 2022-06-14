const { db } = require("./dbConnection");

async function insert(user) {
    await db("users").insert(user);
}

module.exports = insert;
