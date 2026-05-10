

let examresults = new Promise((resolve,reject) => {
    let marks =65;

    setTimeout(() => {

        if (marks >= 35){
            console.log("Vignesh scored pass marks")
        } else {
            console.log("Vignesh has lost his exams")
        }
        
    }, 2000);
})

examresults

.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
    



