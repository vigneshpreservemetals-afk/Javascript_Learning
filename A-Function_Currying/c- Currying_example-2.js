function employee(basicSalary){

    return function(){
       let hra= 3000;
       let bonus=1000;
       let ta = 1000;
       let grossSalary= basicSalary + hra + ta + bonus

        return function() {
           let pf = 1700;
           let tax = 1000;
           let netSalary = grossSalary - pf -tax
            return netSalary
        }
    }
}

let result = employee(5000) () ()

console.log("result===>", result)