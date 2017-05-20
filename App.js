var express = require('express');
var cons = require('consolidate');
var handlebars = require('handlebars');
var multer = require('multer');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var path = require('path');
var fs = require('fs');

var IndexController = require('./controllers/IndexController');
var EditNewsController = require('./controllers/EditNewsController');
var EditRubricsController = require('./controllers/EditRubricsController');
var SearchController = require('./controllers/SearchController');
var ApiController = require('./controllers/ApiController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    })
});

var viewsDir = path.join(__dirname, 'views');
app.set('view engine', 'hbs');
app.engine('hbs', cons.handlebars);
app.set('views', viewsDir);

handlebars.registerPartial('layout', fs.readFileSync(viewsDir + '/_Layout.hbs', "utf8"));

app.use('/public', serveStatic(path.join(__dirname, 'public'), {
    'index': false
}));

app.get('/', IndexController);
app.all('/EditNews', upload.array('file'), EditNewsController);
app.all('/EditRubrics', EditRubricsController);
app.get('/Search', SearchController);
app.get('/Api', ApiController);

app.listen(4000);