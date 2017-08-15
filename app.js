const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
let list = [
    { "todo": "Learn Node Basics" },
    { "todo": "Learn Express Basics" },
    { "todo": "Learn Mustache" },
    { "todo": "Learn HTML forms with Express" },
    { "todo": "Learn about authentication" },
    { "todo": "Learn how to connect to PostgreSQL" },
    { "todo": "Learn how to create databases" },
    { "todo": "Learn SQL" },
    { "todo": "Learn how to connect PostgreSQL from Node" },
    { "todo": "Learn how to use sequelize" }
  ]

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render('todo.mustache');
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
