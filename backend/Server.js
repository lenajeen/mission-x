const cors = require('cors');
const express = require('express');
const mysql = require("mysql2");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'mission-x.co0eixcnkcky.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'databaseadmin',
  database: "mission_x",
});

db.connect(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log("connected to db")
  }
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  
  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], function(err, result) {
    if (err) {
      console.log(err)
    } else {
      if (result.length > 0) {
        console.log("login successful")
        res.status(200).send(result)
      } else {
        console.log("login unsuccessful")
        res.sendStatus(401)
      }
    }
  })
})

app.post('/signup', (req,res) => {
  db.query("INSERT INTO users SET ?", {first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email, password: req.body.password},
  function(err,result) {
    if (err) {
      console.log(err)
    } else {
      console.log("signup successful")
      res.sendStatus(205)
    }
  })
})

app.listen(4000)