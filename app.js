var bodyParser = require('body-parser');
var express = require('express')
var app = express()

app.use(bodyParser.urlencoded({ extended: false })) //formulaire
 
app.use(bodyParser.json()) // body


app.get('/', function (req, res) {
    let a = 'World!';
    res.send('Hello ' + a)
})
 
app.get('/test', function (req, res) {
    res.sendFile(__dirname+'/test.html')
})
 
app.post('/contact', function (req, res) {
    console.log(req.body.name);
    res.send('contact us ' + req.body.name)
})
 
app.post('/login', function (req, res) {
    if(req.body.login == "COCO" && req.body.pass == "123")
        res.send({ "message": "welcome "+req.body.login })
    else
        res.send({ "message": "false" })
})
 
app.listen(3000, err => {
    console.log('server is listening on port 3000')
})