

// task 1;
const mainEl = document.querySelector('main')

// Task1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
// mainEl.className = "flex-ctr"
mainEl.classList.add('flex-ctr');


// Task 2.0
// const topMenuEl = document.getElementById("top-menu")
const topMenuEl = document.querySelector("#top-menu");

// Task 2.1
topMenuEl.style.height = '100%';
// topMenuEl.setAttribute('height', '100%')

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

// Task 3.0

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Task 3.1

menuLinks.forEach(obj => {
// Create an <a>element.
const a = document.createElement('a');
// On the new element, add an href attribute with its value set to the href property of the "link" object.
a.setAttribute('href', obj.href);
// Set the new element's content to the value of the text property of the "link" object.
a.textContent = obj.text;
console.dir(a)
// Append the new element to the topMenuEl element.
topMenuEl.appendChild(a);
})

console.log(topMenuEl);
console.log(mainEl);
console.dir(mainEl);