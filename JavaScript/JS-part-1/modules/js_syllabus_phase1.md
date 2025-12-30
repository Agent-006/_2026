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

## 🪤6. Functions

-   ✅Teach:

    -   **Function declaration, expressions, and arrow functions**

    ```javascript
    // Function Declaration
    function greet(name) {
        return `Hello, ${name}`;
    }

    greet("Sagar"); // "Hello, Sagar"

    // Function Expression
    const greet = function (name) {
        return `Hello, ${name}`;
    };

    greet("Sagar"); // "Hello, Sagar"

    // Arrow Function
    const greet = (name) => {
        return `Hello, ${name}`;
    };

    greet("Sagar"); // "Hello, Sagar"
    ```

    -   **Parameters vs Arguments**

    ```javascript
    // Parameters are the names listed in the function definition
    function add(a, b) {
        // a and b are parameters
        return a + b;
    }

    // Arguments are the real values passed to the function
    add(5, 10); // 5 and 10 are arguments
    ```

    -   **Default, rest, and spread parameters**

    ```javascript
    // Default Parameters
    function greet(name = "Guest") {
        // name is a parameter with a default value
        return `Hello, ${name}`;
    }

    greet(); // "Hello, Guest" (no argument passed, uses default)
    greet("Sagar"); // "Hello, Sagar" (argument passed)

    // Rest Parameters
    function sum(...numbers) {
        // numbers is a rest parameter
        return numbers.reduce((total, num) => total + num, 0);
    }
    sum(1, 2, 3, 4); // 10 (arguments passed as an array)

    // Spread Operator
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5]; // arr2 is [1, 2, 3, 4, 5]
    ```

    -   **Return values and early returns**

    ```javascript
    function isEven(num) {
        if (num % 2 === 0) {
            return true; // early return if condition met
        }
        return false; // return false otherwise
    }
    isEven(4); // true
    isEven(5); // false
    ```

    -   **First-class functions (assign to variables, pass as arguments, return from other functions)**

    ```javascript
    // Assigning function to a variable
    const greet = function (name) {
        return `Hello, ${name}`;
    };

    // Passing function as an argument
    function processUserInput(callback) {
        const name = "Sagar";
        console.log(callback(name));
    }

    // Returning function from another function
    function createGreeting(greeting) {
        return function (name) {
            return `${greeting}, ${name}`;
        };
    }
    const sayHello = createGreeting("Hello");
    sayHello("Sagar"); // "Hello, Sagar"
    ```

    -   **Higher-order functions**

    ```javascript
    // Function that returns a function
    function multiplier(factor) {
        return function (number) {
            return number * factor;
        };
    }
    const double = multiplier(2);
    double(5); // 10
    multiplier(3)(4); // 12

    // Higher-order function that takes a function as an argument
    function mapArray(arr, callback) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i]));
        }
        return result;
    }

    const numbers = [1, 2, 3, 4];
    const doubled = mapArray(numbers, function (num) {
        return num * 2;
    }); // [2, 4, 6, 8]
    ```

    -   Pure vs impure functions

    ```javascript
    // Pure Function
    function add(a, b) {
        return a + b; // always returns the same output for the same inputs
    }
    add(2, 3); // 5

    // Impure Function
    let counter = 0;
    function increment() {
        counter++; // modifies external state
        return counter;
    }
    increment(); // 1
    increment(); // 2
    ```

    -   **Closures and lexical scoping**

        -   **Closure:** Ek function jo return kare ek aur function ko, aur return hone wala function humesha use karega parent function ka koi variable.

        ```javascript
        function abcd() {
            let a = 12;
            return function () {
                console.log(a);
            };
        }
        ```

        -   **Lexical Scoping:** Jab ek function apne parent function ke variables ko access kar sakta hain, chahe wo parent function ka scope khatam ho chuka ho.

        ```javascript
        function outer() {
            let outerVar = "I'm from outer function";

            function inner() {
                console.log(outerVar); // Accessing outer function's variable
            }

            return inner;
        }
        const innerFunction = outer();
        innerFunction(); // Output: "I'm from outer function"
        ```

    -   **IIFE (Immediately Invoked Function Expressions)**

    ```javascript
    (function () {
        console.log("This function runs immediately upon definition!");
    })();
    ```

    -   **Hoisting differences between declaration and expression**

    ```javascript
    // Function Declaration Hoisting
    greet("Sagar"); // Works because of hoisting
    function greet(name) {
        return `Hello, ${name}`;
    }

    // Function Expression Hoisting
    greet("Sagar"); // Error: greet is not a function
    const greet = function (name) {
        return `Hello, ${name}`;
    };
    ```

