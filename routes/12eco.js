var express = require("express");
var router  = express.Router();


router.get("/12eco",function(req,res){
	res.render("12eco");
});

module.exports= router;