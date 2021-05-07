var express = require("express");
var router  = express.Router();


router.get("/11bst",function(req,res){
	res.render("11bst");
});

module.exports= router;