

// // Example 1

// const welcomeMessage = () => {
//     return "Welcome to Student Marklist";
// };

// const Studentresult = (m1, m2, m3) => {

//     const Total = (m1 + m2 +m3);
//     const Average = (Total/3);
//     const Result = (m1 >= 35 && m2 >= 35 && m3 >= 35)? "Pass": "Fail";

//     return{

//         Studenttotal: Total,
//         studentaverage: Average,
//         Studentresult: Result
//     };
// };

// const Result = Studentresult (100,25,80);

// console.log(welcomeMessage())
// console.log(Result)



const Welcomefunction = () => {

    return "Welcome to Students List";
};


const studentresult = (m1, m2, m3) => {

    const total= ( m1 + m2 + m3 );
    const Average= total/3;
    const result= m1 >= 35 && m2 >= 35 && m3 >= 35 ? "pass":"fail";

    return {
        Studenttotal: total,
        studentaverage: Average,
        studentresult: result
    };
};

const result  = studentresult(100,25,80);

console.log(result)