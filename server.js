const express = require('express');
const app = express();
const port = 5000;

app.get('/', function(req, res) {
    res.send('Homepage');
});

app.get('/:city/:category', function(req, res) {
    const city = req.params.city;
    const upCity = city[0].toUpperCase() + city.substring(1);
    const category = req.params.category;
    const file = require(`./data/${upCity}.json`);
    res.send(file[category]);
});

app.listen(process.env.PORT || port, function () {
    console.log(`The server is listening at port ${port}`);
})