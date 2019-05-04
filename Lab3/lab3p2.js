// • Build a pseudo-class named "Gym" that emits a "boom"
// event every 1 second.
// • Write a script that creates an instance of "Gym" and bind to
// the "boom" event, printing "Athlete is working out" every
// time it gets one.

var Gym = require('./Gym');
var gym = new Gym();
    gym.on('boom',function(){
       console.log('Athlete is working out')
    });

gym.emit('boom');
