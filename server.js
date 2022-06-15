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
  const { firstName } = ctx.request.body;
  console.log("ctx.request.body", ctx.request.body);
  //const userExist = await select;
  await insert(ctx.request.body);
  console.log("firstName", firstName);
  ctx.body = { message: `${firstName} created account` };
  ctx.status = 200;
});

app.use(router.routes());

module.exports = { app: app.listen(3003) };
