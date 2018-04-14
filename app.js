const express = require('express');
const request = require('request');

const app = express();

app.get("/results", function(req, res){
   request("http://www.omdbapi.com/?s=starwars&apikey=thewdb", function(error, response, body){
       if(!error && response.statusCode ==200){
           let results = JSON.parse(body);
           res.send(results["Search"][0]["Title"]);
       }
   }) 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app is live!!");
});

// new folder mkdir, cd into folder
// npm init   setup package.json
// npm install PACKAGE --save    install stuff you need with --save to add dep
//                                  into package.json
// TO REQUIRE EXPRESS
// const express = require('express');
// const app = express();
// app.use(express.static("public"))    to include links to public dir
// 
// ROUTING FORMATS
// app.get("/", (req, res) => res.send("homepage...")); 
// 
// app.get("/homepage", function(req, res){
//     res.send("Welcome Home");
// });
// 
// app.get("/repeat/:word/:num", function(req, res){
//   let arr = [];
//   for(let i=0; i < req.params.num; i++) {
//       arr.push(req.params.word);
//       }
//     res.send(arr.join(" "));
// });
// 
// TO RUN SERVER (on cloud 9):
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("App is live!!");
// });

//node app.js to run server, ctrl+c to close sever. Preview page in cloud 9

// npm install ejs --save
// EJS Views file. views folder under root
// <%= JS GOES HERE %> Equals sign if you need to print valule, if code only, use <% %>
// In view:
// <%= VAR %>
// In app.js:
// res.render("page.ejs", {VARtoPASS: VARinAppJS})

//LOOP through stuff to render many things
// <% posts.forEach(function(post){ %>
//     <li>
//       <%= post.title %>
//     </li>
// <% }) %>