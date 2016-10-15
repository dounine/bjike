var app = require('koa')();
var server = require('koa-static');

app.use(server(__dirname+'/'));

app.listen(8081);
