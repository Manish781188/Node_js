const {add , sub} = require('./process_args')

const process = require('process');
let opetator = process.argv[2];
let x = +process.argv[3];
let y = Number( process.argv[4]);
if(opetator =='add'){
    add(x,y);
}else if(opetator =='sub'){
    sub(x,y);
}
// console.log(process.argv[0]);
