var express = require("express");
var router  = express.Router();


router.get("/10sci",function(req,res){
	res.render("10sci");
});

module.exports= router;