

// Example 1 - Offer Expired

// let OriginalPrice   = 500;
// let ProductPrice    = OriginalPrice;

// let today           = new Date();
// let OfferStart      = new Date("2026-05-03");
// let OfferEnd        = new Date("2026-05-04");

// let OfferStarted    = (today >= OfferStart);     /*(05  >= 03)*/
// let OfferNotExpired = (today <= OfferEnd);       /*(05  <= 04)*/

// if(OfferStarted && OfferNotExpired){
//     ProductPrice = ProductPrice - 200;
//     console.log("Offer Applied")
// } else {
//     console.log("Offer Expired")
// }

// console.log("ProductPrice===>", ProductPrice)



// Example 2  - Offer Applied


let OriginalPrice   = 500;
let ProductPrice    = OriginalPrice;

let today           = new Date();
let OfferStart      = new Date("2026-05-05");
let OfferEnd        = new Date("2026-05-10");

let OfferStarted    = (today >= OfferStart);     /*(05  >= 05)*/
let OfferNotExpired = (today <= OfferEnd);       /*(05  <= 10)*/

if(OfferStarted && OfferNotExpired){
    ProductPrice = ProductPrice - 200;
    console.log("Offer Applied")
} else {
    console.log("Offer Expired")
}

console.log("ProductPrice===>", ProductPrice)