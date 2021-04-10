var express = require("express");
var router  = express.Router();


router.get("/10math",function(req,res){
	res.render("10math");
});

module.exports= router;