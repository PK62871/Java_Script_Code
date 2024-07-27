// 1. primitive data type. 7 type of it

//1. String, Number, Boolean, null, undefined, Symbol(to make any value unique),
// bigInt, 

// const score = 70
// const scoreValue = 100.3

// console.log(typeof scoreValue);
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;             // undefined


// By using Symbol it is converting in value unique....
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);




// bigInt.
// const bigNumber = 8427935733053233
// console.log(bigNumber);




// 2. Refrence type(non-primitive).
// Array, Object, Functions.



// // Array.
// const heros = ["shaktiman","nagraj","doga"]
// console.log(heros);


// typeof is used to know the datatype of variables.
// console.log(typeof heros)


// object. we are declearing oblect inside {...} and storing the value in obj.
// let obj = {
//     name: "prabhakar",
//     age: 22,

// }
// console.log(obj);



// Functions.
// const myfunction = function(){
// console.log("My Function")
// }



//............................................................................................................................................
// Memory in JS.

// Stack(Primitive). ALll value will be stored in it

//Heap(Non-Primitive). All Object will be stored here.

// let myName = "Prabhakar"
// let anotherName = myName
// anotherName = "Rohit"

// console.log(myName);
// console.log(anotherName);


let user1 = {
    email: "user@gmail.com ",
    upiId: "user@ybl"
}

let user2 = user1
user2.email = "pk@gmail.com"

console.log(user1.email)
console.log(user2.email)