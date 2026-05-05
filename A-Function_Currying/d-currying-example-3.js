

/* Hositing: JavaScript moves declarations to the top of their scope before code execution.

   Closure:A closure is when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

   Currying is converting a function that takes multiple arguments into a sequence of functions that each take one argument.

   In other words: Currying means passing one argument at a time in separate functions. */


// Example 1

 function upcomingcm(location){

     return function(name){

         return function(seats){

             let grade;

             if(seats>= 50000){
                grade= "Extreme Win - CM";
            }else if (seats >= 40000){
                grade="Opposition party - Leader"
            }else {
                grade="Lose"
            }
               
            return grade
            
            /*return `${name} from ${location} : ${seats}`*/
         }
     }
 }

 const result = upcomingcm ("Perambur/Trichy West") ("C Joseph Vijay") (50000)

 console.log("result===>",result)





Example 2

function upcomingcm(){

    let location = "Perambur/trichyeast";
    let name     = "C Joseph Vijay";
    let seats    = 50000


    return function(){

        return function(){

            let grade;

            if(seats>= 50000){
                grade= "Extreme Win - CM";
            }else if (seats >= 40000){
                grade="Opposition party - Leader"
            }else {
                grade="Lose"
            }

            return grade

            //return `${name} from ${location} : ${grade}`
        }
    }
}

const result = upcomingcm() () ()

console.log("result===>",result)

