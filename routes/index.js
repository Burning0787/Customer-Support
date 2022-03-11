var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require ("fs");
/* GET home page.*/ 
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit-form', function(req, res,) {
  const senderName = req.body.senderName
  const email = req.body.email
  const Phone_No = req.body.Phone_No
  const Query = req.body.Query
  let content = `sent by: ${senderName}
  email:${email}
  Phone_No:${Phone_No}
  Query:${Query}
  `;
  fs.writeFile(path.join("C:\\Users\\dell\\VSC\\customersupporter","..message.txt"),content,function(err){
    if (err){
      console.log(err);
      return;
    }

res.render("submitted")
  })  
});

module.exports= router;
