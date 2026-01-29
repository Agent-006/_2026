# 🌳 DOM (Document Object Model)

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of a webpage as a **tree of objects** (nodes), allowing programming languages like JavaScript to interact with and manipulate the page.

---

## ✨ What is the DOM?

| 🌐  | The DOM models an HTML or XML document as a tree structure.          |
| --- | -------------------------------------------------------------------- |
| 🧩  | Each element, attribute, and piece of text is represented as a node. |
| ⚡  | JavaScript can use the DOM to:                                       |
|     | • Access and change content                                          |
|     | • Modify structure (add/remove elements)                             |
|     | • Update styles dynamically                                          |

---

## 🛠️ Example: Accessing the DOM with JavaScript

```js
// Get an element by its ID
const heading = document.getElementById("main-heading");
heading.textContent = "Hello, DOM!";
```

---

> 💡 **The DOM is essential for creating interactive and dynamic web pages.**
