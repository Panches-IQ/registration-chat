import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../utils/config.json';

const app = express();
const port = config ? config.client.apiPort : 1337;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors({ origin: '*' }));

app.get('/', (req,res) => {
	// res.redirect('/base');
	res.json({reply:"get/"})
});

app.post('/', (req,res) => {
	res.json({reply:"post/"})
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});