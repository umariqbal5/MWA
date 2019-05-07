const app = require('express')();
const mongoClient = require('mongodb').MongoClient;
const client = new mongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');
const port = 8080;
var simpleEncryptor = require('simple-encryptor/index');


app.get('/secret',function (req,res) {
    //DB Connection
    client.connect((error) => {
        const db = client.db('homework01');
        const collection = db.collection('data');

        collection.findOne({},{projection:{key: 1, message:1, _id:0}},(error, doc) => {
            let msg = decrypt(doc.message, doc.key)
            res.json(msg)
            client.close()

        });
    })
});

app.listen(port, ()=> console.log('listing on http://localhost:8080/secret'))

function decrypt(message, key) {
    const encryptor = simpleEncryptor(key);
    var orignalMsg = encryptor.decrypt(message);
    return orignalMsg;
}