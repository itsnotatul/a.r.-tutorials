var express = require("express");
var router  = express.Router();


router.get("/12eng",function(req,res){
	res.render("12eng");
});

module.exports= router;