-   ⚠️ **Common Confusion:**

    -   Arrow vs regular function: `this` context
        **Answer:** Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical scope. Regular functions have their own `this` context, which is determined by how the function is called.

        ```javascript
        const obj = {
            name: "Sagar",
            regularFunction: function () {
                console.log(this.name); // "Sagar"
            },
            arrowFunction: () => {
                console.log(this.name); // undefined (or global context)
            },
        };

        obj.regularFunction();
        obj.arrowFunction();
        ```

    -   Function hoisting and TDZ
        **Answer:** Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, however, are not hoisted in the same way; if they are defined using `let` or `const`, they are subject to the Temporal Dead Zone (TDZ) and cannot be accessed before their declaration.

        ```javascript
        // Function Declaration Hoisting
        greet("Sagar"); // Works because of hoisting
        function greet(name) {
            return `Hello, ${name}`;
        }

        // Function Expression Hoisting
        greet("Sagar"); // Error: greet is not a function
        const greet = function (name) {
            return `Hello, ${name}`;
        };
        ```

    -   Scope chains and closure traps
        **Answer:** A scope chain is the hierarchy of scopes that JavaScript uses to resolve variable references. Closures can sometimes lead to traps where inner functions capture variables from their outer scope, which may lead to unexpected behavior if those variables change after the closure is created.

        ```javascript
        function createCounter() {
            let count = 0;
            return function () {
                count++;
                return count;
            };
        }

        const counter1 = createCounter();
        console.log(counter1()); // 1
        console.log(counter1()); // 2

        const counter2 = createCounter();
        console.log(counter2()); // 1 (new closure with its own count)
        ```

-   🧠 **Mindset:**

    -   Functions = logic blocks + memory holders (closures)

-   🧪 **Practice:**

    -   **Q1.** What's the difference between function declarations and expressions in terms of hoisting?

        **Answer**: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, on the other hand, are not hoisted; they can only be called after they have been assigned.

    -   **Q2.** What will be the output of the following code snippet ?

        ```javascript
        greet();

        function greet() {
            console.log("Hello!");
        }
        ```

        **Answer**: The output will be "Hello!" because function declarations are hoisted, allowing the greet function to be called before its definition.

    -   **Q3.** Change this function into an arrow function:

        ```javascript
        function multiply(a, b) {
            return a * b;
        }
        ```

        **Answer**:

        ```javascript
        const multiply = (a, b) => a * b;
        ```

        OR

        ```javascript
        const multiply = (a, b) => {
            return a * b;
        };
        ```

    -   **Q4.** Identify parameters and arguments in the following function:

        ```javascript
        function welcome(name) {
            console.log(`Welcome, ${name}!`);
        }

        welcome("Sagar");
        ```

        **Answer**: In the function definition, "name" is the parameter. When calling the function with "Sagar", "Sagar" is the argument.

    -   **Q5.** How many paramerters does this function have and how many arguments are passed when calling it?

        ```javascript
        function sum(a, b, c) {
            return a + b + c;
        }

        sum(1, 2);
        ```

        **Answer**: The function has 3 parameters (a, b, c), but only 2 arguments (1, 2) are passed when calling it. The third parameter "c" will be undefined.

    -   **Q6.** Guess the output of the following code:

        ```javascript
        function sayHi(name = "Guest") {
            return `Hi, ${name}!`;
        }

        sayHi();
        ```

        **Answer**: The output will be "Hi, Guest!" because the default parameter value "Guest" is used when no argument is provided.

    -   **Q7.** What does the ... (three dots)
        operator means in function parameters?

        **Answer**: The ... operator is called the rest parameter syntax. It allows a function to accept an indefinite number of arguments as an array.

    -   **Q8.** Use rest parameter to accept any number of scores and return the total.

        ```javascript
        function totalScores(...scores) {
            let total = 0;
            return scores.forEach(function (val) {
                total += val;
            });
            return total;
        }

        totalScores(10, 20, 30); // 60
        ```

    -   **Q9.** Fix this function using early return pattern:

        ```javascript
        function checkAge(age) {
            if (age < 18) {
                console.log("Too young");
            } else {
                console.log("Allowed");
            }
        }

        checkAge(16); // "Too young"
        checkAge(20); // "Allowed"
        ```

        **Answer**:

        ```javascript
        function checkAge(age) {
            if (age < 18) return "Too young";

            return "Allowed";
        }

        console.log(checkAge(16)); // "Too young"
        console.log(checkAge(20)); // "Allowed"
        ```

    -   **Q10.** What will this function return when called?

        ```javascript
        function f() {
            return;
        }

        f();
        ```

        **Answer**: The function will return `undefined` because there is no value specified after the return statement.

    -   **Q11.** What does it mean when we say "function are first-class citizens" in JavaScript?

        **Answer**: It means that functions in JavaScript can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.

    -   **Q12.** Can yo assign a function to a variable and then call it? Show how.

        **Answer**:

        ```javascript
        const greet = function (name) {
            return `Hello, ${name}`;
        };

        console.log(greet("Sagar")); // "Hello, Sagar"
        ```

    -   **Q13.** Pass a function into another function as an argument and execute it inside.

        **Answer**:

        ```javascript
        function abcd(func) {
            func();
        }

        abcd(function () {
            console.log("Function passed as argument executed!");
        });
        ```

    -   Write a BMI calculator

    ```javascript
    function bmiCalculator(weight, height) {
        return weight / (height * height);
    }
    bmiCalculator(70, 1.75); // 22.86
    ```

    -   Create a reusable discount calculator (HOF)

    ```javascript
    function discountCalculator(discount) {
        return function (price) {
            return price - price * (discount / 100);
        };
    }
    const tenPercentDiscount = discountCalculator(10);
    tenPercentDiscount(200); // 180
    discountCalculator(20)(200); // 160
    ```

    -   Build a counter using closure

    ```javascript
    function createCounter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }
    const counter = createCounter();
    counter(); // 1
    counter(); // 2
    ```

    -   Create a pure function to transform a value

    ```javascript
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    toUpperCase("hello"); // "HELLO"
    ```

    -   Use IIFE to isolate variables

    ```javascript
    (function () {
        let secret = "This is a secret";
        console.log(secret);
    })();
    ```

