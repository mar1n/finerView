const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body-parser");

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.post("/users", async (ctx) => {
  ctx.body = { message: "Welcome" };
  ctx.status = 200;
});

app.use(router.routes());

module.exports = { app: app.listen(3000) };
