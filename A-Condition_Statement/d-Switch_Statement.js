 
 Example 1

let speed = 100;

let drivergrade = null;

if (speed == 45)
    drivergrade = "normal";

else if (speed <= 60)
    drivergrade = "average";

else
    drivergrade = "Overspeed";

switch (drivergrade) {

    case "average":
        console.log("Average Driver");
        break;

    case "normal":
        console.log("Normal Driver");
        break;

    case "Overspeed":
        console.log("Overspeed Driver");
        break;

    default:
        console.log("Not considered as Driver");
}






