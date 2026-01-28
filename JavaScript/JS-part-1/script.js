// Returning function from another function
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}`;
    };
}
const sayHello = createGreeting("Hello");
sayHello("Sagar"); // "Hello, Sagar"
console.log(sayHello("Sagar")); // "Hello, Sagar"