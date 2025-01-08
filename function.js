// let a = 10;
// let b = 20;
// let result = a + b;

// console.log(result);

// function name(parameters){

// }
// name();

// function first(name, name2 , name3){
//      let name =  ("Hello " + name);
// }
// first("Karim")
// first("Rahim")

// function sum(a,b){
//     document.getElementById("test").innerHTML = (a+b);
// }

// sum(10,20);
// sum(10,50);

// function myFunction() {
//   document.getElementById("test").innerHTML = "This";
// }

// myFunction();

// function multi(a,b){
//     return a * b;
// }
// let result = multi(10,20);
// console.log(result);


// function test(){
//     console.log("demo1");
//     return "finis";
//     console.log("demo2");
// }

// console.log(test());


// 1. Named Function
function multi(a,b){
    return a*b;
}
// console.log(multi(2,4));

// 2.Anonymous Function
const divide = function(a,b){
    return a / b;
}
// console.log(divide(10,2));


// 3. Arrow Function (ES6)

const sub1 = (a,b) => a - b;
// console.log(sub1(10,5));

// 2
const sub2 = (a,b) => {
    return a - b;
}
// console.log(sub2(10,5));


// --------------
// default parameters
function greet(name = "user"){
    return `Hi ${name}`
}
// console.log(greet());
// console.log(greet("Salma"));


function isCheck(number){
    if(number % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(isCheck(3483948348));
























