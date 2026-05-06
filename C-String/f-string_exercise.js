

let str = "Vignesh is a UX Designer, HE IS WORKING IN DEV2PROD"
let findText= str.includes("Vignesh")
let findText1 = str.includes("HE IS WORKING IN DEV2PROD")

let substring= str.substring(26,51)
let substr= str.substr(26,25)
let uppercase = str.toUpperCase(findText)
let lowercase = str.toLowerCase(findText1)

console.log("substring===>", substring)
console.log("substr===>",substr)
console.log("uppercase===>",uppercase)
console.log("Lowercase===>",lowercase)