/*
 * @Author: msc
 * @Date: 2020-11-26 21:27:21
 * @LastEditors: msc
 * @LastEditTime: 2020-11-26 21:37:36
 * @FilePath: \weekf:\代码\三阶段\week1\day4\04session.js
 * @Copyright (C) 2020 msc. All rights reserved.
 * @Description: 
 */
//导入模块
const express=require("express")

//导入第三方中间件cookie-session
const session=require("cookie-session")
//创建web实例
const app=express()

//使用中间件并配置
app.use(session({name:"sessionid",secret:"ddasfawq",maxAge:60*20*1000}))
//设置监听
app.get('/',(req,res)=>{
    if(!req.session["num"]){
        req.session["num"]=1;

    }else{
        req.session["num"]++;

    }
    res.send("你访问了"+req.session["num"])

})

//启动服务
app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})