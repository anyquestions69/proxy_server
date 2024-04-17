let proxy = require('express-http-proxy');
const express = require('express')
const app = express()
app.use('/api', proxy('https://api.gotinder.com'))

app.use('/', proxy('https://tinder.com',{
    https:true
}));

//app.get('/', (req,res)=>{return res.redirect('/static')})
app.listen('3000')