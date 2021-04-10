var express = require("express");
var router  = express.Router();


router.get("/10eng",function(req,res){
	res.render("10eng");
});

module.exports= router;