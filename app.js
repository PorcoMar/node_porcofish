/*
* @Author: Porco_Mar
* @Date:   2018-05-12 11:29:09
 * @Last Modified by: PorcoMar
 * @Last Modified time: 2018-05-15 16:29:59
*/
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const indexRoute = require("./app/routes/index.route");
const userInfo = require('./app/routes/userInfo')

/*配置静态文件路径*/
app.use(express.static(path.join(__dirname, "public/dist")));
//使用ejs模板   /*这里写了使用ejs模板渲染也可以用html格式的，或者再变成html模板渲染也可以
app.set('views', path.join(__dirname, 'app/views'));
// app.set('view engine', 'ejs');
  app.engine('.html', require('ejs').renderFile);  
  app.set('view engine', 'html');



/*配置请求日志*/
app.use(logger("dev"));

/*解析application/json格式数据*/
app.use(bodyParser.json());

/*解析application/www-x-form-urlencoded格式数据*/
app.use(bodyParser.urlencoded({extended: false}));

/*解析cookie*/
app.use(cookieParser());

/*解析session*/
const session = require('express-session');
app.use(session({
    secret: "123456", //建议使用随机字符串
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 24 * 60 * 60 * 1000}
}));

/*配置路由*/
app.use("/", indexRoute);
// app.use("/userInfo", userInfo);

app.use((req,res,next)=>{
    let err = new Error("Error 404, the source is not found!");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.message);
    next();
});


module.exports = app;