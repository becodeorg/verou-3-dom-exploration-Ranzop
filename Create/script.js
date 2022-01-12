// TODO: get all learners
const learners = [
"Ahmad",
"Benjamin",
"Beryl",
"Cynthia",
"Dante",
"Dery",
"Ellen",
"Jawid",
"Jian",
"Jordy",
"Koen",
"Magali",
"Michael",
"Michelle",
"Muhammet",
"Nicolas",
"Ruben",
"Sara",
"Basile"];


// TODO: wrap in an article

const articleElement = document.createElement("article");
document.body.appendChild(articleElement);

// TODO: create section 

const sectionElement = document.createElement ("section"); /* loaded in JS */
document.body.appendChild(sectionElement); /* Add the object to the DOM */

// TODO: generate random color


sectionElement.innerHTML = "Basile";

// TODO: do it for every learner
for (let i = 0; i < learners.length; i++) {

    function generateRandomColor() {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b +")";
    }
    sectionElement.style.backgroundColor = generateRandomColor ("");
    console.log (learners [i]);
    const learner = learners[i]; /*  Will cycle through all learners and execute the code */
const paragraph = document.createElement ("p");
paragraph.innerHTML = learner;
sectionElement.append(paragraph);
}






// TODO: p with learners name
