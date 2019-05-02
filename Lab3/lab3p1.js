// Create a simple Node script that converts 'www.mum.edu' domain name to the equivalent IP address.
// 1. Use dns core module, resolve4()
// 2. Rewrite the code above and convert the callback function to a Promise object.
// 3. Rewrite the code above and convert the promise to async/await
// block.


//Convert www.mum.edu to ip

const dns = require('dns');
console.log('Start resolving...')
dns.resolve4('www.mum.edu',(err, addresses)=> console.log(addresses));


//Promis
const {promisify} = require('util');
const resolveAsync = promisify(dns.resolve4)
resolveAsync('www.mum.edu').then(console.log)


//Asynch

async function f(){
    try{
        const address = await resolveAsync('www.mum.edu');
        console.log(address);
    }catch (e) {
        console.log(e);
    }
};
f();