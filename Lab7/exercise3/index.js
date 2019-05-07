const express = require('express');
const {router} = require('./Routes');

const app = express();
app.use(express.json())
app.use('/api',router);


app.listen(80,()=> console.log('http://localhost/api/lectures'))
