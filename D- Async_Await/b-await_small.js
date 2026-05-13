
function getproduct() {

    return new Promise((resolve) => {

        setTimeout(() => {

            let product ={
                id: "app122",
                price: 1200,
            }

             resolve (product)
            
        }, 2000);

       


    })

}

async function test() {

    let data =  await getproduct()

    console.log(data)

    let discount = data.price * 0.50

    let offerprice = data.price - discount

    console.log("offerprice===>", offerprice)

    let coupondiscountprice = data.price -250

    console.log("coupondiscountprice===>", coupondiscountprice)

    
}

test()