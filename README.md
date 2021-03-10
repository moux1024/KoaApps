# KoaApps
a example of koa server

基于 koa 构建一个容纳多个 SPA 的项目,旨在共享公共插件库,提供统一 url 拦截,信息补充,重定向等功能

## 项目构建步骤

1. init
   使用`npm init`初始化项目,生成 package.json,配置 scripts 等信息

2. install
   使用`npm install -S koa webpack pug vue@next`安装基本依赖,用于处理 http 请求(koa),项目打包(webpack),服务端页面模板管理(pug)

3. 项目结构如下
   ```shell
   ├── apps # spa代码
   ├── deps # 公共依赖
   ├── dist # webpack output
   ├── middleware # koa中间件
   ├── router # 中间件路由
   ├── bin # 脚本库
   ├── config # 配置
   └── views # 页面模板代码
   ```
4. 编写 middleware/router
   处理静态文件与动态HTML请求
5. 开始开发 app1
   创建 views/app1/app1.pug,创建 apps/app1/app.js,引入vue3与vue-router

## 基础功能
1. 拦截localhost:3004/app1的请求,获取对应pug,生成HTML,包含vue的container和spa的index.js
2. localhost:3004/tool用url的方式提供一些常用方法,如服务器时间,可通过localhost:3004/tool/date获得
3. 在views/template/layout.pug中引入公共的js方法,如jq
4. 通过webpack对vue3模块打包

## 功能补充日志
