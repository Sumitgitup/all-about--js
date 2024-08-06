// # Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score =  100
const scoreValue = 10.443

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol("1234")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 32235666;





// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let obj = {
    name: "Sumit",
    age: 20
}

const meraFn = function () {
    console.log("Hello World")
}

// console.log(typeof outsideTem)


// ----------------------------------------------------------------------------------------------------

// Stack (Primtive Datatype)  and Heap (Non-Primitive)
let myYoutubeName = "Sumit"

let anotherName = myYoutubeName
anotherName = "Rahul"

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne = {
    email: "asdsdsasd@gmail.com"

}

let userTwo = userOne;

userTwo.email = "Sumit1234@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)