// Example 1

function firstfunction() {

  return function () {

    return function ()  {

     return "Am a Third Function"

    }

  }
}

let data = firstfunction()()()

console.log("data===>", data)
