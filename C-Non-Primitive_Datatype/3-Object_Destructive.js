

// Example 1

const student= {
    name: "vignesh",
    skill: "Mechanical Design",
    CGPA: "9.0",
    records:{
        "scholorship":"25000",
        "merit": "3000"
    }
}

const {name,skill,CGPA} = student
const {scholorship, merit} = student.records

console.log("student ====>",name)
console.log("student ====>",skill)
console.log("student ====>",CGPA)
console.log("student ====>",student.records)
console.log("student records ====>",merit)



// Example 2

const actor={
    title: "Ajith",
    age:  "50",
    cinematitle:"Thala",
    movies:{
        "2016":"Mankatha",
        "2025":"GBU"
    }
}

console.log("actor====>", actor.cinematitle)
console.log("actor====>", actor.movies)
console.log("actor====>", actor.movies["2016"])
console.log("actor====>", actor.movies["2025"])
