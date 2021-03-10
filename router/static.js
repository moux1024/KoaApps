const fs = require("fs"),
  path = require("path");
const source_type = [".png", ".jpeg", ".gif", ".js", ".css", ".jpg"];

// const webpack = require("webpack"),
//   config = require("../webpack.config.js"),
//   compiler = webpack(config),
//   devMiddleware = require('koa-webpack-dev-middleware'),
//   hotMiddleware = require('koa-webpack-hot-middleware');
module.exports = (app) => {
  // 常规静态文件请求,range型可在此扩展
  app.use(async (ctx, next) => {
    console.log("in static", ctx.path);
    console.log(path.resolve(`${__dirname}/../dist${ctx.path}`), "path");
    if (source_type.includes(path.extname(ctx.path))) {
      ctx.type = path.extname(ctx.path).slice(1);
      try {
        ctx.body = fs.createReadStream(
          path.resolve(`${__dirname}/../dist/${ctx.path.split("/").pop()}`)
        );
      } catch (error) {
        console.log(error);
        ctx.body = "Not Found";
        ctx.status = 404;
        return;
      }
      console.log(`set request ${ctx.url} body`);
      ctx.status = 200;
      return;
    }
    next();
  });
  // app.use(devMiddleware(compiler,{noInfo: true, publicPath: webpackConfig.output.publicPath}));
  // app.use(hotMiddleware(compiler));
};
