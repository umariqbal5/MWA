// • Build a pseudo-class named "Gym" that emits a "boom"
// event every 1 second.
// • Write a script that creates an instance of "Gym" and bind to
// the "boom" event, printing "Athlete is working out" every
// time it gets one.


const {Gym} = require('./Gym');

const gym = new Gym();
gym.on('boom', () => console.log('Athlete is working out.'));
gym.boom();