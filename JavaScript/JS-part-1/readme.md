# Words vs Keywords in JavaScript

- **Keywords:** Reserved words that have special meaning in JavaScript. They cannot be used as variable names, function names, or other identifiers.
- **Identifiers (user-defined words):** Names you create (variables, functions, properties). Identifiers can be almost any valid name except reserved keywords.

Why this matters
- Keywords are part of the language syntax — using them incorrectly (for example, as a variable name) will cause a syntax error.

Quick examples
```javascript
// Valid identifiers
let name = 'Alice';
const PI = 3.14;
function greet() { return 'Hi'; }

// Invalid: `var` is a keyword and cannot be used as an identifier
// let var = 5; // SyntaxError
```

Common JavaScript keywords
- `var`, `let`, `const`, `if`, `else`, `for`, `while`, `function`, `return`
- `switch`, `case`, `break`, `continue`, `try`, `catch`, `throw`
- `class`, `extends`, `super`, `new`, `this`, `import`, `export`
- `async`, `await`, `yield`, `typeof`, `instanceof`, `delete`, `void`

Note (original Hindi)
> JS mein aise words jinse kuchh ho sakta hain wo saare words JS ke keywords hote hain.
>
> Jaise - `var`, `let`, `const`, `if`, `else`, `for`, `while`, `function`, `return`, etc.

For a complete and up-to-date list of reserved words, see the official documentation (MDN). 

