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

-   🎯 Usage: - Understanding data types is crucial for effective programming, debugging, and avoiding type-related errors in JavaScript.

        - API validation, form handling, state checks, and conditional rendering all rely on proper type handling.

    <hr/>

## 🔄️3. Operators

-   ✅ Teach

    -   Arithmetic, comparison, logical, assignment, unary, ternary

    ```javascript
    // Arithmetic Operators
    let a = 10;
    let b = 3;
    console.log(a + b); // Addition: 13
    console.log(a - b); // Subtraction: 7
    console.log(a * b); // Multiplication: 30
    console.log(a / b); // Division: 3.3333...
    console.log(a % b); // Modulus: 1
    console.log(a ** b); // Exponentiation: 1000

    // Comparison Operators
    console.log(a == b); // Equal to: false
    console.log(a === b); // Strict equal to: false
    console.log(a != b); // Not equal to: true
    console.log(a !== b); // Strict not equal to: true
    console.log(a > b); // Greater than: true
    console.log(a < b); // Less than: false
    console.log(a >= b); // Greater than or equal to: true
    console.log(a <= b); // Less than or equal to: false

    // Logical Operators
    console.log(a > 5 && b < 5); // Logical AND: true
    console.log(a > 5 || b > 5); // Logical OR: true
    console.log(!(a > 5)); // Logical NOT: false

    // Assignment Operators
    let c = 5;
    c += 2; // c = c + 2
    console.log(c); // 7
    c -= 3; // c = c - 3
    console.log(c); // 4
    c *= 2; // c = c * 2
    console.log(c); // 8
    c /= 4; // c = c / 4
    console.log(c); // 2
    c %= 2; // c = c % 2
    console.log(c); // 0
    c **= 3; // c = c ** 3
    console.log(c); // 0

    // Unary Operators
    let d = 5;
    console.log(+d); // Unary plus: 5
    console.log(-d); // Unary minus: -5
    console.log(typeof d); // Typeof: "number"
    console.log(++d); // Pre-increment: 6
    console.log(d++); // Post-increment: 6 (then d becomes 7)
    console.log(--d); // Pre-decrement: 6
    console.log(d--); // Post-decrement: 6 (then d becomes 5)

    // Ternary Operator
    let age = 20;
    let canVote = age >= 18 ? "Yes" : "No";
    console.log(canVote); // "Yes"
    ```

    -   typeof, instanceof

    ```javascript
    // typeof operator
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
    // instanceof operator
    let arr = [1, 2, 3];
    console.log(arr instanceof Array); // true
    console.log(arr instanceof Object); // true
    let obj = { name: "Sagar" };
    console.log(obj instanceof Object); // true
    function Person(name) {
        this.name = name;
    }
    let person = new Person("Sagar");
    console.log(person instanceof Person); // true
    console.log(person instanceof Object); // true
    ```

-   ⚠️ Common Confusion:

    -   !!value for truthiness
        Ans: The double negation operator (!!) converts a value to its boolean equivalent, effectively checking its truthiness. The first ! negates the value, and the second ! negates it again, resulting in true for truthy values and false for falsy values.

    -   Pre/post increment/decrement
        Ans: Pre-increment/decrement operators (++var/--var) modify the variable's value before it is used in an expression, while post-increment/decrement operators (var++/var--) modify the variable's value after it is used in an expression.

-   🧪 Practice: - Logic condition quizzes - Scoring logic with ternary
<hr/>

## ⏱️4. Control Flow

-   ✅ Teach:

    -   if, else if, switch-case, early ruturn pattern

    Example 1 -> of if-else-if:

    ```javascript
    // if-else-if example
    if (loggedIn && admin) {
    } else if (loggedIn && !admin) {
    } else {
    }
    ```

    Example 2:

    ```javascript
    // if-else else-if example
    let score = 85;
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }
    ```

    Example 3 -> of switch-case:

    ```javascript
    // switch-case example
    let day = 3;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        default:
            console.log("Invalid day");
    }
    ```

    Example 4 -> of early return pattern:

    ```javascript
    function getVal(val) {
        if (val < 100) return "A";
        else if (val < 75) return "B";
        else if (val < 50) return "C";
        else return "D";
    }

    getVal(12);

    // The issue here is even if value if less than 50, it will never reach that condition because of the order of checks.

    // Corrected version:
    function getVal(val) {
        if (val < 25) return "D";
        else if (val < 50) return "C";
        else if (val < 75) return "B";
        else return "A";
    }

    getVal(12);
    ```

-   ⚠️ Confusion:
    -   Fallthrough in switch-case
    -
