const form = document.querySelector("#firstname");
const display = document.querySelector('#display-firstname');

console.log(document.forms);

const handleForm = (event) => {
    event.preventDefault ();
    let newName = event.target.value
    console.log(event.target.value);
    display.innerHTML = newName;
}

form.addEventListener ('keyup', handleForm);
