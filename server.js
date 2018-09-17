var express = require('express');

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});


var app = express();

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    var name = 'CHAWEEWAN SOOKWAN';
    var hobbies = ['Music', 'Movie', 'Programming'];
    var bdate = '06/01/1998';
    res.render('pages/about', { fullname: name, hobbies: hobbies, bdate: bdate });
});


app.get('/students', function (req, res) {
    connection.connect()
    var sql ='select * from students';

    connection.query(sql,function (err, rows, fields){
        if (err) throw err
        res.render('pages/students',{ students:rows});
       
    console.log('The student is: ', rows[0].students)
})

connection.end()

});



app.get('/index', function (req, res) {
    res.render('pages/index');
});
console.log('App is running at http://localhost:8081');


app.listen(8081);