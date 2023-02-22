

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

console.log(topMenuEl);
console.log(mainEl);
console.dir(mainEl);