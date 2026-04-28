

// Example 1

let student= {
    Name :"vignesh",
    age : "31",
    height : "6.1",
    weight : "75"
}

console.log("student name ====>",student.Name)
console.log("student age ====>", student.age)
console.log("student height ====>", student.height)
console.log("student weight ====>", student['weight'])


// Example 2

let employee = {
    Name :"vignesh",
    age : "31",
    height : "6.1",
    weight : "75",
    school: {
        "2023-2025":"DAV matriculation School",
        "2025-2026":"Sunshine School"
    }
}

console.log("employee name ====>",employee.Name)
console.log("employee age ====>", employee.age)
console.log("employee height ====>", employee.height)
console.log("employee weight ====>", employee['weight'])
console.log("employee School ====>", employee.school["2023-2025"])


// Example 3

let actor={

    name: "ajith",
    age: "50",
    networth: "500 crores",
    movies: "50",
    currentinterest: "Racing",
    yearofracing: {
        "2012-2016": "Dubai",
        "2016-current": "Abu-dhabi"
    }
}

console.log("actor name ====>", actor.name)
console.log("actor age ====>", actor.age)
console.log("actor networth ====>", actor.networth)
console.log("yearofracing ====>",actor.yearofracing["2012-2016"])
