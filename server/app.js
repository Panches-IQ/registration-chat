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

// list all messages from database
app.get('/messages', (req,res) => {

    db.listMessages()
        .then(data => {
            res.send(data);
        })
	    .catch(err => {

        });
});

// checks for user/password in non-secure mode. TODO: provide bcrypt
app.post('/login', (req, res) => {
	
    const { username, password } = req.body;
    const data = { username, password };
    
    db.login(data)
        .then(data => {
            // success
            console.log(data)
            if (data)
                res.send({ status:'success', username:data.username });
            // not found
            else
                res.send({ status:false });
        })
        .catch(err => {
            // fails -> wrong credentials
            res.send({ status:false, username:null });
        });	
});

app.post('/logout', (req, res) => {
    // ends session
	res.send({ success:true });
});

// add new user to collection
app.post('/register', (req, res) => {
    
    const { username, password, email } = req.body;
    const data = { username, email, password, registered:Date.now() };
    
    db.createUser(data)
        .then(data => {
            res.send({ success:true, username:username });
        })
        .catch(err => {
            console.log(err);
            res.send({ success:false, error:'duplicate'});
        });    
});

// add new message to collection
app.post('/messages', (req, res) => {
    
    const date = Date.now();
    const data = {
        creator: req.body.creator,
        text: req.body.text,
        date: date
    }
    db.createMessage(data)
        .then(data => {
            console.log(data);
            res.send({ success:true, id:data._id, published: date });
        })
        .catch(err => {
            console.log(err);
            res.send({ success:false });
        })
});

// app.post('/', (req,res) => {
// 	res.json({reply:"post/"})
// });

app.get('/*', (req, res) => {
    res.redirect('/');
});

db.setUpConnection()
    .then((response) => {
        app.listen(port, () => {
	       console.log("Server is running on port " + port);
        });
    })
    .catch(err => {
        throw err;
    });