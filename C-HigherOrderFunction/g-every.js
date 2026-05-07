

let Numbers = [100,200,300,400,500,600];

let IsAvailable = Numbers.every(
    (value,index,arr) => {
    return value > 500
    }
)

console.log("IsAvailable===>",IsAvailable)