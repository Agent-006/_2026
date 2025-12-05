# 🔥 JavaScript, Everything about Everything Syllabus - Phase 1: Fundamentals

<hr/>

## 📦1. Variables & Declarations

-   ✅ Teach - var, let, const -line-by-line comparison

    ```javascript
    var username = "Sagar";
    var num = ((10 * 22 - 89) % 45) * 122;

    a = 12; // Not recommended, but works due to hoisting (you will be kicked out of your team if you do this)

    var a;
    var a = 12;
    let a;
    let a = 12;
    const a = 12;
    ```

-   Scope: Global, Function, Block - Reassignment & Redeclaration

    ```javascript
    // Code-only examples (no inline explanations here)

    var a;
    a = 12;
    var a = 12;

    let b = 15;
    b = 20;

    const c = 25;

    if (true) {
        let d = 30;
        const e = 35;
        var f = 40;
        console.log("Inside block:", d, e, f);
    }
    console.log("Outside block:", f);

    var a = 50;
    console.log("Values:", a, b, c);
    ```

    ### 📝 Notes:

     <hr/>

    -   Declarations vs Initializations

        -   `var a;` — declaration
        -   `a = 12;` — initialization
        -   `var a = 12;` — declaration + initialization

    -   `var` caveats

        -   Global `var` becomes a property on the global object (e.g. `window` in browsers).
        -   `var` is function-scoped (not block-scoped).
        -   Redeclaring a `var` in the same scope is allowed and can cause bugs.

    -   `let`

        -   Use for variables that will be reassigned.
        -   Redeclaring the same name in the same scope throws a `SyntaxError`.

    -   `const`

        -   Creates a constant binding — reassignment is not allowed (`TypeError`).
        -   Redeclaration in the same scope throws a `SyntaxError`.
        -   If the binding is an object/array, you can mutate properties or elements (the binding itself remains constant).

-   Block-scope behaviour

    -   `let` and `const` are block-scoped: variables declared inside a block are not accessible outside.
    -   `var` declared inside a block is hoisted to the enclosing function/global scope and is accessible outside that block.

-   Redeclaration example

    -   `var a = 50;` is allowed if `a` was previously declared with `var` in the same scope.
    -   Redeclaring variables declared with `let`/`const` in the same scope is not allowed.

-   Temporal Dead Zone (TDZ)

    -   `let` and `const` are in TDZ from the start of their scope until their declaration is evaluated.
    -   Accessing them before declaration throws a `ReferenceError`.

-   Hoisting impact per type

    -   `var` declarations are hoisted and initialized with `undefined`.
    -   `let` / `const` declarations are hoisted but not initialized (TDZ applies).

-   ⚠️ Common Confusion:

    -   Why var leaks outside block but let doesn't ?

        Code Snippet:

        ```javascript
        if (ture) {
            var a = 1;
            let b = 2;
        }

        console.log(a); // 1
        console.log(b); // ReferenceError: b is not defined
        ```

        🎯<u><b>Reason</b></u>: Because var is function-scoped and accessible outside the block,while let is block-scoped and not accessible outside the block.

    -   Why const allows changing object properties ?

        Code Snippet:

        ```javascript
        const person = { name: "Sagar" };
        person.name = "Rohan"; // ✅ Allowed
        person = {}; // ❌ TypeError: Assignment to constant variable.
        ```

        🎯<u><b>Reason</b></u>: Because const prevents reassignment of the binding itself, but the contents of the object it points to can still be modified.

        🔎 Object.freeze()

-   🧠 Mindset:
    -   Think of variables as contianers scoped by purpose.
-   📝 Exercises:

    -   Guess the output tasks (based on hoisting).

    Example 1:

    ```javascript
    console.log(nm);
    var nm = "Sagar";

    var nm = undefined;
    console.log(nm);
    nm = "Sagar";

    // The output will be undefined.
    // Because var declarations are hoisted and initialized with undefined.
    ```

    Example 2:

    ```javascript
    console.log(a);
    let age = 25;

    // The output will be ReferenceError: Cannot access 'a' before initialization.
    // Because let is in Temporal Dead Zone until its declaration is evaluated.
    ```

    Example 3:

    ```javascript
    var x = 1;
    {
        var x = 2;
    }

    console.log(x);

    // The output will be 2.
    // Because var is function-scoped, the inner declaration overwrites the outer one.
    ```

    Example 4:

    ```javascript
    let a = 10;
    {
        let a = 20;
        console.log("Inside block:", a);
    }
    console.log("Outside block:", a);

    // The output will be:
    // Inside block: 20
    // Outside block: 10
    // Because let is block-scoped, the inner 'a' is a different variable from the outer 'a'.
    // Thus, changes to the inner 'a' do not affect the outer 'a'.
    // This demonstrates block-level scoping using let.
    ```

    -   Block-level counter using let/const.

