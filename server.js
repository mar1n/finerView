const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body-parser");

const app = new Koa();
const router = new Router();

app.use(bodyParser());

module.exports = { app: app.listen(3000) };
