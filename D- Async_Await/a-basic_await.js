
function hello() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Hi")
            
        }, 2000);

        
    })
}

async function test() {
    
    console.log("Start")

    let data = await hello()

    console.log(data)

    console.log("End")
}

test()
