const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../utils/config.json');
const cookieParser = require('cookie-parser');

const app = express();
const port = config ? config.client.apiPort : 1337;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors({ origin: '*' }));

app.get('/', (req,res) => {
	// console.log(req.cookies, res.cookies);
	// res.redirect('/base');
	res.json({reply:"get/"})
});

app.post('/login', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

// app.post('/', (req,res) => {
// 	res.json({reply:"post/"})
// });

app.get('/*', (req, res) => {
    res.redirect('/');
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});