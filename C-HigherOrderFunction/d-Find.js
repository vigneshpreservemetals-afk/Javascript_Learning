
// Example 1 - ValueGreaterthan500


let OriginalArray = [100,200,600,700,800]

let ValueGreaterthan500 = OriginalArray.find(
    (value,index,arr) => {
     return value > 500
    }
    
)

// console.log("ValueGreaterthan500===>",ValueGreaterthan500)


// Example 2 - Equals200


let OriginalArray = [100,200,600,700,800]

let ValueEquals200 = OriginalArray.find(
    (value,index,arr) => {
     return value == 200;
    }
    
)

console.log("ValueEquals200===>",ValueEquals200)