-   🎯 Usage: - Base of all JS, mandatory in functions, loops, API logic.
<hr/>

## 🧠2. Data Types + Type System

-   ✅ Teach

    -   Primitive types: aisi saari values jinko copy karne par tumhe ek real copy mil jaaye.

        ```javascript
        // string, number, boolean, null, undefined, symbol, bigInt

        // strings
        // examples of different string types
        let str = "Hello";
        let char = "A";
        let templateStr = `Template String`;

        // numbers
        let num = 12; // integer
        let floatNum = 12.3; // floating-point
        let nanValue = NaN; // Not-a-Number
        let infinityValue = Infinity; // positive infinity
        let negInfinityValue = -Infinity; // negative infinity

        // boolean
        let bool = true;
        let boolFalse = false;

        // null and undefined
        // null matlab aapne jaan boojh kar value nahi di (shayad future me doge)
        let n = null;

        // undefined matlab aapne ek variable banaaya aur usey value nahi di to jo value by default milegi wo undefined hogi
        let a; // a is undefined (kyunki humne isse koi value assign nahi ki)
        let u = undefined;

        // symbol -> unique and immutable data type
        let sym = Symbol("sym");

        // future mein hum koi libraries use karenge, ab is case mein un libraries mein kai baar kuchh fields hoti hain jinse similar hum bhi banaa dete hain, aur galti se haamari banaayi hui fields us library ki original fields ko change kar deti hain.

        let obj = {
            uid: 1,
            name: "Sagar",
            age: 24,
            email: "sagarghosh0610@gmail.com",
        };

        let u1 = Symbol("uid");
        obj[u1] = "001"; // ab yeh library ki original uid field ko affect nahi karega kyunki yeh ek unique symbol hai.

        let bigIntNum = 9007199254741991n;

        // Example of copying primitive types
        let a = 12;
        let b = a; // b gets a copy of the value of a
        b = 20; // Changing b does not affect a
        console.log(a); // 12
        console.log(b); // 20
        ```

    -   Reference types: aisi saari values jinko copy karne par tumhe real copy nahi milegi, but aapko reference milega parent ka.

        ```javascript
        // array
        let arr = [1, 2, 3];

        // object
        let obj = { name: "Sagar", age: 25 };

        // function
        function greet() {
            console.log("Hello!");
        }

        // Example of copying reference types
        let originalArray = [1, 2, 3];
        let copiedArray = originalArray; // copiedArray gets a reference to originalArray

        copiedArray.push(4); // Modifying copiedArray also affects originalArray

        console.log(originalArray); // [1, 2, 3, 4]
        console.log(copiedArray); // [1, 2, 3, 4]

        // To create a real copy of an array, use methods like slice() or spread operator
        let realCopyArray = originalArray.slice(); // or
        let realCopyArray = [...originalArray]; // spread operator

        realCopyArray.push(5); // Modifying realCopyArray does not affect originalArray

        console.log(originalArray); // [1, 2, 3, 4]
        console.log(realCopyArray); // [1, 2, 3, 4, 5]

        // Similarly for objects, use Object.assign() or spread operator
        let originalObject = { name: "Sagar", age: 25 };
        let realCopyObject = Object.assign({}, originalObject); // or
        let realCopyObject = { ...originalObject }; // spread operator
        realCopyObject.age = 26; // Modifying realCopyObject does not affect originalObject
        console.log(originalObject); // { name: "Sagar", age: 25 }
        console.log(realCopyObject); // { name: "Sagar", age: 26 }

        // For functions, copying creates a reference to the same function
        let originalFunction = function () {
            console.log("Hello!");
        };

        let copiedFunction = originalFunction; // copiedFunction references the same function as originalFunction
        copiedFunction(); // "Hello!"

        // To create a new function, you can define a new function or use function expressions
        let newFunction = function () {
            console.log("Hello from new function!");
        };

        newFunction(); // "Hello from new function!"
        ```

    -   Dynamic typing in JavaScript

        JS mein static typing nahi hain and yaha par hain dynamic typing, jiska matlab hain aap data ko change kr sakte ho kyunki yaha par dynamic typing hain.

        ```javascript
        let data = 42; // Initially a number
        console.log(typeof data); // "number"
        data = "Now I'm a string"; // Now a string
        console.log(typeof data); // "string"
        data = true; // Now a boolean
        console.log(typeof data); // "boolean"
        ```

    -   typeof quirks (e.g., typeof null === 'object')

        ```javascript
        console.log(typeof "Hello"); // "string"
        console.log(typeof 42); // "number"
        console.log(typeof true); // "boolean"
        console.log(typeof undefined); // "undefined"
        console.log(typeof null); // "object" (quirk)
        console.log(typeof Symbol("sym")); // "symbol"
        console.log(typeof 9007199254741991n); // "bigint"
        console.log(typeof [1, 2, 3]); // "object" (arrays are objects)
        console.log(typeof { name: "Sagar" }); // "object"
        console.log(typeof function () {}); // "function"

        console.log(Array.isArray([1, 2, 3])); // true
        console.log(Array.isArray({ name: "Sagar" })); // false

        console.log(null === null); // true
        console.log(typeof null === "object"); // true (quirk)

        console.log(typeof NaN); // "number"
        console.log(NaN === NaN); // false

        console.log(typeof function () {}); // "function"
        console.log(typeof (() => {})); // "function"

        console.log(typeof BigInt(9007199254741991)); // "bigint"

        console.log(typeof Symbol("sym")); // "symbol"
        ```

    -   Type coercion (== vs ===)

        Ek concept jismein aapka ek type automatically covert ho jaata hain doosre type mein jab aap unhe compare karte ho ya kisi operation mein use karte ho.

        1. `==` (loose equality) performs type coercion before comparison.
        2. `===` (strict equality) does not perform type coercion; both value and type must be the same.

        ```javascript
        console.log(5 == "5"); // true (type coercion)
        console.log(5 === "5"); // false (no type coercion)

        console.log(null == undefined); // true
        console.log(null === undefined); // false

        console.log(0 == false); // true
        console.log(0 === false); // false

        console.log("" == false); // true
        console.log("" === false); // false

        console.log("5" + 1); // "51" (string concatenation)
        console.log("5" - 1); // 4 (numeric subtraction)

        console.log(true + true); // 2
        console.log(true + false); // 1
        console.log(false + false); // 0
        ```

    -   Truthy vs Falsy values

        In JavaScript, values can be classified as "truthy" or "falsy" based on how they evaluate in a boolean context.

        Falsy values:

        -   false
        -   0
        -   -0
        -   0n (BigInt zero)
        -   ""
        -   null
        -   undefined
        -   NaN

        Everything else is considered truthy.

        ```javascript
        // Falsy values
        console.log(Boolean(false)); // false
        console.log(Boolean(0)); // false
        console.log(Boolean(-0)); // false
        console.log(Boolean(0n)); // false
        console.log(Boolean("")); // false
        console.log(Boolean(null)); // false
        console.log(Boolean(undefined)); // false
        console.log(Boolean(NaN)); // false

        // Truthy values
        console.log(Boolean(true)); // true
        console.log(Boolean(1)); // true
        console.log(Boolean(-1)); // true
        console.log(Boolean("Hello")); // true
        console.log(Boolean([])); // true (empty array)
        console.log(Boolean({})); // true (empty object)
        console.log(Boolean(function () {})); // true (function)
        ```

-   ⚠️ Common Confusion:

    -   Why NaN is a number ?

        Ans: Because NaN stands for "Not-a-Number" but is classified as a number type in JavaScript to maintain consistency in mathematical operations

    -   undefined vs null

        Ans: undefined means a variable has been declared but not assigned a value, while null is an intentional assignment of "no value".

    -   == vs ===

        Ans: == checks for value equality with type coercion, while === checks for both value and type equality without coercion.

    -   "5" + 1 vs "5" - 1
        Ans: "5" + 1 results in "51" due to string concatenation, while "5" - 1 results in 4 due to numeric subtraction after type coercion.

-   🧠 Mindset:

    -   Think about types like expected input/output

-   🧪 Practice:

    -   Predict the result:

        -   true + false <br>
            ans: 1 <br>
            reason: true is coerced to 1 and false to 0, so 1 + 0 = 1

        -   null + 1 <br>
            ans: 1 <br>
            reason: null is coerced to 0, so 0 + 1 = 1

        -   5 + "5" <br>
            ans: "55" <br>
            reason: number 5 is coerced to string "5", so "5" + "5" = "55"

        -   !!undefined <br>
            ans: false <br>
            reason: undefined is falsy, so !!undefined = false

-   🎯 Usage:
