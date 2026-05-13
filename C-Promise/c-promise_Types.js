

// Type 1 - resolve/reject


// let carPurchase = new Promise((resolve,reject) =>{
//     let carPrice = 1000000;
//     let couponAvailable = true;

//     setTimeout(() => {

//         if(couponAvailable) {

//             let discountPrice= (carPrice*0.25);
//             let finalPrice = carPrice - discountPrice; 
//             resolve(`you have the discount of ${discountPrice} and and the final price of car is ${finalPrice}`)
//         } else {
//             reject("No Discount")
//         }
        
//     }, 2000);
// })

// carPurchase

// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)

// });



// Type 2 - all

// let p1 = Promise.resolve("Order Placed")
// let p2 = Promise.resolve("Payment Done")
// let p3 = Promise.resolve("Delivery Accepted")

// Promise.all([p1,p2,p3])
// .then((result) => {
//     console.log(result)
// })


// Type 3 - race

// let p1 = new Promise((resolve) => {

//     setTimeout(() => {

//         console.log("Faster Execution")
        
//     }, 500);
// })

// let p2 = new Promise((resolve) => {

//     setTimeout(() => {

//         console.log("Slower Execution")
        
//     }, 500);
// })


// Promise.all([p1,p2])
// .then((result) => {
//     console.log(result)
// })


// Type 4 - all settled

// let p1 = Promise.resolve("Order Placed")
// let p2 = Promise.reject("Payment declined")


// Promise.allSettled([p1,p2])
// .then((result) => {
//     console.log(result)
// })


// Type 5 - any

let p1 = Promise.reject("Order declined")
let p2 = Promise.resolve("Payment accepted")
let p3 = Promise.resolve("refund Initiated")


Promise.any([p1,p2,p3])
.then((result) => {
    console.log(result)
})