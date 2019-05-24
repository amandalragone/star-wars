var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [];

function Character(routeName, name, role, age, forcePoints) {
    this.routeName = routeName;
    this.name = name;
    this.role = role;
    this.age = age;
    this.forcePoints = forcePoints;
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// var add = document.getElementById("add");

// add.onclick(function(event){

//     app.get("/", function(req, res) {
//         // res.send("Welcome to the Star Wars Page!")
//         res.sendFile(path.join(__dirname, "add.html"));
//       });
// })

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

