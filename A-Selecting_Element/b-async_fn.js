

function first() {
    console.log("First Function")
}

function second() {
    setTimeout(() => {
    console.log("Second Function")
    }, 3000);   
}

function third() {
    console.log("Third Function")
}

first();
second();
third();