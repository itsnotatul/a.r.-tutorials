var express = require("express");
var router  = express.Router();


router.get("/11math",function(req,res){
	res.render("11math");
});

module.exports= router;