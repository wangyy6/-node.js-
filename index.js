//  const Koa = require('koa');
//  const app = new Koa();


//  // response
//   app.use(ctx => {
//   ctx.body = 'Hello Koa';
//  });
const express = require('express');
// 2.创建服务器的实例对象
const app = express();
const cors = require('cors');
const userRouter = require('./router/user');
app.use('/api', userRouter);
app.use(cors());
app.get('/', function(req, res){
    res.send('hello world');
  });
// 1.2 配置解析表单数据的中间件, 这个中间件只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));
 
// 1.3 只能解析parse application/json 格式
app.use(express.json());

// 3.启动服务器
app.listen(5500, () => {
    console.log('api server running at http:127.0.0.1:5500');
});

 var port = 5500
 var server = require("./server");
//  var router = require("./router");
 
//  server.start(router.route);
 
 
//  const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3030;
//  app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// //  });
  

//  const router = new Router();
 
//  router.get('/', (ctx, next) => {
//     // ctx.router available
//     ctx.body = "路由器接口增加成功"
//   });
 
//   app
//     .use(router.routes())
//     .use(router.allowedMethods());

//  console.log("服务器正在运行")
//  app.listen(port)});