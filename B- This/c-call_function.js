
// Example 1

let product= {
    name: "Skoda Slavia",
    price: "20Lakhs"
}

function getproductprice (manufacturingUnit){

    console.log("productName===>",this.name)
    console.log("productPrice===>",this.price)
    console.log("manufacturingUnit===>",manufacturingUnit)

}

getproductprice.call(product,"Pune")


// Example 2

let person1= {
    name: "Vignesh",
};

let person2= {
    name: "Kiruba",
};

function greet() {
    console.log("Hello" +" " + this.name);
};

greet.call(person1);
greet.call(person2);
