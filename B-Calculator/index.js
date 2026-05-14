

import {add,sub,mul,div,square} from './index.mjs'

const input1 = 100;

const input2 = 200;

const result = add(input1,input2)
const result1 = mul(input1,input2)
const result2 = div(input1,input2)
const result3 = sub(input1,input2)
const result4 = square(input1,input2)

console.log("add===>=", result)
console.log("mul===>=", result1)
console.log("div===>=", result2)
console.log("sub===>=", result3)
console.log("square===>=", result4)