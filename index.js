let proxy = require('express-http-proxy');
const express = require('express')
const app = express()

app.use('/static', proxy('https://tinder.com/static',{
    https:true
}));

app.listen('3000')