var express = require("express");
var router  = express.Router();


router.get("/9math",function(req,res){
	res.render("9math");
});

module.exports= router;