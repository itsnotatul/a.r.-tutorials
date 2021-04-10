var express = require("express");
var router  = express.Router();


router.get("/12math",function(req,res){
	res.render("12math");
});

module.exports= router;