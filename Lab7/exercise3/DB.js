const MongoClient = require("mongodb").MongoClient;
const {promisify} = require('util')

class DB {

    async connect() {
        const client = await promisify(MongoClient.connect)('mongodb+srv://admin:admin@cluster0-zktsw.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
        this.client = client.db('homework07');
        return this.client;
    }

    async instance() {
        return this.client || await this.connect();
    }
}

exports.db = new DB();