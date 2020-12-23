let botones = document.querySelectorAll('span.button')
let body = document.querySelector('body');

botones.forEach(addButtonListener);

function addButtonListener(button){
    button.addEventListener('click', (event) => {
        body.style.backgroundColor = event.target.id
        console.log('Has cambiado el color a: ', event.target.id)
    });
}