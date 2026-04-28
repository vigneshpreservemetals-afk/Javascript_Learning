/**
 *   Logical Operator
 *     (&&) AND -  [all conditon true]  = true otherwise false
 *     (||) OR  -  [any condition true] = true otherwise false
 *     (!)  Not -  [Negativity check]
 */

var a=100;
var b=100;

var x=500;
var y=600;

console.log((a == b) && (x == y))  //False

console.log((a == b) || (x == y))  //True

// Example 1

 var productavailable= true;
 var product= "apple";
 var productprice = 100;

 productoffer = !productavailable ? "No stock" :productprice *5/100

 console.log("productoffer ===>",productoffer)


// Example 2

 var productavailable= false;
 var product= "apple";
 var productprice = 100;

 productoffer = !productavailable ? "No stock" :productprice *5/100

 console.log("productoffer ===>",productoffer)