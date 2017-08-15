const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
let list = {
  name: [ "Learn Node Basics", "Learn Express Basics",
   "Learn Mustache", "Learn HTML forms with Express",
   "Learn about authentication",
   "Learn how to connect to PostgreSQL",
      "Learn how to create databases",
    "Learn SQL",
  "Learn how to connect PostgreSQL from Node",
    "Learn how to use sequelize" ]}


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  res.render('todo.mustache',list);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
