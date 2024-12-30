const addToCart = 300;

if(addToCart >= 500){
    // 10% discount
    const discount = addToCart * 10 / 100;
    const pay = addToCart - discount;
    console.log(pay);
}
else if ( addToCart >= 250){
    const discount = addToCart * 5 / 100;
    const pay = addToCart - discount;
    console.log(pay);
}
else{
    console.log(addToCart);
}