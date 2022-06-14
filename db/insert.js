const { db } = require("./dbConnection");

async function insert(user) {
    try {
        await db("users").insert(user);
    } catch(err) {
        console.log('err', err);
    }
}
