


function buyItems() {
  let breakfast = {
    Dish: "Dosa",
    Price: 250,
    sgst: 3.5,
    cgst: 3.5,
  };

  return function () {
    let cgstAmount = (breakfast.Price * breakfast.cgst) / 100;
    let sgstAmount = (breakfast.Price * breakfast.sgst) / 100;

    let totalAmount = breakfast.Price + sgstAmount + cgstAmount;

    return Math.round(totalAmount);
  };
}
let result = buyItems()();

console.log("result===>", result);
