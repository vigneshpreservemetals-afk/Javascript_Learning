

// Example 1

// function hello() {

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             resolve("Hi")
            
//         }, 2000);

        
//     })
// }

// async function test() {
    
//     console.log("Start")

//     let data = await hello()

//     console.log(data)

//     console.log("End")
// }

// test()


// Example 2:

function printstatement() {

    return new Promise((resolve)  => { 

        setTimeout(() => {

             resolve("Am a Full stack developer")
            
        }, 2000);


    })
}

async function displayprintsatement() {

    let data = await printstatement()

    console.log(data)

    console.log("First")

    console.log("Second")

    console.log("Third")
    
}

displayprintsatement()