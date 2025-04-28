console.log('1'); //Sync code
setTimeout(() => console.log('2'), 0);//macro task
Promise.resolve().then(() => console.log('3')); //micro task
console.log('4');//Sync code
Promise.resolve().then(() => console.log('5')); //micro task
setTimeout(() => console.log('6'), 10);//macro task

//Напиши последовательность вызовов 1,4,3,5,2,6