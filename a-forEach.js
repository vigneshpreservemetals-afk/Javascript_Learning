

let numbers = [100,200,300,400,500,600,700,800];

let sum=0;

numbers.forEach(
    (value,index,arr) =>{
        sum += value;
    }
)

console.log("sum===>",sum)