-   🎯 Usage:
    -   Reusablity, event handlers, API logic, array operations

<hr/>

## 🧮7. Arrays

-   ✅ **Teach:**

    -   Create, access, modify arrays

    ```javascript
    // Creating an array
    let arr = [1, 2, 3, 4, 5];
    // OR
    let arr = new Array(1, 2, 3, 4, 5);

    // Accessing elements
    console.log(arr[0]); // 1
    console.log(arr[2]); // 3
    console.log(arr[arr.length - 1]); // 5 (last element)
    ```

    -   Array methods: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `reverse`, `sort`

    Methods: Methods are built-in functions that perform specific operations on arrays.

    ```javascript
    let arr = [3, 1, 4, 2];
    // push - adds an element to the end
    arr.push(5); // arr is now [3, 1, 4, 2, 5]
    // pop - removes the last element
    arr.pop(); // arr is now [3, 1, 4, 2]
    // shift - removes the first element
    arr.shift(); // arr is now [1, 4, 2]
    // unshift - adds an element to the beginning
    arr.unshift(0); // arr is now [0, 1, 4, 2]
    // splice - removes/replace elements at a specific index
    arr.splice(1, 2, 5, 6); // arr is now [0, 5, 6, 2]
    // slice - creates a new array from a portion of the original array
    let newArr = arr.slice(1, 3); // newArr is [5, 6], arr remains [0, 5, 6, 2]
    // reverse - reverses the array in place
    arr.reverse(); // arr is now [2, 6, 5, 0]
    // sort - sorts the array (default is lexicographical order)
    arr.sort((a, b) => a - b); // arr is now [0, 2, 5, 6]
    // OR
    arr.sort((a, b) => {
        return a - b;
    });
    ```

    -   Iteration methods: `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every` (intro level)

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    // forEach - executes a function for each array element
    numbers.forEach((num) => console.log(num)); // prints 1, 2, 3, 4, 5

    // map - creates a new array by applying a function to each element
    let doubled = numbers.map((num) => num * 2); // doubled is [2, 4, 6, 8, 10]

    // filter - creates a new array with elements that pass a test
    let evens = numbers.filter((num) => num % 2 === 0); // evens is [2, 4]

    // reduce - reduces the array to a single value by applying a function
    let sum = numbers.reduce((total, num) => total + num, 0); // sum is 15

    // find - returns the first element that satisfies a condition
    let firstEven = numbers.find((num) => num % 2 === 0); // firstEven is 2

    // some - checks if at least one element satisfies a condition
    let hasEven = numbers.some((num) => num % 2 === 0); // hasEven is true

    // every - checks if all elements satisfy a condition
    let allPositive = numbers.every((num) => num > 0); // allPositive is true
    ```

    -   Destructuring, spread operator with arrays

    ```javascript
    let arr = [1, 2, 3, 4, 5];
    // Destructuring
    let [first, second, ...rest] = arr; // first is 1,
    // second is 2, rest is [3, 4, 5]

    // Spread Operator
    let arr2 = [...arr, 6, 7]; // arr2 is [1, 2, 3, 4, 5, 6, 7]
    ```

-   🧪 Pricatice:

    -   1️⃣ Create an array with 3 fruits and print the second fruit.

        Code:

        ```javascript
        let fruits = ["Apple", "Banana", "Cherry"];
        console.log(fruits[1]); // Output: Banana
        ```

    -   2️⃣ Add "Mango" at the end and "Pinapple" at the beginning of this array:

        ```javascript
        let fruits = ["Apple", "Banana"];
        ```

        Code:

        ```javascript
        fruits.push("Mango"); // Add Mango at the end
        fruits.unshift("Pineapple"); // Add Pineapple at the beginning
        console.log(fruits); // Output: ["Pineapple", "Apple", "Banana", "Cherry", "Mango"]
        ```

    -   3️⃣ Insert "Red" and "Blue" at index 1 in this array:

        ```javascript
        let colors = ["Green", "Yellow"];
        ```

        Code:

        ```javascript
        colors.splice(1, 0, "Red", "Blue"); // Insert Red and Blue at index 1
        console.log(colors); // Output: ["Green", "Red", "Blue", "Yellow"]
        ```

    -   4️⃣ Extract only the middle 3 elements from this array:

        ```javascript
        let items = [1, 2, 3, 4, 5, 6, 7];
        ```

        Code:

        ```javascript
        let middleItems = items.slice(2, 5); // Extract elements from index 2 to 4
        console.log(middleItems); // Output: [3, 4, 5]
        ```

    -   5️⃣ Sort this array alphabetically and then reverse it:

        ```javascript
        let names = ["Zara", "Arjun", "Maya", "Liam"];
        ```

        Code:

        ```javascript
        names.sort(); // Sort alphabetically
        names.reverse(); // Reverse the sorted array
        console.log(names); // Output: ["Zara", "Maya", "Liam", "Arjun"]
        ```

    -   6️⃣ Use `.map()` to square each number:

        ```javascript
        let numbers = [1, 2, 3, 4, 5];
        ```

        Code:

        ```javascript
        let squaredNumbers = numbers.map((num) => num * num);
        console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
        ```

    -   7️⃣ Use `.filter()` to keep numbers greater than 10:

        ```javascript
        let values = [5, 12, 8, 20, 3, 15];
        ```

        Code:

        ```javascript
        let filteredValues = values.filter((num) => num > 10);
        console.log(filteredValues); // Output: [12, 20, 15]
        ```

    -   8️⃣ Use `.reduce()` to find the sum of this array:

        ```javascript
        let arr = [10, 20, 30, 40];
        ```

        Code:

        ```javascript
        arr.reduce((total, num) => {
            return total + num;
        }, 0);
        console.log(sum); // Output: 100
        ```

    -   9️⃣ Use `.find()` to get the first number less than 10:

        ```javascript
        let nums = [15, 22, 8, 19, 5];
        ```

        Code:

        ```javascript
        let firstLessThanTen = nums.find((num) => {
            return num < 10;
        });
        console.log(firstLessThanTen); // Output: 8
        ```

    -   🔟 Use `.some()` to check if any student has scored below 35:

        ```javascript
        let scores = [45, 67, 89, 34, 78];
        ```

        Code:

        ```javascript
        let hasFailed = scores.some((score) => {
            return score < 35;
        });
        console.log(hasFailed); // Output: true
        ```

    -   1️⃣1️⃣ Use `.every()` to check if all numbers are even:

        ```javascript
        let numbers = [2, 4, 6, 8, 10];
        ```

        Code:

        ```javascript
        let allEven = numbers.every((num) => {
            return num % 2 === 0;
        });
        console.log(allEven); // Output: true
        ```

    -   1️⃣2️⃣ Destructure this array to get firstName and lastName:

        ```javascript
        let fullName = ["Sagar", "Ghosh"];
        ```

        Code:

        ```javascript
        let [firstName, lastName] = fullName;

        console.log(firstName); // Output: Sagar
        console.log(lastName); // Output: Ghosh
        ```

    -   1️⃣3️⃣ Use spread operator to combine these two arrays:

        ```javascript
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];
        ```

        Code:

        ```javascript
        let combinedArr = [...arr1, ...arr2];
        console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
        ```

    -   1️⃣4️⃣ Add "India" to the start of this array using spread:

        ```javascript
        let countires = ["USA", "UK", "Canada"];
        ```

        Code:

        ```javascript
        let updatedCountries = ["India", ...countires];
        console.log(updatedCountries); // Output: ["India", "USA", "UK", "Canada"]
        ```

-   ⚠️ Common Confusion:

    -   1️⃣ `splice` vs `slice`

        **Answer**: `splice` modifies the original array by adding/removing elements, while `slice` creates a new array by extracting a portion of the original array without modifying it.

    -   `map` vs `forEach`

        **Answer**: `map` returns a new array with the results of applying a function to each element, while `forEach` executes a function for each element but does not return a new array.

    -   `.sort()` behavior without `compareFn`

        **Answer**: Without a `compareFn`, the `sort` method converts elements to strings and sorts them in lexicographical (dictionary) order, which may lead to unexpected results when sorting numbers.

    -   Big blunder with `.sort()`:

    ```javascript
    let arr = [5, 25, 9, 100, 5, 6];
    arr.sort();
    console.log(arr); // Output: [100, 25, 5, 5, 6, 9]
    ```

    **Answer**: The `.sort()` method without a compare function sorts elements as strings, leading to incorrect numerical order. To sort numbers correctly, provide a compare function:

    ```javascript
    arr.sort((a, b) => a - b);
    console.log(arr); // Output: [5, 5, 6, 9, 25, 100]
    ```

## 🔭8. Objects

-   ✅ Teach:

    -   Key-value structure

    ```javascript
    let person = {
        name: "Sagar",
        age: 25,
        isStudent: false,
    };
    ```

    -   Dot vs bracket notation

    ```javascript
    // Dot notation
    console.log(person.name); // "Sagar"

    // Bracket notation
    console.log(person["age"]); // 25
    ```

    -   Nesting and deep access

    ```javascript
    let student = {
        name: "Maya",
        address: {
            street: "123 Main St",
            city: "Mumbai",
            country: "India",
        },
        grades: [85, 90, 78],
    };
    console.log(student.address.city); // "Mumbai"
    console.log(student.grades[1]); // 90
    ```

    -   Object destructuring

    ```javascript
    let person = {
        name: "Sagar",
        age: 25,
        isStudent: false,
    };
    let { name, age } = person;
    console.log(name); // "Sagar"
    console.log(age); // 25
    ```

    -   Looping: `for-in`, `Object.keys()`, `Object.entries()`

    ```javascript
    let person = {
        name: "Sagar",
        age: 25,
        isStudent: false,
    };

    // for-in loop
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    ```

    ```javascript
    // Object.keys()
    Object.keys(person).forEach((key) => {
        console.log(`${key}: ${person[key]}`);
    });
    ```

    ```javascript
    // Object.entries()
    Object.entries(person).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    ```

    -   Copying objects: spread, `Object.assign()`, deep clone

    ```javascript
    let original = { a: 1, b: 2 };
    let copy1 = { ...original }; // Spread operator
    let copy2 = Object.assign({}, original); // Object.assign()
    ```

    -   Optional chaining, computed properties

    ```javascript
    let user = {
        name: "Sagar",
        address: {
            city: "Mumbai",
        },
    };
    console.log(user.address?.city); // "Mumbai"
    console.log(user.contact?.phone); // undefined
    ```

    ```javascript
    let key = "age";
    let person = {
        name: "Sagar",
        [key]: 25, // Computed property
    };
    ```

-   ⚠️ Common Confusion:

    -   Reference copy vs deep clone

        **Answer**: Objects are reference types, so when you assign an object to another variable, both variables point to the same object in memory. Changes made through one variable will affect the other. Deep cloning creates a new object with the same properties, so changes to one do not affect the other.

        ```javascript
        let original = { a: 1, b: { c: 2 } };
        let referenceCopy = original; // Both point to the same object
        let deepClone = JSON.parse(JSON.stringify(original)); // Creates a new object

        referenceCopy.b.c = 3;
        console.log(original.b.c); // 3 (affected)
        deepClone.b.c = 4;
        console.log(original.b.c); // 3 (not affected)
        ```

-   🧠 Mindset:

    -   Objects = structured, readable state

-   🧪 Practice:
-   -   1️⃣ Create an object for a student with name, age, and isEnrolled.

        ```javascript
        let student = {
            name: "Arjun",
            age: 20,
            isEnrolled: true,
        };
        ```

    -   2️⃣ Can an object key be a number or boolean? Try this.

        ```javascript
        const obj = {
            true: "yes",
            42: "answer",
        };
        console.log(obj[42]); // "answer"
        console.log(obj[true]); // "yes"
        ```

    -   3️⃣ Access the value of "first-name" from this object:

        ```javascript
        const user = {
            "first-name": "Sagar",
        };
        ```

        Code:

        ```javascript
        console.log(user["first-name"]); // Output: Sagar
        ```

    -   4️⃣ Given a dynamic key let key = "age", how will you access the user[key]?

    ```javascript
    let key = "age";
    const user = {
        name: "Sagar",
        age: 25,
    };
    ```

    Code:

    ```javascript
    console.log(user[key]); // Output: 25
    ```

    -   5️⃣ From the object below, print the latitude:

    ```javascript
    const locations = {
        city: "Kolkata",
        coordinates: {
            lat: 22.5726,
            lon: 88.3639,
        },
    };
    ```

    Code:

    ```javascript
    console.log(locations.coordinates.lat); // Output: 22.5726
    ```

    -   6️⃣ What will happen if coordinates is missing? How can you prevent errors?

    ```javascript
    const locations = {
        city: "Kolkata",
        coordinates: {
            lat: 22.5726,
            lon: 88.3639,
        },
    };
    ```

    Code:

    ```javascript
    console.log(locations.coordinates?.lat); // Output: 22.5726
    ```

    -   7️⃣ Destructure the city and lat from the locations object:

    ```javascript
    const locations = {
        city: "Kolkata",
        coordinates: {
            lat: 22.5726,
            lon: 88.3639,
        },
    };
    ```

    Code:

    ```javascript
    const {
        city,
        coordinates: { lat },
    } = locations;
    console.log(city); // Output: Kolkata
    console.log(lat); // Output: 22.5726
    ```

    -   8️⃣ Destructure the key "first-name" as a variable called firstName:

    ```javascript
    const user = {
        "first-name": "Sagar",
    };
    ```

    Code:

    ```javascript
    const { "first-name": firstName } = user;
    console.log(firstName); // Output: Sagar
    ```

    -   9️⃣ Use `for-in` to log all keys in this object:

    ```javascript
    const course = {
        title: "JavaScript Basics",
        duration: "3 hours",
        level: "Beginner",
    };
    ```

    Code:

    ```javascript
    for (let key in course) {
        console.log(key);
    }
    ```

    -   🔟 Use `Object.entries()` to print all key-value pairs as:

    ```javascript
    const course = {
        title: "JavaScript Basics",
        duration: "3 hours",
        level: "Beginner",
    };
    ```

    Code:

    ```javascript
    Object.entries(course).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    ```

    OR

    ```javascript
    Object.entries(course).forEach((value) => {
        console.log(`${value[0]}: ${value[1]}`);
    });
    ```

    -   1️⃣1️⃣ Copy this object using spread operator:

    ```javascript
    const original = { a: 1, b: 2 };
    ```

    Code:

    ```javascript
    const copy = { ...original };
    console.log(copy); // Output: { a: 1, b: 2 }
    ```

    -   1️⃣2️⃣ What is problem with this ?

    ```javascript
    const obj1 = { info: { score: 80 } };
    const clone = { ...obj1 };
    clone.info.score = 100;
    console.log(obj1.info.score); // Output: ?
    ```

    **Answer**: The problem is that the spread operator creates a shallow copy of the object. Therefore, the nested object `info` is still referenced in both `obj1` and `clone`. Modifying `clone.info.score` also affects `obj1.info.score`, resulting in the output being `100`.

    -   1️⃣3️⃣ Deep clone the obj1 safely.

    ```javascript
    const obj1 = { info: { score: 80 } };
    ```

    Code:

    ```javascript
    const deepClone = JSON.parse(JSON.stringify(obj1));
    deepClone.info.score = 100;
    console.log(obj1.info.score); // Output: 80
    ``` 

    -   Student manager app
    -   Address book with optional chaining
    -   Object flattener (stretch goal)
