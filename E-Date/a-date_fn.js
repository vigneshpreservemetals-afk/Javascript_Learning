

let timeStamp    = new Date();
let Year         = timeStamp.getFullYear();
let Month        = timeStamp.getMonth()+1;
let CurrentDate  = timeStamp.getDate();
let Day          = timeStamp.getDay();


console.log("timeStamp===>", timeStamp)
console.log("Year===>", Year)
console.log("Month===>", Month)
console.log("Day===>", Day)
console.log("CurrentDate===>", CurrentDate)

switch(Day){

    case 0:{
        console.log("Sunday");
        break;
    }

     case 1:{
        console.log("Monday");
        break;
    }

     case 2:{
        console.log("Tuesday");
        break;
    }

     case 3:{
        console.log("Wednesday");
        break;
    }

     case 4:{
        console.log("Thursday");
        break;
    }

     case 5:{
        console.log("Friday");
        break;
    }

     case 6:{
        console.log("Saturday");
        break;
    }
}