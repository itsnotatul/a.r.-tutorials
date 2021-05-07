var express = require("express");
var router  = express.Router();


router.get("/12bst",function(req,res){
	res.render("12bst");
});

module.exports= router;