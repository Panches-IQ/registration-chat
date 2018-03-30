const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const config = require('../utils/config.json');

// database utils
const db = require('./database/db');

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
	const { username } = req.body;
	res.send({ username });
});

app.post('/logout', (req, res) => {
	res.send({ success:true });
});

app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    res.send({ success:true, username:username });
});

app.post('/messages', (req, res) => {
    res.send({ success:true });
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