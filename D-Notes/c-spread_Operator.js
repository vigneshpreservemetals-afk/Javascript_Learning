

// Example 1 - Spread Operator 

const personaldetails = {
    Name: "Vignesh",
    Age:31,
    Profession: "IT-Software Engineer",
    Location: "Chennai"
}


const personalHabits = {
    Drinking: false,
    Smoking: false,
    Driving: false,
    FamilyType: "Nuclear"
}

const fullInformation = {
    ...personaldetails,
    ...personalHabits
}

console.log("fullInformation===>", fullInformation)


