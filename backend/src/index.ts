import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Routes } from './routes/Routes';
import { Repository } from './repository';

require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.use('/', Routes(Repository));

const port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log(`Servidor escutando na porta ${port}`)
});