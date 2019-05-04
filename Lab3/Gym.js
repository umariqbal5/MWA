const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
    }

    boom() {
        this.emit('boom');
        setTimeout(() => this.boom(), 1000);
    }
}

exports.Gym = Gym;