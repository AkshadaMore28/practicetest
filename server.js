var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
        "<h1>practice</h1>"
        +"<hr/>"
        +"<h3>sdm end module</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>AWS</li>"
        +"<li>nodejs</li>"
        +"<li>cloud computing</li>"
        +"</ol>"
    );
});
var server=app.listen(9000);
console.log("practice test running on port 9000");