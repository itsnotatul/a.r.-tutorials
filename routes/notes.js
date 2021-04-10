var express = require("express");
var router  = express.Router();


router.get("/notes",function(req,res){
	res.render("notes");
});

module.exports= router;