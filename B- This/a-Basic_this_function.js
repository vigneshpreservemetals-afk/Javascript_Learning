

const student = {
    id: "Std1234",
    firstName: "Vignesh",
    lastName: "Baskaran",

    FullName : function() {

        return this.firstName + " " + this.lastName
    }

}

console.log("studentId===>",student.id)
console.log("studentfirstName===>",student.firstName)
console.log("studentlastName===>",student.lastName)
console.log("studentfullName===>",student.FullName())


