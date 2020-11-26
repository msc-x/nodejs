/*
 * @Author: msc
 * @Date: 2020-11-26 19:57:49
 * @LastEditors: msc
 * @LastEditTime: 2020-11-26 22:25:06
 * @FilePath: \weekf:\代码\三阶段\week1\day4\02_exceptionmiddleware.js
 * @Copyright (C) 2020 msc. All rights reserved.
 * @Description: 
 */
//导入模块
const express=require("express");
const fs=require("fs")

//创建WEB实例
const app=express();

app.use(express.static('public'))
//监听路由
app.get('/',(req,res)=>{
    try{let url="dadwrqrqrq.txt"
    fs.readFileSync(url)

    }catch{
        throw new Error('没读到啊')

    }
})
//异常处理中间件
app.use((err,req,res,text)=>{
    res.send("报错消息"+err.meessage)
})
//404中间件
app.use((req,res,next)=>{
    res.status(404);
    res.send('<a href="./index.html">点击跳转</a>')
})

//启动服务
app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080 ")
})


