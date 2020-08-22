import express from 'express';
import bodyParser from 'body-parser';
import swaggerui from '../swaggerRouter';
import exampleApi from '../api/authentications';
import cors from 'cors';

const API_PREFIX = '/api/v1';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(API_PREFIX, exampleApi);

app.get('/', (req, res) => res.redirect('/swagger'));
app.use('/swagger', swaggerui);

export default app;
