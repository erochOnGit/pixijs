const express = require('express');
const app = express();

app.use(express.static('static'));
// app.use(express.staticProvider(__dirname));
app.get('/', function (req, res) {
    // res.send('Hello World!')
    res.render('index.html');

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});