
this.studentfirstName = "Kiruba";
this.studentlastName ="Karan";

const student = {

    id: "Std1234",
    firstName: "Vignesh",
    lastName: "Baskaran",

    studentfullName: () =>  this.studentfirstName + " " + this.studentlastName
}

let result = student.studentfullName();

console.log("fullName===>", result)