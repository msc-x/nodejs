/*
 * @Author: msc
 * @Date: 2020-11-26 20:41:18
 * @LastEditors: msc
 * @LastEditTime: 2020-11-26 21:26:17
 * @FilePath: \weekf:\代码\三阶段\week1\day4\03_cookie.js
 * @Copyright (C) 2020 msc. All rights reserved.
 * @Description: 
 */
//导入模块
const express=require("express")

//导入中间件
const cookieparser=require("cookie-parser");

//创建WEB实例
const app=express();

//使用中间件
app.use(cookieparser());
//监听路由
app.get('/',(req,res)=>{
    if(req.cookies.username){
        res.send('欢迎回来'+req.cookies.username)

    }else{
        res.cookie('username',"有一说一确实", {maxAge: 86400 * 1000},)
        res.send('欢迎成为我们新用户')

    }
})

//启动服务
app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})


