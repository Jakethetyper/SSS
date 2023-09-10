const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const port = process.env.Port || 2500;

require('dotenv').config();

app.use(express.urlencoded( {extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/golfLinks.js');

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});