# 🔥 JavaScript, Everthing about Everything Sullabus - Phase 2: DOM, Events, Forms, Storage

<hr/>

## 🌐1. The DOM (Document Object Model)

- ✅ **Teach:**
    - **DOM Tree structure:** node, element, text, comment
        - **Node:** A node is any point in the DOM tree. It can be an element node, text node, comment node, etc.
        - **Element:** An element is a specific type of node that represents an HTML tag (e.g., `<div>`, `<p>`, `<a>`).
        - **Text:** Text nodes contain the actual text content within an element.
        - **Comment:** Comment nodes represent comments in the HTML code.
    - **Selecting elements:** getElementById, getElementsByClassName, querySelector, querySelectotAll
    - **Text/content access:** innerText, textContent, innerHTML
    - **Attribute manipulation:** getAttribute, setAttribute, removeAttribute
    - **Dynamic DOM manipulation:** createElement, appendChild, removeChild,prepend
    - **Style updates via .style and classList (add, remove, toggle)**

- ⚠️**Confusion:**
    - Differenct between innerText vs textContent vs innerHTML

        Answer:
        - `innerText` returns the visible text content of a node, taking CSS styles into account (e.g., it won't return text hidden with `display: none`).
        - `textContent` returns the full text content of a node and its descendants, regardless of CSS styles.
        - `innerHTML` returns the HTML markup contained within an element as a string.

    - Difference between appendChild vs prepend

        Answer:
        - `appendChild` adds a new child node to the end of the list of children of a specified parent node.
        - `prepend` adds a new child node to the beginning of the list of children of a specified parent node.
        - Both methods modify the DOM, but they differ in where the new node is inserted.

    - Live HTMLCollection vs static NodeList

        Answer:
        - A live HTMLCollection (e.g., returned by `getElementsByClassName`) automatically updates to reflect changes in the DOM. If elements are added or removed that match the criteria, the collection will change accordingly.
        - A static NodeList (e.g., returned by `querySelectorAll`) does not update automatically. It represents a snapshot of the DOM at the time it was created, and changes to the DOM do not affect it.

- 🧠**Mindset:**
    - DOM is the page's brain - use it responsible

- 🧪**Practice:**
    - What is the DOM? How does it represent the HTML structure?

        Answer: The DOM is a programming interface for web documents. It
        represents the page so that programs can change the document structure,
        style, and content. The DOM represents the document as a tree of nodes,
        where each node corresponds to a part of the document (elements, text,
        comments, etc.).
        - What's the difference between an element node and a text node?

            Answer: An element node represents an HTML tag (like `<div>`, `<p>`,
            etc.), while a text node contains the actual text content within an
            element.

        - Inspect the following HTML snippet and identify each node:

                      ```html
                      <div>
                          Hello, <span>world!</span>
                          <!-- This is a comment -->
                      </div>
                      ```

            Answer:
            - The `<div>` is an element node.
            - "Hello, " is a text node.
            - The `<span>` is an element node.
            - "world!" is a text node.
            - `<!-- This is a comment -->` is a comment node.

            - What is the difference between getElementById and querySelector?

                Answer: `getElementById` selects an element based on its ID and returns a single element, while `querySelector` can select elements using any CSS selector and also returns the first matching element.

                ```javascript
                const elementById = document.getElementById("myId");
                // or
                const elementByQuery = document.querySelector("#myId");

                const elementByQuery = document.querySelector(".myClass");
                ```

            - What does getElementsByClassName return? Is it an array?

                Answer: `getElementsByClassName` returns a live HTMLCollection of elements with the specified class name. It is not an array, but it can be converted to one using `Array.from()` or the spread operator (`[...]`). It returns a NodeList-like object that updates automatically when the document changes.

                ```javascript
                const elements = document.getElementsByClassName("myClass");
                const elementsArray = Array.from(elements);
                // or
                const elementsArray2 = [...elements];
                ```

            - Use querySelectorAll to select all buttons with class "buy-now".

                Answer:

                ```javascript
                const buttons = document.querySelectorAll("button.buy-now");
                console.log(buttons);
                ```

            - Task 1: Select the heading of a page by ID and change its text to "Welcome to DigitalCravery!".

                Answer:

                ```html
                <h1 id="heading">Original Heading</h1>
                ```

                ```javascript
                // const heading = document.getElementById("heading");
                // or
                const heading = document.querySelector("#heading");

                // heading.innerText = "Welcome to DigitalCravery!";
                // or
                heading.textContent = "Welcome to DigitalCravery!";

                console.log(heading);
                ```

            - Task 2: Select all `<li>` elements and print their text using a loop.
              Answer:

                ```html
                <!DOCTYPE html>

                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <ul>
                            <li>apple 1</li>
                            <li>apple 2</li>
                            <li>apple 3</li>
                            <li>apple 4</li>
                            <li>apple 5</li>
                        </ul>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                let lis = document.querySelectorAll("li");

                lis.forEach(function (val) {
                    console.log(val.textContent);
                });
                ```

            - What's the difference between innerText, textContent, and innerHTML?

                Answer:
                - `innerText`: Returns the visible text content of an element, taking into account CSS styles (like `display: none`).
                - `textContent`: Returns all the text content of an element, including hidden text, without considering CSS styles.
                - `innerHTML`: Returns the HTML content of an element as a string, including any nested HTML tags.

                ```html
                <div id="example" style="display: none;">
                    Hello, <span>world!</span>
                </div>
                ```

                ```javascript
                const example = document.getElementById("example");
                console.log(example.innerText); // Outputs: "" (empty string, because it's hidden)
                console.log(example.textContent); // Outputs: "Hello, world!"
                console.log(example.innerHTML); // Outputs: "Hello, <span>world!</span>"
                ```

            - When should you use textContent instead of innerText?

                Answer: You should use `textContent` when you want to retrieve or set the text content of an element without considering its visibility or CSS styles. It is generally faster than `innerText` because it does not trigger a reflow to compute styles. Use `textContent` when you need all the text, regardless of whether it's visible or hidden.

            - Task 3: Select a paragraph and replace its content with:

                ```html
                <b>Updated</b> by JavaScript.
                ```

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eum repellat dolores optio labore fuga
                            accusamus enim aperiam laudantium perferendis quasi
                            exercitationem voluptate similique minima, rem
                            deserunt qui vitae distinctio voluptatibus!
                        </p>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                let p = document.querySelector("p");
                p.innerHTML = "<b>Updated</b> by JavaScript.";
                ```

            - Can you remove an element using removeChild()?

                Answer: Yes, you can remove an element using the `removeChild()` method. You need to call this method on the parent node of the element you want to remove, passing the child element as an argument.

                ```html
                <div id="parent">
                    <p id="child">This is a child paragraph.</p>
                </div>
                ```

                ```javascript
                const parent = document.getElementById("parent");
                const child = document.getElementById("child");
                parent.removeChild(child);
                ```

            - Task 4: Create a new list item `<li>`New Task`</li>` and add it to the end of a `<ul>`.

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <ul id="task-list">
                            <li>Task 1</li>
                            <li>Task 2</li>
                        </ul>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                const ul = document.getElementById("task-list");
                const newLi = document.createElement("li");
                newLi.textContent = "New Task";
                ul.appendChild(newLi);
                ```

            - What's the differenc between appendChild and prepend?

                Answer: `appendChild` adds a new child element to the end of the list of children of a specified parent element, while `prepend` adds a new child element to the beginning of the list of children of a specified parent element.

                ```javascript
                const parent = document.getElementById("parent");

                const newChild1 = document.createElement("div");
                newChild1.textContent = "I am appended at the end.";
                parent.appendChild(newChild1);

                const newChild2 = document.createElement("div");
                newChild2.textContent = "I am prepended at the beginning.";
                parent.prepend(newChild2);
                ```

            - Can you remove an element using removeChild()?

                Answer: Yes, you can remove an element using the `removeChild()` method. You need to call this method on the parent node of the element you want to remove, passing the child element as an argument.

                ```html
                <div id="parent">
                    <p id="child">This is a child paragraph.</p>
                </div>
                ```

                ```javascript
                const parent = document.getElementById("parent");
                const child = document.getElementById("child");
                parent.removeChild(child);
                ```

            - Create a new image element with a placeholder source and add it at the top of a div.

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <div id="image-container">
                            <p>This is an image container.</p>
                        </div>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                const container = document.getElementById("image-container");
                const newImg = document.createElement("img");
                newImg.src = "https://via.placeholder.com/150";
                container.prepend(newImg);
                ```

            - Task 5: Select the first item in a list and delete it from the DOM.

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <ul id="item-list">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                const ul = document.getElementById("item-list");
                const firstItem = ul.firstElementChild;
                ul.removeChild(firstItem);
                ```

            - What's the difference between .classList.add() and .classList.toggle()?

                Answer: `.classList.add()` adds a specified class to an element's class list, while `.classList.toggle()` adds the class if it is not present and removes it if it is already present. Essentially, `toggle()` switches the presence of the class on and off.

                ```javascript
                const element = document.getElementById("myElement");

                // Add a class
                element.classList.add("active");
                // Toggle a class
                element.classList.toggle("active");
                ```

            - Task 6: Add a highlight class to every even item in a list.

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                        <style>
                            .highlight {
                                background-color: yellow;
                            }
                        </style>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <ul id="item-list">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                        </ul>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                const items = document.querySelectorAll("#item-list li");

                items.forEach((item, index) => {
                    if (index % 2 === 1) {
                        // even index in 0-based index
                        item.classList.add("highlight");
                    }
                });
                ```

            - Toggle a class active on a button when clicked (Hint: Use classList.toggle()).

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                        <style>
                            .active {
                                background-color: green;
                                color: white;
                            }
                        </style>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <button id="toggle-button">Click Me!</button>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                const button = document.getElementById("toggle-button");

                button.addEventListener("click", () => {
                    button.classList.toggle("active");
                });
                ```

            - Set the font size of all `<p>` elements to 18px using `.style`.

                Answer:

                ```html
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <title>Document</title>
                    </head>
                    <body style="background-color: #1A1A1A; color: white;">
                        <p>Paragraph 1</p>
                        <p>Paragraph 2</p>
                        <p>Paragraph 3</p>

                        <script src="script.js"></script>
                    </body>
                </html>
                ```

                ```javascript
                const paragraphs = document.querySelectorAll("p");

                paragraphs.forEach((p) => {
                    p.style.fontSize = "18px";
                });
                ```

            <hr/>

## 🌐2. Events and Event Listeners

- ✅ **Teach:**
    - Event binding: addEventListener, removeEventListener

        ```javascript
        element.addEventListener("click", functionName);
        element.removeEventListener("click", functionName);
        ```

    - Common events: click, input, change, submit, mouseover, keyup

        **Click event example:**
        <u>**HTML Snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
            </head>

            <body style="background-color: #1A1A1A; color: white;">
                <h3>Click the button:</h3>
                <button>Click Me!</button>

                <script src="script.js"></script>
            </body>
        </html>
        ```

        <u>**JavaScript Snippet:**</u>

        ```javascript
        element.addEventListener("click", function () {
            // handle click event
            console.log("Button clicked!");
        });
        ```

        **Input event example:**

        <u>**HTML Snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
            </head>

            <body style="background-color: #1A1A1A; color: white;">
                <h3>Type something:</h3>
                <input type="text" />

                <script src="script.js"></script>
            </body>
        </html>
        ```

        <u>**JavaScript Snippet:**</u>

        ```javascript
        element.addEventListener("input", function () {
            // handle input event
            console.log(event.data);
            // or
            console.log(event.target.value);
        });
        ```

        **Change event example:**

        <u>**HTML Snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
            </head>

            <body style="background-color: #1A1A1A; color: white;">
                <h3>Select your device</h3>
                <select>
                    <option selected disabled>Choose your device</option>
                    <option value="samsung">Samsung</option>
                    <option value="iphone">iPhone</option>
                    <option value="oneplus">OnePlus</option>
                    <option value="pixel">Pixel</option>
                </select>

                <script src="script.js"></script>
            </body>
        </html>
        ```

        <u>**JavaScript Snippet:**</u>

        ```javascript
        let sel = document.querySelector("select");
        let h3 = document.querySelector("h3");

        sel.addEventListener("change", function (eventDetails) {
            h3.innerText = `You selected ${eventDetails.target.value}`;
        });
        ```

        ```javascript
        element.addEventListener("submit", function (event) {
            event.preventDefault(); // prevent form submission
            // handle submit event
        });
        element.addEventListener("mouseover", function () {
            // handle mouseover event
        });
        element.addEventListener("keyup", function () {
            // handle keyup event
        });
        ```

    - Event object: target, type, preventDefault, stopPropagation

        <u>**HTML snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #222;
                    }
                </style>
            </head>

            <body>
                <form action="">
                    <input type="email" />
                    <input type="password" />
                    <input type="submit" />
                </form>

                <script src="./script.js"></script>
            </body>
        </html>
        ```

        <u>**JavaScript snippet:**</u>

        ```javascript
        let form = document.querySelector("form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
        });
        let form = document.querySelector("form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
        });
        ```

        <u>**JavaScript snippet: pseudo example**</u>

        ```javascript
        element.addEventListener("click", function (event) {
            console.log(event.target); // the element that triggered the event
            console.log(event.type); // type of the event
            event.preventDefault(); // prevent default action
            event.stopPropagation(); // stop event from bubbling up
        });
        ```

    - Event bubbling and capturing

        Jispe event aayega agar uspar listener nahi hua to humaara event uske parent par listener dhundega aur aise karte karte upar ki taraf move karega.

        So, event bubbling is the process where if an event occurs on a child element and if the child element does not have an event listener for that event, then the event will `bubble up` to its parent element and check if the parent has an event listener for that event. If the parent also does not have a listener, then the event will continue to `bubble up` to the next parent element, and this process continues until it reaches the topmost element (usually the `document` object) or until it finds an element with a listener for that event.

        <u> **HTML snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #222;
                    }

                    main {
                        width: 100%;
                        height: 100%;
                        background-color: #222;
                    }

                    nav {
                        width: 400px;
                        height: 50px;
                        background-color: #444;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    a {
                        color: white;
                        text-decoration: none;
                        margin: 0 10px;
                    }

                    button {
                        padding: 10px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        background-color: turquoise;
                        border-radius: 5px;
                    }
                </style>
            </head>

            <body>
                <div id="main">
                    <nav>
                        <a href="#"> Home </a>
                        <a href="#"> About </a>
                        <button>click and follow</button>
                    </nav>
                </div>

                <script src="./script.js"></script>
            </body>
        </html>
        ```

        <u> **JavaScript snippet:**</u>

        ```javascript
        let nav = document.querySelector("nav");

        nav.addEventListener("click", function (e) {
            alert("You clicked on nav");
        });
        ```

    - Event delegation

- ⚠️**Confusion:**
    - event.target vs event.currentTarget
    - Capturing phase vs bubbling phase

- 🧠**Mindset:**
    - Don't bind events everywhere, delegate smartly

- 🧪**Practice:**
    - Live character counter

        <u>**HTML snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: "Gilroy", sans-serif;
                        box-sizing: border-box;
                    }

                    html,
                    body {
                        height: 100%;
                        width: 100%;
                    }

                    #main {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 100%;
                        background-color: #222;
                    }

                    h1 {
                        color: #6c6969;
                        font-size: 15rem;
                        font-weight: 100;
                        letter-spacing: -1.5rem;
                        user-select: none;
                    }
                </style>
            </head>

            <body style="background-color: #1A1A1A; color: white;">
                <div id="main">
                    <h1>a</h1>
                </div>

                <script src="script.js"></script>
            </body>
        </html>
        ```

        <u>**JavaScript snippet:**</u>

        ```javascript
        const h1 = document.querySelector("h1");

        window.addEventListener("keydown", function (event) {
            if (event.key === " ") {
                h1.textContent = "Space";
            } else {
                h1.textContent = event.key;
            }
            console.log(event.key);
        });
        ```

    - Delegated event handler on todo list

        <u>**HTML snippet:**</u>

        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: "Gilroy", sans-serif;
                        box-sizing: border-box;
                    }

                    html,
                    body {
                        height: 100%;
                        width: 100%;
                    }

                    #main {
                        padding: 30px;
                        height: 100%;
                        width: 100%;
                        background-color: #222;
                    }

                    input {
                        display: block;
                        margin: 20px;
                        padding: 10px;
                        font-size: 1.2rem;
                        border-radius: 5px;
                        border: none;
                    }

                    .card {
                        width: 300px;
                        height: 400px;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        overflow: hidden;
                    }

                    .profile {
                        width: 100%;
                        height: 60%;
                        background-color: #eee;
                        background-size: cover;
                        background-position: center;
                    }

                    h3 {
                        margin: 10px;
                        font-size: 1.5rem;
                        color: #333;
                    }

                    h5 {
                        margin: 10px;
                        font-size: 1.2rem;
                        color: #555;
                    }

                    p {
                        margin: 10px;
                        font-size: 1rem;
                        color: #666;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                </style>
            </head>

            <body style="background-color: #1A1A1A; color: white;">
                <div id="main">
                    <form action="">
                        <input type="text" placeholder="profile pic" />
                        <input type="text" placeholder="name" />
                        <input type="text" placeholder="occupation" />
                        <input type="text" placeholder="info" />
                        <input type="submit" />
                    </form>
                </div>

                <script src="script.js"></script>
            </body>
        </html>
        ```

        <u>**JavaScript snippet:**</u>

        ```javascript
        let form = document.querySelector("form");
        let inputs = document.querySelectorAll("input");
        let main = document.getElementById("main");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let card = document.createElement("div");
            card.classList.add("card");

            let profile = document.createElement("div");
            profile.classList.add("profile");

            console.log(inputs[0].value);
            let img = document.createElement("img");
            img.setAttribute("src", inputs[0].value);

            let h3 = document.createElement("h3");
            h3.textContent = inputs[1].value;

            let h5 = document.createElement("h5");
            h5.textContent = inputs[2].value;

            let p = document.createElement("p");
            p.textContent = inputs[3].value;

            profile.appendChild(img);
            profile.appendChild(h3);
            profile.appendChild(h5);
            profile.appendChild(p);

            card.appendChild(profile);

            main.appendChild(card);

            form.reset();
        });
        ```

<hr/>

## 📝3. Forms and Form Validation

```

```
