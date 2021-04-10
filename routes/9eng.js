var express = require("express");
var router  = express.Router();


router.get("/9eng",function(req,res){
	res.render("9eng");
});

module.exports= router;