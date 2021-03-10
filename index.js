const KOA = require("koa"),
  http = require("http"),
  // bodyParser = require("koa-bodyparser"), // 用来处理request的body
  app = new KOA();
process.env.NODE_ENV = "test"; // TODO:改为读取配置文件

// middleware
// app.use(bodyParser());
["router"].forEach((filename) => {
  require(`./middleware/${filename}`)(app);
});
http.createServer(app.callback()).listen(3004);
console.log("listen 3004");