const os = require('os');
const {Observable} = require('rxjs');

function checkSystem(observer){
    console.log('checking your system...');
    const memorySize = os.totalmem();
    const totalMemory = Math.round(memorySize / Math.pow(1024, 3), 2);

    const cpus = os.cpus().length;

    if(totalMemory<4){
        observer.next(`This app needs atleast of 4GB of Ram. Current RAM is ${totalMemory}`)
    }else if(cpus<2){
        observer.next(`Processor is not supported.`)
    }else{
        observer.next(`System is checked successfully. your RAM is ${totalMemory}GB and ${cpus} Processors.`)
    }
}

const obs$ = Observable.create(checkSystem);
obs$.subscribe(
    (data)=>console.log(data),
    (error)=> console.log(error),
    (complete)=> console.log(complete)
)