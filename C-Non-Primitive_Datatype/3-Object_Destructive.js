

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