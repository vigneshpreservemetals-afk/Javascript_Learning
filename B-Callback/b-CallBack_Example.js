function getProduct(callback) {

    setTimeout(() => {

        let product = {
            name: "Skoda Slavia",
            price: 1050000
        };

        callback(product);

    }, 2000);
}

function discountPrice(product) {

    let discount = 25;

    let discountOffer =
        product.price - (product.price * discount / 100);

    product.price = discountOffer;

    console.log("Product ===>", product);
}

getProduct(discountPrice);