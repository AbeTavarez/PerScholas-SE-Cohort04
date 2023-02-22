// get the button
const button = document.querySelector('button');
const removeEvent = document.getElementById('remove');

// adding a event on the element property
// button.onclick = sayHello();

// add the an event listener
button.addEventListener('click', function(event) {
    const li = document.createElement('li');
    const input = document.querySelector('input');
    li.textContent = input.value;

    document.querySelector('ul').appendChild(li)
    // const ul = document.querySelector('ul')
    // ul.appendChild(li)

    input.value = '';

    console.log(li);
    console.dir(input);
    console.dir(event);
})

button.addEventListener('click', sayHello)


function sayHello() {
    console.log('Fetching data from database');
}

removeEvent.addEventListener('click', function() {
    button.removeEventListener('click', sayHello)
});

// =========== Event Bubbling ===============
const ul = document.querySelector('ul');
const body = document.querySelector('body');

body.addEventListener('click', function (e) {
    console.log('FROM Body || Event on: ', e.target);
})

ul.addEventListener('click', function (e) {
    e.stopPropagation();
    // console.log('From Ul || Event on: ', e.target);
    e.target.remove()
})
