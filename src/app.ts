import express from 'express';
import { config } from './config/config';
import { apiRouter } from './router/apiRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

const { PORT } = config;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/superheros');

app.listen(PORT, async () => {
    console.log(`Server has started on port: ${PORT}`);
});
