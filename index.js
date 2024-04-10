let proxy = require('express-http-proxy');
const express = require('express')
const app = express()

app.use('/static', proxy('https://tinder.com/static/build',{
    userResDecorator: (proxyRes, proxyResData) => {
        let _data = JSON.parse(proxyResData);
        _data.proxy = true;
        return JSON.stringify(_data);
    },
}));

app.listen('3000')