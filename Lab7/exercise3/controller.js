const {db} = require('./DB');

class Controller {

    async getAll (req,res){
    const instDb = await db.instance();
    const collection = instDb.collection('lectures');
    collection.find().toArray((error,lectures) => {
    res.json({
                 message: 'Lectures details',
                 data: lectures
             });
});

}

    async find (req,res){
    const Db = await db.instance();
    const collection = Db.collection('lectures');
    const query = {_id: req.params.id+""}
    collection.find(query).toArray((err,lecture) => {
    if(err)
    res.end(err)
    res.json({data: lecture});
});

}

    async findOne(req,res){
    const Db = await db.instance();
    const collection = Db.collection('lectures');
    const query = {_id: req.params.id+""}
    collection.findOne(query,(err,lecture) => {
    if(err)
    res.end(err)
    res.json({data: lecture});
});
}

    async search(req,res){
    const Db =await db.instance();
    const collection = Db.collection('lectures');
    const query = {"lecture" : {'$regex' :req.params.q}};
    collection.find(query).toArray((err,lectures) => {
        if(err)
        res.end(err)
        res.json({data: lectures});
        });
    }

    async addLecture (req,res){
    const document = new Document(req.body._id, req.body.course, req.body.lecture);

    const Db =await db.instance();
    const collection = Db.collection('lectures');
    await collection.insert(document);
    res.json({"msg": 'Data Inserted', "data" : document});
}

}

exports.controller = new Controller();