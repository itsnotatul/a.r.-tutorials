var express = require("express");
var router  = express.Router();


router.get("/12phy",function(req,res){
	res.render("12phy");
});

module.exports= router;