

Example 1

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

            return `${name} from ${location} : ${seats}`
        }
    }
}

const result = upcomingcm ("Perambur/Trichy West") ("C Joseph Vijay") (50000)

console.log("result===>",result)





// Example 2

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

            return `${name} from ${location} : ${grade}`
        }
    }
}

const result = upcomingcm() () ()

console.log("result===>",result)

