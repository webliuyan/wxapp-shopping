const express=require("express");
const pool=require("./pool");
//创建express对象
var app=express();
//配置允许脚手架访问程序//加载跨域访问的组件
const cors=require("cors");
app.use(cors({
  origin:["http://localhost:3001","http://127.0.0.1:3001"],
  credentials:true
}));
//加载第三方模块，对模块进行配置
const session=require("express-session");
app.use(session({ 
  secret:"128位随机数字",   //安全字符串
  resave:false,            //请求保存
  saveUninitialized:true,  //初始化保存
  cookie:{
    maxAge:1000*60*60*24
  }
}));
app.listen(3000);
app.use(express.static(__dirname+"/public"));//__dirname当前程序所属目录的绝对路径
//功能：消息的分页显示
app.get("/getMessage",(req,res)=>{
  var pno = req.query.pno;          //页码
  var pageSize = req.query.pageSize;//页大小
 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=2}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }
 var progress = 0;
 var obj = {code:1};
 obj.uname = req.session.uname;
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(id) AS c FROM sp_message";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql =" SELECT id,title,";
     sql+=" ctime,content,img_url";
     sql+=" FROM sp_message";
     sql+=" LIMIT ?,?";
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
})
//功能fresh
app.get("/fresh",(req,res)=>{
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  //2.设置默认值
  if(!pno){pno=1};
  if(!pageSize){pageSize=7};
 // 3、创建正则表达式验证用户输入
  var reg=/^[0-9]{1,3}$/;
  // 4、如果出错停止函数运行
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小不正确"});
    return;
  }
  var progress=0;
  var obj={code:1};
  obj.uname=req.session.uname;
 // 5、创建sql1查询总记录数
 var sql="SELECT count(id) AS c FROM sp_fresh";
 pool.query(sql,(err,result)=>{
   if(err) throw err;
   var pageCount=Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }

 })
 // 6、创建sql2查询当前内容
 var sql="SELECT id,name,title,price,img_url FROM sp_fresh LIMIT ?,?" ;
 var offset=parseInt((pno-1)*pageSize);
     pageSize=parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err) throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
  })
})