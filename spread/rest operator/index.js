// rest  and spread operatoer

function hello(a,b,...c){ //rest operator
    console.log(a);
    console.log(b);
    console.log(c);  
}
hello(1,3,45,6,7);

let a = {"a":1}
let b = {"b":2}
let c ={...a , ...b};  // spread operator
console.log(c);
 let arr =[1,5,6,3,3,5]
 console.log(...arr);
 