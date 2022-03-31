const express = require("express");
const app = express();


app.get("/users", allBooks, (req,res) => {
   
    res.send({route: "/users"});
});


function allBooks(req,res,next){
    console.log("Fetching All Books");
    next();
}
   

app.listen(5000,() =>{
  console.log("Listening on port 5000");
});
