

// Example 1 - Greater than 500


let OriginalArray = [100,200,600,700,800]

let Greaterthan500 = OriginalArray.filter(
    (value,index,arr) => {
     return value > 500
    }
    
)

// console.log("Greaterthan500===>",Greaterthan500)


// Example 2 - Remove Duplicate values


let OriginalArray = [100,200,100,200,500,600,700,600,500]

let RemoveDuplicateValues = OriginalArray.filter(
    (value,index,Arr) => {
    return Arr.indexOf(value) == index
    }
)

console.log("RemoveDuplicateValues===>",RemoveDuplicateValues)


