
let product= {
    name: "Skoda Slavia",
    price: "20Lakhs"
}

function getproductprice (manufacturingUnit){

    console.log("productName===>",this.name)
    console.log("productPrice===>",this.price)
    console.log("manufacturingUnit===>",manufacturingUnit)

}

let newfunction = getproductprice.bind(product,"Pune");

newfunction()