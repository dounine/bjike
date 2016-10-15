var app = require('koa')();
var router = require("koa-router")();//路由中间件
var server = require('koa-static-cache');

router.get('/', function *(next) {//根路由
    this.redirect('/index.html');//重写向到登录页面
    this.status = 301;
});

app.use(server(__dirname+'/'),{
	maxAge: 365 * 24 * 60 * 60
});
app.use(router.routes());
app.listen(8081);
