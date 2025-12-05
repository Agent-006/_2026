// declatations and initializations

var a = 12;

// Problems with var
// 1. Ye window mein add hota hain
// 2. Function scoped hota hain, block scoped nahi hota
// 3. Aap firse declare kar sakte ho same name se and errors nahi aate

let b = 15;
// Problems with let
// 1. Aap firse declare nahi kar sakte same name se in same scope
b = 20; // but you can reassign

const c = 25;
// Problems with const
// 1. Aap firse declare nahi kar sakte same name se in same scope
// 2. Aap reassign nahi kar sakte
// 3. But if const is an object or array, you can change its properties or elements

// Example of block scope
if (true) {
    let d = 30;
    const e = 35;
    var f = 40; // f will be accessible outside this block
    console.log("Inside block:", d, e, f);
}
console.log("Outside block:", f); // f is accessible here
// console.log(d); // d is not accessible here, will throw error
// console.log(e); // e is not accessible here, will throw error

// Example of redeclaration
var a = 50; // allowed
// let b = 60; // not allowed, will throw error
// const c = 70; // not allowed, will throw error
console.log("Values:", a, b, c);

// Summary
// Use let and const to avoid issues with var
// Prefer const for variables that won't be reassigned
// Use let for variables that will be reassigned