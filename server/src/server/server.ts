import express from 'express';
import bodyParser from 'body-parser';
import swaggerui from '../swaggerRouter';
import exampleApi from '../api/authentications';
import cors from 'cors';
import mongoose from 'mongoose';

const API_PREFIX = '/api/v1';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(API_PREFIX, exampleApi);

mongoose.connect('mongodb://localhost:27017/NarvieslandDB', { useNewUrlParser: true }, error => {
  if (!error) {
    console.log('success');
  } else {
    console.log('Failed');
  }
});

app.get('/', (req, res) => res.redirect('/swagger'));
app.use('/swagger', swaggerui);

export default app;
