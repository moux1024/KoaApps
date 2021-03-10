const { readdirSync } = require("fs"),
  pug = require("pug");
const spalist = readdirSync("./views");
module.exports = (app) => {
  app.use((ctx, next) => {
    console.log(ctx.path);
    const jslist = readdirSync("./dist");
    console.log(jslist);
    const [, apppath] = ctx.path.split("/"),
      qs = ctx.query;
    if (spalist.includes(apppath)) {
      ctx.body = pug.renderFile("./views/" + apppath + "/app.pug", {
        basedir: "views",
        app_js: jslist.find((name) => name.split(".")[0] === apppath),
      });
      console.log(`set request ${ctx.url} body`);
      return;
    }
    next();
  });
};
