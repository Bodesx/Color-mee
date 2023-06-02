const {name} = require('ejs');
const express = require('express');
const app= express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static (path.join (__dirname, '/public')))


app.set('view engine','ejs')
app.set('views', path.join (__dirname, '/views'))
app.get('/home', (req, res) => {
    res.render('home')
})

//app.get('/about', (req, res) => {
  //  const fish = ['blob', 'flare', 'donnie','skunk' ]
    //res.render('home', {fish})
//})

app.get('/',(req, res)=>{
    res.render('home.ejs')
}) 

app.get('/rand',(req, res)=>{
 const num= Math.floor(Math.random() * 100)+1;
 res.render('home',{num})  
})


app.get('/r/:subreddit', (req, res, )=>{
    const {subreddit}=req.params;
    const data = redditData[subreddit];
    console.log(data)
    if(data){

   res.render('subreddit', {...data});
}else {
    res,render('not found', {subreddit});
}

});



app.get("/billy", function (req, res) {
    res.send("this thing is it")
});

app.get("/speak/:animal", function (req, res) {
    var sound={
        dog:"woof",
        cat: "meow",
        goat:"mee",
        lion: "roar",
    }
var animal= req.params.animal;
var sound= sound[animal];

res.send("the " + animal + "" +  sound );

});


app.listen(8080, function(){
console.log("listening on port 8080")
});