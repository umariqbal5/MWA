Array.prototype.even = function(){
    console.log(this.filter((n)=> n%2===0));
}
Array.prototype.odd = function() {
    console.log(this.filter((num) => num%2!=0));
}

console.log('start...');
setTimeout(function(){
    [1,2,3,4,5,6,7,8].even()
},0);

setImmediate(function(){
    [1,2,3,4,5,6,7,8].odd()
});
console.log('end...')