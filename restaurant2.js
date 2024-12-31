const age = 90;
const isIdCard = true;
const isCoupon = true;

let discount = 0;

if(age <= 10){
    discount = 100;
}else if(age >= 60 && isCoupon && isIdCard){
    discount = 75;
}else if(age >= 60 && isIdCard){
    discount = 50;
}else if(isCoupon){
    discount = 25
}else{
    discount = 0;
}

console.log("discount", discount + "%");

