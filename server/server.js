'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Routes
import usersRouter from './routes/users'

const PORT = process.env.PORT || 8081

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())
app.use(morgan('combined'))

app.use('/users', usersRouter);

app.listen(PORT)
console.log(`Running on http://localhost:${PORT}`);