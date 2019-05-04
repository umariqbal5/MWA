function Gym ( ) {
    this.events = {};// Empty Obie ct
}

Gym.prototype.on = function (type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Gym.prototype.emit =function (type) {
            if (this.events[type]) {
                this.events[type].forEach(function (listener){listener()});
            }
    }

    module.exports = Gym;