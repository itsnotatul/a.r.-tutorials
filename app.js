// npm i body-parser connect-flash ejs express express-session method-override

var express   = require("express"),
app           = express(),
bodyParser    = require("body-parser"),
flash         = require("connect-flash"),
methodOverride= require("method-override");

//requiring routes
var indexRoutes   = require("./routes/index"),

 eng9Routes    = require("./routes/9eng"),
 math9Routes    = require("./routes/9math"),
 sci9Routes    = require("./routes/9sci"),

 eng10Routes    = require("./routes/10eng"),
 math10Routes    = require("./routes/10math"),
 sci10Routes    = require("./routes/10sci"),

 chem11Routes    = require("./routes/11chem"),
 math11Routes    = require("./routes/11math"),
 phy11Routes    = require("./routes/11phy"),

 chem12Routes    = require("./routes/12chem"),
 math12Routes    = require("./routes/12math"),
 phy12Routes    = require("./routes/12phy"),
 
 notesRoutes      = require("./routes/notes");


//FLASH CONFIGURATION
app.use(require("express-session")({
secret:"rusty is the best dog in the world",
resave: false,
saveUninitialized:false
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.use(flash());


app.use(require("express-session")({
secret:"rusty is the best dog in the world",
resave: false,
saveUninitialized:false
}));


// this'll call this functn on every route
app.use(function(req,res,next){
res.locals.currentUser = req.user;//req.user will either contain da user or not
res.locals.error       = req.flash("error");
res.locals.success     = req.flash("success");

next(); // as it is a middleware on every route.
// all it does is ,that is passes req.user as variable currentUser on every route
});



app.use(indexRoutes);

app.use(eng9Routes );
app.use(math9Routes );
app.use(sci9Routes );

app.use(eng10Routes );
app.use(math10Routes );
app.use(sci10Routes );

app.use(chem11Routes );
app.use(math11Routes );
app.use(phy11Routes );

app.use(chem12Routes );
app.use(math12Routes );
app.use(phy12Routes );

app.use(notesRoutes);


app.listen(3000,function(){
console.log("website server is listening now.")
})