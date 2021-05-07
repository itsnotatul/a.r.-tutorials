var express = require("express");
var router  = express.Router();


router.get("/11eco",function(req,res){
	res.render("11eco");
});

module.exports= router;