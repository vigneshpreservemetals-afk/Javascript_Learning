

// Example 1 - Array Rest

const numbers = [10,20,30,40,50]

const [firstNumber, SecondNumber,...remainingNumbers ] = numbers

console.log("firstNumber===>",firstNumber)
console.log("remainingNumbers===>",...remainingNumbers)



// Example 2 - Object - Rest

const candidate = {
    Name: "Vignesh",
    Age:31,
    Profession: "IT-Software Engineer",
    Location: "Chennai"
}

const {Name, Age, ...remainingdetails} = candidate;

console.log(Name)
console.log(Age)
console.log(remainingdetails)