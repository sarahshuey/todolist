const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
let list = [
  {name: "Learn Node Basics", done: true}, {name :"Learn Express Basics", done: true},
   {name: "Learn Mustache", done: true}, {name:"Learn HTML forms with Express", done: false}]


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render('todo.mustache',{todos: list});
})

app.listen(3000, function () {
  console.log('Successfully started express appslication!');
})
