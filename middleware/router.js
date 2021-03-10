const routers = require("../router");
console.log(routers);
module.exports = (app) => {
  routers.forEach(router => {
    router(app)
  });
};
