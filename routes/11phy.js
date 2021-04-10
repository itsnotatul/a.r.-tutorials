var express = require("express");
var router  = express.Router();


router.get("/11phy",function(req,res){
	res.render("11phy");
});

module.exports= router;