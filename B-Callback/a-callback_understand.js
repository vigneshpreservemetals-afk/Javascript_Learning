

function greetings(name,treat,sayBye){
    
    setTimeout(() => {
    
    console.log(`Hello ${name}`)
    treat()
    sayBye()
        
    }, 3000);
}

function treat() {
    console.log("Providing treat for All")
}

function sayBye() {
    console.log("Good Bye to All")
}

greetings("Vignesh",treat,sayBye)
