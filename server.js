
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
app.get('/products', function (req, res) {
    var id = req.param('id');
    var sql = 'select * from products';

    if (id) {
            sql +=' where id ='+id;
    }
        db.any(sql)
            .then(function (data) {
                console.log('DATA:' + data);
                res.render('pages/products', { products: data });
            })
            .catch(function (error) {
                console.log('ERROR:' + error);
            })
});
app.get('/users', function (req, res) {
    db.any('select * from users')
        .then(function (data) {
            console.log('DATA:' + data);
            res.render('pages/user', { users: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
});
app.get('/users/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'select * from users';

    if (id) {
            sql +=' where id ='+id;
    }

    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.render('pages/user', { users: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
});

app.get('/index', function (req, res) {
    res.render('pages/index');
});
console.log('App is running at http://localhost:8080');
app.listen(8080);