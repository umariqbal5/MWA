const http = require('http');
const {Subject, fromEvent} = require('rxjs');
const {map, filter} = require('rxjs/operators');
const url = require('url');
const {fork} = require('child_process');

subject = new Subject();
subject.subscribe(doParseFile);

http
    .createServer((req, res) => subject.next({req, res}))
    .listen(8282)
    .on('listening', () => console.log("http://localhost:8282/"));

function doParseFile({req, res}) {
    const query = url.parse(req.url, true).query;
    //replace with observable
    if (query == null || !query.url) {
        res.end("File url is empty.");
        return;
    }

    const childProcess = fork('./read.file', null, {silent: true});
    childProcess.send(query.url);

    const subscriber = new FileReadSubscriber(res);
    fromEvent(childProcess.stdout, 'data').subscribe(subscriber);
    fromEvent(childProcess, 'complete').subscribe(data => console.log('dfdcdsc'));

   
}

class FileReadSubscriber {
    constructor(res) {
        this.res = res;
    }

    next(data) {
        console.log('Data received');
        this.res.end(data);
    }

    complete() {
        this.res.end();
    }
}