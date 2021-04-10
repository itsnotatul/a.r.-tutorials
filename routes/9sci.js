var express = require("express");
var router  = express.Router();


router.get("/9sci",function(req,res){
	res.render("9sci");
});

module.exports= router;