const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body-parser");
const cors = require("@koa/cors");
const { db } = require("./db/dbConnection");

const insert = require("./db/insert");
const select = require("./db/select");

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors());

router.put("/users", async (ctx) => {
  const { firstName, email } = ctx.request.body;
  const user = ctx.request.body;

  try {
    await select.duplicateEmail(email);
    await insert(user);
    ctx.body = { message: `${firstName} created account` };
    ctx.status = 200;

  } catch(error) {
    ctx.body = { message: "This email is in use"};
    ctx.status = 409
  }

});

app.use(router.routes());

module.exports = { app: app.listen(3003) };
