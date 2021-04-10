var express = require("express");
var router  = express.Router();


router.get("/12chem",function(req,res){
	res.render("12chem");
});

module.exports= router;