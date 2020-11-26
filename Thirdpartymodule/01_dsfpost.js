/*
 * @Author: msc
 * @Date: 2020-11-26 19:39:08
 * @LastEditors: msc
 * @LastEditTime: 2020-11-26 19:50:50
 * @FilePath: \weekf:\代码\三阶段\week1\day4\01_dsfpost.js
 * @Copyright (C) 2020 msc. All rights reserved.
 * @Description: 
 */
//导入模块
const express =require("express");

//导入中间件
const bodyparser=require("body-parser");

//创建WEB实例
const app=express();

//使用中间件
app.use(bodyparser.urlencoded({extended:false}));

//监听路由
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("空空如也")
})

// 启动服务
app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})