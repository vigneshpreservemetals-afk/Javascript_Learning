

function upcomingCm(location,name,seats) {

   
        return function() {

            let grade;

            if(cmCandidates.seats >= 50000){
                grade="Extreme Win";
                
                
            }else if(cmCandidates.seats >= 40000){
                grade="Moderate Win";
                

            }else{
                grade="lose";
            };

            return grade
        }
    }

    let result = upcomingCm("Perambur","C Joseph Vijay",50000)()
    console.log("result===>",result)