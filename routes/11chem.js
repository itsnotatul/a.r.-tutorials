var express = require("express");
var router  = express.Router();


router.get("/11chem",function(req,res){
	res.render("11chem");
});

module.exports= router;