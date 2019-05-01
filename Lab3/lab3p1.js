//Convert www.mum.edu to ip

const dns = require('dns');
console.log('Start resolving...')
dns.resolve4('www.mum.edu',(err, addresses)=> console.log(addresses));


const {promisify} = require('util');
const dnsAsync = promisify(dns.resolve4)


dnsAsync('www.mum.edu').then(console.log)