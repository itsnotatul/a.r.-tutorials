var express = require("express");
var router  = express.Router();


router.get("/11eng",function(req,res){
	res.render("11eng");
});

module.exports= router;