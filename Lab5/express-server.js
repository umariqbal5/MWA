const express = require('express')
const axios = require('axios')
const app = express();

//Config
app.enable('case sensitive routing')
app.enable('strict routing')
app.set('x-powered-by',false)
app.enable('trust proxy')

app.get('/users',async function(req,res){
    try{
    let pageNum = parseInt(req.query.page || 1);
    let nextPage = pageNum+1;
    res.status(200);
    res.header({
        'content-Type':'text/json',
        "Link": "/users?page="+nextPage,
        'Cache-Control': 'private, max-age=86400',
        'Last-Modified': new Date()
    });

    const usersData =await getUsers();
    res.send(usersData['data']);
    res.end();
    } catch(e) {
        console.log(e.stack)
        res.status(500).send({error: e.message})
    }
});

async function getUsers(){
    const users = await axios.get('https://randomuser.me/api/?results=10');
    return users;
}

app.listen(3000,()=> console.log('Server is Up at http://127.0.0.1:3000'));