-   🧪 Practice: - Student grade categorizer

    ```javascript
    function getGrade(score) {
        if (score < 0 || score > 100) {
            return "Invalid score";
        }

        if (score >= 90) return "A+";
        else if (score >= 80) return "A";
        else if (score >= 70) return "B";
        else if (score >= 60) return "C";
        else if (score >= 33) return "D";
        else return "F";
    }

    console.log(getGrade(85)); // Output: A
    console.log(getGrade(150)); // Output: Invalid score
    console.log(getGrade(45)); // Output: D
    console.log(getGrade(-10)); // Output: Invalid score
    console.log(getGrade(25)); // Output: F
    console.log(getGrade(95)); // Output: A+
    console.log(getGrade(70)); // Output: B
    console.log(getGrade(60)); // Output: C
    console.log(getGrade(33)); // Output: D
    ```

    -   Rock-paper-scissors game logic

    ```javascript
    // Rock-paper-scissors game logic

    function RockPaperScissors(user, computer) {
        if (user === "rock" && computer === "scissors")
            return "User wins!" + " (rock beats scissors)";
        if (user === "sissors" && computer === "paper")
            return "User wins!" + " (scissors beats paper)";
        if (user === "paper" && computer === "rock")
            return "User wins!" + " (paper beats rock)";
        if (user === computer) return "It's a tie!";
        return "Computer wins!";
    }

    RockPaperScissors("rock", "scissors");
    RockPaperScissors("paper", "rock");
    RockPaperScissors("scissors", "rock");
    RockPaperScissors("paper", "paper");
    ```

-   🎯 Usage: - Control flow is essential for decision-making in code, allowing developers to execute different code paths based on conditions. It is widely used in form validation, user authentication, game logic, and more.
<hr/>

## 🔄️5.Loops

Kuch bhi repeated karne ke liye loops ka use hota hain.

```javascript
// repeat karne ko loop kahte hain
// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9

// kaha se jaana hain -> kaha tak jaana hain -> kaise jaana hain
// for loop

// kaha se jaana hain -> kab rukna hain -> kaise jaana hain
// while loop
```

-   ✅ Teach:

    -   for, while, do-while

    ```javascript
    // for loop example
    for (let i = 1; i <= 9; i++) {
        console.log(i);
    }

    // while loop example
    let j = 1;
    while (j <= 9) {
        console.log(j);
        j++;
    }

    // do-while loop example
    let k = 1;
    do {
        console.log(k);
        k++;
    } while (k <= 9);
    ```

    -   break, continue

    ```javascript
    // break example
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break; // Exit the loop when i is 5
        }
        console.log(i);
    }

    // continue example
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            continue; // Skip even numbers
        }
        console.log(i); // This will print only odd numbers
    }
    ```

    -   for-of, forEach for arrays
    -   for-in, Object.entries for objects

-   ⚠️ Confusion:

    -   for-in vs for-of

-   🧠 Mindset:

    -   Loop if for processing data

-   🧪 Practice:

    -   Print pattern questions

    ```javascript
    // Q1. Print numbers from 1 to 10 using for loop
    for (let i = 1; i <= 10; i++)  {

        console.log(i);
    }

    // Q2. Print number 10 to 1 using while loop
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

    let i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }

    // Q3. Print even numbers from 1 to 20 using a for loop.
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    // Q4. Print odd numbers from 1 to 15 using a while loop.
    let k = 1;

    while (k <= 15) {
        if (k % 2 !== 0) {
            console.log(k);
        }
        k++;
    }

    // Q5. Print the multiplication table of 5 using a for loop. (i.e., 5 x 1 = 5)
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }

    // Q6. Find the sum of numbers from 1 to 100 using a loop.
    let sum = 0;
    for (let i = 1, i <= 100; i++) {
        sum += i;
    }
    console.log("Sum from 1 to 100 is:", sum);

    // Q7. Print all numbers between 1 to 50 that are divisible by 3.
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }

    // Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
    // (e.g., "1 is odd", "2 is even", etc.)

    let userNum = parseInt(prompt("Enter a number: "));

    for (let i = 1; i <= userNum; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }

    // Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
            count++;
        }
    }

    console.log("Count of numbers divisible by both 3 and 5 between 1 to 100 is:", count);

    // Q10. Stop at First Multiple of 7

    // Write a loop from 1 to 100 that:
    // - Prints each number.
    // - Stops completely when it finds numebr divisible by 7.

    for (let i = 1; i <= 100; i++) {
        console.log(i);

        if (i % 7 === 0) {
            break;
        }
    }

    // Q11. Skip Multiples of 3

    // Write a loop from 1 to 20 that:
    // - Skips numbers divisible by 3.
    // - Prints all other numbers.

    // Use continue

    // Expected Output: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20

    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) continue;

        console.log(i);
    }

    // Q12. Print First 5 Odd Numbers Only

    // While a loop from 1 to 100 that:
    // - Prints only the first 5 odd numbers it encounters.
    // - Then stops the loop.

    // Use both if, break, and a continue + break

    // Expected Output: 1, 3, 5, 7, 9


    // if, break
    for (let i = 1; i <= 100; i++) {
        let count = 0;

        if (i % 2 === 1) {
            count++;
            console.log(i);
        }

        if (count === 5) break;
    }

    // continue + break
    for (let i = 1, count = 0; i <= 100; i++) {
        if (i % 2 === 0) continue;

        console.log(i);

        count++;

        if (count === 5) break;
    }


    ```

    -   Reverse a string using loop
    -   Sum of even/odd numbers from array
