const fs = require('fs');
const path = require('path');
const {fromEvent} = require('rxjs');
const {map, filter} = require('rxjs/operators');

fromEvent(process, 'message')
    .pipe(
        map(data => data.shift()),
        filter(data => typeof data !== typeof undefined)
    )
    .subscribe(file => {
        const filePath = path.join(__dirname, file);
        const stream = fs.createReadStream(filePath, {encoding: 'utf8'});
        stream.pipe(process.stdout);
        stream.on('close', () => process.disconnect());
    });