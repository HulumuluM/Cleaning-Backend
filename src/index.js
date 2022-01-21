const express = require('express');
const database = require('./database/Database')


const router = require('./loader/Routing')

const app = express();
// Solution to Try Catch Problem for Global Exception Handling
const asyncRouter = require('async-express-router')
asyncRouter(app);
// app.use('/api', router)


// Mongodb module
const mongo = require('./mongo/Mongo');


const loader = require('./loader');
app.use(loader);

app.listen(5555, () => console.log('Server is started'));