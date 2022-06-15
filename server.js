const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body-parser");
const { db } = require("./db/dbConnection");

const insert = require("./db/insert");
const select = require("./db/select");

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.put("/users", async (ctx) => {
  const { firstName } = ctx.request.body;

  await insert(ctx.request.body);

  ctx.body = { message: `${firstName} created account` };
  ctx.status = 200;
});

app.use(router.routes());

module.exports = { app: app.listen(3000) };
