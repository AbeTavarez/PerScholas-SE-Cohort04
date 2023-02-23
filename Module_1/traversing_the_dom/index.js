//TODO: 1. Create a variable named (root) and select the html tag from the html file using querySelector

//* add the code here
const root = document.querySelector('html')

// console log the root variable
// check the difference between:
// root.children and root.childNodes
console.log(root);
console.log(root.children);
console.log(root.childNodes);

//TODO: 2. Create a variable named (body), using the root array from above assign the body element to the body variable.

//* add the code here
const body = root.children[2]

// log the variable (body)
console.log(body);

//TODO: 3. Create a variable named (h1), using the (body) variable fom above use the property (firstElementChild) to assign the h1 element to the (h1) variable.

//* add the code here
const h1 = body.firstElementChild

// log the h1 variable to se the result
console.log(h1);

//TODO: 4. Create a variable named (ul), using the (h1) variable from above use the (nextElementSibling) property to assign the value to the (ul) variable.

//* add the code here
const ul = h1.nextElementSibling

// Log the ul variable to se the result
console.log(ul.children[2].textContent);

//TODO: 5. Create a variable named (thirdLi), using the (ul) variable from above use (lastElementChild) property to assign the value to the (thirdLi) variable.

//* add the code here
const thirdLi = ul.lastElementChild
// const thirdLi = ul.firstElementChild

// Log the text content of the li -> (Third li 🎃)
console.log(thirdLi.textContent);

//TODO: 6. Create a variable named (secondLi), using the (thirdLi) variable from above use (previousElementSibling) property to assign the value to the (secondLi) variable.

//* add the code here
const secondLi = thirdLi.previousElementSibling
// Log the text content of the li -> (Second li ⛄)
console.log(secondLi.textContent);

//TODO: 7. Create a variable named (firstLi), using the (thirdLi) variable from above use (previousElementSibling.previousElementSibling) properties to assign the value to the (firstLi) variable.

//* add the code here
const firstLi = thirdLi.previousElementSibling.previousElementSibling
// Log the text content of the li -> (First li 🦁)
console.log(firstLi);

//TODO: 8. Finally create a variable named (backToTheUl) using the thirdLi variable from above, use the (parentElement) property to assign th value to the (backToTheUl) variable.

//* add the code here
const backToTheUl = thirdLi.parentElement

// Log the backToTheUl -> (ul)
console.log(backToTheUl);