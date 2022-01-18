const form = document.querySelector("#firstname");
const display = document.querySelector('#display-firstname');

console.log(document.forms);

const handleForm = (event) => {
    event.preventDefault ();
    let newName = event.target.value;
    console.log(event.target.value);
    display.innerHTML = newName;
}

form.addEventListener ('keyup', handleForm);



const form2 = document.querySelector('#age');
const display2 = document.querySelector('#a-hard-truth');

const handleFormAge = (event) => {
    event.preventDefault;
    let newAge = event.target.value;
    console.log(newAge);
   if (newAge < 18) {
        display2.style.visibility = "hidden";
   } else {
        display2.style.visibility = "visible";
    }
   }


form2.addEventListener('keyup', handleFormAge);