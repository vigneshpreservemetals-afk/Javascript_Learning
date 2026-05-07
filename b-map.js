

let EmployeeSalary = [10000,20000,30000,40000,50000,60000];

let DuplicateEmployeeSalary = EmployeeSalary.map(
    (salary,index,arr)=> {
    return salary
    }
)

let UpdatedSalary = EmployeeSalary.map(
    (salary,index,arr)=> {
    return salary+5000
    }
)

console.log("EmployeeSalary===>",EmployeeSalary)
console.log("DuplicateEmployeeSalary===>",DuplicateEmployeeSalary)
console.log("UpdatedSalary===>",UpdatedSalary)

