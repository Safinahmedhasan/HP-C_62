const childAge = 9;
const oldMan = 90;
const isIdCard = true;
const isCoupon = false;

const money = 500;

// Condition Apply
if(childAge <= 12){
   const pay = 0 
   console.log(pay);
}else if(oldMan >= 60 && isIdCard == true){
    const discount = money * 50 / 100
    const pay = money - discount;
    console.log(pay);
}else if(isCoupon == true){
    const discount = money * 25 / 100;
    const pay = money - discount;
    console.log(pay);
}else{
    console.log(`Pay amount ${money} TK`);
}