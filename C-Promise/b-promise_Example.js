

let carPurchase = new Promise((resolve,reject) =>{
    let carPrice = 1000000;
    let couponAvailable = true;

    setTimeout(() => {

        if(couponAvailable) {

            let discountPrice= (carPrice*0.25);
            let finalPrice = carPrice - discountPrice; 
            resolve(`you have the discount of ${discountPrice} and and the final price of car is ${finalPrice}`)
        } else {
            reject("No Discount")
        }
        
    }, 2000);
})

carPurchase

.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)

});