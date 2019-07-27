const express=require('express');
const multer =require('multer');
const app=express();
const nodemailer = require("nodemailer");
const email=require("email");
const bodyParser=require('body-parser');
const path=require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

 app.get('/',function(req,res){
  res.render('start');
});

 app.get('/resume',function(req,res){
  res.render('resume');
 });

var storage =   multer.diskStorage({  
  destination:'./public/uploads/',  
  filename: function (req, file, callback) {  
    callback(null, file.fieldname +'-'+Date.now()+path.extname(file.originalname));  
  }  
});   
const upload = multer({ storage : storage});  



app.post('/resumei',upload.single('myfile'),function(req,res){

  var name=req.body.name;
  var til=req.body.intl;
  var email=req.body.email;
  var dmt=req.body.dept;
  var rear=req.body.year;
  var lan=req.body.prolan;
  var design=req.body.Design;
  var other=req.body.other;
  var cul=req.body.culture;
  var txt=req.body.text;
  var inter=req.body.Interest;
  var work=req.body.Work;
  var conference=req.body.conf;
  var sports=req.body.sport;
  var services=req.body.service;
  var award=req.body.award;
  var hobbie=req.body.hobbie;
  var date=req.body.date;
  var expr=req.body.expr;
  var exper=req.body.exper;
  var  exprs;
  var dates;
  var expers;
  var  exprss;
  var datess;
  var experss;
  for(var i=1;i<=5;i++){
        dates = "dates"+i;
        exprs = "exprs"+i;
        expers= "expers"+i;
        datess = req.body.dates;
        exprss =req.body.exprs;
        experss=req.body.expers;
    }
  var dree;
  var ins;
  var yr;
  var per; 
  var drees;
  var inss;
  var yrs;
  var  pers;
  for(var i=1;i<=5;i++){
        dree ="dree"+i;
        ins="ins"+i;
        yr ="yr"+i;
        per="per"+i;
        drees = req.body.dree;
        inss =req.body.ins;
        yrs=req.body.yr;
        pers=req.body.per;
    }
  var school=req.body.school;
  var pass=req.body.pass;
  var prnt=req.body.prnt;
  var school1=req.body.school1;
  var pass1=req.body.pass1;
  var prnt1=req.body.prnt1;
  var deg=req.body.deg2;
  var school2=req.body.school2;
  var pass2=req.body.pass2;
  var prnt2=req.body.prnt2;
  var phone=req.body.phone;  

  
  console.log(" name = "+name+", email is "+email+",department"+dmt+",lan"+lan+",image"+req.file);
  res.render('resumei',{name,til,email,dmt,rear,lan,design,other,cul,txt,inter,work,conference,
  sports,services,award,hobbie,date,expr,exper,datess,exprss,experss,school,pass,prnt,school1,pass1,prnt1,
  school2,pass2,prnt2,deg,yrs,inss,drees,pers,phone,file:`uploads/${req.file.filename}`});

});

app.post('/design1',upload.single('myfile'),function(req,res){

  var name=req.body.name;
  var til =req.body.intl;
  var email=req.body.email;
  var dmt=req.body.dept;
  var rear=req.body.year;
  var lan=req.body.prolan;
  var design=req.body.Design;
  var other=req.body.other;
  var cul=req.body.culture;
  var txt=req.body.text;
  var inter=req.body.Interest;
  var work=req.body.Work;
  var conference=req.body.conf;
  var sports=req.body.sport;
  var services=req.body.service;
  var award=req.body.award;
  var hobbie=req.body.hobbie;
  var date=req.body.date;
  var expr=req.body.expr;
  var exper=req.body.exper;
  var school=req.body.school;
  var pass=req.body.pass;
  var prnt=req.body.prnt;
  var school1=req.body.school1;
  var pass1=req.body.pass1;
  var prnt1=req.body.prnt1;
  var deg=req.body.deg2;
  var school2=req.body.school2;
  var pass2=req.body.pass2;
  var prnt2=req.body.prnt2;
  var phone=req.body.phone; 
    var  exprs;
  var dates;
  var expers;
  var  exprss;
  var datess;
  var experss;
  for(var i=0;i<=5;i++){
        dates = "dates"+i;
        exprs = "exprs"+i;
        expers= "expers"+i;
        datess = req.body.dates;
        exprss =req.body.exprs;
        experss=req.body.expers;
    }
  var dree;
  var ins;
  var yr;
  var per; 
  var drees;
  var inss;
  var yrs;
  var  pers;
  for(var i=0;i<=5;i++){
        dree ="dree"+i;
        ins="ins"+i;
        yr ="yr"+i;
        per="per"+i;
        drees = req.body.dree;
        inss =req.body.ins;
        yrs=req.body.yr;
        pers=req.body.per;
    } 
  
  console.log(" name = "+name+", email is "+email+",department"+dmt+",phone"+phone+",image"+req.file.filename);
  res.render('design1',{name,til,email,dmt,rear,lan,design,other,cul,txt,inter,work,conference,
  sports,services,award,hobbie,date,expr,exper,datess,exprss,experss,school,pass,prnt,school1,pass1,prnt1,
  school2,pass2,prnt2,deg,phone,yrs,inss,drees,pers,file:`uploads/${req.file.filename}`});
});

app.post('/resume',function(req,res){
var name=req.body.name;
console.log(" name = "+name);
  res.render('resume',name);
});


app.post('/start',function(req,res){
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pravincse99@gmail.com',
    pass: '80987940'
  }
});

var mailOptions = {
  from: req.body.do,
  to: req.body.subject,
  subject: req.body.content,      
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.end("error");
  } else {
    console.log('Email sent: ' + info.response);
    var data="sent";
    res.end("sent");
  }
});
});



app.listen(8000);
console.log('server run at port 8000');