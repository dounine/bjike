var app = require('koa')();
var server = require('koa-static-cache');

app.use(server(__dirname+'/'),{
	maxAge: 365 * 24 * 60 * 60
});

app.listen(8081);
