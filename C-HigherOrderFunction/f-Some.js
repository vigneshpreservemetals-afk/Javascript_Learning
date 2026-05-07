


let Numbers = [100,200,300,400,500,600];

let IsAvailable = Numbers.some(
    (value,index,arr) => {
    return value > 500
    }
)

console.log("IsAvailable===>",IsAvailable)