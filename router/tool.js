const tool = new Map();
tool.set("date", () => {
  return Date.now() + "";
});
module.exports = (app) => {
  app.use((ctx, next) => {
    console.log(ctx.path);
    const [, apppath, methodname] = ctx.path.split("/");
    console.log(apppath, methodname);
    if (apppath === "tool" && tool.get(methodname)) {
      ctx.body = tool.get(methodname)(ctx.query);
      console.log(`set request ${ctx.url} body`);
      return;
    }
    next();
  });
};
