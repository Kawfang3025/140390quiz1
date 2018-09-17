var express = require('express');
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
app.set('view engine', 'ejs');
//home
app.get('/', function (req, res) {
    res.render('pages/index');
});
//all list of student
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

//all list of subjects
app.get('/subjects', function (req, res) {
    connection.connect()
    var sql ='select * from subjects';
    connection.query(sql,function (err, rows, fields){
        if (err) throw err
        res.render('pages/subjects',{ subjects:rows});
    console.log('The subject is: ', rows[0].subjects)
})
connection.end()

});

app.get('/index', function (req, res) {
    res.render('pages/index');
});
console.log('App is running at http://localhost:8081');

app.listen(8081);