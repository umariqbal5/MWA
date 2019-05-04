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

    //header Config
    res.header({
        'content-Type':'text/json',
        "Link": `</users/?page=${nextPage}>; rel=next,</users/?page=20>; rel=last`,
        'Cache-Control': 'private, max-age=86400',
        'Last-Modified': new Date()
    });

    const usersData =await getUsers();
    // res.send(usersData['data']);
        res.json({
            status:200,
            data: usersData.data.results
        });

    } catch(e) {
        console.log(e.stack)
        res.status(500).send({
            status: e.code || 500,
            message: e.message
        });
    }
});

async function getUsers(){
    const users = await axios.get('https://randomuser.me/api/?results=10');
    return users;
}

app.listen(3000,()=> console.log('Server is Up at http://127.0.0.1:3000'));