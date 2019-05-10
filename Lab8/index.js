const express = require("express")
const app = express();
const mongoCLient = require('mongodb').MongoClient;
const client = new mongoCLient("mongodb+srv://admin:admin@cluster0-zktsw.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true });

app.use(express.json());

let port = 8080;
let db;
app.use(function(req, res, next){
    if(!db){
        client.connect((error)=> {
            db = client.db("homework07");
            req.db = db;
            next();
        })
    }else{
        req.db = db;
        next();
    }
});

app.post('/locations',(req, res)=>{

    req.db.collection('locations').insert(req.body, (error)=>{
        res.json({msg: 'Data saved', data: req.body});
    });
    
});
app.get('/locations', (req, res)=> {
    req.db.collection('locations').find().toArray((error,data)=> res.json(data));
});

app.get('/locations/near/:category/:name?',(req, res)=>{
    const lon = parseFloat("41.017654");
    const lat = parseFloat("-91.9665342");
    const category = req.params.category;
    const name = req.params.name;
    let query;
    if(category && name){
        query = {'location': {'$near': [lon, lat]}, 'category': category, 'name':name}
    }else{
        query = {'location': {'$near': [lon, lat]}, 'category': category}
    }

    req.db.collection('locations').find(query).limit(3).toArray((error,data)=>{
        res.json(data);
    });

})

app.listen(port, ()=> console.log("app working on http://127.0.0.1:8080/"));